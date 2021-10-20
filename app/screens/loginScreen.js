import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Text,
  Image,
} from "react-native";

function login(props) {
  const [emailAddress, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLogin = () => {
    console.log("** LOG: You pressed Login (LoginScreen) **");
    //add a database to save data
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.heading2}>Login To Your Account</Text>
        <Text style={styles.heading4}>
          Please Enter Your Information To Login
        </Text>
      </View>
      <View>
        <View>
          <Image
            style={styles.iconTextInput}
            source={require("../assets/emailIcon.png")}
          />
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={emailAddress}
            placeholder="Email Address"
            placeholderTextColor="#000000"
            keyboardType="email-address"
          />
        </View>
        <View>
          <Image
            style={styles.iconTextInput}
            source={require("../assets/passwordIcon.png")}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor="#000000"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.loginButton}>
        <TouchableOpacity onPress={onLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.borderDesign1} />
      <View style={styles.borderDesign2} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fbfbfb",
  },
  iconTextInput: {
    height: 25,
    width: 25,
    top: 50,
    right: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 10,
  },
  heading2: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    color: "#000000",
  },
  heading4: {
    fontSize: 10,
    padding: 10,
    textAlign: "center",
    color: "#000000",
  },
  input: {
    height: 20,
    width: 300,
    margin: 12,
    borderWidth: 1,
    marginTop: 30,
    borderWidth: 0,
    fontSize: 18,
    color: "black",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  loginButton: {
    width: "60%",
    height: 70,
    marginTop: 50,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#078192",
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
    marginTop: 205,
    backgroundColor: "#ffcc56",
  },
  borderDesign2: {
    width: "100%",
    height: 70,
    backgroundColor: "#078192",
  },
});
export default login;
