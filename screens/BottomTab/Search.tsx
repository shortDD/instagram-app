import React from "react";
import { Text } from "react-native";
import NavigationFactory from "../../navigators/NavigationFactory";
import { Container } from "./Home";
const Search = ({ navigation }: { navigation: any }) => {
  return (
    <Container>
      <Text>Search</Text>
    </Container>
  );
};

export default NavigationFactory([{ name: "SearchPage", component: Search }]);
