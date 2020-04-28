import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import { GoalInput } from "./src/GoalInput";
import { GoalItem } from "./src/GoalItem";

interface KeyValue<T> {
  key: string;
  value: T;
}

export default function App() {
  const [goals, setGoals] = useState([] as KeyValue<string>[]);

  function goalAddHandler(newGoal: string): void {
    setGoals([
      ...goals,
      {
        key: Math.random().toString(36),
        value: newGoal,
      },
    ]);
  }

  function deleteHandler(key: string) {
    setGoals(goals.filter((goal) => goal.key !== key));
  }

  return (
    <View style={styles.container}>
      <GoalInput onGoalAdd={goalAddHandler} />
      <FlatList
        data={goals}
        renderItem={(info: ListRenderItemInfo<KeyValue<string>>) => (
          <GoalItem
            onDelete={() => deleteHandler(info.item.key)}
            title={info.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
});
