import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Container } from "../BottomTab/Home";
const SelectPhoto = ({ navigation }: { navigation: any }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("UploadPhoto");
      }}
    >
      <Container>
        <Text>SelectPhoto</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default SelectPhoto;
