import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconContainer } from "./toggleLike";
import { iconsize } from "../../constanst";
const RoomIconAcion = () => {
  return (
    <IconContainer>
      <TouchableOpacity>
        <Ionicons name="chatbubble-outline" size={iconsize.md} color="black" />
      </TouchableOpacity>
    </IconContainer>
  );
};

export default RoomIconAcion;
