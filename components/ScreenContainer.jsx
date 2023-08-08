import React from 'react';
import { StyleSheet, View } from 'react-native';

export const ScreenContainer = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 20
  }
})