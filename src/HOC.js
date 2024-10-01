import {Component, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// const ExampleHOC = () => {
//   useEffect(()=>{
//   }, [])
//   return (
//     <View style={{flex: 1, backgroundColor: 'gray'}}>
//       <Text>Example of HOC</Text>
//       {/* <CounterComponent /> */}
//       <HOCOrange name = {CounterComponent} />
//       <HOCRed name = {CounterComponent} />
//       <HOCBlue name = {CounterComponent} />
//     </View>
//   );
// };

// const HOCOrange= (props)=>{
//    return(
//     <View style= {{backgroundColor: 'orange', height: 100, width: 100}}>
//         <Text>1st Counter</Text>
//       <props.name />
//     </View>
//    )
// }
// const HOCRed = (props)=>{
//     return(
//      <View style= {{backgroundColor: 'red', height: 100, width: 100}}>
//          <Text>2nd Counter</Text>
//        <props.name />
//      </View>
//     )
//  }
//  const HOCBlue= (props)=>{
//     return(
//      <View style= {{backgroundColor: 'blue', height: 100, width: 100}}>
//          <Text>3rd Counter</Text>
//        <props.name />
//      </View>
//     )
//  }
// const CounterComponent = () => {
//   const [counter, setCounter] = useState(0);
//   return (
//     <View style={{flex: 1}}>
//       <Text>{counter}</Text>
//       <TouchableOpacity onPress={() => setCounter(counter + 1)}>
//         <Text>Increment</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// export default ExampleHOC;

const App = () =>{
  useEffect(()=>{
  }, [])
  return(
<View style={{flex: 1, backgroundColor: 'gray'}}>
    <Text>b b  nm mn</Text>
  <HOC1 counterprops = {Counter} />
  <HOC2 counterprops = {Counter} />
  </View>
  )
  
  
}
const HOC1 = (props) =>{
  return(
      <View style = {{backgroundColor : 'red', height: 50, width: 50}}>
     <props.counterprops />
  </View>);
  
}
const HOC2 = (props) =>{
  return(
      <View style = {{backgroundColor : 'blue', height: 50, width: 50}}>
     <props.counterprops />
  </View>);
}


const Counter = () =>{
  const [count, setcount] = useState(0);
  return(
      <View style={{height: 50, width: 50}}>
      <Text>{count}</Text>
       <TouchableOpacity onPress = {()=> setcount(count + 1)}>
       <Text>Increase Count</Text>
       </TouchableOpacity>
      </View>
);
}
export default App;


