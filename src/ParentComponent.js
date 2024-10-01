import React, {useState, useCallback, useEffect} from 'react';
import Title from './Title';
import Count from './count';
import B from './Button';
import {View} from 'react-native';
import CryptoJS from 'react-native-crypto-js';
function Concept() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);
  // const incrementAge = () => {setAge(age + 1);
  //  }

  useEffect(() => {}, []);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
 
  // const incrementSalary = useCallback(() => {
  //   setSalary(salary + 1000);
  // }, [salary]);

  const incrementSalary = ()=>{
    setSalary(salary + 1000);
  }
  return (
    <View>
      {/* <Text>Anup Samanyta</Text> */}
      <Title />
      <Count text="age" count={age} />
      <B handleClick={incrementAge}>Increment my agejj</B>
      <Count text="salary" count={salary} />
      <B handleClick={incrementSalary}>Increment my salary</B>
    </View>
  );
}
export default Concept;
