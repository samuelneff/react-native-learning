import React, { ReactChildren, ReactChild } from "react";
import { StyleSheet, View } from "react-native";
import Styles from "../constants/styles";

interface Props {
  children: React.ReactNode[];
  style?: any;
}

export default function Card(props: Props) {
  const { children, style = {} } = props;
  return <View style={StyleSheet.compose(styles.card, style)}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    justifyContent: "space-between",
    ...Styles.shadow,
  },
});
