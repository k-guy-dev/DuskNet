import React,{useState} from 'react'
import {Button, Text, View} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import {Auth} from 'aws-amplify'
import styles from './style'


const SignIn = (props) =>{
    
    const[state,setState] = useState({
        username: '',
        password: ''
    })

    const onSubmit = async () =>{
        try {
        const user = await Auth.signIn({
            username: state.username,
            password: state.password
        });
        props.onStateChange('signedIn',user);
        } catch (error) {
            console.error(error.message);
        }
    }

    if(props.authState === 'signIn'){
        return(
            <View style = {styles.mainView}>
                <Text style = {styles.dusknet}>DuskNet</Text>
                <Text style = {styles.title}>Sign In</Text>
                  <View style = {styles.innerView}>
                  <Text style = {styles.label}>Username</Text>
                    <TextInput style={styles.textInput}
                         onChangeText={(text) => setState({...state,username:text})}
                          value={state.username}/>
                     <Text style = {styles.label}>Password</Text>
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry ={true}
                        onChangeText={(text) => setState({...state,password:text})}
                        value={state.password}/>
                     
                    <TouchableOpacity onPress={onSubmit} style={styles.appButtonContainer}>
                        <Text style={styles.appButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    <View style = {styles.bottomView}>
                    <TouchableOpacity 
                    onPress = {()=> props.onStateChange('signUp',{})}
                    style={styles.appButtonContainer2}>
                        <Text style={styles.appButtonText2}>SignUp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress = {()=> props.onStateChange('forgotPassword',{})} 
                    style={styles.appButtonContainer2}
                    >
                        <Text style={styles.appButtonText2}>Forgot Password</Text>
                    </TouchableOpacity>
                    </View>
                   
                </View>
            </View>
        )
        
    }
    else{
        return null
    }
}

export default SignIn;