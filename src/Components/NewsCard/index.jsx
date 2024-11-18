import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {DefaultImagePlaceholder} from '../../Assets/SvgIcons';
import {formatDate} from '../../Util/Common';
import {Loader} from '../../Components';

import {useTheme} from '../../Theme';
import styles from './styles';

export const NewsCard = ({news, handleNewsPress, loading}) => {
  const {Gutters, Layout} = useTheme();

  return (
    <View style={[Layout.column, styles.container]}>
      <View
        style={[Layout.row, Layout.justifyContentCenter, styles.rowContainer]}>
        <View style={[Layout.justifyContentCenter, styles.imageContainer]}>
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
            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
                styles.txtContainer,
              ]}>
              <Text style={[styles.sourceTxt]}>{news?.source}</Text>
              <Text style={[styles.sourceTxt]}>
                {formatDate(news?.datetime)}
              </Text>
            </View>
            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                Layout.alignItemsCenter,
                styles.txtContainer,
              ]}>
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
