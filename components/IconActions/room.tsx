import React from "react";
import styled, { MyTheme } from "../../styles";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconContainer } from "./toggleLike";
const RoomIconAcion = () => {
  return (
    <IconContainer>
      <TouchableOpacity>
        <Ionicons name="chatbubble-outline" size={24} color="black" />
      </TouchableOpacity>
    </IconContainer>
  );
};

export default RoomIconAcion;
