import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { ILGetStarted, ILLogo } from "../../assets";
import { Button, Gap } from "../../components";
import { colors } from "../../utils/Colors/Color";

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & Fleksibel
        </Text>
      </View>
      <View>
        <Button
          type="primary"
          title="Get Started"
          onPress={() => navigation.navigate("Register")}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    fontFamily: "Nunito-SemiBold",
    color: colors.white,
    marginTop: 91,
  },
});
