import React, { useState } from "react";
import { ScreenContainer } from "../components/ScreenContainer";
import { MyPressable } from "../components/Pressable";
import { StyleSheet, View, ScrollView } from "react-native";
import { newGame } from "../data/mk";
import { KartSettings } from "../components/KartSettings";

export const KartsScreen = () => {
  const [players, setPlayers] = useState(1);
  const [combos, setCombos] = useState([]);

  const handleGetKarts = () => {
    const { players: allPlayers } = newGame(players);
    setCombos(allPlayers);
  };

  return (
    <ScreenContainer title="Kart Combos">
      <View style={styles.buttons}>
        <MyPressable
          text={"1"}
          onPress={() => setPlayers(1)}
          selected={players === 1}
        />
        <MyPressable
          text={"2"}
          onPress={() => setPlayers(2)}
          selected={players === 2}
        />
        <MyPressable
          text={"3"}
          onPress={() => setPlayers(3)}
          selected={players === 3}
        />
        <MyPressable
          text={"4"}
          onPress={() => setPlayers(4)}
          selected={players === 4}
        />
      </View>
      <MyPressable text={"Get Kart Combos"} onPress={handleGetKarts} />
      {combos.length > 0 && (
        <ScrollView>
          {combos.map((combo, i) => (
            <KartSettings key={combo.id} item={combo} player={i + 1} />
          ))}
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
});
