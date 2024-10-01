import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import SearchIcon from '../../../src/image/search.png';
import SelIcon from '../../../src/image/sel.png';
import DSelectIcon from '../../../src/image/normal.png';
import NextIcon from '../../../src/image/Next.png';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Festival Greetings',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Clinic Status',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Medical Camp',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Others',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Clinic Status',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Medical Camp -----kjkjk',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Others',
  },
];

let cardArr = [
  {
    des: 'Hi, Vinay. Wishes you and your loved ones a Merry Christmas Hi, Vinay. Wishes you and your loved ones a Merry ChristmasHi, Vinay.',
  },
  {
    des: 'Hi, Anup. Wishes you and your loved ones a Merry Christmas Hi, Anup. Wishes you and your loved ones a Merry ChristmasHi, Vinay.',
  },
];

export default function Signup() {
  const [msgType, setMsgType] = useState(0);
  const [selectedIndex, setselectedIndex] = useState(undefined);

  const msgTypeClk = type => {
    setselectedIndex(undefined);
    if (type == 'g') {
      setMsgType(0);
    } else {
      setMsgType(1);
    }
  };
  const pressOnMessageType = (item, index) => {
    setselectedIndex(index);
  };
  const Item = ({item, index}) => (
    <TouchableOpacity
      onPress={() => pressOnMessageType(item, index)}
      style={{
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: index % 2 == 0 ? 0 : 10,
        // elevation: 1,
        //shadowColor: '#52006A',
        paddingHorizontal: 10,
        marginTop: 5,
        padding: 6,
        borderWidth: 1,
        borderColor: index == selectedIndex ? '#5715D2' : '#D8D8D8',
      }}>
      <Text style={{textAlign: 'center'}}>{item.title}</Text>
    </TouchableOpacity>
  );

  const CardItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => pressOnMessageType(item, index)}
      style={{
        borderRadius: 8,
        // alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 0,
        // elevation: 1,
        //shadowColor: '#D8D8D8',
        //paddingHorizontal: 10,
        marginTop: 5,
        paddingVertical: 12,
        paddingHorizontal: 7,
        borderWidth: 1,
        borderColor: '#D8D8D8',
      }}>
      <Text
        style={{
          textAlign: 'left',
          color: '#100425',
          fontSize: 14,
          fontWeight: 700,
        }}>
        Christmas Wishes
      </Text>
      <Text style={{textAlign: 'left', marginTop: 10}}>{item.des}</Text>
      <View
        style={{height: 1, marginTop: 8, backgroundColor: '#D5DAF3'}}></View>
      <View
        style={{
          marginTop: 8,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#5715D2', fontWeight: 500}}>Use Messages</Text>
        <Image
          style={{height: 20, width: 20, marginLeft: 10, resizeMode: 'contain'}}
          source={NextIcon}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2', padding: 20}}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          borderRadius: 10,
          padding: 15,
        }}>
        <View>
          <TextInput
            placeholder="Search"
            style={{
              height: 40,
              backgroundColor: 'white',
              borderColor: '#BDBDBD',
              paddingLeft: 40,
              borderRadius: 6,
              borderWidth: 1,
            }}></TextInput>
          <Image
            style={{
              height: 14,
              width: 14,
              resizeMode: 'contain',
              position: 'absolute',
              top: 13,
              left: 15,
            }}
            source={SearchIcon}
          />
        </View>
        <View
          style={{height: 1, marginTop: 12, backgroundColor: '#D5DAF3'}}></View>
        <View
          style={{flexDirection: 'row', paddingHorizontal: 20, marginTop: 10}}>
          <TouchableOpacity
            onPress={() => msgTypeClk('g')}
            style={{
              flex: 1,
              paddingVertical: 5,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{color: '#50485F', fontSize: 16, fontWeight: 600}}>
              Greetings
            </Text>
            <Image
              style={{
                height: 24,
                marginLeft: 10,
                width: 24,
                resizeMode: 'contain',
              }}
              source={msgType == 0 ? SelIcon : DSelectIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => msgTypeClk('s')}
            style={{
              flex: 1,
              paddingVertical: 5,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={{color: '#50485F', fontSize: 16, fontWeight: 600}}>
              Speciality
            </Text>
            <Image
              style={{
                height: 24,
                marginLeft: 10,
                width: 24,
                resizeMode: 'contain',
              }}
              source={msgType == 0 ? DSelectIcon : SelIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingVertical: 7, height: 100}}>
          <FlatList
            data={DATA}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => <Item item={item} index={index} />}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={{paddingBottom: 7}}>
          <FlatList
            data={cardArr}
            showsVerticalScrollIndicator={true}
            renderItem={({item, index}) => (
              <CardItem item={item} index={index} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
}
