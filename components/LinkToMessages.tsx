import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity``;
const Text = styled.Text`
  margin-right: 10px;
`;
const LinkToMessage = ({ navigation }: { navigation: any }) => {
  return (
    <Container
      onPress={() => {
        navigation.navigate("MessageNavigation");
      }}
    >
      <Text>Messages</Text>
    </Container>
  );
};
export { LinkToMessage };
