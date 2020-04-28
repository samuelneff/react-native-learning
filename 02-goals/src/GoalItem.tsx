import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  onDelete: () => void;
  title: string;
}

export function GoalItem({ title, onDelete }: Props) {
  return (
    <TouchableOpacity onLongPress={onDelete}>
      <View style={styles.goalContainer}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 1,
  },
});
