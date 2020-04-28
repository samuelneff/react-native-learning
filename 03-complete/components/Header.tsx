import React from "react";
import { StyleSheet, View } from "react-native";
import TitleText from "./TitleText";
import Colors from "../constants/colors";

interface Props {
  title: string;
}

export default function Header(props: Props) {
  const { title } = props;
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
  },
});
