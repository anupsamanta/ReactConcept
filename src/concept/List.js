import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Alert
} from 'react-native';
import styles from './styles';

let selectedIndex = 0;
let valueArr = [];

const ListClass = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    childMethod(val) {
      console.log("dataaa = " + JSON.stringify(props.data))
      setModalVisible(true);
      setDropDownType(val)
      console.log("Modal type " + JSON.stringify(val))
    }
  }));

  const [modalVisible, setModalVisible] = useState(false);
  const [togglePicker, setTogglePicker] = useState(false);
  const [dropDownText, setDropdownText] = useState('');
  const [dropDownType, setDropDownType] = useState('');
  const [togglePickerCollege, settogglePickerCollege] = useState(false);

  const [textInputs, setTextInputs] = useState([])

  useEffect(() => {
    // alert(JSON.stringify(data)) //children function of interest
  }, [props])
  const textChnage =(text, index)=>{
    console.log("Index " + index)
  //let x = [];
   //x[index] = text;
   //setTextInputs(x)
  }

  const renderItem = ({ item, index}) => {
    return (
      // <View style={{ flexDirection: 'row' }}>
      //   <Text style={{ fontWeight: 'bold', marginBottom: 4, marginRight: 20 }}>{item.first_name}</Text>
      //   <Text>{item.last_name}</Text>
      // </View>
      <View>
        <View style = {{flexDirection : 'row'}}>
                <Text style={styles.fieldTitle}>Degree {index + 1}</Text>
                <TouchableOpacity style={{ marginTop: 15, marginLeft : 50 }}
                onPress={() => props.callFromChild('-', index)}>
                <Text>Remove</Text>
              </TouchableOpacity>
        </View>
      
      {/* <View style={styles.pickerContainer}>
        <TouchableOpacity style = {{width: 200, marginTop : 10}} onPress={() => updateTogglePicker(!togglePicker, index, 'degree')}>
          <Text>Pick Degree</Text>
        </TouchableOpacity>
        {(togglePicker && selectedIndex == index) && (
          <View style={styles.modalContent}>{modalContent()}</View>
        )}
      </View>
      <Text style={styles.fieldTitle}>College {index + 1}</Text>
      <View style={styles.pickerContainer}>
        <TouchableOpacity style = {{width: 200, marginTop : 10}} onPress={() => updateTogglePicker(!togglePickerCollege, index, 'college')}>
          <Text>Pick College</Text>
        </TouchableOpacity>
        {(togglePickerCollege && selectedIndex == index) && (
          <View style={styles.modalContent}>{modalContent()}</View>
        )}
      </View> */}
      <TextInput onChangeText={(text)=>textChnage(text,index)}
       //value= {} 
       style = {{height : 40, 
        width: 200, 
        borderWidth : 1, 
        borderColor : 'red'}}>
        </TextInput>
      </View> 
    );
  };
  onSubmit = () =>{
    alert(JSON.stringify(textInputs))
    setModalVisible(!modalVisible)
    //props.submit('obj');
  }
  const updateTogglePicker = (togglePickerVal, index, dropDownType) => {
    selectedIndex = index;
    if(dropDownType == 'degree'){
      setTogglePicker(togglePickerVal);
    }
    else{
      settogglePickerCollege(togglePickerVal);
    }
    
  };
  const handleValueSelected = val => {
    setDropdownText(val?.name || defaultLabel);
    setTogglePicker(false);
    settogglePickerCollege(false);
    alert(JSON.stringify(val))
   // onDropDownValueSelected && onDropDownValueSelected(val);
  };

  const modalContent = () => {
    return (
      <ScrollView
        nestedScrollEnabled
        style={
          Platform.OS === 'web'
            ? styles.pickerContainerStyle
            : styles.pickerContainerStyleAndroid
        }>
        {props.dropDownData?.length > 0 ? (
          props.dropDownData?.map((option, i) => (
            <TouchableOpacity
              key={option.id}
              style={styles.pickerLabel}
              onPress={() => handleValueSelected(option)}>
              {/* <Label title={option.name} variant={LabelVariant.subtitleSmall} /> */}
              <Text>{option.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>No Options</Text>
        )}
      </ScrollView>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>List Class1111</Text>
        <Modal
          animationType="slide"
          // transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              width : '100%',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
             
                <View>
                  <Text style = {{fontSize : 20, fontWeight : 'bold'}}>{dropDownType}</Text>
                </View> 
              <View style = {{flexDirection : 'row'}}>
              <TouchableOpacity style={{ marginTop: 30 }}
                onPress={() => props.callFromChild('+', 1)}>
                <Text>Add More</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 30, marginLeft : 50 }}
                onPress={() => props.callFromChild('-', 1)}>
                <Text>Remove</Text>
              </TouchableOpacity>
              </View>
              <View>
                <TextInput style = {{height : 40, width: 200, borderWidth : 1, borderColor : 'red'}}>
                </TextInput>
                <TextInput style = {{height : 40, marginTop: 20, width: 200, borderWidth : 1, borderColor : 'red'}}>
                </TextInput>
              </View>
              <View>
      {/* <View>
      <Text style={styles.fieldTitle}>Dropdown</Text>
      <View 
      style={styles.pickerContainer}
      >
        <TouchableOpacity style = {{width: 200, marginTop : 10}} onPress={() => updateTogglePicker(!togglePicker)}>
          <Text>Pick Value</Text>
        </TouchableOpacity>
        {togglePicker && (
          <View style={styles.modalContent}>{modalContent()}</View>
        )}
      </View>
      </View>           */}
      
    </View>
              <FlatList
              style = {{height : 400, marginTop : 20}}
              extraData={props.data}
              data={props.data}
              renderItem={(item, index) => renderItem(item, index)} />
              <View style = {{flexDirection : 'row', marginTop : 20}}>
              <TouchableOpacity
                onPress={onSubmit}>
                <Text style = {{fontWeight : 'bold'}}>Submit</Text>
              </TouchableOpacity>
              </View>
            </View>
            
          </View>
        </Modal>

      </View>
    </SafeAreaView>
  );
});

export default ListClass;

