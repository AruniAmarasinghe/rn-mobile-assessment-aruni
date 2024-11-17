import AsyncStorage from '@react-native-async-storage/async-storage';

import {CommonAlert} from '../Components';

//Storing object value
export const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('key', jsonValue);
  } catch (e) {
    CommonAlert({
      title: 'Something went wrong',
      message: 'Could not store the name. Please try again later.',
      buttons: [{text: 'Okay'}],
    });
  }
};

//Reading object value
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    CommonAlert({
      title: 'Something went wrong',
      message: 'Could not retrieve the name. Please try again later.',
      buttons: [{text: 'Okay'}],
    });
  }
};
