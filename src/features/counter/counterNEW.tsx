import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import type {RootState} from '../../Redux/app/store';
import {
  funcIncrement,
  funcDecrement,
  funcIncrementByAmount,
} from './counterSlice';

export default function Counter() {
  const [inr, setInr] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const count = useSelector((state: RootState) => state.counterReducer.value);
  const dispatch = useDispatch();
  const listData = useSelector((state: RootState) => {
    if (state.rootReducer.apireducer.apiname === 'testapinew') {
      return state.rootReducer.apireducer.apiData
        ? state.rootReducer.apireducer.apiData
        : [];
    }
  });
  useEffect(() => {
    console.log('UseEffect 1');
    callMethod();
  }, []);
  const callMethod = () => {
    // alert("kkkkkkk")
  };

  //alert(allData.counter.apiname)
  useEffect(() => {
    console.log('UseEffect 2');
    //callRemoteApi()
    setCalculation(inr * 2);
    //setCalculation(count * 3);
  }, [inr, count]);

  // 1 .  listData = [a, b,c];
  // 2.  listData  = [a,b, c,d];

  const callRemoteApi = () => {
    dispatch({
      type: 'API_CALL',
      value: 2,
      apiname: 'testapinew',
    });
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', marginBottom: 4, marginRight: 20}}>
          {item.first_name}
        </Text>
        <Text>{item.last_name}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{}}>
        <TouchableOpacity
          style={{
            marginTop: 0,
            backgroundColor: 'orange',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => dispatch(funcIncrement())}>
          <Text>Increment Without MiddleWare</Text>
        </TouchableOpacity>
        <Text style={{color: 'red', marginTop: 20}}>Count : {count}</Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'orange',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => dispatch(funcDecrement())}>
          <Text>Decrement Without MiddleWare</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'orange',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => dispatch(funcIncrementByAmount(3))}>
          <Text>Increase by value</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={callRemoteApi}>
          <Text>Call Api using saga</Text>
        </TouchableOpacity>
        <Text>Inr: {inr}</Text>
        <Text>Calculation: {calculation}</Text>
        <TouchableOpacity onPress={() => setInr(c => c + 1)}>
          <Text>INR Button</Text>
        </TouchableOpacity>
        <FlatList
          data={listData?.data || []}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
