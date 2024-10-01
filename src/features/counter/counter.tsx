import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import type {RootState} from '../../Redux/app/store';
import {
  funcDecrement,
  funcIncrement,
  funcIncrementByAmount,
} from './counterSlice';

import {clapForStory} from './counterSlice';
let i = 0;

export default function Counter() {
  const [inr, setInr] = useState(0);
  const [calculation, setCalculation] = useState(0);
  // Without Saga
  const count = useSelector((state: RootState) => state.counterReducer.value);
  // With Saga
  const counterSaga = useSelector(
    (state: RootState) => state.rootReducer.apireducer.value,
  );
  //console.log("Saga response == " + JSON.stringify(counterSaga))
  const dispatch = useDispatch();
  let temp = [];
  let listData;
  let dataLength = 0;
  let allData = useSelector(state => state);
  //alert(allData.rootReducer.apireducer.apiname)
  //  if(allData.rootReducer.apireducer.apiname === 'testapi'){
  temp = useSelector((state: RootState) =>
    state.rootReducer.apireducer ? state.rootReducer.apireducer.apiData : null,
  );
  listData = useSelector((state: RootState) =>
    state.rootReducer.apireducer ? state.rootReducer.apireducer.apiData : null,
  );
  console.log(' Class API============>>' + listData);
  //  dataLength = temp.data.length;
  if (temp != null) {
    listData = temp.data.slice(0, 3);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dataLength = listData.length;
  }
  // dataLength = listData.length;
  //alert(allData.counter.apiname)
  useEffect(() => {
    i++;
    console.log('Use effect call ab====');
    //callRemoteApi()
    setCalculation(inr * 2);
    //setCalculation(count * 3);
  }, [inr, count]);

  const callIncrementBySaga = () => {
    dispatch({
      type: 'INCREASE_COUNTER',
      value: 1,
      apiname: '+',
    });
  };
  const callDecrementBySaga = () => {
    dispatch({
      type: 'DECREASE_COUNTER',
      value: 1,
      apiname: '-',
    });
  };

  const callIncrementValueBySaga = () => {
    dispatch({
      type: 'INCREASE_COUNTER_VALUE',
      value: 10,
      apiname: 'ine_val',
    });
  };

  const callRemoteApi = () => {
    console.log('========>>>>> ' + i);
    dispatch({type: 'API_CALL'});
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
        <Text style={{color: 'red', marginTop: 20}}>
          Count without Middleware : {count}
        </Text>
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
          <Text>Increase by value without Middleware</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'orange',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={callRemoteApi}>
          <Text>Call Api using React saga11</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'orange',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => dispatch(clapForStory({value: '5'}))}>
          <Text>CreateActionTest</Text>
        </TouchableOpacity>
        {/* <Text>Inr: {inr}</Text> 
        <Text>Calculation: {calculation}</Text> 
      <TouchableOpacity onPress ={() => setInr((c) => c + 1)}>
        <Text>INR Button</Text>
      </TouchableOpacity>  */}
        <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 14}}>
          Data Getting from API
        </Text>
        <FlatList
          style={{marginTop: 20}}
          data={listData || []}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <TouchableOpacity
          style={{
            marginTop: 0,
            backgroundColor: 'orange',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={callIncrementBySaga}>
          <Text>Increment With Saga</Text>
        </TouchableOpacity>
        <Text style={{color: 'red', marginTop: 20}}>
          Counter with Saga : {counterSaga}
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'orange',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={callDecrementBySaga}>
          <Text>Decrement With Saga</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'orange',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={callIncrementValueBySaga}>
          <Text>Increase by value with Saga</Text>
        </TouchableOpacity>
        {/* <Text style = {{position : 'absolute', bottom : 25}}>Response length  : {dataLength}</Text> */}
      </View>
    </View>
  );
}
