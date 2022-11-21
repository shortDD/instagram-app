import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Container } from "../BottomTab/Home";
const SelectPhoto = ({ navigation }: { navigation: any }) => {
  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UploadPhoto");
        }}
      >
        <Text>SelectPhoto</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default SelectPhoto;
