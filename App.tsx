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
import { client, isLoggedInVar, TOKEN, tokenVar } from "./apollo";
import { NavigationContainer } from "@react-navigation/native";
import LoggedOutNav from "./navigators/LoggedOutNav";
import LoggedInNav from "./navigators/LoggedInNav";
import AsyncStorage from "@react-native-async-storage/async-storage";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [font] = Font.useFonts({ ...Ionicons.font });
  const [assets] = useAssets([require("./assets/logo.png")]);
  const [preLoad, setPreLoad] = useState(false);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  useEffect(() => {
    const preLoad = async () => {
      try {
        const token = await AsyncStorage.getItem(TOKEN);
        if (token) {
          isLoggedInVar(true);
          tokenVar(token);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setPreLoad(true);
      }
    };
    preLoad();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (font && assets && preLoad) {
      await SplashScreen.hideAsync();
    }
  }, [font, assets, preLoad]);
  if (!font || !assets || !preLoad) return null;
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
    // marginTop: Constants.statusBarHeight,
  },
});
AppRegistry.registerComponent("MyApplication", () => App);
