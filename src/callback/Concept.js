import React, {useState, useCallback} from 'react';
import {View, Text, Button} from 'react-native';

// Child component (memoized with React.memo)
const ChildComponent = React.memo(({onClick}) => {
  console.log('Child Component rendered 00');

  return (
    <View>
      <Button title="Click Me" onPress={onClick} />
    </View>
  );
});

// Parent component
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Memoized callback function using useCallback
  const handleClick = () => {
    console.log('Button clicked');
  };

  // 1.Keep it as it is
  //2. Remove callback from handle click, then React.memo will not work
  // 3. Remove onClick={handleClick} then see React.memo will  work.
  // Conclusion : Usecallback prevents un-necessary rerenders of the child componenets, when We passed a function to a child component, otherwise React.memo is suffiecient

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <ChildComponent onClick={handleClick} />
    </View>
  );
};

export default ParentComponent;



//Other example without Child component

// import React, { useState, useEffect, useCallback } from 'react';
// import { View, Text, Button } from 'react-native';

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);
//   const [anotherState, setAnotherState] = useState(0);

//   // Function to log the count (wrapped in useCallback)
//   const logCount = useCallback(() => {
//     console.log('Count value:', count);
//   },[count]);

//   // useEffect that depends on logCount
//   useEffect(() => {
//     alert('fgfg')
//     logCount(); // This will only run when logCount changes (i.e., when 'count' changes)
//   }, [logCount]);

//   return (
//     <View style={{ padding: 20 }}>
//       <Text>Count: {count}</Text>
//       <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      
//       <Text>Another State: {anotherState}</Text>
//       <Button title="Update Another State" onPress={() => setAnotherState(anotherState + 1)} />
//     </View>
//   );
// };

// export default ParentComponent;

