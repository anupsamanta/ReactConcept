
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
// import { store } from './src/Redux/app/store'
// import { Provider } from 'react-redux'

// const RNRedux = () => (
//     <Provider store = { store }>
//       <App />
//     </Provider>
//   )
//    AppRegistry.registerComponent(appName, () => RNRedux);

const RNRedux = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <App/>
  </GestureHandlerRootView>
    
)
 AppRegistry.registerComponent(appName, () => RNRedux);
