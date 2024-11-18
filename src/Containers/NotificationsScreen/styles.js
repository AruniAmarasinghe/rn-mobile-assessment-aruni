import {StyleSheet} from 'react-native';

import {Colors} from '../../Theme/Variables';

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  txtContainer: {
    marginVertical: 50,
  },
  titelTxt: {
    color: Colors.primary,
    fontFamily: 'RobotoBold',
    fontWeight: '700',
    fontSize: 24,
    marginVertical: 20,
  },
  subTxt: {
    color: Colors.subText,
    fontFamily: 'RobotoLight',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  btnContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 35,
  },
});
