import React, { useState,useMemo} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';



function App() {
const [counterOne, setcounterOne] = useState(0)
const [counterTwo, setcounterTwo] = useState(0)

// Change the state to the input
const incrementCounterOne = (e) => {
	setcounterOne(counterOne + 1);
}

// Increases the counter by 1
const incrementCounterTwo = () => {
	setcounterTwo(counterTwo + 1);
}

const isEven = useMemo(() =>{
 console.log("========>Use memo ===>")
  for(let i = 0 ; i < 100000000; i++){
  }
  return counterOne%2 === 0;
},[counterOne])


//Without Memo
// const isEven = () =>{
//   console.log("========>")
//   for(let i = 0 ; i < 100000000; i++){

//   }
//   return counterOne%2 === 0;
// }


return (
	<View style={{justifyContent:"center", alignItems:'center'}}>
	<Text>Concept of useMemo</Text>
	<TouchableOpacity onPress= {incrementCounterOne}>
    <Text style={{color :'red'}}>Counter One</Text>
  </TouchableOpacity>
	<Text>Counter 1 : {counterOne}</Text>
  {/* <Text>{isEven()? "Even" : "Odd"}</Text> */}
  <Text>{isEven? "Even" : "Odd"}</Text>
  <TouchableOpacity onPress= {incrementCounterTwo}>
    <Text style={{color :'red'}}>Counter Two</Text>
  </TouchableOpacity>
	<Text>Counter 2 : {counterTwo}</Text>
	</View>
);
}
export default App;


