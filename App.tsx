import "react-native-gesture-handler";
import Constants from "expo-constants";

import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AsyncStorage } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useAssets } from "expo-asset";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./components/AuthProvider";
import { NavController } from "./components/NavController";
export default function App() {
  const client = new ApolloClient({
    uri: "localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  const [font] = Font.useFonts({ ...Ionicons.font });
  const [assets] = useAssets([require("./assets/logo.png")]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  useEffect(() => {
    const preLoad = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
        if (isLoggedIn === null || isLoggedIn === "false") {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
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
        <AuthProvider isLoggedInInitialValue={isLoggedIn}>
          <NavController />
        </AuthProvider>
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
