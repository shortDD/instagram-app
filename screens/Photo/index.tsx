import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SelectPhoto from "./SelectPhoto";
import TakePhoto from "./TakePhoto";
import UploadPhoto from "./UploadPhoto";
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const PhotoTabNavigation = () => {
  return (
    <Tab.Navigator tabBarPosition="bottom">
      <Tab.Screen name="SelectPhoto" component={SelectPhoto} />
      <Tab.Screen name="TakePhoto" component={TakePhoto} />
    </Tab.Navigator>
  );
};

export default ({ navigation }: { navigation: any }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PhotoTab"
        component={PhotoTabNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{ headerTitle: "Back" }}
      />
    </Stack.Navigator>
  );
};