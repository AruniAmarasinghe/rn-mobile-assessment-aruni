import React, {useEffect} from 'react';
import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import {backHandler} from '../../Util/Common';
import {CommonAlert, ContinueButton} from '../../Components';
import {navigate} from '../../Navigators/Root';
import {NotificationIcon} from '../../Assets/SvgIcons/index';

import {useTheme} from '../../Theme/index';
import styles from './styles';

export default function NotificationsScreen() {
  const {Layout} = useTheme();

  //Listener that calls notification user interaction through onRemoteNotification function
  // useEffect(() => {
  //     const type = 'notification';
  //     PushNotificationIOS.addEventListener(type, onRemoteNotification);
  //     return () => {
  //       PushNotificationIOS.removeEventListener(type);
  //     };
  // }, []);

  //Commented as the below could not be tested in ios simulator - IOS Function to trigger activity based on user interaction on notification alert
  // const onRemoteNotification = (notification) => {
  //     const isClicked = notification.getData().userInteraction === 1;

  //     if (isClicked) {
  //         navigate('DashboardScreen');
  //     } else {
  //     // Do something else with push notification
  //     }
  // }

  useEffect(() => {
    backHandler();
  }, []);

  //Handling user journey with continue button press based on remote notification alert
  const onContinuePress = async () => {
    if (Platform.OS === 'android') {
      //NOTE: Android version 12 and below will return never_ask_again without any prompt instead of granted,
      // Only version from Android 13 and above will ask for user permission [source:https://stackoverflow.com/a/77704552 ]
      try {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        if (Platform.Version >= 33) {
          if (result === 'granted') {
            navigateToDashboard();
          } else {
            if (result === 'never_ask_again') {
              CommonAlert({
                title: 'Permission denied',
                message:
                  'Please go to settings and enable remote notifications.',
                buttons: [{text: 'Okay', onPress: () => navigateToDashboard()}],
              });
            }
          }
        } else {
          navigateToDashboard();
        }
      } catch (error) {}
    } else {
      PushNotificationIOS.requestPermissions();
      navigateToDashboard();
    }
  };

  //Navigating to DashboardScreen
  const navigateToDashboard = () => {
    navigate('DashboardScreen');
  };

  return (
    <SafeAreaView style={[Layout.fill, Layout.center]}>
      <View style={[styles.container, Layout.center, Layout.fill]}>
        <View>
          <NotificationIcon />
        </View>
        <View style={[Layout.alignItemsCenter, styles.txtContainer]}>
          <Text style={styles.titelTxt}>Get the most out of Blott ✅</Text>
          <Text style={styles.subTxt}>
            Allow notifications to stay in the loop with your payments, requests
            and groups.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <ContinueButton onPress={onContinuePress} />
        </View>
      </View>
    </SafeAreaView>
  );
}
