import React, { useState, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import Header from "./components/Header";
import Screens from "./constants/Screens";
import DoneScreen from "./screens/DoneScreen";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";

function fetchFonts() {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
}
export default function App() {
  const [currentScreen, setCurrentScreen] = useState(Screens.start);
  const [userNumber, setUserNumber] = useState(-1);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  function startGameHandler(newUserNumber: number) {
    setUserNumber(newUserNumber);
    setCurrentScreen(Screens.game);
  }

  function gameOverHandler(): void {
    setCurrentScreen(Screens.done);
  }

  function playAgainHandler(): void {
    setCurrentScreen(Screens.start);
  }

  let screen: ReactNode;
  switch (currentScreen) {
    case Screens.start:
      screen = <StartGameScreen onStartGame={startGameHandler} />;
      break;

    case Screens.game:
      screen = (
        <GameScreen onGameOver={gameOverHandler} userNumber={userNumber} />
      );
      break;

    case Screens.done:
      screen = (
        <DoneScreen onPlayAgain={playAgainHandler} userNumber={userNumber} />
      );
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
