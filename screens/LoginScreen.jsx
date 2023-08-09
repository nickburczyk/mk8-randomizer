import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { palette } from '../assets/palette';
import { ScreenContainer } from '../components/ScreenContainer';
import { capitalizeString } from '../lib/util';
import { Input } from '../components/Input';
import { PageTitle } from '../components/PageTitle';

export const LoginScreen = () => {
  // TODO: add refs to inputs to allow "next" on return press
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ScreenContainer>
      <ScrollView 
        indicatorStyle='white'
      >
        <PageTitle 
          title='Welcome!' 
          blurb='Please log in to continue'
        />
        <View style={styles.formWrapper}>
          <Input
            name="username"
            placeholder='Username'
            value={username}
            onChange={setUsername}
          />
          <Input
            name="password"
            placeholder='Password'
            value={password}
            onChange={setPassword}
            secureTextEntry
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  textBody: {
    color: palette.white.hex,
    marginBottom: 20,
    fontSize: 16
  },
  formWrapper: {
    marginTop: 20
  }
})
