import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {NetworkService} from 'services';
import {
  doctorProfileActions,
  fetchDoctorProfileDataTypeName,
} from './doctorProfileSlice';
import {FetchEnumStatus, fetchStatusSliceActions} from 'reducers';
import { Alert } from 'react-native/types';
export function* fetchDoctorProfileHeaderWatcher() {
  yield takeLatest(fetchDoctorProfileDataTypeName, fetchDoctorProfileHeaderData);
}

export function* fetchDoctorProfileHeaderData(action) {
  try {
    let data = yield fetch('https://reqres.in/api/users?page=' + action.payload.value)
  let tempData = yield data.json();
  console.log('FUNCTION==== Response before111' + JSON.stringify(tempData))
    yield put(
      doctorProfileActions.setDoctorProfileHeaderData({
        list: tempData.data,
      }),
    );
  } catch (error) {
    alert(error)
  }
  
   
}
