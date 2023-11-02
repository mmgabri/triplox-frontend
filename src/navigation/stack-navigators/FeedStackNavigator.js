import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'
import FeedScreen from '../../screens/FeedScreen'


const Stack = createStackNavigator()

const FeedStackNavigator = () => {
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
      <Stack.Screen name={screens.FeedTab} component={FeedScreen} options={{ title: 'Feed' }} />
    </Stack.Navigator>
  )
}

export default FeedStackNavigator
