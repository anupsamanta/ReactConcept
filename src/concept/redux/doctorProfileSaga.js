import {call, delay, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {NetworkService} from 'services';
import {
  doctorProfileActions,
  setDoctorProfileHeaderData,
  fetchDoctorProfileDataTypeName,
  setLoader
} from './doctorProfileSlice';
import { Alert } from 'react-native/types';
export function* fetchDoctorProfileHeaderWatcher() {
  yield takeLatest(fetchDoctorProfileDataTypeName, fetchDoctorProfileHeaderData);
}

export function* fetchDoctorProfileHeaderData(action) {
  yield put(setLoader(true));
  try {
    let data = yield fetch('https://reqres.in/api/users?page=' + action.payload.value)
    let tempData = yield data.json();
    console.log('FUNCTION==== Response before111' + JSON.stringify(tempData))
    // yield put(
    //   doctorProfileActions.setDoctorProfileHeaderData({
    //     list: tempData.data,
    //   }),
    // );
    yield delay(3000);
    yield put(
      setDoctorProfileHeaderData({
        list: tempData.data,
      }),
    );
    yield put(setLoader(false));
  } catch (error) {
    yield put(setLoader(false));
    alert(error)
  };
}
