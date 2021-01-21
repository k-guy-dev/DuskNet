import React, {useEffect, useState} from 'react';
import { StyleSheet} from 'react-native';

import ChatListItem from "../components/ChatListItem"
import chatRooms from  "../Data/ChatRooms"

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
import NewMessageButton from '../components/NewMessageButton';

import {Auth,API,graphqlOperation} from 'aws-amplify'
import {getUser} from './queries'

export default function ChatsScreen() {

  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();

        const userData = await API.graphql(
          graphqlOperation(
            getUser, {
             input:{
              id: userInfo.attributes.sub,
             }
            }
          )
        )

        setChatRooms(userData.data.getUser.chatRoomUser.items)
      } catch (e) {
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