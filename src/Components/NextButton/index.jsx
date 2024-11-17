import React from 'react';
import {TouchableOpacity} from 'react-native';

import {NextIcon} from '../../Assets/SvgIcons/index';

import styles from './styles';

export const NextButton = ({disabled = false, ...props}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.btnContainer, {opacity: disabled ? 0.7 : 1}]}
      activeOpacity={0.8}
      disabled={disabled}>
      <NextIcon />
    </TouchableOpacity>
  );
};
