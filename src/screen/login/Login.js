import React, {useEffect, useReducer} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  BackHandler,
  FlatList,
  Alert
} from 'react-native';
import styles from './style';
import Validation from '../../common/validation.js'
import NetworkUrl from '../../network/NetworkUrl.js';
import RNDateTimePicker from '@react-native-community/datetimepicker';
const initialState = {
  mob: '',
  otp: '',
};
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const dispatchLogin = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'typemob': {
      return {...state, mob: action.value};
    }
  }
};
function Login(props) {
  const [state, dispatch1] = useReducer(dispatchLogin, initialState);
  const gotoNextScreen = async () => {
    props.navigation.navigate('DrawerRouter');
  };
  const goto = () => {
    props.navigation.navigate('useReducerClass');
  };
  const gotoUseStateScreen = () => {
    props.navigation.navigate('useStateClass');
  };
  const gotoMainClassUseMemoScreen = () => {
    props.navigation.navigate('MainClass');
  };
  const gotoFlexClass = () => {
    props.navigation.navigate('Flex');
  };
  const gotoLifecycle = () => {
    props.navigation.navigate('LifeCycleC');
  };
  const gotoHOC = () => {
    props.navigation.navigate('ExampleHOC');
  };
  const customhooks = () => {
    props.navigation.navigate('customhooks');
  };

  const go = () => {
    props.navigation.navigate('UIClass');
  };
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
  const signupClk = () => {
    props.navigation.navigate('SignupClass');
  };
  const resetMobile = () => {
    dispatch1({type: 'reset'});
  };
  const typeMobileNumber = text => {
    dispatch1({type: 'typemob', value: text});
  };
  const loginClk = () => {
    alert(NetworkUrl.baseUrl);
    if (Validation.isMobileValid(state.mob)) {
      alert(NetworkUrl.baseUrl);
    } else {
      alert('Please enter 10 digit phone number');
    }
  };
  const Item = ({item, index}) => (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: index == 0 ? 'red' : 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: index == 0 ? 0 : 40,
        elevation: 20,
        shadowColor: '#52006A',
        padding: 0,
      }}>
      <Text style={{textAlign: 'center'}}>{item.title}</Text>
    </View>
  );

  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: 'grey',
    //   }}>
    //   <View
    //     style={{
    //       flex: 1,
    //       marginTop: 40,
    //       padding: 20,
    //     }}>
    //     <View
    //       style={{
    //         flex: 1,
    //         borderRadius: 10,
    //         // alignItems: 'center',
    //         backgroundColor: 'white',
    //         paddingTop: 60,
    //       }}>
    //       <Text style={{fontSize: 28, alignSelf: 'center', fontWeight: 'bold'}}>
    //         Login
    //       </Text>
    //       <View
    //         style={{
    //           marginTop: 40,
    //           //backgroundColor: 'blue',
    //           marginLeft: 10,
    //           marginRight: 10,
    //         }}>
    //         <Text style={{}}>Username</Text>
    //         <View style={{justifyContent: 'center', marginTop: 10}}>
    //           <Image
    //             style={{
    //               height: 30,
    //               width: 30,
    //               borderRadius: 15,
    //               resizeMode: 'contain',
    //               position: 'absolute',
    //             }}
    //             source={PIcon}
    //           />
    //           <TextInput
    //             placeholder="Type your username"
    //             style={{
    //               borderBottomWidth: 1,
    //               borderBottomColor: 'red',
    //               height: 55,
    //               width: '100%',
    //               paddingLeft: 40,
    //             }}></TextInput>
    //         </View>
    //       </View>
    //       <View
    //         style={{
    //           marginTop: 40,
    //           //backgroundColor: 'blue',
    //           marginLeft: 10,
    //           marginRight: 10,
    //         }}>
    //         <Text style={{}}>Password</Text>
    //         <View style={{justifyContent: 'center', marginTop: 10}}>
    //           <Image
    //             style={{
    //               height: 30,
    //               width: 30,
    //               borderRadius: 15,
    //               resizeMode: 'contain',
    //               position: 'absolute',
    //             }}
    //             source={PIcon}
    //           />
    //           <TextInput
    //             placeholder="Type your Password"
    //             style={{
    //               borderBottomWidth: 1,
    //               borderBottomColor: 'red',
    //               height: 55,
    //               width: '100%',
    //               paddingLeft: 40,
    //             }}></TextInput>
    //         </View>
    //       </View>
    //       <Text style={{marginTop: 10, textAlign: 'right', marginRight: 5}}>
    //         Forgot Password?
    //       </Text>
    //       <TouchableOpacity
    //         style={{
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           height: 40,
    //           borderRadius: 20,
    //           marginTop: 20,
    //           marginLeft: 10,
    //           marginRight: 10,
    //           backgroundColor: 'orange'
    //         }}>
    //         <Text style={{fontSize: 16, fontWeight: 'bold'}}>Login</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    //   {/* <LoginCommon/> */}
    // </View>
    <View style={styles.mainView}>
      <View style={styles.conceptView}>
        <TouchableOpacity onPress={gotoNextScreen}>
          <Text style={styles.cText}>Welcome to Login Screen</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goto}>
          <Text style={styles.cText}>Concept of UseReducer</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoUseStateScreen}>
          <Text style={styles.cText}>Concept of UseState</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoMainClassUseMemoScreen}>
          <Text style={styles.cText}>Concept of UseMemo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoFlexClass}>
          <Text style={styles.cText}>Concept of Flex</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={gotoLifecycle}>
          <Text style={styles.cText}>Concept of LifeCycle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoHOC}>
          <Text style={styles.cText}>Concept of Hoc</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={customhooks}>
          <Text style={styles.cText}>Concept of customhooks</Text>
        </TouchableOpacity>
        <View style={{height: 60}}>
          <View>
            <RNDateTimePicker
              value={new Date()}
              display="spinner"
              disabled={false}
              minimumDate={new Date(2023, 11, 16)} // month should be given -1 value from exact month value
              maximumDate={new Date(2030, 10, 20)}
            />
          </View>
          <FlatList
            data={DATA}
            style={{}}
            horizontal={true}
            renderItem={({item, index}) => <Item item={item} index={index} />}
            keyExtractor={item => item.id}
          />
        </View>
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
          <Text>Don't have Access? <Text onPress={signupClk} style={styles.signuptxt}>Do Signup1</Text> </Text>
        </View>

        <View style={styles.signup}>
          <Text onPress={go}>Toolkit with saga</Text>
        </View>

      </View>
    </View>
  );
}
export default React.memo(Login);
