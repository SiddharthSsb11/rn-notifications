/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
// Register background handler
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('Message handled in the BACKGROUNDDD!', remoteMessage);
// });
// messaging().getInitialNotification(async remoteMessage => {
//   console.log('Message handled in the killed state!', remoteMessage);
// });

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log(
    'Message handled in the background or killed state:',
    remoteMessage
  );
  if (remoteMessage.data) {
    console.log('Additional data payload:', remoteMessage.data);
  }
});

messaging().getInitialNotification(async remoteMessage => {
  console.log('Message handled in the foreground:', remoteMessage);
  if (remoteMessage.data) {
    console.log('Additional data payload:', remoteMessage.data);
  }
});
AppRegistry.registerComponent(appName, () => App);
