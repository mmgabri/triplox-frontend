import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'


export const screens = {
  CriarTrajetoTab: 'CriarTrajetoTab',
  CriarTrajeto: 'CriarTrajeto',

  CriarTrajeto0Tab: 'CriarTrajeto0Tab',
  CriarTrajeto0: 'CriarTrajeto0',

  CriarTrajeto1Tab: 'CriarTrajeto1Tab',
  CriarTrajeto1: 'CriarTrajeto1',

  CriarTrajeto2Tab: 'CriarTrajeto2Tab',
  CriarTrajeto2: 'CriarTrajeto2',


  CriarTrajeto3Tab: 'CriarTrajeto3Tab',
  CriarTrajeto3: 'CriarTrajeto3',

  CriarTrajeto4Tab: 'CriarTrajeto4Tab',
  CriarTrajeto4: 'CriarTrajeto4',

  TrajetosTab: 'TrajetosTab',
  Trajetos: 'Trajetos',

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
    name: screens.CriarTrajetoTab,
    focusedRoute: screens.CriarTrajetoTab,
    title: 'Configuração',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },
  {
    name: screens.CriarTrajeto0Tab,
    focusedRoute: screens.CriarTrajeto0Tab,
    title: 'Configuração',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.CriarTrajeto1Tab,
    focusedRoute: screens.CriarTrajeto1Tab,
    title: 'Configuração',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.CriarTrajeto2Tab,
    focusedRoute: screens.CriarTrajeto2Tab,
    title: 'Configuração',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.CriarTrajeto3Tab,
    focusedRoute: screens.CriarTrajeto3Tab,
    title: 'Configuração',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.CriarTrajeto4Tab,
    focusedRoute: screens.CriarTrajeto4Tab,
    title: 'Configuração',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="gear" size={21} color={focused ? '#009387' : '#818185'} />,
  },

  {
    name: screens.TrajetosTab,
    focusedRoute: screens.TrajetosTab,
    title: 'Configuração',
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
