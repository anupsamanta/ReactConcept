import React, {useEffect, useState, forwardRef,  useImperativeHandle} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal
} from 'react-native';

const ListClass = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    childMethod() {
      console.log("dataaa = " + JSON.stringify(props.data))
      setModalVisible(true)
    }
  }));

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
   // alert(JSON.stringify(data)) //children function of interest
  }, [props])
 
  const renderItem = ({item}) => {
    return (
      <View style = {{flexDirection : 'row'}}>
        <Text style = {{fontWeight : 'bold', marginBottom : 4, marginRight : 20}}>{item.first_name}</Text>
        <Text>{item.last_name}</Text>
        </View>
    );
  };
  return (
    <SafeAreaView style = {{flex :1}} >
      <View style = {{flex : 1, justifyContent : 'center', alignItems: 'center'}}>
      
        <Text>List Class</Text>
        <Modal
        style = {{height : 500, width : 400}}
        animationType="slide"
       // transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{ justifyContent : 'center', alignItems: 'center'}}>
          <View>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}>
              <Text>Hide Modal</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {{marginTop : 30}}
              onPress={() => props.callFromChild('+')}>
              <Text>Add More</Text>
            </TouchableOpacity>
            <TouchableOpacity  style = {{marginTop : 30}}
              onPress={() => props.callFromChild('-')}>
              <Text>Remove</Text>
            </TouchableOpacity>
          </View>
          <FlatList
         extraData={props.data}
        style = {{height : 500}}
        data={props.data} 
        renderItem={renderItem}/>
        </View>
      </Modal>
      
      </View>
    </SafeAreaView>
  );
});

export default ListClass;

