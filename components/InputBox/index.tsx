import React, { useEffect, useState } from 'react'
import { View,Text, TextInput, Platform, KeyboardAvoidingView } from 'react-native'
import styles from "./style"
import {MaterialIcons, Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

import {Auth,API,graphqlOperation} from 'aws-amplify'
import {createMessage,updateChatRoom} from '../../src/graphql/mutations'

const InputBox = (props) => {

    const { chatRoomID } = props;
  
    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);
  
    useEffect(() => {
      const fetchUser = async () => {
        const userInfo = await Auth.currentAuthenticatedUser();
        setMyUserId(userInfo.attributes.sub);
      }
      fetchUser();
    }, [])
  
    const onMicrophonePress = () => {
      console.warn('Microphone')
    }
  
    const updateChatRoomLastMessage = async (messageId: string) => {
      try {
        await API.graphql(
          graphqlOperation(
            updateChatRoom, {
              input: {
                id: chatRoomID,
                lastMessageID: messageId,
              }
            }
          )
        );
      } catch (e) {
        console.log(e);
      }
    }
  
    const onSendPress = async () => {
      try {
        const newMessageData = await API.graphql(
          graphqlOperation(
            createMessage, {
              input: {
                content: message,
                userID: myUserId,
                chatRoomID
              }
            }
          )
        )
  
        await updateChatRoomLastMessage(newMessageData.data.createMessage.id)
      } catch (e) {
        console.log(e);
      }
  
      setMessage('');
    }
  
    const onPress = () => {
      if (!message) {
        onMicrophonePress();
      } else {
        onSendPress();
      }
    }

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}
        style={{width: '100%'}}
      >
        <View style={styles.container}>
        <View style={styles.mainContainer}>
          <FontAwesome5 name="laugh-beam" size={24} color="grey" />
          <TextInput
            placeholder={"Type a message"}
            style={styles.textInput}
            multiline
            value={message}
            onChangeText={setMessage}
          />
          <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
          {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon} />}
        </View>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.buttonContainer}>
            {!message
              ? <MaterialCommunityIcons name="microphone" size={28} color="white" />
              : <MaterialIcons name="send" size={28} color="white" />}
          </View>
        </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
export default InputBox;