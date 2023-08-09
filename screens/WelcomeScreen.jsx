import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native';
import { palette } from '../assets/palette';
import { AccentedText } from '../components/AccentedText'
import { ScreenContainer } from '../components/ScreenContainer';

const { yellow, orange, white } = palette

export const WelcomeScreen = () => {
  const { title, name } = styles

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
  }
})
