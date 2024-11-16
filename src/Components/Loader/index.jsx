import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './styles';

export const Loader = ({size = 'small', color = '#FFFFFF', withOverlay}) => (
  <View style={withOverlay && styles.overlay}>
    <ActivityIndicator size={size} color={color} />
  </View>
);
