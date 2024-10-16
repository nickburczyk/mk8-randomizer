import React from "react";
import { View, StyleSheet } from "react-native";
import { palette } from "../assets/palette";
import { Header } from "./Header";

export const StyledAppWrapper = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: palette.white.hex,
  },
  background: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
