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

  Feed: 'Feed',
  FeedTab: 'FeedTab',

  Profile: 'Profile',
  ProfileTab: 'ProfileTab',

  
  CheckinListaPresenca: 'CheckinListaPresenca',
  CheckinListaPresencaTab: 'CheckinListaPresencaTab'

}


export const routes = [

  {
    name: screens.FeedTab,
    focusedRoute: screens.FeedTab,
    title: 'Feed',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="home" size={29} color={focused ? '#993399' : '#818185'} />,
  },
 
  {
    name: screens.CheckinTab,
    focusedRoute: screens.Checkin,
    title: 'Checkin',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="check-circle-o" size={29} color={focused ? '#993399' : '#818185'} />,
  },

  {
    name: screens.TrajetosTab,
    focusedRoute: screens.TrajetosTab,
    title: 'Meus trajetos',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="exchange" size={29} color={focused ? '#993399' : '#818185'} />,
  },

  {
    name: screens.SignInTab,
    focusedRoute: screens.SignInTab,
    title: 'Login',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="user" size={29} color={focused ? '#993399' : '#818185'} />,
  },

  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
    <Icon name="home" size={29} color={focused ? '#993399' : '#818185'} />,
  },

  
  {
    name: screens.ProfileTab,
    focusedRoute: screens.ProfileTab,
    title: 'Perfil',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="user" size={25} color={focused ? '#993399' : '#818185'} />,
  },
  {
    name: screens.SignOutTab,
    focusedRoute: screens.SignOutTab,
    title: 'Sair',
    showInTab: false,
    showInDrawer: true,
      
  },
  {
    name: screens.SignUpTab,
    focusedRoute: screens.SignUpTab,
    title: 'SignUpTab',
    showInTab: false,
    showInDrawer: false,
  },
  {
    name: screens.CheckinListaPresencaTab,
    focusedRoute: screens.CheckinListaPresencaTab,
    showInTab: false,
    showInDrawer: false,
  },

 
  {
    name: screens.CriarTrajetoTab,
    focusedRoute: screens.CriarTrajetoTab,
    showInTab: true,
    showInDrawer: false,
  },
  {
    name: screens.CriarTrajeto0Tab,
    focusedRoute: screens.CriarTrajeto0Tab,
    showInTab: true,
    showInDrawer: false,
  },

  {
    name: screens.CriarTrajeto1Tab,
    focusedRoute: screens.CriarTrajeto1Tab,
    showInTab: false,
    showInDrawer: false,
  },

  {
    name: screens.CriarTrajeto2Tab,
    focusedRoute: screens.CriarTrajeto2Tab,
    showInTab: false,
    showInDrawer: false,
  },

  {
    name: screens.CriarTrajeto3Tab,
    focusedRoute: screens.CriarTrajeto3Tab,
    showInTab: false,
    showInDrawer: false,
  },

  {
    name: screens.CriarTrajeto4Tab,
    focusedRoute: screens.CriarTrajeto4Tab,
    showInTab: false,
    showInDrawer: false,
  },

]