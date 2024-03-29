import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './style';

const NewMessageButton = () =>{

    const navigation = useNavigation();

    const onPress = () =>{
        navigation.navigate('Contacts');
    }

    return(
        
        <View style = {styles.container}>
             <TouchableOpacity onPress = {onPress}>
        <MaterialCommunityIcons 
        name = "message-text-outline"
         size = {28} 
         color = "#f40940"/>            
        </TouchableOpacity>
        </View>
        
    )
}

export default NewMessageButton;