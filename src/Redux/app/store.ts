import { configureStore } from '@reduxjs/toolkit'
//import counterReducer from '../features/counter/counterSlice'
//Import for Saga only
import counterReducerImport from '../../features/counter/counterSlice'
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Reducer
import rootReducer1111 from '../../Redux/reducer/index';
import { doctorProfileReducer } from '../../concept/redux/';
// Imports: Redux Root Saga
import { rootSaga } from '../../Redux/saga/index';
 

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
export const store = configureStore({
 // reducer: {counterReducer, rootReducer},
  // or
  reducer: {
    counterReducer: counterReducerImport, 
    rootReducer : rootReducer1111,
    doctorProfileState : doctorProfileReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})
sagaMiddleware.run(rootSaga);
//Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


