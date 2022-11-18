import React, { Children } from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  margin-right: 10px;
`;

const LinkToMessage = ({
  navigation,
  children,
}: {
  navigation: any;
  children: any;
}) => {
  return (
    <Container
      onPress={() => {
        navigation.navigate("MessageNavigation");
      }}
    >
      {children}
    </Container>
  );
};
export { LinkToMessage };
