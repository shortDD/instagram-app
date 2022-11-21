import React from "react";
import styled from "../../styles";
import { Container } from "../BottomTab/Home";
import { Text } from "react-native";
import Avatar from "../../components/Avatar";

//头部
const Header = styled.View`
  flex: 1;
  flex-direction: row;
`;
//头部左半区
const HeaderLeft = styled.View`
  flex: 1.2;
  align-items: center;
  justify-content: center;
`;
//头部右半区
const HeaderRight = styled.View`
  flex: 2;
  background-color: black;
`;
//中心
const Main = styled.View`
  flex: 3;
`;
const Profile = ({ route }: { route: any }) => {
  const userName = route.params.userName;

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Avatar avatarUrl={null} size="xxl" />
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </Header>
      <Main></Main>
    </Container>
  );
};
export default Profile;
