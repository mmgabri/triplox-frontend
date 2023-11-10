import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { screens } from '../RouteItems'
import CheckinScreen from '../../screens/CheckinScreen'
import SignInScreen from '../../screens/SignInScreen'
import HomeScreen from '../../screens/HomeScreen'
import ConfiguracaoScreen from '../../screens/ConfiguracaoScreen'
import Configuracao0Screen from '../../screens/Configuracao/Configuracao0Screen'
import Configuracao1Screen from '../../screens/Configuracao/Configuracao1Screen'
import Configuracao2Screen from '../../screens/Configuracao/Configuracao2Screen'
import Configuracao3Screen from '../../screens/Configuracao/Configuracao3Screen'
import Configuracao4Screen from '../../screens/Configuracao/Configuracao4Screen'
import Configuracao5Screen from '../../screens/Configuracao/Configuracao5Screen'
import Configuracao6Screen from '../../screens/Configuracao/Configuracao6Screen'

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
      <Stack.Screen name={screens.Configuracao1Tab} component={Configuracao1Screen}  options={{ title: 'Configuração - Passo 1/6 ' }} />
      <Stack.Screen name={screens.Configuracao2Tab} component={Configuracao2Screen}  options={{ title: 'Configuração - Passo 2/6' }} />
      <Stack.Screen name={screens.Configuracao3Tab} component={Configuracao3Screen}  options={{ title: 'Configuração - Passo 3/6' }} />
      <Stack.Screen name={screens.Configuracao4Tab} component={Configuracao4Screen}  options={{ title: 'Configuração - Passo 4/6' }} />
      <Stack.Screen name={screens.Configuracao5Tab} component={Configuracao5Screen}  options={{ title: 'Configuração - Passo 5/6' }} />
      <Stack.Screen name={screens.Configuracao6Tab} component={Configuracao6Screen}  options={{ title: 'Configuração - Passo 6/6' }}  />
      <Stack.Screen name={screens.HomeTab} component={HomeScreen}  />
      <Stack.Screen name={screens.SignOutTab} component={SignInScreen} />
      <Stack.Screen name={screens.CheckinTab} component={CheckinScreen} />
    </Stack.Navigator>
  )
}

export default SetupStackNavigator
