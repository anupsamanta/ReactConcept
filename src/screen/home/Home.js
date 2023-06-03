/* eslint-disable no-lone-blocks */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import { useDrawerStatus , DrawerActions} from '@react-navigation/drawer';
import {
  View, TouchableOpacity, Text
} from 'react-native';
let isDrawerOpen = false;
const Home = (props, navigation)  => {
  const gotoNextScreen = () =>{
    props.navigation.navigate("ProfileScreen")
  };
    
  const gotoNextScreenAPI = () =>{ 
     //props.navigation.navigate("APIClass")
    props.navigation.navigate("CustomRoot") ;
  };


  {
     isDrawerOpen = useDrawerStatus() === 'open';
   // alert(isDrawerOpen)
  }
  const openCloseDrawer = () =>{
    {isDrawerOpen ? props.navigation.closeDrawer() : props.navigation.openDrawer();}

  };
    return (
    <View style = {{flex:1, marginTop: 60}}>
      <View>
      <Text>Home Screen</Text>
      </View>
      <TouchableOpacity onPress = {openCloseDrawer}>
          <Text>OPEN/CLOSE DRAWER</Text>
        </TouchableOpacity>
    </View>);
    }
    export default React.memo(Home);
