import React from 'react';
import { View, ImageBackground, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { palette } from '../assets/palette';
import { Header } from './Header';
import { Footer } from './Footer';
import WingDrip from '../assets/wingdrip.png'

export const StyledAppWrapper = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={WingDrip} 
        resizeMethod="auto" 
        resizeMode='cover' 
        style={styles.background}
      >
        <Header/>
        <View style={{flex: 1}}>
          {children}
          <Footer/>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: palette.white.hex,
  },
  background: {
    flex:1,
    justifyContent: 'flex-start',
  }
});
