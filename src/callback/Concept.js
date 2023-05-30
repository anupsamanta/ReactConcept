import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Title from './Title';
import Count from './count';
import B from './Button'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import CryptoJS from "react-native-crypto-js";
function Concept() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000)
  // const incrementAge = () => {setAge(age + 1);
  //  }


  useEffect(() => {

  }, []);

  const incrementAge = useCallback(() => {
    setAge(age + 1)
    //callApp()
  }, [age])
  // const incrementAge = () => {
  //   setAge(age + 1)
  //   callApp()
  // }
  const callApp = () => {
    console.log(" ========= ")
  }
  const incrementSalary = () => {
    setSalary(salary + 1000);
    callAppSal()
  }

  // const incrementSalary = useCallback(() => {
  //   setSalary(salary + 1)
  //   callApp()
  // }, [salary])

  const callAppSal = () => {
    console.log(" ========= ")
  }

  return (
    <View>
      <Title count = {age}/>
      {/* <Count text="age" count={age} /> */}
      {/* <B handleClick={incrementAge}>Increment my age</B> */}
      <TouchableOpacity onPress={incrementAge}>
        <Text>Increment my Age</Text></TouchableOpacity>
      {/* <Count text="salary" count={salary} /> */}
      {/* <B handleClick={incrementSalary}>Increment my salary</B> */}
      <TouchableOpacity onPress={incrementSalary}>
        <Text>Increment my Salary</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Concept;
