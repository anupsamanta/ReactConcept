import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

function Button11(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.handleClick}>
        <Text>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
}
//export default React.memo(Button11);
export default Button11;
