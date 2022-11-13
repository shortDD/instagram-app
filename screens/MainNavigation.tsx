import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BottomTabNavigation from "./MainBottomTab";
import MessageNavigation from "./MessageNavigation";
import PhotoTabNavigation from "./Photo";
const Stack = createStackNavigator();

const MainNavigation = () => {
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
export default MainNavigation;
