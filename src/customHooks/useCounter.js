import {useState} from 'react';

export default function exampleCustomHook(initialCounterValue) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [counter, setCounter] = useState(initialCounterValue);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return [increment, decrement, counter];
}
