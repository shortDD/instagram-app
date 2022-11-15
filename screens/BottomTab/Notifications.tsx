import React from "react";
import { View, Text } from "react-native";
const Notifications = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text>Notifications</Text>
    </View>
  );
};

export default Notifications;
