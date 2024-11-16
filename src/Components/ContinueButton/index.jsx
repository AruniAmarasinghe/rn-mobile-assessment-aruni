import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export const ContinueButton = ({disabled = false, ...props}) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.btnContainer]}
      activeOpacity={0.8}>
      <Text style={styles.btnText}>Continue</Text>
    </TouchableOpacity>
  );
};
