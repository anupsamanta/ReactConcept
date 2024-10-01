import React, {useState, useCallback, useMemo, useEffect} from 'react';
import Title from './Title';
import Count from './count';
import Task from './Task';
import Button from './Button'
import {
  Text,
  View
} from 'react-native';
import CryptoJS from "react-native-crypto-js";
import { TouchableOpacity } from 'react-native-gesture-handler';
function Concept() {
const [age, setAge] = useState(25);
const [tasks, setTasks] = useState([]);
const incrementAge = ()=>{
  setAge(age + 1)
}

// const incrementSalary = useCallback(()=>{
//   setSalary(salary + 1000);
// },[salary])

const addTask1 = useCallback(()=>{
  setTasks((t) => [...t, "New Task"]);
},[tasks]) 

// const addTask1 = ()=>{
//   setTasks((t) => [...t, "New Task"]);
// }


 return (
  <View>
    <Title/>
    <Count text="age" count={age}/>
    <TouchableOpacity onPress={incrementAge}>
      <Text>Age Increment</Text>
    </TouchableOpacity>
    <Task tasks={tasks} addTask={addTask1}/>
 </View>
);
}
export default Concept;
