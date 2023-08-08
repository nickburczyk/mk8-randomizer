import React from 'react'
import { Text, StyleSheet } from 'react-native'

export const AccentedText = ({text, color}) => (
  <Text 
    style={{
      ...styles.text, 
      color
    }}
  >
    {' '}{text}{' '}
  </Text>
)

const styles = StyleSheet.create({
  text: {
    fontWeight: '600', 
    fontStyle: 'italic',
  }
})