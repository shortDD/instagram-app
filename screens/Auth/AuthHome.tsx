import React from "react";
import AuthButton from "../../components/AuthButton";
import Logo from "../../components/Logo";
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
  color: ${(props) => props.theme.blueColor};
  font-size: 16px;
`;
const AuthHome = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Logo />
      <AuthButton
        text="create account"
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
    </View>
  );
};
export default AuthHome;
