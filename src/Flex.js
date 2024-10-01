import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';

// import all the components we are going to use
import {SafeAreaView, View, TouchableOpacity, Image, Text} from 'react-native';
import HomeIcon from './../src/concept/image/home.png';
const ListClass = (props, ref) => {
  const [expand, setExpand] = useState(false);
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'orange',
        }}>
        <View
          style={{
            flexWrap: 'wrap',
            width: 200,
            alignContent: 'flex-end',
            //justifyContent: 'center',
            height: 200,
            borderWidth: 1,
            borderColor: 'gray',
            backgroundColor:'red'
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'blue',
              margin: 5,
            }}></View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'blue',
              margin: 5,
            }}></View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'blue',
              margin: 5,
            }}></View>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'blue',
              margin: 5,
            }}></View>
            
        </View>
        {!expand ? (
          <TouchableOpacity onPress={() => setExpand(!expand)}>
            <Image style={{height: 40, width: 40}} source={HomeIcon} />
          </TouchableOpacity>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'red',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <TouchableOpacity onPress={() => setExpand(!expand)}>
              <Image style={{height: 40, width: 40}} source={HomeIcon} />
            </TouchableOpacity>
            <Text>Home</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ListClass;
