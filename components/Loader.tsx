import { ActivityIndicator } from "react-native";
import React from "react";
import styled, { MyTheme } from "../styles";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Loader = () => {
  return (
    <Container>
      <ActivityIndicator color={MyTheme.blackColor} />
    </Container>
  );
};
export default Loader;
