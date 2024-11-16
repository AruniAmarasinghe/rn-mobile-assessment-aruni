import {StyleSheet} from 'react-native';

import {Colors} from '../../Theme/Variables';

export default StyleSheet.create({
  btnContainer: {
    height: 48,
    borderRadius: 24,
    padding: 12,
    gap: 4,
    backgroundColor: Colors.buttonColor,
  },
  btnText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: Colors.white,
    textAlign: 'center',
  },
});
