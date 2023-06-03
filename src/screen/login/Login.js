import React, { useEffect, useReducer } from 'react';
import { View, TouchableOpacity, Text, BackHandler, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './style';
import Validation from './../../common/validation.js';
import NetworkUrl from './../../network/NetworkUrl.js';
const initialState = {
  mob: '',
  otp: ''
}
const dispatchLogin = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'typemob':
      {
        return { ...state, mob: action.value }
      }
  }

}
function Login(props) {
  const [state, dispatch1] = useReducer(dispatchLogin, initialState);
 
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const signupClk = () => {
    props.navigation.navigate("SignupClass");
  }
  const resetMobile = () => {
    dispatch1({ type: 'reset' })
  }
  const typeMobileNumber = (text) => {
    dispatch1({ type: 'typemob', value: text });
  }
  const loginClk = () => {
    if (Validation.isMobileValid(state.mob)) {
      alert(NetworkUrl.baseUrl)
      props.navigation.navigate('DrawerRouter');
    } else {
      alert("Please enter 10 digit phone number")
    }
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.conceptView}>
          <Text
            style={styles.cText}>
            Welcome to Login Screen
          </Text>
      </View>
      <View style={styles.loginView}>
        <TextInput defaultValue={state.mob} value={state.mob} onChangeText={typeMobileNumber} maxLength={10} placeholder='Enter Your Phone Number' style={styles.inp1}>
        </TextInput>
        <Text onPress={resetMobile} style={{ position: 'absolute', bottom: '90%', right: '5%' }}>Reset</Text>
        <TextInput placeholder='Enter OTP' style={styles.inp2}>
        </TextInput>
        <TouchableOpacity onPress={loginClk} style={styles.loginbtn}>
          <Text style={styles.logtxt}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signup}>
          <Text>Don't have Access? <Text onPress={signupClk} style={styles.signuptxt}>Do Signup</Text> </Text>
        </View>
      </View>

    </View>
  );
}
export default React.memo(Login);
