/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useReducer} from 'react';
import {TouchableOpacity, Text, View, TextInput, FlatList} from 'react-native';
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

const reducer11111 = (state, action) => {
switch(action.type){
    case 'changeValue':
      console.log(JSON.stringify(state.address.pin));
      //return {...state, [action.field]: action.value};
      return { ...state, address: { ...state.address, pin: action.value}};
      case 'addmore':
        {
          let obj = {
            shortName : 'test',
            fullName: 'CK Town',
          }
          let tempArr = [...state.city];
           tempArr.push(obj)
           return {...state, city: tempArr}
        }
        case 'deleteitem':
        {
          let tempArr = [...state.city];
           alert(action.deleteIndex)
           console.log('Before delete ' + JSON.stringify(tempArr));
           tempArr.splice(action.deleteIndex, 1);
           console.log('after delete ' + JSON.stringify(tempArr))
           return {...state, city: tempArr}
        }
        case 'delete':
        {
          let tempArr = [...state.city];
           tempArr.pop();
           return {...state, city: tempArr}
        }  
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
};



export default function Counter() {
  const [state, dispatch] = useReducer(reducer11111, initialState);

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
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{marginBottom : 20}}>USE REDUCER</Text>
      <Text style={{fontSize : 20}}>First Name: ---- {state.firstName}</Text>
      <Text style={{fontSize : 20}}>Last Name: ---- {state.lastName}</Text>
      <Text style={{fontSize : 20}}>Password: ---- {state.password}</Text>
      <Text style={{fontSize : 20}}>Email: ---- {state.email}</Text>
      <Text style={{fontSize : 20}}>-------Address------</Text>
      <Text style={{fontSize : 20}}>Pin No: ---- {state.address.pin}</Text>
      <Text style={{fontSize : 20}}>City: ---- {state.address.city}</Text>
      <TextInput defaultValue= {state.address.pin}
      value= {state.address.pin}
      onChangeText={changePin}
      style={{height : 40,
      width: '100%',
      borderWidth : 1,
      borderColor : 'red'}}>
      </TextInput>
      {/* <TouchableOpacity onPress={() => dispatch({type: 'decrement'})}>
        <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({type: 'increment'})}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({type: 'increment_by_val'})}>
        <Text>Increment by value</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => dispatch({type: 'changeValue',
         value: 'Upmostly'})}>
        <Text style={{fontSize : 20, marginTop: 50 }}>Change First Name</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch({type: 'reset'})}>
        <Text style = {{fontSize: 20}}>Reset</Text>
      </TouchableOpacity>
      <View style={{width: '100%', height: 200, marginTop: 20}}>
        <FlatList data={state.city}
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
