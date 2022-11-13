import React, { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useIsLoggedInt, useLogIn, useLogOut } from "./AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import AuthRouter from "../screens/Auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainTabNavigation from "../screens/MainBottomTab";
import MainNavigation from "../screens/MainNavigation";

export const NavController = () => {
  const isLoggedIn = useIsLoggedInt();
  const logIn = useLogIn();
  const logOut = useLogOut();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {!isLoggedIn ? <MainNavigation /> : <AuthRouter />}
    </NavigationContainer>
  );
};
