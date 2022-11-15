import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BottomTabNavigation from "./bottomTab";
import MessageNavigation from "./MessageNavigation";
import PhotoTabNavigation from "./PhotoNavigation";
const Stack = createStackNavigator();

const LoggedInNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
      <Stack.Screen name="PhotoTabNavigation" component={PhotoTabNavigation} />
      <Stack.Screen name="MessageNavigation" component={MessageNavigation} />
    </Stack.Navigator>
  );
};
export default LoggedInNav;
