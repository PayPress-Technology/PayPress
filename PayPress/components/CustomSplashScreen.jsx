import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CustomSplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash-icon.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B57BD', // Blue background color
  },
  image: {
    width: '80%',
    height: '80%',
  },
});

export default CustomSplashScreen;