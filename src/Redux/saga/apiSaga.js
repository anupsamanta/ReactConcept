import { delay, takeEvery, takeLatest, put, take } from 'redux-saga/effects';
function* fetchApiFromBacked(actions) {
  console.log("=============>>>>>>>>> Generator function" + JSON.stringify(actions))
  let data = yield fetch('https://reqres.in/api/users?page=' + actions.value)
  let tempData = yield data.json();
  yield put({type : 'GET_API_DATA', res : tempData, value : actions.value, apiname : actions.apiname })

};
// Watcher: Increase Counter Async
export function* watchApiCall() {
  // Take Last Action Only
  yield takeLatest('API_CALL', fetchApiFromBacked );
};

 