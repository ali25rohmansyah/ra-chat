import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils/Colors/Color";
import { Button, Gap } from "../../atoms";

const Header = ({onPress, title}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress}/>
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};
 
export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: 'center'
  },
  text: {
    textAlign: "center",
    flex: 1,
    fontSize: 20,
    fontFamily: "Nunito-Semibold",
    color: colors.text.primary
  },
});
