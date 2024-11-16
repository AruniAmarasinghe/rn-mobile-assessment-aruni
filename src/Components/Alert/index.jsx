import {Alert} from 'react-native';

export const CommonAlert = ({
  buttons,
  message = 'Please try again',
  title = 'Something went wrong',
}) => {
  Alert.alert(title, message, buttons);
};

export const ConnectionLostAlert = () => {
  Alert.alert(
    'Connection Error',
    'Please check your internet connection and try again',
    [{text: 'Okay'}],
  );
};
