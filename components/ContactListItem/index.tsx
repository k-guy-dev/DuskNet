import moment from 'moment';
import React from 'react';
import { View,Text,Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { User } from '../../types';
import {useNavigation} from '@react-navigation/native'

import styles from './style';
 
export type ContactListItemProps = {
    user : User;
}


const ContactListItem = (props: ContactListItemProps) =>{
    
    const {user} = props;

    const navigation = useNavigation();
    

    const onClick = () =>{
        navigation.navigate('ChatRoom'),{
            //Navigate to Chatroom with this user
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