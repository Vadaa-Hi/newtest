import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import HeaderLogo from './HeaderLogo';
import logoimg from '.';
import image from '../../../assets';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={image.logo} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <HeaderLogo
          uri={logoimg.plus}
          onPress={() => navigation.navigate('AddPost')}
        />
        <HeaderLogo uri={logoimg.like} />
        <HeaderLogo uri={logoimg.messenger} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    // margin: 2,
  },
  logo: {height: 50, width: 100, resizeMode: 'contain'},
  iconsContainer: {
    flexDirection: 'row',
  },
});
