import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Styles from "../constants/styles";

interface Props {}
export default function StartGameScreen(props: Props) {
  return (
    <View style={styles.screen}>
      <Text>Start a new game</Text>
      <Card style={styles.card}>
        <Text>Select a number</Text>
        <TextInput style={styles.input} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.secondary}
              onPress={() => null}
            />
          </View>
          <View style={styles.button}>
            <Button title="Guess" color={Colors.primary} onPress={() => null} />
          </View>
        </View>
      </Card>
    </View>
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
    width: "80%",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "black",
    padding: 5,
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
