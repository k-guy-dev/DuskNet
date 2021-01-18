import React, {useState} from 'react'
import { View,Text,Button, TextInput } from 'react-native'


const Signup = (props)=>{

    const[state,setState] = useState({
        email:'',
        password:'',

    })

    if(props.authState === 'signUp'){
        return(
            <View>
                <Text>Dusknet</Text>
                <Text>SignUp</Text>
                <Text>Email</Text>
                <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => setState({...state,email:text})}
                value={state.email}
                />
                <Text>Password</Text>
                 <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => setState({...state,password:text})}
                value={state.password}
                />
                <Button
                 onPress = {()=> props.onStateChange('signIn',{})}
                title = "Sign in" color = "black"
                accessibilityLabel = "back to signIn"
                />
                <Button
                 onPress = {()=> props.onStateChange('confirmSignUp',{})}
                title = "Confirm a Code" color = "black"
                accessibilityLabel = "back to signIn"
                />
                
            </View>
        )
    }else{
        return null;
    }
    
}

export default Signup;