import React, { useState } from 'react'
import { View,Text, TextInput } from 'react-native'
import styles from "./style"
import {MaterialIcons, Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'


const InputBox = () =>{

    const [message,setMessage] = useState()

    const onMicrophonePress = ()=>{
        console.warn("Microphone");
    }
    const onSendPress = () =>{
        console.warn(`Sending : ${message}`)
        setMessage('');
    }
    const onPress = ()=>{
        if(!message){
            onMicrophonePress();
        }else{
            onSendPress();
        }
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.mainContainer}>
                <FontAwesome5 name = "laugh-beam" size = {24} color = "#f40940"/>
                <TextInput 
                placeholder = {"Type a message#"}
                style = {styles.textInput} 
                multiline
                value = {message}
                onChangeText = {setMessage}
                />
                <Entypo name = "attachment" size = {24} color = "#f40940" style = {styles.icon}/>
                
                {!message &&
                <Fontisto name = "camera" size = {24} color = "#f40940" style = {styles.icon}/>
                } 
            </View>
            <TouchableOpacity onPress = {onPress}>
            <View style = {styles.buttonContainer}>
                {!message ?
                <MaterialCommunityIcons name = 'microphone' size = {30} color = '#f40940'/>
                :
                <MaterialIcons name = 'send' size = {30} color = '#f40940'/>
            }
            </View>

            </TouchableOpacity>
        </View>
    )
}

export default InputBox;