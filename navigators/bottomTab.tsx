import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import Home from "../screens/BottomTab/Home";
import Notifications from "../screens/BottomTab/Notifications";
import Profile from "../screens/BottomTab/Profile";
import Search from "../screens/BottomTab/Search";
import { MyTheme } from "../styles";
const Tab = createBottomTabNavigator();
const BottomTabNavigation = ({ navigation }: { navigation: any }) => {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: MyTheme.lightGray,
          paddingBottom: 5,
          paddingTop: 5,
        },
        headerShown: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#73777B",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Profile") {
            iconName = "list";
          } else if (route.name === "Add") {
            iconName = "add";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Notifications") {
            iconName = "heart";
          }

          // You can return any component that you like here!
          return (
            <Ionicons name={iconName as undefined} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen
        name="Add"
        component={View}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("PhotoTabNavigation");
          },
        }}
      />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
