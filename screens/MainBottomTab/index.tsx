import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Home from "./Home";
import NavigationFactory from "../../components/NavigationFactory";
import Notifications from "./Notifications";
import Profile from "./Profile";
import Search from "./Search";
const Tab = createBottomTabNavigator();
const fs = NavigationFactory([{ name: "HomePage", component: Home }]);
const BottomTabNavigation = ({ navigation }: { navigation: any }) => {
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          } else if (route.name === "Profile") {
            iconName = "list";
          } else if (route.name === "Add") {
            iconName = "logo-ionic";
          } else if (route.name === "Search") {
            iconName = "search";
          } else if (route.name === "Notifications") {
            iconName = "notifications-circle-outline";
          }

          // You can return any component that you like here!
          return (
            <Ionicons name={iconName as undefined} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        safeAreaInsets: true,
      }}
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
