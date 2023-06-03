
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
        <Stack.Screen
          name="SignupClass"
          component={SignupClass}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
