import "react-native-gesture-handler";
import Constants from "expo-constants";
import { MyTheme, ThemeProvider } from "./styles";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, AppRegistry } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useAssets } from "expo-asset";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import { client, isLoggedInVar } from "./apollo";
import { NavigationContainer } from "@react-navigation/native";
import LoggedOutNav from "./navigators/LoggedOutNav";
import LoggedInNav from "./navigators/LoggedInNav";
export default function App() {
  const [font] = Font.useFonts({ ...Ionicons.font });
  const [assets] = useAssets([require("./assets/logo.png")]);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  useEffect(() => {
    const preLoad = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.log(e);
      }
    };
    preLoad();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (font && assets && isLoggedIn !== null) {
      await SplashScreen.hideAsync();
    }
  }, [font, assets, isLoggedIn]);
  if (!font || !assets || isLoggedIn == null) return null;
  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={MyTheme}>
          <NavigationContainer>
            {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
          </NavigationContainer>
        </ThemeProvider>
      </ApolloProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
AppRegistry.registerComponent("MyApplication", () => App);
