/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Text,
  useColorScheme,
  View,
  TextInput,
  FlatList,
  TouchableHighlight,
  Platform
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList, DrawerItem
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/Home.js';
import ProfileScreen from './src/Profile.js';
import Login from './src/Login.js';
import Concept from './src/Concept';
import CounterScreen from './src/features/counter/counter';
import CounterScreenNew from './src/features/counter/counterNEW';
import APIClass from './src/concept/APIClass';
import AccClass from './src/concept/accordian';
import CustomRoot from './src/customHooks/root.js';
import useReducerClass from './src/useReducerConcept.js';
import useStateClass from './src/useStateConcept.js';

import MainClass from './src/callback/Concept.js'
import MainClassUseMemo from './src/useMemo/CounterUseMemo.js';


const App = () => {
  const [drawerArr, setdrawerArr] =
    useState(
      [{ title: 'Home Screen', key: 'item1', route: 'Home' },
      { title: 'Profile Screen', key: 'item2', route: 'ProfileScreen' },
      { title: 'Logout', key: 'item3', route: 'Login' }])

  function DrawerRouter() {
    return (
      <Drawer.Navigator initialRouteName='Home' drawerContent={props => {
        return (
          <View style={{ flex: 1 }}>
            <FlatList
              ItemSeparatorComponent={
                <View style={{ height: 1, backgroundColor: 'red' }}></View>}
              data={drawerArr}
              renderItem={({ item, index, separators }) => (
                <TouchableHighlight
                  key={item.key}
                  onPress={() => props.navigation.navigate(item.route)}
                  onShowUnderlay={separators.highlight}
                  onHideUnderlay={separators.unhighlight}>
                  <View style={{
                    backgroundColor: 'white',
                    paddingLeft: 30,
                    height: 50,
                    justifyContent: 'center'
                  }}>
                    <Text>{item.title}</Text>
                  </View>
                </TouchableHighlight>
              )}
            />
          </View>
        );
      }} >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login', headerShown: false}}
        />
        <Stack.Screen
          name="DrawerRouter"
          component={DrawerRouter}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Concept" component={Concept} options={{ headerShown: true }} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} options={{ headerShown: true }} />
        <Stack.Screen name="CounterScreenNew" component={CounterScreenNew} options={{ headerShown: true }} />
        <Stack.Screen name="APIClass" component={APIClass} options={{ headerShown: true }} />
        <Stack.Screen name="AccClass" component={AccClass} options={{ headerShown: true }} />
        <Stack.Screen name="CustomRoot" component={CustomRoot} options={{ headerShown: true }} />
        <Stack.Screen
          name="useReducerClass"
          component={useReducerClass}
          options={{headerShown: true}}
        />
         <Stack.Screen
          name="useStateClass"
          component={useStateClass}
          options={{headerShown: true}}
        />
         <Stack.Screen
          name="MainClass"
          component={MainClass}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="MainClassUseMemo"
          component={MainClassUseMemo}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
      
      
    </NavigationContainer>
  );
}
export default App;
