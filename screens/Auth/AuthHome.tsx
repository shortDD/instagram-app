import React from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import { Button } from "react-native";
import styled from "../../styles";
export const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fefdfc;
`;
const Touchable = styled.TouchableOpacity``;
const LoginLink = styled.View`
  margin-top: 25px;
`;
const LoginLinkText = styled.Text`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.blueColor};
  font-size: 16px;
`;
const AuthHome = ({ navigation }: { navigation: any }) => {
  return (
    <AuthLayout>
      <Button
        title="create account"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
      <Touchable
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <LoginLink>
          <LoginLinkText>Log in</LoginLinkText>
        </LoginLink>
      </Touchable>
    </AuthLayout>
  );
};
export default AuthHome;
