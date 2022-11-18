import React from "react";
import { View, Text } from "react-native";
import { Container } from "../BottomTab/Home";
const Messages = () => {
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Text>Messages</Text>
    </Container>
  );
};

export default Messages;
