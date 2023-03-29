
import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import ListClass from './List';
const ListClassContainer = () => {
  const [data1, setdata1] = useState([
    {
        first_name: 'Relationship 11',
        last_name: "Data for Relationship  111111",
    },
    {
        first_name: 'Relationship 22',
        last_name: "Data for Relationship 22",
        
    },
  ]);

  const plus = useCallback(() =>{
    //console.log("----> before " + data1.length)
    let tempArr = [];
    tempArr = [...data1];
    let obj = {
      first_name: 'New',
      last_name: "added ",
    }
    tempArr.push(obj);
    setdata1(tempArr)
    setTimeout(() => {
      console.log("----> after added " + JSON.stringify(data1))
    }, 500);
  },[data1])
  const minus = useCallback(() =>{
    //setdata1(data1.splice(0,1))
  
    let tempArr = [...data1];
     tempArr.splice(0, 1);
    setdata1(tempArr);
    console.log('---> ' + JSON.stringify(tempArr))
    
    
  },[data1])
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <TouchableOpacity
          style = {{marginTop : 20, backgroundColor : 'orange', padding : 10,
           alignItems : 'center', justifyContent : 'center'}}
          onPress={plus}
        >
        <Text>+</Text>  
        </TouchableOpacity>
        <TouchableOpacity
          style = {{marginTop : 20, backgroundColor : 'orange', padding : 10,
           alignItems : 'center', justifyContent : 'center'}}
          onPress={minus}
        >
        <Text>-</Text>  
        </TouchableOpacity>
      <ListClass data={data1} />
      </View>
    </SafeAreaView>
  );
};

export default ListClassContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: 'white',
   // padding: 10,
  },
  headerText: {
   // textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    marginLeft : 10,
    padding: 20,
    backgroundColor: '#fff',
    marginRight : 10,
    backgroundColor : 'red'
  },
  active: {
    backgroundColor: 'white',
  },
  inactive: {
    backgroundColor: 'white',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});