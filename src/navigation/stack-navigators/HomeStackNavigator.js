import React, {useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'
import HomeScreen from '../../screens/HomeScreen'
import SignOutScreen from '../../screens/SignOutScreen'
import SignInScreen from '../../screens/SignInScreen'

const Stack = createStackNavigator()

const HomeStackNavigator = ()  => {

  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#009387',
          height: 60,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }
      }>
      <Stack.Screen name={screens.HomeTab} component={HomeScreen}  />
      <Stack.Screen name={screens.SignOutTab} component={SignInScreen} />
      <Stack.Screen name={screens.SignOut} component={SignOutScreen} />

    </Stack.Navigator>
  )
}

export default HomeStackNavigator