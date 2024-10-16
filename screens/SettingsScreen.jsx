import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import { palette } from "../style/palette";
import { ScreenContainer } from "../components/ScreenContainer";
import { MyPressable } from "../components/Pressable";
import { newGp, newRules, weapons } from "../data/mk";
import { ComingSoon } from "../components/ComingSoon";
import { ListItem } from "../components/ListItem";

export const SettingsScreen = () => {
  const [mode, setMode] = useState("VS");
  const [settings, setSettings] = useState({
    GP: null,
    VS: null,
    Battle: null,
  });

  const handleGetSettings = () => {
    const callback = {
      GP: newGp,
      VS: newRules,
      Battle: () => {},
    };
    if (mode === "VS" || mode === "GP") {
      setSettings((prev) => ({ ...prev, [mode]: callback[mode]() }));
    }
  };

  const modeSettings = settings[mode];

  return (
    <ScreenContainer title={"Settings"}>
      <View style={styles.buttons}>
        <MyPressable
          text={"GP"}
          onPress={() => setMode("GP")}
          selected={mode === "GP"}
        />
        <MyPressable
          text={"VS"}
          onPress={() => setMode("VS")}
          selected={mode === "VS"}
        />
        <MyPressable
          text={"Battle"}
          onPress={() => setMode("Battle")}
          selected={mode === "Battle"}
        />
      </View>
      <MyPressable text={"Get Settings"} onPress={handleGetSettings} />
      {mode === "Battle" && <ComingSoon />}
      {mode === "GP" && modeSettings && (
        <View>
          <Text fontSize={28}>{modeSettings.cup.name}</Text>
          <ListItem title="Mode: " text={modeSettings.speed} />
          {modeSettings.cup.tracks.length > 0 &&
            modeSettings.cup.tracks.map((track, i) => (
              <Text key={i + 1}>
                Track {i + 1}: {track}
              </Text>
            ))}
        </View>
      )}
      {mode === "VS" && (
        <ScrollView>
          {modeSettings && (
            <View style={{ marginTop: 30 }}>
              <Text style={styles.ruleText}>
                <Text style={styles.ruleHeading}>Mode:</Text>{" "}
                {modeSettings.ccSpeed}
              </Text>
              <Text style={styles.ruleText}>
                <Text style={styles.ruleHeading}>Computer Skill:</Text>{" "}
                {modeSettings.computer}
              </Text>
              <Text style={styles.ruleText}>
                <Text style={styles.ruleHeading}>Teams:</Text>{" "}
                {String(modeSettings.teams)}
              </Text>
              <Text style={styles.ruleText}>
                <Text style={styles.ruleHeading}>Items:</Text>{" "}
                {modeSettings.itemsRule}
              </Text>
              {modeSettings.customWeapons && (
                <View>
                  <Text style={styles.ruleText}>
                    <Text style={styles.ruleHeading}>Custom Items:</Text>
                  </Text>
                  {modeSettings.customSettings.map((weapon) => (
                    <Text style={{ ...styles.ruleText, marginLeft: 15 }}>
                      {weapon}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          )}
        </ScrollView>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  ruleText: {
    fontSize: 20,
    color: palette.gray.hex,
  },
  ruleHeading: {
    fontWeight: "bold",
  },
});
