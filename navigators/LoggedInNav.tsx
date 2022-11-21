import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import PhotoDetail from "../screens/Photo/Detail";
import Profile from "../screens/User/Profile";
import BottomTabNavigation from "./bottomTab";
import MessageNavigation from "./MessageNavigation";
import PhotoTabNavigation from "./PhotoNavigation";
const Stack = createStackNavigator();

const LoggedInNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PhotoTabNavigation"
        component={PhotoTabNavigation}
        options={{
          headerBackTitle: "返回",
          headerTitle: "相册",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="MessageNavigation"
        component={MessageNavigation}
        options={{
          headerBackTitle: "返回",
          headerTitle: "聊天室",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="PhotoDetail"
        component={PhotoDetail}
        options={{
          headerBackTitle: "返回",
          headerTitle: "PhotoDetail",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerBackTitle: "返回",
          headerTitle: "个人主页",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};
export default LoggedInNav;
