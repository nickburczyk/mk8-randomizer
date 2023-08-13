import React from 'react'
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';
import { palette } from '../assets/palette';
import { AccentedText } from '../components/AccentedText'
import { ScreenContainer } from '../components/ScreenContainer';
import { useNavigation } from '@react-navigation/core';

const { yellow, orange, white } = palette

export const WelcomeScreen = () => {
  const navigation = useNavigation();
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
        <Pressable 
          onPress={()=>navigation.navigate('Menu')}
          style={styles.viewMenuButton}
        >
          <Text style={styles.btnText}>View Menu</Text>
        </Pressable>
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
  viewMenuButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    padding: 12,
    paddingHorizontal: 30,
    backgroundColor: palette.yellow.hex,
    fontSize: 24,
    fontWeight: "900",
    fontStyle: 'italic',
    textTransform: 'uppercase',

  }
})
