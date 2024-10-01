/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import useCounter from './useCounter';
import useFetch from './useApiCall';
let url = 'https://reqres.in/api/users?page=2';
export default function Counter2() {
  const [increment, decrement, counter] = useCounter(10);
  const {data, loading, error, callRemoteApi} = useFetch(url);
  console.log("RESULT =====22== " + JSON.stringify(data));
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
      <TouchableOpacity onPress={callRemoteApi}>
        <Text>API CALL USING CUSTOM HOOKS 2nd</Text>
      </TouchableOpacity>
      <Text>{
}</Text>
    </View>
  );
}
