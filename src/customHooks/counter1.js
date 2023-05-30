/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Text, TouchableOpacity, View} from 'react-native';
import useCounter1 from './useCounter';
import useFetch111 from './useApiCall';

export default function Counter1() {
  const [increment, decrement, counter] = useCounter1(5);
  const url = 'https://sv443.net/jokeapi/v2/joke/Programming?type=single';
  const {data, loading, error, callRemoteApi} = useFetch111(url);

  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }
  // const callApiPress = () => {
  //   callRemoteApi
  // };
  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 200}}>
      <TouchableOpacity onPress={callRemoteApi}>
        <Text>API CALL USING CUSTOM HOOKS</Text>
      </TouchableOpacity>
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
        {data && (
          <View>
            {
              <View>
                <Text>{data}</Text>
              </View>
            }
          </View>
        )}
      </View>
    </View>
  );
}
