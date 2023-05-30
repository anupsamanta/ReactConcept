/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useCounter from './useCounter';

export default function Counter2() {
  const [increment, decrement, counter] = useCounter(10);
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 200}}>
      <Text>Counter2 : {counter}</Text>
      <TouchableOpacity onPress={increment}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement}>
        <Text>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
}
