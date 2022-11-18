import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { View, Text } from "react-native";
import { Container } from "../BottomTab/Home";
const Tab = createMaterialTopTabNavigator();

const UploadPhoto = () => {
  return (
    <Container>
      <Text>Upload</Text>
    </Container>
  );
};

export default UploadPhoto;
