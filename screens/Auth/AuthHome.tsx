import { Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";
const AuthHome = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text>Auth Home</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text>登入</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text>注册</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AuthHome;
