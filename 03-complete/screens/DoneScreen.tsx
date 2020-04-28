import React from "react";
import { Image, StyleSheet, View, Button } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

interface Props {
  onPlayAgain: () => void;
  userNumber: number;
}

export default function DoneScreen(props: Props) {
  const { onPlayAgain, userNumber } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMethod="scale"
        resizeMode="stretch"
        source={require("../assets/success.png")}
      />
      <TitleText>I guessed it!</TitleText>
      <BodyText style={styles.body}>
        Your number was {userNumber} and I guessed it! Thank you for playing.
      </BodyText>
      <Button title="Play Again" onPress={onPlayAgain} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  image: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  body: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});
