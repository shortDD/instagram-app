import React, { useCallback, useState } from "react";
import styled, { MyTheme } from "../../styles";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { iconsize } from "../../constanst";
import LinkToProfile from "../LinkToProfile";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 3px;
  padding-bottom: 3px;
`;

const DetailsPage = styled.View`
  width: 100px;
  height: 50px;
  background-color: black;
  position: absolute;
  left: -105px;
  top: -55px;
`;

interface IProps {
  userName: string;
  playload: string;
  isMine: boolean;
  isCaption?: boolean;
}
const Comment: React.FC<IProps> = ({
  userName,
  playload,
  isMine,
  isCaption = false,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <LinkToProfile userName={userName}>
          <Text style={{ marginRight: 10, fontWeight: "bold", fontSize: 18 }}>
            {userName}
          </Text>
        </LinkToProfile>
        <Text
          style={{
            fontSize: 16,
            color: MyTheme.blackColor,

            opacity: 0.8,
            fontWeight: "500",
          }}
        >
          {playload}
        </Text>
      </View>
      {!isCaption && (
        <View style={{ position: "relative", backgroundColor: "red" }}>
          {isMine ? (
            <TouchableOpacity
              onPress={() => {
                setOpen((current) => !current);
              }}
            >
              <Ionicons
                name="ellipsis-vertical"
                size={iconsize.sm}
                color={MyTheme.blackColor}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Ionicons name="heart" size={16} color={MyTheme.blackColor} />
            </TouchableOpacity>
          )}
          {open && <DetailsPage></DetailsPage>}
        </View>
      )}
    </Container>
  );
};

export default Comment;
