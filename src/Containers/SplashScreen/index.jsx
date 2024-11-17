import React, {useEffect} from 'react';
import {SafeAreaView, View} from 'react-native';

import {getData} from '../../Stores/store';
import {navigateAndSimpleReset, navigate} from '../../Navigators/Root';

import {AppLogo} from '../../Assets/SvgIcons/index';
import {Colors} from '../../Theme/Variables';

import {useTheme} from '../../Theme/index';
import styles from './styles';

export default function SplashScreen() {
  const {Layout} = useTheme();

  useEffect(() => {
    checkAuth();
  }, []);

  //Checking if User data is already stored in Async storage and handling user journey
  const checkAuth = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    try {
      const nameData = await getData();
      if (nameData) {
        navigate('DashboardScreen');
      } else {
        navigateToLegalName();
      }
    } catch (error) {
      CommonAlert({
        title: 'Something went wrong',
        message: 'Could not load name. Please try again.',
        buttons: [{text: 'Okay'}],
      });
    }
  };

  //Navigating to LegalNameScreen
  const navigateToLegalName = async () => {
    navigateAndSimpleReset('LegalNameScreen');
  };

  return (
    <SafeAreaView
      style={[Layout.fill, Layout.center, {backgroundColor: Colors.primary}]}>
      <View style={styles.logoContainer}>
        <AppLogo />
      </View>
    </SafeAreaView>
  );
}
