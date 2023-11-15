import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'
import CheckinScreen from '../../screens/CheckinScreen'
import SignInScreen from '../../screens/SignInScreen'
import HomeScreen from '../../screens/HomeScreen'
import Configuracao0Screen from '../../screens/Configuracao/Configuracao0Screen'
import Configuracao1Screen from '../../screens/Configuracao/Configuracao1Screen'
import Configuracao2Screen from '../../screens/Configuracao/Configuracao2Screen'
import Configuracao3Screen from '../../screens/Configuracao/Configuracao3Screen'
import Configuracao4Screen from '../../screens/Configuracao/Configuracao4Screen'

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
      <Stack.Screen name={screens.Configuracao0Tab} component={Configuracao0Screen}  options={{ title: 'Configuração de Trajeto' }} />
      <Stack.Screen name={screens.Configuracao1Tab} component={Configuracao1Screen}  options={{ title: 'Configuração - Linha ' }} />
      <Stack.Screen name={screens.Configuracao2Tab} component={Configuracao2Screen}  options={{ title: 'Configuração - Origem' }} />
      <Stack.Screen name={screens.Configuracao3Tab} component={Configuracao3Screen}  options={{ title: 'Configuração - Destino' }} />
      <Stack.Screen name={screens.Configuracao4Tab} component={Configuracao4Screen}  options={{ title: 'Configuração - Confirmar' }}  />
      <Stack.Screen name={screens.HomeTab} component={HomeScreen}  />
      <Stack.Screen name={screens.SignOutTab} component={SignInScreen} />
      <Stack.Screen name={screens.CheckinTab} component={CheckinScreen} />
    </Stack.Navigator>
  )
}

export default SetupStackNavigator
