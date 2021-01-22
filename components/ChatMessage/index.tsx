import moment from 'moment';
import React from 'react';
import { View } from 'react-native';
import {Text} from 'react-native'
import { Message } from '../../types';
import style from './style'

export type ChatMessageProps = {
    message : Message;
    myId:  String
}

const ChatMessage = (props: ChatMessageProps ) =>{
   
    const {message, myId} = props;

    const isMyMessage = () =>{
        return message.user.id === myId;
    }

    return(
        <View style = {style.container}>
            <View style =
             {[
                style.messageBox,{
                backgroundColor: isMyMessage() ? '#4245f5' : '#1f245e',
                marginLeft: isMyMessage() ? 50:0,
                marginRight: isMyMessage() ? 0: 50
                }]}>
                {!isMyMessage() && <Text style = {style.name}>{message.user.name}</Text>}
                <Text style = {style.message}>{message.content}</Text>
                <Text style = {style.time}>{moment(message.createdAt).fromNow()}</Text>
        
            </View>
        </View>
    )
}

export default ChatMessage;