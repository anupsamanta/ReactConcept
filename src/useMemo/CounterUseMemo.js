import React, {useMemo, useCallback, useState} from 'react';
import { View,Text, TouchableOpacity} from 'react-native';
  
function Counter() {
const [count, setCount] = useState(0);
const [evenNum,setEvenNum] = useState(2)

const evenNumDouble = useMemo(()=>{
    console.log("double");
    return evenNum * 2;
},[evenNum])

return (
        <View>
           <Text>Counter: {count}</Text> 
           <Text>Even Numbers: {evenNum}</Text>
           <Text>Even Number Double Value: {evenNumDouble}</Text>
           <TouchableOpacity onPress={() =>setCount(count+1)}><Text>Increment</Text></TouchableOpacity>
           <TouchableOpacity onPress={()=>setEvenNum(evenNum+2)}><Text>Even Numbers</Text></TouchableOpacity>
        </View>
    )
}
 
export default Counter;
