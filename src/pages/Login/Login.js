import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ILLogo } from "../../assets";
import { Button, Gap, Input } from "../../components/atoms";
import Link from "../../components/atoms/Link/Link";
import { colors } from "../../utils/Colors/Color";

const Login = () => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <Input label="E-Mail Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Lupa password" size={12} />
      <Gap height={40} />
      <Button type="primary" title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={12} align="center"/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontFamily: "Nunito-SemiBold",
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
