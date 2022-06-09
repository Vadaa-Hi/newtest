import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import logoimg from '.';

const HeaderLogo = ({uri, onPress}) => {
  console.log('===>', logoimg.messenger === '/facebook-messenger.png');
  console.log('===>', logoimg === 'messenger');

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.unreadBadge}>
          <Text style={styles.unreadBadgeText}>20</Text>
        </View>
        <Image
          style={styles.icon}
          source={{
            uri: uri,
          }}
        />
      </TouchableOpacity>
    </>
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  unreadBadge: {
    backgroundColor: '#ff3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadBadgeText: {
    color: 'white',
    fontWeight: '600',
  },
});
