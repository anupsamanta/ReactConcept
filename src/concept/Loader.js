

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator, View } from 'react-native';

export default function Counter() {
 

  return (
    <View style = {{flex: 1, position : 'absolute', marginLeft : '10%', marginTop: '50%', alignItems : 'center', justifyContent : 'center'}}>
     <ActivityIndicator
     style = {{ }}
            //Text style of the Spinner Text
            color = {'red'}
          />
    </View>
  )
}