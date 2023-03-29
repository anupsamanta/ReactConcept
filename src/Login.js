import React, {useState, useEffect} from 'react';
import {
  View, TouchableOpacity, Text, BackHandler, Alert
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

function Login(props) {

  gotoNextScreen = async () =>{
    props.navigation.navigate("DrawerRouter")
    // try {
    //   const res = await DocumentPicker.pick({
    //     type: [DocumentPicker.types.allFiles],
        
    //   });
    //   //Printing the log realted to the file
    //   console.log('res : ' + JSON.stringify(res));
    //   console.log('URI : ' + res.uri);
    //   console.log('Type : ' + res.type);
    //   console.log('File Name : ' + res.name);
    //   console.log('File Size : ' + res.size);
    //   co
    //   //Setting the state to show single file attributes
    //  // setSingleFile(res);
    // } catch (err) {
    //   //Handling any exception (If any)
    //   if (DocumentPicker.isCancel(err)) {
    //     //If user canceled the document selection
    //     alert('Canceled from single doc picker');
    //   } else {
    //     //For Unknown Error
    //     alert('Unknown Error: ' + JSON.stringify(err));
    //     throw err;
    //   }
    // }
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
    <View style = {{flex : 1, alignItems : 'center', justifyContent : 'center'}}>
        <TouchableOpacity onPress = {gotoNextScreen}>
          <Text style = {{marginBottom : 100, fontSize : 24, color : 'orange', fontWeight : 'bold'}}>Welcome to Login Screen</Text>
        </TouchableOpacity>
    </View>);
    }
    export default React.memo(Login);
