import * as React from 'react';
import { StyleSheet} from 'react-native';

import ChatListItem from "../components/ChatListItem"
import chatRooms from  "../Data/ChatRooms"

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
import NewMessageButton from '../components/NewMessageButton';

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
      style = {{width:'100%'}}
      
      data = {chatRooms}
      renderItem = {({item})=><ChatListItem chatRoom = {item}/>}
      keyExtractor = {(item)=>item.id}
      />
      <NewMessageButton/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141730'
  },
});
