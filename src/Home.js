
import React, {useState} from 'react';
import { useDrawerStatus , DrawerActions} from '@react-navigation/drawer';
import {
  View, TouchableOpacity, Text
} from 'react-native';
let isDrawerOpen = false;
const Home = (props, navigation)  => {
  gotoNextScreen = () =>{
    props.navigation.navigate("ProfileScreen")
  }
  gotoNextScreenAPI = () =>{
     props.navigation.navigate("APIClass")
    //props.navigation.navigate("AccClass")
  }

  
  {
     isDrawerOpen = useDrawerStatus() === 'open';
   // alert(isDrawerOpen)
  }
  const openCloseDrawer = () =>{
    {isDrawerOpen ? props.navigation.closeDrawer() : props.navigation.openDrawer();}

  }
    return (
    <View style = {{flex:1, justifyContent : 'center', alignItems : 'center'}}>
      <TouchableOpacity onPress = {openCloseDrawer}>
          <Text>OPEN/CLOSE DRAWER</Text>
        </TouchableOpacity>
      <Text style = {{ fontSize : 24, color : 'orange', fontWeight : 'bold'}}>Home Screen</Text>
        <TouchableOpacity onPress = {gotoNextScreen}>
          <Text style = {{fontSize : 18}}>Go To Profile Screen</Text>
        </TouchableOpacity>

        <Text style = {{ fontSize : 24, color : 'orange', fontWeight : 'bold'}}>Home Screen</Text>
        <TouchableOpacity onPress = {gotoNextScreenAPI}>
          <Text style = {{fontSize : 18}}>Go To Api Class</Text>
        </TouchableOpacity>

        
        
    </View>);
    }
    export default React.memo(Home);
