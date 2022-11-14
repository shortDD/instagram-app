import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

const Container = styled.TouchableOpacity``;
const IText = styled.Text``;
const LinkToMessage = ({ navigation }: { navigation: any }) => {
  return (
    <Container
      onPress={() => {
        navigation.navigate("MessageNavigation");
      }}
    >
      <IText>Messages</IText>
    </Container>
  );
};
export { LinkToMessage };
