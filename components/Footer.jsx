import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../assets/palette';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      🍗 All rights reserved by Wingamabobs &copy;{new Date().getFullYear()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.gray.hex,
  },
  title: {
    color: palette.white.hex, 
    padding: 14, 
    fontSize: 14, 
    fontWeight: '100'
  }
})
