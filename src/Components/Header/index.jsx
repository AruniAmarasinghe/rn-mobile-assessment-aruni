import React from 'react';
import {Text, View} from 'react-native';

import {useTheme} from '../../Theme';
import styles from './styles';

export const Header = ({name}) => {
  const {Layout} = useTheme();

  return (
    <View style={[Layout.justifyContentCenter, styles.nameContainer]}>
      <Text style={styles.titleTxt}>Hey {name}</Text>
    </View>
  );
};
