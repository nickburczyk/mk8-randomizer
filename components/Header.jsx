import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Logo from "../assets/mk8-logo.png";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel="Mariokart logo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    textAlign: "center",
    padding: 10,
    paddingTop: 50,
    paddingBottom: 12,
  },
  logo: {
    height: 135,
  },
});
