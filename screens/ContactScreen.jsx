import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native';
import { palette } from '../assets/palette';
import { ScreenContainer } from '../components/ScreenContainer';
import { LabeledInput } from '../components/LabeledInput';
import { PageTitle } from '../components/PageTitle';

export const ContactScreen = () => {
  // TODO: add refs to inputs to allow "next" on return press
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <ScreenContainer>
      <ScrollView indicatorStyle='white' keyboardDismissMode='on-drag'>
        <PageTitle 
          title='Get in Touch' 
          blurb='Your feedback is important to us.'
        />
        <View style={styles.formWrapper}>
          <LabeledInput
            name="name"
            placeholder='Name'
            value={name}
            onChangeText={setName}
          />
          <LabeledInput
            name="email"
            placeholder='Email Address'
            value={email}
            onChangeText={setEmail}
          />
          <LabeledInput
            name="message"
            placeholder='Type your message here'
            value={message}
            onChangeText={setMessage}
            numberOfLines={4}
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
