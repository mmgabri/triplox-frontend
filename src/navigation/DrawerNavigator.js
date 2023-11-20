import * as React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/FontAwesome'

import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '../components/colors'
import BottomTabNavigator from './BottomTabNavigator'
import { routes, screens } from './RouteItems'
import { useAuth } from '../contexts/auth';

const Drawer = createDrawerNavigator()

const CustomDrawerContent = (props) => {
  const { isAuthenticated } = useAuth();
  const currentRouteName = props.nav()?.getCurrentRoute()?.name

  return (
    <DrawerContentScrollView {...props}>
      {
        routes.filter(route => route.showInDrawer).map((route) => {
          const focusedRoute = routes.find(r => r.name === currentRouteName)
          const focused = focusedRoute ?
            route.name === focusedRoute?.focusedRoute :
            route.name === screens.HomeStack
          if (!isAuthenticated) {
            if (route.shownNoAuth) {
              return (
                <DrawerItem
                  key={route.name}
                  label={() => (
                    <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                      {route.title}
                    </Text>
                  )}
                  onPress={() => props.navigation.navigate(route.name)}
                  style={[styles.drawerItem, focused ? styles.drawerItemFocused : styles.drawerItemNotFocused]}
                />
              )
            }
          } else {
            return (
              <DrawerItem
                key={route.name}
                label={() => (
                  <View flexDirection={"row"}>
                    {route.name == "SignOutTab" &&
                      <>
                        <Icon name="power-off" size={22} color={"gray"} />
                        <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                          {route.title}
                        </Text>
                      </>
                    }

                    {route.name == "ProfileTab" &&
                      <>
                        <Icon name="user" size={22} color={"gray"} />
                        <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                          {route.title}
                        </Text>
                      </>
                    }
                    {route.name == "SignUpTab" &&
                      <>
                        <Icon name="check" size={22} color={"gray"} />
                        <Text style={focused ? styles.drawerLabelFocused : styles.drawerLabel}>
                          {route.title}
                        </Text>
                      </>
                    }
                  </View>

                )
                }
                onPress={() => props.navigation.navigate(route.name)}
                style={[styles.drawerItem, focused ? styles.drawerItemFocused : styles.drawerItemFocused]}
              />
            )
          }
        })
      }
    </DrawerContentScrollView >
  )
}

const DrawerNavigator = ({ nav }) => {


  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: theme,
          height: 37,
        },
        headerRight: () => (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerRight3}>
              <Icon name="bars" size={22} color="#DCDCDC" />
            </TouchableOpacity>
          </View>
        ),
        headerLeft: () => (
          <View></View>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />} >
      <Drawer.Screen
        style={styles.title}
        name={screens.HomeTab}
        component={BottomTabNavigator}
        options={{
          title: '',
          headerTitle: () =>
            <View style={styles.container}>
              <Text style={styles.title}>Tri</Text>
              <Text style={styles.title2}>plo</Text>
              <Text style={styles.title3}>X</Text>
              
            </View>
        }} />
        
    </Drawer.Navigator>

  )
}

const styles = StyleSheet.create({
  container: {
    top: 10,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  headerRight1: {
    marginRight: 40
  },
  headerRight2: {
    marginRight: 15
  },
  //centraliza menu
  headerRight3: {
    marginRight: 15,
    top: 45,

  },

  title: {
    fontFamily: 'Roboto-BoldItalic',
    fontSize: 20,
    top: -5,
    color: '#f8f8ff'

  },
  title2: {
    fontFamily: 'Roboto-BoldItalic',
    fontSize: 20,
    top: -5,
    color: '#000000'
  },
  title3: {
    fontFamily: 'Roboto-BoldItalic',
    fontSize: 21,
    top: -5,
    color: '#ff0000'
  },

  // drawer content
  drawerLabel: {
    fontSize: 17,
    color: 'gray',
    fontWeight: "bold",
    marginLeft: 15

  },
  drawerLabelFocused: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15

  },
  drawerItem: {
    height: 50,
    justifyContent: 'center'
  },
  drawerItemFocused: {
    backgroundColor: 'white',
  },
  drawerItemNotFocused: {
    backgroundColor: 'black',
  },
})

export default DrawerNavigator
