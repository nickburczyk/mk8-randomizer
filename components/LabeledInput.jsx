import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { palette } from "../style/palette";
import { capitalizeString } from "../lib/util";

const { yellow, orange, red, white } = palette;
const keyboardTypes = [
  "default",
  "email-address",
  "numeric",
  "phone-pad",
  "ascii-capable",
  "numbers-and-punctuation",
  "url",
  "number-pad",
  "name-phone-pad",
  "decimal-pad",
  "twitter",
  "web-search",
  "visible-password",
];
export const LabeledInput = ({
  label,
  name,
  placeholder,
  onChangeText,
  value,
  numberOfLines,
  isLastInput = false,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  const safeKeyboardType = keyboardTypes.includes(keyboardType)
    ? keyboardType
    : "default";

  return (
    <View style={styles.inputWrapper}>
      <Text style={styles.inputLabel}>{label || capitalizeString(name)}:</Text>
      <TextInput
        name={name}
        placeholder={placeholder}
        placeholderTextColor={white.hex}
        style={styles.input}
        cursorColor={red.hex}
        value={value}
        onChangeText={onChangeText}
        multiline={numberOfLines && numberOfLines > 1}
        numberOfLines={numberOfLines}
        returnKeyType={isLastInput ? "done" : "next"}
        secureTextEntry={secureTextEntry}
        keyboardType={safeKeyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 40,
  },
  inputLabel: {
    fontWeight: "600",
    color: orange.hex,
    fontSize: 18,
  },
  input: {
    textAlignVertical: "top",
    fontSize: 16,
    maxHeight: 100,
    padding: 12,
    color: yellow.hex,
    borderBottomColor: yellow.hex,
    borderBottomWidth: 1,
  },
});
