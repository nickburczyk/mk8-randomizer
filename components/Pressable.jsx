import React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { palette } from "../style/palette";

const { red, blue, white } = palette;

export const MyPressable = ({ text, onPress, selected, style }) => (
  <View>
    <Pressable onPress={onPress} style={{ ...styles.viewMenuButton, ...style }}>
      <Text
        style={
          selected
            ? { ...styles.btnText, backgroundColor: red.hex }
            : styles.btnText
        }
      >
        {text}
      </Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  viewMenuButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    padding: 12,
    paddingHorizontal: 30,
    color: white.hex,
    backgroundColor: blue.hex,
    fontSize: 24,
    fontWeight: "900",
    fontStyle: "italic",
    textTransform: "uppercase",
  },
  selected: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: red.hex,
  },
});
