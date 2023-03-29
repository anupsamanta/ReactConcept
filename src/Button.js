import React, {useState} from 'react';
import {
  View, TouchableOpacity, Text
} from 'react-native';

function Button11(props) {
 console.log(`Button clicked ${props.children}` + '  A');
 console.log('test vakil');
    return (
    <View>
        <TouchableOpacity onPress = {props.handleClick}>
          <Text>{props.children}</Text>
        </TouchableOpacity>
    </View>);
    }
    export default React.memo(Button11);
