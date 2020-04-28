import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {}
export default function Input(props: Props) {
  return (
    <TextInput
      {...props}
      style={StyleSheet.compose(styles.input, props.style as any)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    padding: 5,
  },
});
