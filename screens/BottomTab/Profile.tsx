import React from "react";
import { View, Text, Button } from "react-native";
import { logUserOut } from "../../apollo";
import { Container } from "./Home";
const Profile = () => {
  return (
    <Container>
      <Text>Profile</Text>

      <Button title="退出" onPress={logUserOut} />
    </Container>
  );
};

export default Profile;
