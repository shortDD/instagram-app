import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
const Home = ({ navigation }: { navigation: any }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PhotoTabNavigation");
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
        <Text>Home</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Home;
