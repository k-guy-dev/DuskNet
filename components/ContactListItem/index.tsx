import moment from 'moment';
import React from 'react';
import { View,Text,Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { User } from '../../types';
import {useNavigation} from '@react-navigation/native'

import styles from './style';
import {API,graphqlOperation,Auth} from 'aws-amplify'
import {createChatRoom,createChatRoomUser} from '../../src/graphql/mutations'

export type ContactListItemProps = {
    user : User;
}


const ContactListItem = (props: ContactListItemProps) =>{
    
    const {user} = props;

    const navigation = useNavigation();
    

    const onClick = async () =>{
    {
        try {
            //1. create a new chatroom
            const newChatRoomData = await API.graphql(
                graphqlOperation(createChatRoom,
                    {
                    input:{ lastMessageID: "zz753fca-e8c3-473b-8e85-b14196e84e16"}
                })
            ) 
            console.log("new chat room data" ,newChatRoomData)
            if(!newChatRoomData.data){
                console.log("Failed to create chat room")
                return;
            }

            const newChatRoom = newChatRoomData.data.createChatRoom;
            //2. Add user to the chatroom

            await API.graphql(
                graphqlOperation(
                    createChatRoomUser,
                    {input:{
                        userID:user.id,
                        chatRoomID:newChatRoom.id
                    }})
            )
            //3. Add authenticated user to the chatroom
            const userInfo = await Auth.currentAuthenticatedUser();

            await API.graphql(
                graphqlOperation(
                    createChatRoomUser,{input:{
                        userID: userInfo.attributes.sub,
                        chatRoomID: newChatRoom.id
                    }}
                )
            )
            console.log(newChatRoom)
            navigation.navigate('ChatRoom',{
                id: newChatRoom.id,
                name: user.name
            }) 
        } catch (e) {
            console.log(e)
        }
    }}

    return(
        <TouchableWithoutFeedback onPress = {onClick}>

        <View style = {styles.container}>
            <View style = {styles.leftContainer}>
            <Image source = {{uri: user.imageUri}} style = {styles.avatar}/>
            <View style = {styles.midContainer}>
                <Text style = {styles.username}>{user.name}</Text>
            </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
    };

export default ContactListItem;