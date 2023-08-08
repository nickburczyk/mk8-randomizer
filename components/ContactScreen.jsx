import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { palette } from '../assets/palette';
import { ScreenContainer } from './ScreenContainer';
import { capitalizeString } from '../lib/util';

const { yellow, orange,red, white, gray } = palette

export const ContactScreen = () => {
  // TODO: add refs to inputs to allow "next" on return press
  const { title } = styles

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <ScreenContainer>
      <ScrollView 
        indicatorStyle='white'
      >
        <Text style={title}>
          Get in touch
        </Text> 
        <Text style={styles.textBody}>
          Your feedback is important to us
        </Text>
        <View style={styles.formWrapper}>
          <Input
            name="name"
            placeholder='Name'
            value={name}
            onChange={setName}
          />
          <Input
            name="email"
            placeholder='Email Address'
            value={email}
            onChange={setEmail}
          />
          <Input
            name="message"
            placeholder='Type your message here'
            value={message}
            onChange={setMessage}
            numberOfLines={4}
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const Input = ({ 
  label, 
  name, 
  placeholder, 
  onChange, 
  value, 
  numberOfLines, 
  isLastInput = false 
}) => (
  <View style={styles.inputWrapper}>
    <Text style={styles.inputLabel}>
      {label || capitalizeString(name)}:
    </Text>
    <TextInput
      name={name}
      placeholder={placeholder}
      placeholderTextColor={gray.hex}
      style={styles.input}
      cursorColor={red.hex}
      value={value}
      onChangeText={onChange}
      multiline={numberOfLines && numberOfLines > 1}
      numberOfLines={numberOfLines}
      returnKeyType={isLastInput ? 'done' : 'next'}
    />
  </View>
)

const styles = StyleSheet.create({

  title: {
    color: red.hex, 
    fontWeight: '900',
    fontSize: 36,
    lineHeight: 54,
  },
  textBody: {
    color: white.hex,
    marginBottom: 20
  },
  formWrapper: {
    marginTop: 20
  },
  inputWrapper:{
    marginBottom: 40
  },
  inputLabel: {
    fontWeight: '600',
    color: orange.hex,
  },
  input: {
    textAlignVertical: 'top',
    maxHeight: 100,
    padding: 12,
    color: yellow.hex,
    borderBottomColor: yellow.hex,
    borderBottomWidth: 1
  }
})
