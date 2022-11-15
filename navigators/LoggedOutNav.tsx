import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AuthHome from "../screens/Auth/AuthHome";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/LogIn";
import SignUp from "../screens/Auth/SignUp";
const Stack = createStackNavigator();
const LoggedOutNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthHome"
      screenOptions={{ headerMode: "screen", headerShown: false }}
    >
      <Stack.Screen name="AuthHome" component={AuthHome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Confirm" component={Confirm} />
    </Stack.Navigator>
  );
};
export default LoggedOutNav;
