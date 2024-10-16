import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { palette } from "../style/palette";

const { gray } = palette;

export const ComingSoon = () => (
  <View>
    <Text style={s.text}>Coming soon!</Text>
  </View>
);

const s = StyleSheet.create({
  text: {
    color: gray.hex,
    padding: 20,
    fontSize: 36,
    lineHeight: 54,
    textAlign: "center",
    fontWeight: "900",
    textTransform: "uppercase",
  },
});
