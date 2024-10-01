import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
  UIManager,
} from 'react-native';
import {fetchDoctorProfileDataCreater} from './redux/doctorProfileSlice';
import {doctorProfileSelector} from './redux';
import Loader from './Loader';
import {ExpandableListView} from 'react-native-expandable-listview';
import {AccordionList, AccordionItem} from 'react-native-accordion-list-view';
import Accordion from 'react-native-collapsible/Accordion';
import ListClass from './List';
// import ListContainer from './ListContainer';
let dropDownData = [
  {
    name: 'abc',
    id: 1,
  },
  {
    name: 'xyz',
    id: 1,
  },
];

const SECTIONS = [
  {
    title: 'First',
    content: 'Lorem ipsum...',
  },
  {
    title: 'Second',
    content: 'Lorem ipsum...',
  },
];

export default function Counter() {
  const myRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [showpop, setshowpop] = useState(false);
  const [data, setdata] = useState([
    {
      id: 0,
      title: 'Personal Info',
      body: 'Data for Personal info ',
      isEditShow: false,
      editClicked: false,
      isExpand: false,
    },
    {
      id: 1,
      title: 'Relationship',
      body: 'Data for Relationship',
      isEditShow: false,
      editClicked: false,
      isExpand: false,
    },
  ]);

  const [data1, setdata1] = useState([
    {
      first_name: 'Relationship 1',
      last_name: 'Data  1',
    },
  ]);

  const dispatch = useDispatch();
  let temp = [];
  let listData;
  listData = useSelector(doctorProfileSelector.getDoctorProfileHeader());
  const isLoading = useSelector(doctorProfileSelector.getLoader());
  console.log(" List data == " + JSON.stringify(listData))
  console.log(isLoading)
  useEffect(() => {
    // dispatch(fetchDoctorProfileDataCreater());
    //  let arr = [1,2,4];
    //  let b = [...arr];
    //  b.length = 0;
    //  console.log("Arr = " + JSON.stringify(arr));
    //  console.log("b = " + JSON.stringify(b))
  }, [data1]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  const callRemoteApi = () => {
    dispatch(fetchDoctorProfileDataCreater({value: '2'}));
  };

  const _renderSectionTitle = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  const _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  const _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  const _updateSections = activeSections => {
    this.setState({activeSections});
  };

  const renderItem = ({item}) => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold', marginBottom: 4, marginRight: 20}}>
          {item.first_name}
        </Text>
        <Text>{item.last_name}</Text>
      </View>
    );
  };
  const callEdit = item => {
    let tempData = [...data];

    let tempObj = tempData[item.id];
    tempObj.editClicked = !tempObj.editClicked;
    setTimeout(() => {
      setdata(tempData);
    }, 10);

    console.log('+++++++' + JSON.stringify(data));
    // pressOn(item)
  };

  const pressOnRow = item => {
    let tempArr = [];
    for (let i = 0; i < data.length; i++) {
      let temp = data[i];
      if (temp.id === item.id){
      temp.isExpand = true;
      } else {
      temp.isExpand = false;
    }
    tempArr.push(temp)
  }
  let tempData = [...tempArr]
  let tempObj = tempData[item.id];
   tempObj.isEditShow = !tempObj.isEditShow;
   setdata(tempData)
}
const btnClk = () =>{

}
const plus = ()=>{
  //console.log("----> before " + data1.length)
  let tempArr = [];
  tempArr = [...data1];
  let obj = {
    first_name: 'New',
    last_name: "added ",
  }
  tempArr.push(obj);
  setdata1(tempArr)

  myRef.current.childMethod();
}
const minus = useCallback(() =>{

  let tempArr = [...data1];
   tempArr.splice(0, 1);
  setdata1(tempArr);
  
},[data1])

showModal = () =>{
  myRef.current.childMethod('Modal 1');
}
showModal1 = () =>{
  myRef.current.childMethod('Modal 2');
}

callAddRemove = (v, index) =>{
  if(v == '+'){
    // let tempArr = [];
    // tempArr = [...data1];
    // let obj = {
    //   first_name: 'Newly Added',
    //   last_name: "added value",
    // }
    // tempArr.push(obj);
    // setdata1(tempArr)
    let obj = {
      first_name: 'Newly Added',
      last_name: "added value",
    }
    setdata1([...data1, obj])
    
  }
  else{
    console.log("Delete Index " + index)
    let tempArr = [...data1];
    tempArr.splice(0, 1);
   setdata1(tempArr);
  }
  
}
onSubmit = (val) =>{
 // alert(val)
}
  return (
    <View style = {{flex: 1, alignItems : 'center', justifyContent : 'center'}}>
      <View style = {{ alignItems : 'center', justifyContent : 'center'}}>
        {
          isLoading?<Loader />: null
        }
        <TouchableOpacity
          style = {{marginTop : 20, backgroundColor : 'orange', padding : 10,
           alignItems : 'center', justifyContent : 'center'}}
          onPress={callRemoteApi}
        >
        <Text>Call Api</Text>  
        </TouchableOpacity>
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

        <TouchableOpacity
          style = {{marginTop : 20, backgroundColor : 'orange', padding : 10,
           alignItems : 'center', justifyContent : 'center'}}
          onPress={showModal}
        >
        <Text>Show Modal 1</Text>  
        </TouchableOpacity>

        <TouchableOpacity
          style = {{marginTop : 20, backgroundColor : 'orange', padding : 10,
           alignItems : 'center', justifyContent : 'center'}}
          onPress={showModal1}
        >
        <Text>Show Modal 2</Text>  
        </TouchableOpacity>
      <ListClass
      submit = {onSubmit} 
      callFromChild = {callAddRemove} 
      data={data1}
      dropDownData = {dropDownData} 
      ref={myRef}/>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
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