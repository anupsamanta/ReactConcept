import {createAction, createSlice} from '@reduxjs/toolkit';
import { Alert } from 'react-native/types';
export const fetchDoctorProfileDataCreater = createAction(
  'DOCTORPROFILE/FETCH_DOCTOR_PROFILE_DATA',
);
export const fetchDoctorProfileDataTypeName =
  fetchDoctorProfileDataCreater(null).type;

export const doctorProfileState = {
  doctorProfileHeader: {
    loader: true,
    list: [],
  },
};

const doctorProfileSlice = createSlice({
  name: 'DOCTORPROFILE3',
  initialState: doctorProfileState,
  reducers: {
    setDoctorProfileHeaderData: (state, action) => {
      //console.log("setData ==== " + JSON.stringify(action))
      return {
        ...state,
        doctorProfileHeader: action.payload,
        loader : false
      };
    },
  },
});



 export const doctorProfileActions = doctorProfileSlice.actions;
 export const doctorProfileReducer = doctorProfileSlice.reducer;
