import React from "react";
import { Text, StyleSheet } from "react-native";
import { palette } from "../style/palette";

export const ListItem = ({ title, text }) => (
  <Text style={styles.ruleText}>
    <Text style={styles.ruleHeading}>{title}:</Text> {text}
  </Text>
);

const styles = StyleSheet.create({
  ruleText: {
    fontSize: 20,
    color: palette.gray.hex,
  },
  ruleHeading: {
    fontWeight: "bold",
  },
});
