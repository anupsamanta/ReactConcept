import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text, BackHandler, Alert} from 'react-native';
function Login(props) {
  const gotoNextScreen = async () => {
    props.navigation.navigate('DrawerRouter');
  };
  const goto = () => {
    props.navigation.navigate('useReducerClass');
  };
  const gotoUseStateScreen = ()=>{
    props.navigation.navigate('useStateClass'); 
  }
  const gotoUseCallBackScreen = () =>{
    props.navigation.navigate('MainClass'); 
    
  }
  const gotoMainClassUseMemoScreen = () =>{
    props.navigation.navigate('MainClassUseMemo'); 
    
  }
  
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={gotoNextScreen}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginBottom: 100,
            fontSize: 24,
            color: 'orange',
            fontWeight: 'bold',
          }}>
          Welcome to Login Screen
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goto}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginBottom: 100,
            fontSize: 24,
            color: 'orange',
            fontWeight: 'bold',
          }}>
          Concept of UseReducer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={gotoUseStateScreen}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginBottom: 100,
            fontSize: 24,
            color: 'orange',
            fontWeight: 'bold',
          }}>
          Concept of UseState
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={gotoUseCallBackScreen}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginBottom: 100,
            fontSize: 24,
            color: 'orange',
            fontWeight: 'bold',
          }}>
          Concept of useCallback
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={gotoMainClassUseMemoScreen}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            marginBottom: 100,
            fontSize: 24,
            color: 'orange',
            fontWeight: 'bold',
          }}>
          Concept of useMemo
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default React.memo(Login);
