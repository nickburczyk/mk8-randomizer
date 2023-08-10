import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import { palette } from '../assets/palette';
import { ScreenContainer } from '../components/ScreenContainer';
import { LabeledInput } from '../components/LabeledInput';
import { PageTitle } from '../components/PageTitle';

export const LoginScreen = () => {
  // TODO: add refs to inputs to allow "next" on return press
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ScreenContainer>
      <ScrollView 
        indicatorStyle='white'
        keyboardDismissMode='on-drag'
      >
        <PageTitle 
          title='Welcome!' 
          blurb='Please log in to continue'
        />
        <View style={styles.formWrapper}>
          <LabeledInput
            name="username"
            placeholder='Username'
            value={username}
            onChangeText={setUsername}
            keyboardType='email-address'
          />
          <LabeledInput
            name="password"
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
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
