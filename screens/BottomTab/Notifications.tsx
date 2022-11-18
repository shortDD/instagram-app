import React from "react";
import { View, Text } from "react-native";
import NavigationFactory from "../../navigators/NavigationFactory";
import { Container } from "./Home";
const Notifications = ({ navigation }: { navigation: any }) => {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text>Notifications</Text>
    </Container>
  );
};

export default NavigationFactory([
  { name: "Notificate", component: Notifications },
]);
