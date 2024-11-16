import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

export const Header = ({name}) => {
  return (
    <View style={styles.nameContainer}>
      <Text style={styles.titleTxt}>Hey {name}</Text>
    </View>
  );
};
