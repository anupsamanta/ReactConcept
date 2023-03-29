import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  FlatList
} from 'react-native';

// import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

// import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

// import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';
let activeIndex = 0;
import UpArrow from './image/upArrow.png'
import DownArrow from './image/darrow.png'

//To make the selector (Something like tabs)
const SELECTORS = [
  {title: 'T&C', value: 0},
  {title: 'Privacy Policy', value: 1},
  {title: 'Return Policy', value: 2},
  {title: 'Reset all'},
];

const fDATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Third Item',
  },
];

const App = () => {
  // Default active selector
  const [activeSections, setActiveSections] = useState([]);
  // Collapsed condition for the single collapsible
  const [collapsed, setCollapsed] = useState(true);
  // MultipleSelect is for the Multiple Expand allowed
  // True: Expand multiple at a time
  // False: One can be expand at a time
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [data, setdata] = useState([
    {
      title: 'Personal Info',
      content:'The following terms and conditions, together',
      index: 0,
      isEditShow : false,
      showCancel : false, 
    },
    {
      title: 'Relationship',
      content:'A Privacy Policy agreement is the agreement where you',
      index: 1,
      isEditShow : false ,
      showCancel : false, 
    },
    {
      title: 'Engagement Details',
      content:'Our Return & Refund Policy template lets you get',
      index: 2,
      isEditShow : false,
      showCancel : false,  
    },
  ])

  const toggleExpanded = () => {
    // Toggling the state of single Collapsible
    setCollapsed(!collapsed);
    //alert('KKKK')
  };

  const setSections = (sections) => {
    // Setting up a active section state
   // alert(JSON.stringify(sections))
    if(sections != ''){
      activeIndex = sections
    }else{
      console.log("NO")
      
    }
   
    setActiveSections(
      sections.includes(undefined) ? [] : sections
    );
   // alert(sections) 
    let tempData = [...data];
    let tempObj = {}
    tempObj = tempData[0];
    tempObj.isEditShow = (sections != '' && sections == 0) ? true : false ;
    tempObj.showCancel = false
    setdata(tempData)
  };
  const editPress = (section) =>{
   // alert(JSON.stringify(section))
    let tempData = [...data];

    let tempObj = tempData[section.index];
    tempObj.showCancel = !tempObj.showCancel ;
    setTimeout(() => {
      setdata(tempData)
    }, 10);
  }

  const renderHeader = (section, _, isActive) => {
    // Accordion header view
    return (
      <View
        duration={400}
        style={[
          styles.header,
          isActive ? styles.active : styles.inactive, 
          {flexDirection : 'row',
           height : 50, 
           alignItems : 'center',
           borderBottomColor : 'gray',
          borderBottomWidth : isActive ? 0 : 1}
        ]}
       // transition="backgroundColor"
        >
        <Text style={[styles.headerText, {marginLeft : 10, flex : 1, alignItems : 'flex-start'}]}>
          {section.title}
        </Text>
        <View style = {{flex : 1, alignItems : 'flex-end',}}>
        <Image style = {{marginRight  :10,  height : 20, width : 20, resizeMode : 'contain'}}  source={ isActive ? UpArrow :DownArrow}/>
        </View>
        
        {(section.index == 0  && section.isEditShow)? 
          <Text style = {{position : 'absolute',  right : 40}} onPress={() => editPress(section)}>{section.showCancel? 'Cancel':'Edit'}</Text> : null
        }
        
      </View>
    );
  };
  const Item = ({title}) => (
    <View style={{margin : 5, padding : 10, borderRadius : 5, borderWidth : 1, borderColor : 'gray'}}>
      <Text style={{}}>{title}</Text>
      <Text style={{}}>{title}</Text>
      <Text style={{}}>{title}</Text>
      <Text style={{}}>{title}</Text>
      <Text style={{}}>{title}</Text>
      <Text style={{}}>{title}</Text>
    </View>
  );

  const renderContent = (section, _, isActive) => {
    // Accordion Content view
    console.log("------>" + JSON.stringify(section))
    return (
      <View
        duration={400}
        style={[
          styles.content,
          isActive ? styles.active : styles.inactive,
          {borderColor : 'blue',   borderWidth : 1,
           padding : 10,
          borderRadius : 10}
        ]}
        transition="backgroundColor">
          {
            ( section.index == 0 && data[0].showCancel) ? <Text>Edit Enabled</Text>: null
          }
          <View style = {{flexDirection : 'row', marginRight : 40, flexWrap : 'wrap'}}>
          {
            section.index == 0 ? (
            fDATA.map(index =>{
             return( 
            <View style = {{margin : 3, padding : 40, backgroundColor : 'blue'}}>
              <Text>KKKK</Text>
              <Text>pppp</Text>
            {/* <FlatList
            numColumns={3}
            key={'#'}
           // horizontal = {false}
        data={fDATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      /> */}
            </View>
            )
            }) ) : <Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{textAlign: 'center'}}>
          {section.content}
        </Text>
          }</View>
        
        
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            Example of Collapsible/Accordion/Expandable
            Listview in React
            Native
          </Text>

          {/*Code for Single Collapsible Start*/}
          <TouchableOpacity onPress={toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Single Collapsible
              </Text>
              {/*Heading of Single Collapsible*/}
            </View>
          </TouchableOpacity>
          {/*Content of Single Collapsible*/}
          <Collapsible
            collapsed={collapsed}
            align="center"
          >
            <View style={styles.content}>
              <Text style={{textAlign: 'center'}}>
                This is a dummy text of Single Collapsible View
              </Text>
            </View>
          </Collapsible>
          {/*Code for Single Collapsible Ends*/}

          <View
            style={{
              backgroundColor: '#000',
              height: 1,
              marginTop: 10
            }} />
          <View style={styles.multipleToggle}>
            <Text
              style={styles.multipleToggle__title}
            >
              Multiple Expand Allowed?
            </Text>
            <Switch
              value={multipleSelect}
              onValueChange={(multipleSelect) =>
                setMultipleSelect(multipleSelect)
              }
            />
          </View>
          {/* <Text style={styles.selectTitle}>
            Please select below option to expand
          </Text> */}

          {/*Code for Selector starts here*/}
          {/* <View style={styles.selectors}>
            {SELECTORS.map((selector) => (
              <TouchableOpacity
                key={selector.title}
                onPress={
                 () => setSections([selector.value])
                }
              >
                <View style={styles.selector}>
                  <Text
                    style={
                      activeSections.includes(selector.value) &&
                      styles.activeSelector
                    }>
                    {selector.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View> */}
          {/*Code for Selector ends here*/}

          {/*Code for Accordion/Expandable List starts here*/}
          <Accordion
            activeSections={activeSections}
            // For any default active section
            sections={data}
            // Title and content of accordion
            touchableComponent={TouchableOpacity}
            // Which type of touchable component you want
            // It can be the following Touchables
            // TouchableHighlight, TouchableNativeFeedback
            // TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={false}
            // If you want to expand multiple at a time
            renderHeader={renderHeader}
            // Header Component(View) to render
            renderContent={renderContent}
            // Content Component(View) to render
            duration={400}
            // Duration for Collapse and expand
            onChange={setSections}
            // Setting the state of active sections
          />
          {/*Code for Accordion/Expandable List ends here*/}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

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