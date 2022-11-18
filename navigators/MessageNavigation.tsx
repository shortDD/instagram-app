import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from "expo-constants";
import React from "react";
import Message from "../screens/Messgae/Message";
import Messages from "../screens/Messgae/Messages";
const Tab = createMaterialTopTabNavigator();

const MessageNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarStyle: { paddingTop: Constants.statusBarHeight } }}
    >
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Message" component={Message} />
    </Tab.Navigator>
  );
};
export default MessageNavigation;
