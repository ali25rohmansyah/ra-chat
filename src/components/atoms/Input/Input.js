import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../../utils/Colors/Color";

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label }</Text>
      <TextInput style={styles.input}></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    color: colors.black
  },
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: "Nunito-SemiBold",
  },
});
