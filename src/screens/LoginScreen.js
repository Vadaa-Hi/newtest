import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LoginForm from '../components/LoginComponent/LoginForm';
import InstagramLogo from '../components/InstagramLogo';

const LoginScreen = ({navigation}) => (
  <View style={styles.container}>
    <InstagramLogo />
    <LoginForm navigation={navigation} />
  </View>
);

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
});
