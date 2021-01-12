import * as React from 'react';
import { StyleSheet } from 'react-native';

import ChatListItem from "../components/ChatListItem"
import chatRooms from  "../Data/ChatRooms"

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom = {chatRooms[0]} style = {{color:'white'}}/>
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
