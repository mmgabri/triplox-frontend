import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'
import ContaScreen from '../../screens/ContaScreen'

const Stack = createStackNavigator()

const ContaStackNavigator = () => {
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
      <Stack.Screen name={screens.ContaTab} component={ContaScreen} options={{ title: 'Minha conta' }} />

    </Stack.Navigator>
  )
}

export default ContaStackNavigator
