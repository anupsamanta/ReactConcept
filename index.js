/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);



import { store } from './src/Redux/app/store'
import { Provider } from 'react-redux'
// if(__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }
const RNRedux = () => (
    <Provider store = { store }>
      <App />
    </Provider>
  )
   AppRegistry.registerComponent(appName, () => RNRedux);
