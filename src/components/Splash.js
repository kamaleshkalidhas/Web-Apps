import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/splash_image.png')} style={styles.image} />
      <Text style={styles.copyright}>
       Copyright 2025 © <Text style={styles.boldText}>Smile Hearts</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '50%',
    height: '50%', 
    resizeMode: 'contain',
    marginTop:150
  },
  copyright: {
    marginTop: 150, 
    fontSize: 15,
    color: '#808B96',
  },
  boldText: {
    fontWeight: '900',
    color: '#808B96',
    fontSize: 15,
  },
});

export default Splash;
