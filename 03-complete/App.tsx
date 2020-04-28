import React, { useState, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import Screens from "./constants/Screens";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(Screens.start);
  const [userNumber, setUserNumber] = useState(-1);

  function startGameHandler(newUserNumber: number) {
    setUserNumber(newUserNumber);
    setCurrentScreen(Screens.game);
  }

  let screen: ReactNode;
  switch (currentScreen) {
    case Screens.start:
      screen = <StartGameScreen onStartGame={startGameHandler} />;
      break;

    case Screens.game:
      screen = <GameScreen userNumber={userNumber} />;
      break;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
