import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
const SelectPhoto = ({ navigation }: { navigation: any }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("UploadPhoto");
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Text>SelectPhoto</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SelectPhoto;
