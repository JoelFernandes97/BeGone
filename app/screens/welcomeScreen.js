import React from "react";
import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";

function welcomeScreen({ navigation }) {
  const login = () => {
    console.log("** LOG: You pressed login **");
    navigation.navigate("loginScreen");
  };
  const onRegister = () => {
    console.log("** LOG: You pressed register **");
    navigation.navigate("registerScreen");
  };

  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo2.png")} />
        <Text style={styles.text}>Don't Need it? Sell it!</Text>
      </View>

      <View style={styles.loginButton}>
        <TouchableOpacity onPress={login}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerButton}>
        <TouchableOpacity onPress={onRegister}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.borderDesign1} />
      <View style={styles.borderDesign2} />
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#3B3B3B",
  },
  loginButton: {
    width: "60%",
    height: 70,
    bottom: 190,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#078192",
  },
  registerButton: {
    width: "60%",
    height: 70,
    bottom: 170,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#078192",
  },
  logo: {
    width: 350,
    height: 250,
    left: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    color: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "Courgette_400Regular",
  },
  btnText: {
    color: "black",
    fontSize: 18,
    top: 20,
    textAlign: "center",
  },
  borderDesign1: {
    width: "100%",
    height: 50,
    marginTop: 35,
    backgroundColor: "#ffcc56",
  },
  borderDesign2: {
    width: "100%",
    height: 57,
    backgroundColor: "#078192",
  },
});

export default welcomeScreen;
