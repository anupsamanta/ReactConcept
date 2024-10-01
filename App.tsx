
import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import HomeScreen from './src/screen/home/Home.js';
import ProfileScreen from './src/screen/profile/Profile.js';
import Login from './src/screen/login/Login.js';
import SignupClass from "./src/screen/signup/signup.js";
import styles from './style.js';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import Concept from './src/Concept';
import CounterScreen from './src/features/counter/counter';
import CounterScreenNew from './src/features/counter/counterNEW';
import APIClass from './src/concept/APIClass';
// import AccClass from './src/concept/accordian';
// import CustomRoot from './src/customHooks/root.js';
import useReducerClass from './src/useReducerConcept.js';
//import useStateClass from './src/useStateConcept.js';

import MainClass from './src/callback/Concept.js'
import MainClassUseMemo from './src/useMemo/CounterUseMemo.js';
import UIClass from "./src/Toolkit_with_saga/uiscreen.js";
import FlexC from './src/Flex.js';
import LifeCycleC from './src/LifeCycleMethods.js';
import Hoc from './src/HOC.js';
import customhooks from './src/Customhooks.js';

// anup
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
          <View style={styles.container}>
            <FlatList
              ItemSeparatorComponent={
                <View style={styles.sep}>
                </View>}
              data={drawerArr}
              renderItem={({ item, separators }) => (
                <TouchableHighlight
                  key={item.key}
                  onPress={() => props.navigation.navigate(item.route)}
                  onShowUnderlay={separators.highlight}
                  onHideUnderlay={separators.unhighlight}>
                  <View style={styles.drawerItem}>
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
        {/* <Stack.Screen name="AccClass" component={AccClass} options={{ headerShown: true }} /> */}
        {/* <Stack.Screen name="CustomRoot" component={CustomRoot} options={{ headerShown: true }} /> */}
        <Stack.Screen name="Flex" component={FlexC} options={{ headerShown: true }} />
        {/* </Stack.Navigator><Stack.Screen name="LifeCycleC" component={LifeCycleC} options={{ headerShown: true }}/> */}
        <Stack.Screen name="ExampleHOC" component={Hoc} options={{ headerShown: true }} />
        <Stack.Screen name="customhooks" component={customhooks} options={{ headerShown: true }} />
        
        

        <Stack.Screen
          name="useReducerClass"
          component={useReducerClass}
          options={{headerShown: true}}
        />
         {/* <Stack.Screen
          name="useStateClass"
          component={useStateClass}
          options={{headerShown: true}}
        /> */}
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
        <Stack.Screen
          name="SignupClass"
          component={SignupClass}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="UIClass"
          component={UIClass}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
