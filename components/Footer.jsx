import React from 'react'
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { palette } from '../assets/palette';

export const Footer = () => {
  const colorScheme = useColorScheme()
  const darkMode = colorScheme === 'dark';

  const containerStyles = [
    styles.container,
    { backgroundColor: darkMode ? palette.gray.hex : palette.yellow.hex }
  ]

  const titleStyles = [
    styles.title,
    { color: darkMode ? palette.white.hex : palette.black.hex }
  ]
  return (
    <View style={containerStyles}>
      <Text style={titleStyles}>
        🍗 All rights reserved by Wingamabobs &copy;{new Date().getFullYear()}
        <Text style={{marginLeft: 'auto'}}>{darkMode ? '🌙' : '🌞'}</Text>
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
    fontWeight: '100',
  }
})
