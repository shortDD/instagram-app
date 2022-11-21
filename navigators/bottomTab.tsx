import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import { iconsize } from "../constanst";
import Home from "../screens/BottomTab/Home";
import Notifications from "../screens/BottomTab/Notifications";
import Search from "../screens/BottomTab/Search";
import { MyTheme } from "../styles";
import Mine from "../screens/BottomTab/Mine";
const Tab = createBottomTabNavigator();
const BottomTabNavigation = ({ navigation }: { navigation: any }) => {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: MyTheme.lightGray,
          height: 55,
        },
        headerShown: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#73777B",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Mine") {
            iconName = "person";
          } else if (route.name === "Add") {
            iconName = "add";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Notifications") {
            iconName = "notifications-circle";
          }
          // You can return any component that you like here!
          return (
            <Ionicons
              name={iconName as undefined}
              size={iconsize.md}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "主页" }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ tabBarLabel: "搜索" }}
      />
      <Tab.Screen
        name="Add"
        component={View}
        options={{ tabBarLabel: "" }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("PhotoTabNavigation");
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ tabBarLabel: "通知" }}
      />
      <Tab.Screen
        name="Mine"
        component={Mine}
        options={{ tabBarLabel: "个人中心" }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
