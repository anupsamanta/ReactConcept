import React, {useState} from 'react';
import {
  View,Text
} from 'react-native';
function Title() {
console.log ("Title Rendering ==>");
return (
<View>
  <Text>useCallBack hook</Text>
</View>
 );
}
export default React.memo(Title);