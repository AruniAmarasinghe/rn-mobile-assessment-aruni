import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../Theme/Variables';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: 152,
    width: width,
    padding: 10,
    overflow: 'visible',
  },
  rowContainer: {},
  imageContainer: {
    width: '25%',
  },
  image: {
    height: 112,
    resizeMode: 'contain',
  },
  btnContainer: {
    padding: 20,
  },
  txtContainer: {
    paddingRight: 10,
  },
  sourceTxt: {
    fontFamily: 'RobotoLight',
    lineHeight: 16,
    fontWeight: '400',
    fontSize: 12,
    color: Colors.white,
    opacity: 0.7,
  },
  headlineTxt: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'RobotoMedium',
    color: Colors.white,
    overflow: 'hidden',
  },
});
