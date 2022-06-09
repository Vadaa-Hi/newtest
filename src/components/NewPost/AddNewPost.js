import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FormPostUploader from './FormPostUploader';

const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormPostUploader />
    </View>
  );
};

const Header = ({navigation}) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{
          uri: 'https://img.icons8.com/external-becris-lineal-becris/344/ffffff/external-left-arrow-mintab-for-ios-becris-lineal-becris.png',
        }}
        style={{width: 30, height: 30}}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>AddNewPost</Text>
    <Text></Text>
  </View>
);

export default AddNewPost;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 25,
  },
});
