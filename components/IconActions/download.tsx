import React from "react";
import styled, { MyTheme } from "../../styles";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { IconContainer } from "./toggleLike";
import { iconsize } from "../../constanst";

const DownloadIconAcion = () => {
  return (
    <IconContainer>
      <TouchableOpacity>
        <Ionicons name="download-outline" size={iconsize.md} color="black" />
      </TouchableOpacity>
    </IconContainer>
  );
};

export default DownloadIconAcion;
