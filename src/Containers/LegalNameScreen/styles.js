import {StyleSheet} from 'react-native';

import {Colors} from '../../Theme/Variables';

export default StyleSheet.create({
  container: {
    padding: 20,
  },
  titleTxt: {
    fontSize: 30,
    fontWeight: '700',
    fontFamily: 'RobotoBold',
    color: Colors.primary,
  },
  subTxt: {
    marginVertical: 20,
    color: Colors.subText,
    fontSize: 16,
    fontFamily: 'RobotoLight',
    fontWeight: '400',
    lineHeight: 24,
  },
  formContainer: {
    flex: 1,
  },
  inputTxtContainer: {
    borderBottomColor: Colors.muteColor,
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  inputTxt: {
    fontSize: 20,
    fontFamily: 'RobotoLight',
    fontWeight: '400',
    color: Colors.primary,
  },
  btnContainer: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
  },
});
