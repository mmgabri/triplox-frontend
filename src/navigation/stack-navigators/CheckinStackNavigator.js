import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'
import CheckinScreen from '../../screens/Checkin/CheckinScreen'
import SignInScreen from '../../screens/SignInScreen'
import SignUpScreen from '../../screens/SignUpScreen'
import HomeScreen from '../../screens/HomeScreen'
import CheckinListaPresencaScreen from '../../screens/Checkin/CheckinListaPresencaScreen'
import CriarTrajeto0Screen from '../../screens/CriarTrajeto/CriarTrajeto0Screen'
import CriarTrajeto1Screen from '../../screens/CriarTrajeto/CriarTrajeto1Screen'
import CriarTrajeto2Screen from '../../screens/CriarTrajeto/CriarTrajeto2Screen'
import CriarTrajeto3Screen from '../../screens/CriarTrajeto/CriarTrajeto3Screen'
import CriarTrajeto4Screen from '../../screens/CriarTrajeto/CriarTrajeto4Screen'

const Stack = createStackNavigator()

const CheckinStackNavigator = () => {
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
      <Stack.Screen name={screens.CheckinTab} component={CheckinScreen} options={{ title: 'Checkin' }} />
      <Stack.Screen name={screens.CheckinListaPresencaTab} component={CheckinListaPresencaScreen} options={{ title: 'Lista de Presença' }} />
      <Stack.Screen name={screens.SignOutTab} component={SignInScreen} />
      <Stack.Screen name={screens.CriarTrajeto0Tab} component={CriarTrajeto0Screen} />
      <Stack.Screen name={screens.CriarTrajeto1Tab} component={CriarTrajeto1Screen} />
      <Stack.Screen name={screens.CriarTrajeto2Tab} component={CriarTrajeto2Screen} />
      <Stack.Screen name={screens.CriarTrajeto3Tab} component={CriarTrajeto3Screen} />
      <Stack.Screen name={screens.CriarTrajeto4Tab} component={CriarTrajeto4Screen} />
    </Stack.Navigator>
  )
}

export default CheckinStackNavigator
