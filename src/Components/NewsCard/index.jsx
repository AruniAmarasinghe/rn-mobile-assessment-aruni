import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {DefaultImagePlaceholder} from '../../Assets/SvgIcons';
import {Loader} from '../../Components';
import {formatDate} from '../../Util/Common';

import {useTheme} from '../../Theme';
import styles from './styles';

export const NewsCard = ({news, handleNewsPress, loading}) => {
  const {Gutters} = useTheme();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{width: '25%', justifyContent: 'center'}}>
          {loading ? (
            <View style={[Gutters.largeTMargin]}>
              <Loader size="small" />
            </View>
          ) : news.image ? (
            <Image
              source={{uri: news?.image}}
              style={styles.image}
              resizeMode="cover"
            />
          ) : (
            <DefaultImagePlaceholder height={112} />
          )}
        </View>
        <View style={{width: '75%'}}>
          <TouchableOpacity
            style={styles.btnContainer}
            onPress={() => handleNewsPress(news.id)}>
            <View style={styles.txtContainer}>
              <Text style={[styles.sourceTxt]}>{news?.source}</Text>
              <Text style={[styles.sourceTxt]}>
                {formatDate(news?.datetime)}
              </Text>
            </View>
            <View style={styles.txtContainer}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={3}
                style={[Gutters.tinyTMargin, styles.headlineTxt]}>
                {news?.headline}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
