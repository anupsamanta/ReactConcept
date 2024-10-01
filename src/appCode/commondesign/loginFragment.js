import React, {useEffect, useReducer} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image
} from 'react-native';
import PIcon from '../../image/picon.png';
const initialState = {
  mob: '',
  otp: '',
};

function Login(props) {
  useEffect(() => {
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'grey',
      }}>
      <View
        style={{
          flex: 1,
          marginTop: 40,
          padding: 20,
        }}>
          <View
            style={{
              marginTop: 40,
              //backgroundColor: 'blue',
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Text style={{}}>Username</Text>
            <View style={{justifyContent: 'center', marginTop: 10}}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  resizeMode: 'contain',
                  position: 'absolute',
                }}
                source={PIcon}
              />
              <TextInput
                placeholder="Type your username"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'red',
                  height: 55,
                  width: '100%',
                  paddingLeft: 40,
                }}></TextInput>
            </View>
          </View>
          <View
            style={{
              marginTop: 40,
              //backgroundColor: 'blue',
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Text style={{}}>Password</Text>
            <View style={{justifyContent: 'center', marginTop: 10}}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  resizeMode: 'contain',
                  position: 'absolute',
                }}
                source={PIcon}
              />
              <TextInput
                placeholder="Type your Password"
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'red',
                  height: 55,
                  width: '100%',
                  paddingLeft: 40,
                }}></TextInput>
            </View>
          </View>
          <Text style={{marginTop: 10, textAlign: 'right', marginRight: 5}}>
            Forgot Password?
          </Text>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              borderRadius: 20,
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: 'orange'
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

    // <View style={styles.mainView}>
    //   <View style={styles.conceptView}>
    //     <TouchableOpacity onPress={gotoNextScreen}>
    //       <Text
    //         style={styles.cText}>
    //         Welcome to Login Screen
    //       </Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity onPress={goto}>
    //       <Text
    //         style={styles.cText}>
    //         Concept of UseReducer
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={gotoUseStateScreen}>
    //       <Text style={styles.cText}>
    //         Concept of UseState
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={gotoMainClassUseMemoScreen}>
    //       <Text style={styles.cText}>
    //         Concept of UseMemo
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={gotoFlexClass}>
    //       <Text style={styles.cText}>
    //         Concept of Flex
    //       </Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity onPress={gotoLifecycle}>
    //       <Text style={styles.cText}>
    //         Concept of LifeCycle
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={gotoHOC}>
    //       <Text style={styles.cText}>
    //         Concept of Hoc
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={customhooks}>
    //       <Text style={styles.cText}>
    //         Concept of customhooks
    //       </Text>
    //     </TouchableOpacity>

    //    </View>
    //   <View style={styles.loginView}>
    //     <TextInput defaultValue={state.mob} value={state.mob} onChangeText={typeMobileNumber} maxLength={10} placeholder='Enter Your Phone Number' style={styles.inp1}>
    //     </TextInput>
    //     <Text onPress={resetMobile} style={{ position: 'absolute', bottom: '90%', right: '5%' }}>Reset</Text>
    //     <TextInput placeholder='Enter OTP' style={styles.inp2}>
    //     </TextInput>
    //     <TouchableOpacity onPress={loginClk} style={styles.loginbtn}>
    //       <Text style={styles.logtxt}>Login</Text>
    //     </TouchableOpacity>
    //     <View style={styles.signup}>
    //       <Text>Don't have Access? <Text onPress={signupClk} style={styles.signuptxt}>Do Signup</Text> </Text>
    //     </View>

    //     <View style={styles.signup}>
    //       <Text onPress={go}>Toolkit with saga</Text>
    //     </View>

    //   </View>

    // </View>
  );
}
export default React.memo(Login);
