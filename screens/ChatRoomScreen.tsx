import React from 'react';
import {ImageBackground, Text, View} from 'react-native'
import {useRoute} from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';
import chatRoomData from "../Data/ChatsMessages"
import ChatMessage from "../components/ChatMessage"
import InputBox from '../components/InputBox';

const ChatRoomScreen = ()=>{

    const route = useRoute();   

    return(
    <View style = {{width:'100%', height:'100%',backgroundColor:'#0e0e12'}}>
          <FlatList
    data = {chatRoomData.messages}
    renderItem = {({item}) => <ChatMessage message = {item}/>}
    inverted
    />
        <InputBox/>
  
    </View>      
    )    
}

export default ChatRoomScreen;