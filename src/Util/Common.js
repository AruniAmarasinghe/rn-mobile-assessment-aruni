import {BackHandler} from 'react-native';
import dayjs from 'dayjs';

// Date Format function
export const formatDate = date => {
  return dayjs.unix(date).format('D MMMM YYYY');
};

// Disabling Android back button
export const backHandler = () => {
  BackHandler.addEventListener('hardwareBackPress', () => true);
  return () => backHandler.remove();
};
