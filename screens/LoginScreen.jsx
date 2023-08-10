import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, View, Text } from 'react-native';
import { palette } from '../assets/palette';
import { ScreenContainer } from '../components/ScreenContainer';
import { LabeledInput } from '../components/LabeledInput';
import { PageTitle } from '../components/PageTitle';

export const LoginScreen = () => {
  // TODO: add refs to inputs to allow "next" on return press
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <ScreenContainer>
      {!isLoggedIn ? (
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
          <Pressable style={styles.button} onPress={() => setIsLoggedIn(true)}>
            <Text style={styles.buttonText}>Log In</Text>
          </Pressable>
        </ScrollView>
      ) : (
        <Text style={styles.loggedInText}>
          You are logged in.
        </Text>
      )}
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
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    backgroundColor: palette.yellow.hex,
    // width: '40%',
    flexGrow: 0,
    paddingVertical: 12,
    paddingHorizontal: 48,
    textAlign: 'center', 
    fontSize: 24,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  loggedInText: {
    textAlign: 'center',
    fontSize: 24,
    color: palette.white.hex
  }
})
