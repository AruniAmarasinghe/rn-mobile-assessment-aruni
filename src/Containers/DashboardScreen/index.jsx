import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  Linking,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import {getData} from '../../Stores/store';
import * as NewsService from '../../Services/NewsService';

import {CommonAlert, Header, Loader, NewsCard} from '../../Components';

import {useTheme} from '../../Theme/index';
import styles from './styles';

export default function DashboardScreen() {
  const {Colors, Gutters, Layout} = useTheme();
  const [firstName, setFirstName] = useState('');
  const [newsDetails, setNewsDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    retrieveUserData();
    retrieveNewsData();
  }, [loading]);

  useEffect(() => {
    const backAction = () => {
      CommonAlert({
        title: 'Hold on!',
        message: 'Are you sure you want to go back?',
        buttons: [
          {text: 'Cancel', onPress: () => null, style: 'cancel'},
          {text: 'Yes', onPress: () => BackHandler.exitApp()},
        ],
      });
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  //Pull down to refresh function on Flatlist
  const onRefresh = () => {
    setLoading(true);
    retrieveNewsData();
  };

  //API call to retrieve news data
  const retrieveNewsData = async () => {
    try {
      let newsResponse = await NewsService.getNewsData();
      if (newsResponse.success) {
        setNewsDetails(newsResponse.data);
      } else {
        CommonAlert({
          title: 'Something went wrong',
          message: newsResponse.message,
          buttons: [{text: 'Okay'}],
        });
      }
      setLoading(false);
    } catch (error) {
      CommonAlert({
        title: 'Something went wrong',
        message: 'Could not load data. Please try again in a while.',
        buttons: [{text: 'Okay'}],
      });
      setLoading(false);
    }
  };

  //Retrieving user data using Async Storage to display username
  const retrieveUserData = async () => {
    try {
      let nameData = await getData();
      setFirstName(nameData.firstName);
      return nameData;
    } catch (error) {
      CommonAlert({
        title: 'Something went wrong',
        message:
          'Could not load your legal name. Please reinstall the app and try again.',
        buttons: [{text: 'Okay'}],
      });
    }
  };

  //Render data for FlatList items
  const renderNewsItem = ({item}) => {
    return (
      <View>
        <NewsCard
          news={item}
          handleNewsPress={() => onNewsPress(item)}
          loading={loading}
        />
      </View>
    );
  };

  //Opening web url on Flat List item click
  const onNewsPress = item => {
    Linking.openURL(item?.url);
  };

  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: Colors.primary}]}>
      <Header name={firstName} />
      <View style={styles.container}>
        <View style={styles.listContainer}>
          {loading ? (
            <View style={[Gutters.largeTMargin]}>
              <Loader size="large" />
            </View>
          ) : newsDetails?.length > 0 ? (
            <FlatList
              data={newsDetails}
              keyExtractor={item => item.id.toString()}
              renderItem={renderNewsItem}
              numColumns={1}
              onRefresh={onRefresh}
              refreshing={loading}
            />
          ) : (
            <Text style={styles.errorTxt}>
              Something went wrong. Please try again later.
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
