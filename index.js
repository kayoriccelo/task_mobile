import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import SignIn from './src/apps/SignIn/index.js';

AppRegistry.registerComponent(appName, () => SignIn);
