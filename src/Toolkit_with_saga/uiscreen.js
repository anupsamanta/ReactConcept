import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
export default function Counter() {
  const dispatch = useDispatch();
  const listData = useSelector(state =>
    state.rootReducer.apireducer
      ? state.rootReducer.apireducer.apiData?.data
      : null,
  );
  console.log(' Class API Response  ============>>' + JSON.stringify(listData));
  const callRemoteApi = () => {
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
            marginTop: 20,
            backgroundColor: 'orange',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={callRemoteApi}>
          <Text>Call Api using React saga----</Text>
        </TouchableOpacity>
        <FlatList
          style={{marginTop: 20}}
          data={listData || []}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
