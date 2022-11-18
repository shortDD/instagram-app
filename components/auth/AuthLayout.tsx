import styled from "../../styles";
import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { width } from "../../constanst";
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding-left: 25;
  padding-right: 25;
`;
const Content = styled.View`
  width: ${width / 1.5}px;
`;
const Line = styled.View`
  width: 100%;
  margin-top: 30;
  margin-bottom: 30;
  border: 0.5px solid #cfd2cf;
`;
const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  margin-bottom: 20px;
`;
const AuthLayout = ({
  children,
  showLogo = true,
  showLine = false,
}: {
  children: any;
  showLogo?: boolean;
  showLine?: boolean;
}) => {
  const dissmissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        width: "100%",
      }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={dissmissKeyboard}>
        <Container>
          {showLogo && (
            <Logo resizeMode="contain" source={require("../../assets/logo.png")} />
          )}
          <Content>{children}</Content>
          {showLine && <Line />}
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default AuthLayout;
