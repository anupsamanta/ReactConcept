import React, {useState} from 'react';
import {
  View, TouchableOpacity, Text
} from 'react-native';

function Button11(props) {
 console.log(`Button clicked ${props.children}` + '  A');
 console.log('test vakil');
 console.log('test vakil 121');
 console.log('test anup');
 console.log('test3')
 console.log("Add another log");

    return (
    <View>
        <TouchableOpacity onPress = {props.handleClick}>
          <Text>{props.children}</Text>
        </TouchableOpacity>
    </View>);
    }
    export default React.memo(Button11);
