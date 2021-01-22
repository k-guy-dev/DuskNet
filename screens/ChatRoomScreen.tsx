import React, { useEffect, useState } from 'react';
import {ImageBackground, Text, View} from 'react-native'
import {useRoute} from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';
import ChatMessage from "../components/ChatMessage"
import InputBox from '../components/InputBox';

import {API,Auth,graphqlOperation} from 'aws-amplify'
import {messagesByChatRoom} from '../src/graphql/queries'
import {onCreateMessage} from '../src/graphql/subscriptions'


const ChatRoomScreen = ()=>{

    const route = useRoute();   
    const [messages,setMessages] = useState([])
    const [myId,setMyId] = useState(' ')
    
    const fetchMessages = async () => {
        try {
            const messagesData = await API.graphql(
                graphqlOperation(
                  messagesByChatRoom, {
                    chatRoomID: route.params.id,
                    sortDirection: "DESC",
                  }
                )
              )
          
              console.log("FETCH MESSAGES")
              setMessages(messagesData.data.messagesByChatRoom.items);
        } catch (error) {
            console.log(error)
        }
      }
    
      useEffect(() => {
        fetchMessages();
      }, [])

    useEffect(()=>{
        const getMyId = async()=>{
           try {
            const userInfo = await Auth.currentAuthenticatedUser();
            setMyId(userInfo.attributes.sub)
           } catch (error) {
               console.log(error)
           }
        }
        getMyId();
    },[])

    useEffect(() => {
      const subscription = API.graphql(
        graphqlOperation(onCreateMessage)
      ).subscribe({
        next: (data) => {
          const newMessage = data.value.data.onCreateMessage;
  
          if (newMessage.chatRoomID !== route.params.id) {
            console.log("Message is in another room!")
            return;
          }
  
          fetchMessages();
          // setMessages([newMessage, ...messages]);
        }
      });
  
      return () => subscription.unsubscribe();
    }, [])
  

    return(
    <View style = {{width:'100%', height:'100%',backgroundColor:'#0e0e12'}}>
          <FlatList
    data = {messages}
    renderItem = {({item}) => <ChatMessage myId = {myId} message = {item}/>}
    inverted
    />
        <InputBox chatRoomID = {route.params.id}/>
  
    </View>      
    )    
}

export default ChatRoomScreen;