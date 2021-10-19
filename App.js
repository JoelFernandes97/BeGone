import React from "react";
import { StyleSheet } from "react-native";
import { Courgette_400Regular } from "@expo-google-fonts/courgette";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./app/routes/homeStack";

export default function App() {
  let [fontLoaded] = useFonts({
    Courgette_400Regular,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});
