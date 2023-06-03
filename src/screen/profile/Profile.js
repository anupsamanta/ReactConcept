import React, {useState} from 'react';
import {
  View, TouchableOpacity, Text, Alert
} from 'react-native';

function Profile(props) {
  gobackScreen = ()=>{
    props.navigation.goBack()
  }
  gotoConceptScreen = () =>{
    props.navigation.navigate("Concept")
    
  }
  gotoApiScreen = () =>{
    props.navigation.navigate("CounterScreen")
  }

  gotoApiScreenNew = () =>{
    props.navigation.navigate("CounterScreenNew")
  }
 
    return (
    <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
          <Text style = {{marginBottom : 100, fontSize : 24, color : 'orange', 
          fontWeight : 'bold'}}>Profile Screen</Text>
        <TouchableOpacity onPress = {gobackScreen}>
          <Text>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {gotoConceptScreen}>
          <Text>GO TO CONCEPT SCREEN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {gotoApiScreen}>
          <Text>GO TO API CALL</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress = {gotoApiScreenNew}>
          <Text>GO TO API CALL NEW</Text>
        </TouchableOpacity>
    </View>);
    }
    export default React.memo(Profile);
