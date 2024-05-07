import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Notifee = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          width: '50%',
          height: 50,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        onPress={() => {
          displayNotifications();
        }}>
        <Text style={{color: '#fff'}}>Display Notifications</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notifee;
