import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'
import CheckinScreen from '../../screens/Checkin/CheckinScreen'
import SignInScreen from '../../screens/SignInScreen'
import SignUpScreen from '../../screens/SignUpScreen'
import HomeScreen from '../../screens/HomeScreen'
import CheckinListaPresencaScreen from '../../screens/Checkin/CheckinListaPresencaScreen'

const Stack = createStackNavigator()

const CheckinStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#009387',
          height: 50,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '400',
          fontSize: 18
        }
      }
      }>
      <Stack.Screen name={screens.CheckinTab} component={CheckinScreen} options={{ title: 'Checkin' }} />
      <Stack.Screen name={screens.CheckinListaPresencaTab} component={CheckinListaPresencaScreen} options={{ title: 'Lista de Presença' }} />
      <Stack.Screen name={screens.HomeTab} component={HomeScreen}  />
      <Stack.Screen name={screens.SignOutTab} component={SignInScreen} />
      <Stack.Screen name={screens.SignInTab} component={SignInScreen} options={{ title: 'Login' }} />
      <Stack.Screen name={screens.SignUpTab} component={SignUpScreen} options={{ title: 'Login' }} />


    </Stack.Navigator>
  )
}

export default CheckinStackNavigator
