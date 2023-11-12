import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet, View } from 'react-native'

import HomeStackNavigator from './stack-navigators/HomeStackNavigator'
import FeedStackNavigator from './stack-navigators/FeedStackNavigator'
import CheckinStackNavigator from './stack-navigators/CheckinStackNavigator'
import LoginStackNavigator from './stack-navigators/LoginStackNavigator'
import ContaStackNavigator from './stack-navigators/ContaStackNavigator'
import SetupStackNavigator from './stack-navigators/SetupStackNavigator'
import ProfileScreen from '../screens/ProfileScreen'


import { routes, screens } from './RouteItems'
import { useAuth } from '../contexts/auth';

const Tab = createBottomTabNavigator()

const tabOptions = ({ route }) => {
  const item = routes.find(routeItem => routeItem.name === route.name)

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
      tabBarHideOnKeyboard: true
    }
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: () => (
      <Text style={styles.tabBarLabel}>{item.title || ''}</Text>
    ),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  }
}

const BottomTabNavigator = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <Tab.Navigator screenOptions={tabOptions} tabBarOptions={{ keyboardHidesTabBar: true }}>
        <Tab.Screen name={screens.FeedTab} component={FeedStackNavigator} />
        <Tab.Screen name={screens.CheckinTab} component={CheckinStackNavigator} />
        <Tab.Screen name={screens.Configuracao0Tab} component={SetupStackNavigator} />

        <Tab.Screen name={screens.ProfileTab} component={ProfileScreen} />

      </Tab.Navigator>
    )
  } else {
    return (
      <Tab.Navigator screenOptions={tabOptions} tabBarOptions={{ keyboardHidesTabBar: true }}>
        <Tab.Screen name={screens.HomeTab} component={HomeStackNavigator} />
        <Tab.Screen name={screens.SignInTab} component={LoginStackNavigator} />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 10,
  },
  tabContainer: {
    height: 45,
  }
})

export default BottomTabNavigator
