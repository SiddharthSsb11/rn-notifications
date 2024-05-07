import {View, Text, Alert} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidStyle} from '@notifee/react-native';

const App = () => {
  useEffect(() => {
    getDeviceToken();
  }, []);

  const getDeviceToken = async () => {
    let token = await messaging().getToken();
    console.log(token);
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert(
      //   'A new FCM message arrived in foreground mode!',
      //   JSON.stringify(remoteMessage)
      // );
      displayNotifications(remoteMessage);
    });

    return unsubscribe;
  }, []);

  const displayNotifications = async data => {
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel'
    });

    // Display a notification
    await notifee.displayNotification({
      title: data.notification.title,
      body: data.notification.body,
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional
        // pressAction is needed if you want the notification to open the app
        pressAction: {
          id: 'default'
        }
        // style: {
        //   type: AndroidStyle.BIGPICTURE,
        //   picture:
        //     'https://cdn.britannica.com/84/73184-050-05ED59CB/Sunflower-field-F'
        // }
      }
    });
  };

  // useEffect(() => {
  //   const unsubscribe = messaging().onNotificationOpenedApp(async (remoteMessage) => {
  //     console.log('Notification opened by user:', remoteMessage);
  //     Navigate to the desired screen here
  //     For example, if you want to navigate to NotificationScreen:
  //     navigation.navigate('NotificationScreen');
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
