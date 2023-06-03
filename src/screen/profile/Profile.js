import React, {useState} from 'react';
import {
  View, TouchableOpacity, Text, Alert
} from 'react-native';

function Profile(props) {
  gobackScreen = ()=>{
    props.navigation.goBack()
  }
    return (
    <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
          <Text style = {{marginBottom : 100, fontSize : 24, color : 'orange', 
          fontWeight : 'bold'}}>Profile Screen</Text>
        <TouchableOpacity onPress = {gobackScreen}>
          <Text>Back to Home screen</Text>
        </TouchableOpacity>
    </View>);
    }
    export default React.memo(Profile);
