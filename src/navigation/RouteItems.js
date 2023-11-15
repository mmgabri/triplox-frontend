import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


export const screens = {
  ConfiguracaoTab: 'ConfiguracaoTab',
  Configuracao: 'Configuracao',

  Configuracao0Tab: 'Configuracao0Tab',
  Configuracao0: 'Configuracao0',

  Configuracao1Tab: 'Configuracao1Tab',
  Configuracao1: 'Configuracao1',

  Configuracao2Tab: 'Configuracao2Tab',
  Configuracao2: 'Configuracao2',


  Configuracao3Tab: 'Configuracao3Tab',
  Configuracao3: 'Configuracao3',

  Configuracao4Tab: 'Configuracao4Tab',
  Configuracao4: 'Configuracao4',

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

  CheckinConfirm: 'CheckinConfirm',
  
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
    name: screens.CheckinConfirm,
    focusedRoute: screens.CheckinConfirm,
    title: 'Checkin - Confirm',
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
    name: screens.ConfiguracaoTab,
    focusedRoute: screens.ConfiguracaoTab,
    title: 'Configuração',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },
  {
    name: screens.Configuracao0Tab,
    focusedRoute: screens.Configuracao0Tab,
    title: 'Configuração',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.Configuracao1Tab,
    focusedRoute: screens.Configuracao1Tab,
    title: 'Configuração',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.Configuracao2Tab,
    focusedRoute: screens.Configuracao2Tab,
    title: 'Configuração',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.Configuracao3Tab,
    focusedRoute: screens.Configuracao3Tab,
    title: 'Configuração',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.Configuracao4Tab,
    focusedRoute: screens.Configuracao4Tab,
    title: 'Configuração',
    showInTab: false,
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
