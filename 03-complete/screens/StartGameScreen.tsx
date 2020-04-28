import React, { useState } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import Card from "../components/Card";
import NumberInput from "../components/NumberInput";
import Colors from "../constants/colors";

interface Props {
  onStartGame: (userNumber: number) => void;
}

export default function StartGameScreen(props: Props) {
  const [enteredValue, setEnteredValue] = useState("");

  const { onStartGame } = props;

  function numberInputHandler(newInputValue: string) {
    setEnteredValue(newInputValue.replace(/[^0-9]/g, ""));
  }

  function resetHandler() {
    setEnteredValue("");
  }

  function startHandler() {
    const userNumber: number = parseInt(enteredValue);
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 99) {
      Alert.alert("Entry error", "Number entered must be between 1 and 99", [
        {
          text: "Try again",
          style: "default",
          onPress: resetHandler,
        },
      ]);
      return;
    }

    onStartGame && onStartGame(userNumber);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text>Start a new game</Text>
        <Card style={styles.card}>
          <Text>Select a number</Text>
          <NumberInput
            maxLength={2}
            onChangeText={numberInputHandler}
            style={styles.input}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.secondary}
                onPress={resetHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Start"
                color={Colors.primary}
                onPress={startHandler}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    minHeight: 150,
    marginTop: 20,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "40%",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: "40%",
  },
});
