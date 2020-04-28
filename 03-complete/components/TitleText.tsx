import React, { ReactNode } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface Props extends TextProps {
  children: ReactNode[] | ReactNode;
}

export default function TitleText(props: Props) {
  return (
    <Text
      {...props}
      style={StyleSheet.compose(styles.text, props.style as any)}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});
