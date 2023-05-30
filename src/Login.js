import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text, BackHandler, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './style';
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
  const signupClk = () =>{
    alert('Signup clicked')
  }
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={styles.mainView}>
      <View style = {styles.conceptView}>
      <TouchableOpacity onPress={gotoNextScreen}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={styles.cText}>
          Welcome to Login Screen
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goto}>
        <Text
          style={styles.cText}>
          Concept of UseReducer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={gotoUseStateScreen}>
        <Text style={styles.cText}>
          Concept of UseState
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={gotoUseCallBackScreen}>
        <Text style={styles.cText}>
          Concept of useCallback
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={gotoMainClassUseMemoScreen}>
        <Text style={styles.cText}>
          Concept of useMemo
        </Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.loginView}>
        <TextInput maxLength={10} placeholder='Enter Your Phone Number' style = {styles.inp1}>
        </TextInput>
        <TextInput placeholder='Enter OTP' style = {styles.inp2}>
        </TextInput>
        <TouchableOpacity style = {styles.loginbtn}>
          <Text style= {styles.logtxt}>Login</Text>
        </TouchableOpacity>
        <View style = {styles.signup}>
           <Text>Don't have Access? <Text onPress={signupClk} style = {styles.signuptxt}>Do Signup</Text> </Text>
        </View>
      </View>
     
    </View>
  );
}
export default React.memo(Login);
