import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AuthHome from "./AuthHome";
import Confirm from "./Confirm";
import Login from "./LogIn";
import SignUp from "./SignUp";
const Stack = createStackNavigator();
const AuthRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthHome"
      screenOptions={{ headerMode: "screen" }}
    >
      <Stack.Screen name="AuthHome" component={AuthHome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Confirm" component={Confirm} />
    </Stack.Navigator>
  );
};
export default AuthRouter;
