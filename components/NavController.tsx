import React, { useContext } from "react";
import { useIsLoggedInt } from "./AuthProvider";
import { NavigationContainer } from "@react-navigation/native";
import AuthRouter from "../screens/Auth";

import MainNavigation from "../screens/MainNavigation";

export const NavController = () => {
  const isLoggedIn = useIsLoggedInt();

  return (
    <NavigationContainer>
      {!isLoggedIn ? <MainNavigation /> : <AuthRouter />}
    </NavigationContainer>
  );
};
