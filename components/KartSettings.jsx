import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { palette } from "../style/palette";

export const KartSettings = ({ item }) => {
  const { driver, kart, wheels, glider, id } = item;

  return (
    <View style={styles.base}>
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>Player {id}</Text>
      </View>
      <Text>Driver: {driver}</Text>
      <Text>Kart: {kart}</Text>
      <Text>Wheels: {wheels}</Text>
      <Text>Glider: {glider}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 15,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  titleText: {
    color: palette.green.hex,
    fontWeight: "600",
    fontSize: 20,
  },
  price: {
    fontSize: 20,
  },
  description: {
    color: palette.black.hex,
    fontStyle: "italic",
  },
});
