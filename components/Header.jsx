import React from 'react'
import { Image, StyleSheet, View } from 'react-native';
import {Logo} from '../assets/LogoWide.png'

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={ Logo } style={styles.logo} alt='Wingamabobs'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    padding: 24,
    paddingTop: 50,
    paddingBottom: 12
  },
  logo: {
    height: 80,
    resizeMode: 'contain'
  }
})
