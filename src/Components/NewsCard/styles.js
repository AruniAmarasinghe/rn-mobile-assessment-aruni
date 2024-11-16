import {Dimensions, StyleSheet} from 'react-native';

import {Colors} from '../../Theme/Variables';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 152,
    width: width,
    padding: 10,
    overflow: 'visible',
  },
  image: {
    height: 112,
    resizeMode: 'contain',
  },
  btnContainer: {
    padding: 20,
  },
  txtContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
  },
  sourceTxt: {
    fontFamily: 'Rubik',
    lineHeight: 16,
    fontWeight: '400',
    fontSize: 12,
    color: Colors.white,
  },
  headlineTxt: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'Roboto',
    color: Colors.white,
    overflow: 'hidden',
  },
});
