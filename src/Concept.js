import React, {useState, useCallback, useMemo, useEffect} from 'react';
import Title from './Title';
import Count from './count';
import B from './Button'
import {
  Text,
  View
} from 'react-native';
import CryptoJS from "react-native-crypto-js";
function Concept() {
const [age, setAge] = useState(25);
const [salary, setSalary] = useState(25000)
// const incrementAge = () => {setAge(age + 1);
//  }


useEffect(() => {
 alert("kk")
  },[]);

const incrementAge = useCallback(()=>{
  setAge(age + 1)
  callApp()
},[age])
const callApp = () =>{
  console.log("=========")
}
const incrementSalary = useCallback(()=>{
  setSalary(salary + 1000);
},[salary])

 return (
  <View>
    <Title/>
    <Count text="age" count={age}/>
    <B handleClick={incrementAge}>Increment my age vdsv</B>
    <Count text="salary" count={salary} />
    <B handleClick={incrementSalary}>Increment my salary</B>
 </View>
);
}
export default Concept;
