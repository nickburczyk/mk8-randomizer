import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../assets/palette';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Wingamabobs
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center'
  },
  title: {
    color: palette.yellow.hex, 
    paddingTop: 40, 
    paddingBottom: 24,
    fontSize: 40, 
    fontWeight: '900'
  }
})
