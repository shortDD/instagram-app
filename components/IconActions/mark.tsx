import React from "react";
import styled, { MyTheme } from "../../styles";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { iconsize } from "../../constanst";
const Container = styled.View``;

const MarkIconAcion = () => {
  return (
    <Container>
      <TouchableOpacity>
        <Ionicons name="bookmarks-outline" size={iconsize.md} color="black" />
      </TouchableOpacity>
    </Container>
  );
};

export default MarkIconAcion;
