/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Text, TouchableOpacity, View} from 'react-native';
import useCounter1 from './useCounter';
import useFetch from './useApiCall';
let url = 'https://sv443.net/jokeapi/v2/joke/Programming?type=single';


export default function Counter1() {
  const [increment, decrement, counter] = useCounter1(5);
  //const url = 'https://sv443.net/jokeapi/v2/joke/Programming?type=single';
  const {data, loading, error, callRemoteApi, callRemoteApi2} = useFetch(url);
  //https://cove-coding-challenge-api.herokuapp.com/reservations
  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }
  console.log("RESULT =====11== " + JSON.stringify(data));
  const callApiPress2 = () => {
    url = 'https://reqres.in/api/users?page=2';
    callRemoteApi2({url: url})
  };
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 200}}>
      <TouchableOpacity onPress={callRemoteApi}>
        <Text>API CALL USING CUSTOM HOOKS</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={callApiPress2}>
        <Text>API CALL USING CUSTOM HOOKS1111</Text>
      </TouchableOpacity> */}
      <Text>Conter1 : {counter}</Text>
      <TouchableOpacity onPress={increment}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <View>
        {loading ? <Text>Loading....</Text> : null}
        {error && (
          <View>
            <Text>{error}</Text>
          </View>
        )}
        {/* {data && (
          <View>
            {
              <View>
                <Text>{data}</Text>
              </View>
            }
          </View>
        )} */}
      </View>
    </View>
  );
}
