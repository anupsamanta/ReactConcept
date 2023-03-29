import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
// Worker: Increase Counter Async (Delayed By 4 Seconds)
function* increaseCounterAsync() {
  try {
    // Delay 4 Seconds
   // yield delay(4000);
    // Dispatch Action To Redux Store
    console.log('Is getting called ====== ')
    yield put({
      type: 'IN_SAGA',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
};
// Watcher: Increase Counter Async
export function* watchIncrement() {
  // Take Last Action Only
  yield takeLatest('INCREASE_COUNTER', increaseCounterAsync);
};
// Worker: Decrease Counter
function* decreaseCounter() {
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: 'DE_SAGA',
      value: 1,
    });
  }
  catch (error) {
    console.log(error);
  }
};
// Watcher: Decrease Counter
export function* watchDecrement() {
  // Take Last Action Only
  yield takeLatest('DECREASE_COUNTER', decreaseCounter);
};

// Worker: Increase Counter by value
function* incrementByValue(actions) {
  console.log("=======>by val " + JSON.stringify(actions))
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: 'IN_SAGA_BY_VAL',
      value: actions.value,
    });
  }
  catch (error) {
    console.log(error);
  }
};
// Watcher: Increase Counter by value
export function* watchIncrementByValue() {
  // Take Last Action Only
  yield takeLatest('INCREASE_COUNTER_VALUE', incrementByValue);
};

