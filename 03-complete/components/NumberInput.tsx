import React from "react";
import Input from "./Input";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps {}
export default function NumberInput(props: Props) {
  return <Input {...props} keyboardType="number-pad" />;
}
