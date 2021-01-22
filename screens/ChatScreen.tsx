import React, {useEffect, useState} from 'react';
import { StyleSheet,Text, View} from 'react-native';

import ChatListItem from "../components/ChatListItem"

import EditScreenInfo from '../components/EditScreenInfo';
import { FlatList } from 'react-native-gesture-handler';
import NewMessageButton from '../components/NewMessageButton';
import chatRooms from '../data/ChatRooms';
import {Auth,API,graphqlOperation} from 'aws-amplify'
import {getUser} from './queries'

export default function ChatsScreen() {

  const [chatRooms, setChatRooms] = useState<any[]>([])

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
     //   console.log("USER INFO")
     //   console.log(userInfo)
        const userData = await API.graphql(
          graphqlOperation(
            getUser, {
              id: userInfo.attributes.sub,
            }
          )
        )
       
        setChatRooms(userData.data.getUser.chatRoomUser.items)
      } catch (e) {
        console.log('from chat screen')
        console.log(e);
      }
    }
    fetchChatRooms();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item.chatRoom} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});