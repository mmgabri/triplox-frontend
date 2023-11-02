import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import ProfileScreen from '../screens/ProfileScreen'

export const screens = {
  HomeTab: 'HomeTab',
  Home: 'Home',

  SignIn: 'SignIn',
  SignInTab: 'SignInTab',

  SignUp: 'SignUp',
  SignUpTab: 'SignUpTab',

  SignOut: 'SignOut',
  SignOutTab: 'SignOutTab',

  Checkin: 'Checkin',
  CheckinTab: 'CheckinTab',

  CheckinSentido: 'CheckinSentido',
  CheckinSentidoTab: 'CheckinSentidoTab',

  Feed: 'Feed',
  FeedTab: 'FeedTab',

  Setup: 'Setup',
  SetupTab: 'SetupTab',

  SetupTipo: 'SetupTipo',
  SetupTipoTab: 'SetupTipoTab',

  SetupConfirm: 'SetupConfirm',
  SetupConfirmTab: 'SetupConfirmTab',

  Profile: 'Profile',
  ProfileTab: 'ProfileTab'

}


export const routes = [
 
  {
    name: screens.CheckinTab,
    focusedRoute: screens.Checkin,
    title: 'Checkin',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="check-circle-o" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.CheckinSentidoTab,
    focusedRoute: screens.CheckinSenido,
    title: 'Checkin',
    showInTab: true,
    showInDrawer: false
    
  },

    {
    name: screens.SetupTab,
    focusedRoute: screens.SetupTab,
    title: 'SetUp',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.SetupTipoTab,
    focusedRoute: screens.SetupTipoTab,
    title: 'Setup Tipo',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.SetupConfirmTab,
    focusedRoute: screens.SetupConfirmTab,
    title: 'Setup Confirm',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },



  {
    name: screens.FeedTab,
    focusedRoute: screens.FeedTab,
    title: 'Feed',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="home" size={23} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.SignInTab,
    focusedRoute: screens.SignInTab,
    title: 'Login',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="user" size={23} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home--routes',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="home" size={23} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="home" size={23} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.ProfileTab,
    focusedRoute: screens.CheckinTab,
    title: 'Profile',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="user" size={25} color={focused ? '#009387' : '#818185'} />,
  },
  {
    name: screens.SignOutTab,
    focusedRoute: screens.SignOutTab,
    title: 'SignOut',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="sign-out" size={25} color={focused ? '#009387' : '#818185'} />,
  },
]
