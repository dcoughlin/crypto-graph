/**
 * @format
 */
if(__DEV__) {
  import('./ReactotronConfig').then(() => console.tron.log('Reactotron Configured'))
}
import {AppRegistry, YellowBox} from 'react-native';
import App from './src/main';
import {name as appName} from './app.json';

// Have already migrated to @react-native-community/async-storage@1.2.4 from core 
YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']); 

AppRegistry.registerComponent(appName, () => App);
