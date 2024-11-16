import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './Root';
import DashboardScreen from '../Containers/DashboardScreen';
import NotificationsScreen from '../Containers/NotificationsScreen';
import LegalNameScreen from '../Containers/LegalNameScreen';
import SplashScreen from '../Containers/SplashScreen';

import {useTheme} from '../Theme';

const {Screen, Navigator} = createStackNavigator();

function AppNavigator() {
  const {NavigationTheme} = useTheme();

  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      <Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Screen name="SplashScreen" component={SplashScreen} />
        <Screen name="LegalNameScreen" component={LegalNameScreen} />
        <Screen name="NotificationsScreen" component={NotificationsScreen} />
        <Screen name="DashboardScreen" component={DashboardScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
