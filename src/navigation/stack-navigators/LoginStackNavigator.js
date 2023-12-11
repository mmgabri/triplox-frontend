import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'
import SignInScreen from '../../screens/SignInScreen'
import SignUpScreen from '../../screens/SignUpScreen'
import SignOutScreen from '../../screens/SignOutScreen'

const Stack = createStackNavigator()

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: '#993399',
        height: 58,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '400',
        fontSize: 18
        }
      }
      }>
      <Stack.Screen name={screens.SignInTab} component={SignInScreen} options={{ title: 'Login' }} />
      <Stack.Screen name={screens.SignUpTab} component={SignUpScreen} options={{ title: 'Cadastro' }} />
      <Stack.Screen name={screens.SignOutTab} component={SignOutScreen} options={{ title: 'Sair' }} />
    </Stack.Navigator>
  )
}

export default LoginStackNavigator
