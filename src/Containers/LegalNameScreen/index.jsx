import React, {useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

import {storeData} from '../../Stores/store';

import {backHandler} from '../../Util/Common';
import {CommonAlert, NextButton} from '../../Components';
import {navigate} from '../../Navigators/Root';

import {useTheme} from '../../Theme/index';
import styles from './styles';

//Yup validation schema for firstName
const formSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
});

export default function LegalNameScreen() {
  const {Colors, Gutters, Layout} = useTheme();
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 10 : 0;

  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
  });

  useEffect(() => {
    backHandler();
  }, []);

  //Storing user data in Async storage on next button press
  const onNextPress = async values => {
    try {
      await storeData(values);
      setFormData({
        firstName: values.firstName,
        lastName: values.lastName,
      });
    } catch (error) {
      CommonAlert({
        title: 'Something went wrong',
        message: 'Could not store data. Please try again.',
        buttons: [{text: 'Okay'}],
      });
    }
    navigate('NotificationsScreen');
  };

  return (
    <SafeAreaView style={[Layout.fill]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={[Layout.alignItemsStart, styles.container]}>
          <View style={{flex: 1}}>
            <Text style={styles.titleTxt}>Your legal name</Text>
            <Text style={styles.subTxt}>
              We need to know a bit about you so that we can create your
              account.
            </Text>
            <Formik
              initialValues={formData}
              validationSchema={formSchema}
              onSubmit={values => onNextPress(values)}
              enableReinitialize>
              {({
                handleChange,
                handleSubmit,
                values,
                errors,
                touched,
                setFieldTouched,
              }) => (
                <View style={styles.formContainer}>
                  <View
                    style={[Gutters.largeTMargin, styles.inputTxtContainer]}>
                    <TextInput
                      id="firstName"
                      label="First name"
                      placeholder="First name"
                      placeholderTextColor={
                        Platform.OS === 'android'
                          ? Colors.primary
                          : Colors.placeholderTxtColor
                      }
                      onBlur={() => setFieldTouched('firstName')}
                      onChangeText={handleChange('firstName')}
                      value={values.firstName}
                      editable={true}
                      errors={
                        touched.firstName && errors.firstName
                          ? errors.firstName
                          : null
                      }
                      style={styles.inputTxt}
                    />
                  </View>
                  <View
                    style={[
                      Gutters.largeTMargin,
                      styles.inputTxtContainer,
                    ]}>
                    <TextInput
                      id="lastName"
                      label="Last name"
                      placeholder="Last name"
                      placeholderTextColor={
                        Platform.OS === 'android'
                          ? Colors.primary
                          : Colors.placeholderTxtColor
                      }
                      secured
                      enableRightButton
                      value={values.lastName}
                      onBlur={() => setFieldTouched('lastName')}
                      onChangeText={handleChange('lastName')}
                      errors={
                        touched.lastName && errors.lastName
                          ? errors.lastName
                          : null
                      }
                      style={styles.inputTxt}
                    />
                  </View>
                  <View style={[Gutters.regularTMargin, styles.btnContainer]}>
                    <NextButton
                      onPress={handleSubmit}
                      disabled={!values.firstName || !values.lastName}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
