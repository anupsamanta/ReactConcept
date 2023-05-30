import { Alert } from "react-native/types";
import {
  INCREMENT_REQUEST,
  DECREMENT_REQUEST,
} from "../actions/actionTypes";
 
const initialState = {
  value: 0,
  loading: null,
  error: null,
  apiname : '',
  apiData : null
};
 
const counterReducers = (state = initialState, action) => {
  switch (action.type) {
    case "IN_SAGA":
      console.log("IN_SAGA")
      return {
        ...state,
        value: state.value + 1,
        loading: false,
        apiname : action.apiname
      };
    case "DE_SAGA":
      console.log("DE_SAGA")
      return { 
        ...state,
        value: state.value - 1,
        loading: false,
        apiname : action.apiname
      };

      case "IN_SAGA_BY_VAL":
        console.log("IN_SAGA_BY_VAL")
        return { 
          ...state,
          value: state.value + action.value,
          loading: false,
          apiname : action.apiname
        };

      
      case "GET_API_DATA":
        console.log("API Data  updated " + JSON.stringify(action) )
      return { 
        ...state,
        value: state.value - 1,
        loading: false,
        apiname : action.apiname,
        apiData: action.res
      };
    default:
      return state;
  }
};
 
export default counterReducers;
