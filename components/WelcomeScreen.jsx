import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { palette } from '../assets/palette';
import wingDrip from '../assets/wingdrip.png'
import { longText } from '../lib/menu';
import { AccentedText } from './AccentedText'
import { ScreenContainer } from './ScreenContainer';

const { yellow, orange, white } = palette

export const WelcomeScreen = () => {
  const { container, title, name, background } = styles

  return (
    <ScreenContainer>
      <ScrollView indicatorStyle='white'>
        <Text style={title} >
          <Text style={name}>Wingamabobs{'\n'}</Text>
          will light you up with the
          <AccentedText text={'crispiest'} color={yellow.hex}/>
          wings, drenched in the
          <AccentedText text={'spiciest'} color={orange.hex}/> 
          sauces around!
        </Text> 
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({

  title: {
    color: white.hex, 
    padding: 20, 
    fontSize: 36,
    lineHeight: 54,
    textAlign: 'center'
  },
  name: {
    fontWeight: '700'
  },
  background: {
    flex:1,
    paddingTop: 40,
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
})
