import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import Message from "../screens/Messgae/Message";
import Messages from "../screens/Messgae/Messages";
const Tab = createMaterialTopTabNavigator();

const MessageNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Message" component={Message} />
    </Tab.Navigator>
  );
};
export default MessageNavigation;
