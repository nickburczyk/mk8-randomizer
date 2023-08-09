import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { palette } from '../assets/palette';
import { capitalizeString } from '../lib/util';

const { yellow, orange,red, gray } = palette

export const Input = ({ 
  label, 
  name, 
  placeholder, 
  onChange, 
  value, 
  numberOfLines, 
  isLastInput = false,
  secureTextEntry = false
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
      secureTextEntry={secureTextEntry}
    />
  </View>
)

const styles = StyleSheet.create({
  inputWrapper:{
    marginBottom: 40
  },
  inputLabel: {
    fontWeight: '600',
    color: orange.hex,
    fontSize: 18
  },
  input: {
    textAlignVertical: 'top',
    fontSize: 16,
    maxHeight: 100,
    padding: 12,
    color: yellow.hex,
    borderBottomColor: yellow.hex,
    borderBottomWidth: 1
  }
})