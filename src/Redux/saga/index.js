
import { all } from "redux-saga/effects";
import { watchIncrement, watchDecrement, watchIncrementByValue } from "./counterSaga";

import {fetchDoctorProfileHeaderWatcher} from '../../concept/redux/doctorProfileSaga';
import { watchApiCall } from './apiSaga';
 
export  function* rootSaga () {
  yield all([watchIncrement(), watchDecrement(), watchApiCall(), watchIncrementByValue(), fetchDoctorProfileHeaderWatcher()]);
}
