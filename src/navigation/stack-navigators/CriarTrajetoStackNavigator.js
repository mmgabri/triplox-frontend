import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'
import CheckinScreen from '../../screens/Checkin/CheckinScreen'
import SignInScreen from '../../screens/SignInScreen'
import HomeScreen from '../../screens/HomeScreen'
import CriarTrajeto0Screen from '../../screens/CriarTrajeto/CriarTrajeto0Screen'
import CriarTrajeto1Screen from '../../screens/CriarTrajeto/CriarTrajeto1Screen'
import CriarTrajeto2Screen from '../../screens/CriarTrajeto/CriarTrajeto2Screen'
import CriarTrajeto3Screen from '../../screens/CriarTrajeto/CriarTrajeto3Screen'
import CriarTrajeto4Screen from '../../screens/CriarTrajeto/CriarTrajeto4Screen'
import TrajetoScreen from '../../screens/Trajetos/TrajetoScreen'

const Stack = createStackNavigator()

const CriarTrajetoStackNavigator = () => {
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
      <Stack.Screen name={screens.TrajetosTab} component={TrajetoScreen}  options={{ title: 'Meus Trajetos' }}  />
      <Stack.Screen name={screens.CriarTrajeto0Tab} component={CriarTrajeto0Screen}  options={{ title: 'Meus Trajetos' }} />
      <Stack.Screen name={screens.CriarTrajeto1Tab} component={CriarTrajeto1Screen}  options={{ title: 'Trajeto - Linha ' }} />
      <Stack.Screen name={screens.CriarTrajeto2Tab} component={CriarTrajeto2Screen}  options={{ title: 'Trajeto - Origem' }} />
      <Stack.Screen name={screens.CriarTrajeto3Tab} component={CriarTrajeto3Screen}  options={{ title: 'Trajeto - Destino' }} />
      <Stack.Screen name={screens.CriarTrajeto4Tab} component={CriarTrajeto4Screen}  options={{ title: 'Trajeto - Confirmar dados' }}  />
      <Stack.Screen name={screens.HomeTab} component={HomeScreen}  />
      <Stack.Screen name={screens.SignOutTab} component={SignInScreen} />
      <Stack.Screen name={screens.CheckinTab} component={CheckinScreen} />
    </Stack.Navigator>
  )
}

export default CriarTrajetoStackNavigator
