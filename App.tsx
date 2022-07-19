import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";
import { ThemeProvider } from "styled-components/native";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./styled";

export default function App() {
  const [assets] = useAssets([require("./preview.png")]);
  const [loaded] = Font.useFonts(Ionicons.font);
  const isDark = useColorScheme() === "dark";
  console.log(isDark);
  if (!assets || !loaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}