import React, {useState, useEffect} from 'react';
import {
    Text,
  View,
} from 'react-native';
import styles from './style';
import uuid from 'react-native-uuid';
function Count(props) {
  useEffect(() =>{

  }, [])
    console.log("Count rendering A========");
     return (
     <View>
      <Text style={styles.txt}>{props.text} is===  {props.count}</Text>
      </View>);
}
export default Count;