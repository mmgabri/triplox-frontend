import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'
import CheckinScreen from '../../screens/CheckinScreen'
import SignInScreen from '../../screens/SignInScreen'
import HomeScreen from '../../screens/HomeScreen'
import ConfiguracaoScreen from '../../screens/ConfiguracaoScreen'

const Stack = createStackNavigator()

const SetupStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#009387',
          height: 55,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }
      }>
      <Stack.Screen name={screens.Configuracao} component={ConfiguracaoScreen} />
      <Stack.Screen name={screens.HomeTab} component={HomeScreen}  />
      <Stack.Screen name={screens.SignOutTab} component={SignInScreen} />
      <Stack.Screen name={screens.CheckinTab} component={CheckinScreen} />
    </Stack.Navigator>
  )
}

export default SetupStackNavigator
