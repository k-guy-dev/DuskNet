import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';

import { AntDesign,Entypo  } from '@expo/vector-icons';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#f40940",
        
      },
      headerTitleAlign: 'center',
      headerTitleStyle:{
        fontWeight: '200',
        fontSize: 18,
      }
     }}>
      <Stack.Screen name="Root" component={MainTabNavigator}
      options={{
        title: 'DuskNet',
        headerRight: () =>(
          <View style = {{
            flexDirection:'row',
            width:60,
            justifyContent:'space-between',
            
            }}>
            <AntDesign name="search1" size={24} color="white"/>
            </View>
        ),
        headerLeft: ()=>(
          <View style = {{
            flexDirection:'row',
            width:60,
            justifyContent:'space-between',
            marginLeft:10
            }}>
            <Entypo name="dots-three-vertical" size={24} color="white"/>
            </View>
        )
      }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
