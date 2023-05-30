import React from 'react';
import {View} from 'react-native';
import Counter1 from './counter1';
import Counter2 from './counter2';

export default function Root() {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
      <Counter1 />
      <Counter2 />
    </View>
  );
}
