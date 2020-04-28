import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface Props {
  onGoalAdd: (goal: string) => void;
}

export function GoalInput({ onGoalAdd }: Props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(newEnteredGoal: string): void {
    setEnteredGoal(newEnteredGoal);
  }

  function addGoalPressHandler(): void {
    onGoalAdd && onGoalAdd(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={goalInputHandler}
        placeholder="New goal"
        style={styles.textInput}
        value={enteredGoal}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add Goal" onPress={addGoalPressHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  buttonContainer: { width: 100, paddingLeft: 10, paddingTop: 7.5 },
});
