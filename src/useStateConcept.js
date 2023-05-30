/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useReducer, useState} from 'react';
import {TouchableOpacity, Text, View, TextInput, FlatList} from 'react-native';
//const initialState = {count: 0};
let storeBackup;
const initialState = {
    firstName: 'Anup',
    lastName: 'Samanta',
    password: '1234567',
    email: 'as@gmail.com',
    address:{
        pin: '721201',
        city:'Kolkata',
    },
    city:[
      {
        shortName: 'Kol',
        fullName: 'Kolkata',
      },
      {
        shortName: 'Noi',
        fullName:'Noida',
      }
    ]
  };

export default function Counter() {
  storeBackup = {...initialState};
  const [appData, setappData] = useState(initialState);
  const changePin = (text) =>{
    dispatch({type: 'changeValue',value: text});
  };
  const renderItemData = ({item, index}) =>{
    return(<View style = {{backgroundColor : 'red', 
    height: 40,
    marginBottom:5, 
    alignItems:'center',
    flexDirection:'row',
     }}>
       <Text style={{justifyContent: 'flex-start'}} >{index+1}-- {item.fullName}</Text>
       <TouchableOpacity style={{justifyContent: 'flex-end', marginLeft: 100}} 
         onPress={()=> removeParticularItem(index)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>);
  }
  const addMoreItem = () =>{
    dispatch(({type:'addmore' }))
  }
  const removeItem = () =>{
    dispatch(({type:'delete' }))
  }
  const removeParticularItem = (index)=>{
    dispatch(({type:'deleteitem', deleteIndex: index }))
  }
  const changeFirstName = () =>{
      appData.firstName = 'update using Usestate';
      setappData({...appData})
  }
  const resetPress = () =>{
    console.log("Initial State " + JSON.stringify(storeBackup));
    setappData(storeBackup);
  }
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginBottom : 20}}>USE STATE</Text>
      <Text style={{fontSize : 20}}>First Name: ---- {appData.firstName}</Text>
      <Text style={{fontSize : 20}}>Last Name: ---- {appData.lastName}</Text>
      <Text style={{fontSize : 20}}>Password: ---- {appData.password}</Text>
      <Text style={{fontSize : 20}}>Email: ---- {appData.email}</Text>
      <Text style={{fontSize : 20}}>-------Address------</Text>
      <Text style={{fontSize : 20}}>Pin No: ---- {appData.address.pin}</Text>
      <Text style={{fontSize : 20}}>City: ---- {appData.address.city}</Text>
      <TextInput defaultValue= {appData.address.pin}
      value= {appData.address.pin}
      onChangeText={changePin}
      style={{height : 40,
      width: '100%',
      borderWidth : 1,
      borderColor : 'red'}}>
      </TextInput>
      <TouchableOpacity onPress={changeFirstName}>
        <Text style={{fontSize : 20, marginTop: 50 }}>Change First Name</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetPress}>
        <Text style = {{fontSize: 20}}>Reset</Text>
      </TouchableOpacity>
      <View style={{width: '100%', height: 200, marginTop: 20}}>
        <FlatList data={appData.city}
        renderItem={renderItemData}
        keyExtractor={(item)=> item.shortName} />
        <View style={{flexDirection: 'row'}}></View>
        <TouchableOpacity onPress={addMoreItem}>
          <Text style={{fontSize: 20}}>Add More</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress={removeItem}>
        <Text style={{fontSize: 20}}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
