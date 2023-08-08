import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { palette } from '../assets/palette';
import { AccentedText } from './AccentedText';

export const MenuItem = ({item}) => {
  const { name, price, description } = item
  const priceString = `$${parseFloat(price).toFixed(2)}`

  return (
    <View style={styles.base}>
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>{name}</Text>
        <Text style={styles.price}>
          <AccentedText text={priceString} color={palette.yellow.hex}/>
        </Text>
      </View>
      {description && 
        <Text style={styles.description}>{description}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 30
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  titleText: {
    color: palette.orange.hex,
    fontWeight: '600',
    fontSize: 20
  },
  price:{
    fontSize:20,
  },
  description: {
    color: palette.white.hex,
    fontStyle: 'italic',
  }
})
