import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { palette } from "../style/palette";
import { ScreenContainer } from "../components/ScreenContainer";
import { useNavigation } from "@react-navigation/core";
import { MyPressable } from "../components/Pressable";

const { yellow, orange, white, red } = palette;

export const WelcomeScreen = () => {
  const navigation = useNavigation();
  const { title, name } = styles;

  return (
    <ScreenContainer>
      <ScrollView indicatorStyle="white">
        <Text style={title}>
          <Text style={name}>Randomizer{"\n"}</Text>
        </Text>
        <MyPressable
          text={"Randomize Karts"}
          onPress={() => navigation.navigate("Karts")}
          style={{ marginBottom: 15 }}
        />
        <MyPressable
          text={"Randomize Rules"}
          onPress={() => navigation.navigate("Settings")}
          style={{ marginBottom: 15 }}
        />
        <MyPressable
          text={"Saved Games"}
          onPress={() => navigation.navigate("History")}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    color: red.hex,
    padding: 20,
    fontSize: 36,
    lineHeight: 54,
    textAlign: "center",
  },
  name: {
    fontWeight: "700",
  },
});
