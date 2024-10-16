import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { palette } from "../style/palette";

const { red } = palette;
export const ScreenContainer = ({ children, title }) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 20,
  },
  title: {
    color: red.hex,
    padding: 20,
    fontSize: 36,
    lineHeight: 54,
    textAlign: "center",
    fontWeight: "900",
    textTransform: "uppercase",
    fontStyle: "italic",
  },
});
