import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { withAuthenticator } from 'aws-amplify-react-native'
import {getUser} from './src/graphql/queries'

import Amplify, { Auth,API,graphqlOperation } from 'aws-amplify'
import config from './src/aws-exports'
import { createUser } from './src/graphql/mutations';


Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
//import SignIn from "./components/AuthComponents/SignIn"

const randomImages = [
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.jpg',
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/7.jpg',
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/8.jpg',
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/9.jpg'
]

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const getRandomImages = ()=>{
    return randomImages[Math.floor(Math.random()*randomImages.length)];
  }

  useEffect(()=>{
    const fetchUser = async ()=>{
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache:true})
      
      if(userInfo){
        const userData = await API.graphql(
          graphqlOperation
          (getUser,{id:userInfo.attributes.sub})
          )
          if(userData.data.getUser){
            console.log("User already registered in database");
            return;
          }
          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imageUri: getRandomImages(),
            status: 'Hey!'
          }
          await API.graphql(
            graphqlOperation(
              createUser,
              {input:newUser}
            )
          )
      }
    }
    fetchUser()
  },[])

  if (!isLoadingComplete) {
    return null;
  } else {
    
    return (
      <SafeAreaProvider>
        <Navigation colorScheme = {colorScheme}/>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App)