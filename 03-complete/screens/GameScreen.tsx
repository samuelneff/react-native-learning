import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import randomIntBetween from "../utils/randomIntBetween";

interface Props {
  userNumber: number;
}

export default function GameScreen(props: Props) {
  let [minBound, setMinBound] = useState(1);
  let [maxBound, setMaxBound] = useState(99);
  const [guess, setGuess] = useState(randomIntBetween(minBound, maxBound));

  const { userNumber } = props;

  function guessLower() {
    setMaxBound((maxBound = guess - 1));
    newGuess();
  }

  function guessHigher() {
    setMinBound((minBound = guess + 1));
    newGuess();
  }

  function newGuess() {
    if (minBound > maxBound) {
      Alert.alert(
        "Hmmmm",
        `I think you're cheating. According to your 'lower' and 'higher' preses the number is at least ${minBound} but not more than ${maxBound}; that can't be.`,
        [
          {
            text: "Restart Guessing",
            style: "destructive",
            onPress: () => {
              setMinBound(1);
              setMaxBound(99);
              setGuess(50);
            },
          },
        ]
      );
      return;
    }

    setGuess(randomIntBetween(minBound, maxBound));
  }

  return (
    <View style={styles.container}>
      <View style={styles.guess}>
        <Text>
          Guess: {guess} (your number {userNumber})
        </Text>
      </View>
      {guess === userNumber ? (
        <Text>That's it! I guessed your number</Text>
      ) : (
        <View style={styles.buttons}>
          <Button title="LOWER" onPress={guessLower} />
          <Button title="HIGHER" onPress={guessHigher} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  guess: {},
  buttons: {
    marginTop: 20,
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
  },
});
