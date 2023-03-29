import { combineReducers } from 'redux';
// Imports: Reducers
// import counterReducer from './counterReducer';
import counter_API_Reducer from './reducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  apireducer: counter_API_Reducer,
});
// Exports
export default rootReducer;