import {createAction, createSlice} from '@reduxjs/toolkit';
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
      console.log("setData ==== " + JSON.stringify(action))
      return {
        ...state,
        doctorProfileHeader: action.payload,
        loader : false
      };
    },
    setLoader: (state, action) => {
      state.loader = action.payload;;
    },
  },
});



 export const {doctorProfileActions, setLoader,setDoctorProfileHeaderData } = doctorProfileSlice.actions;
 export const doctorProfileReducer = doctorProfileSlice.reducer;
