import { width } from "../constanst";
import styled from "../styles";
import React from "react";
const Image = styled.Image`
  width: ${width / 2}px;
  margin-bottom: 10px;
`;
const Logo = () => {
  return <Image resizeMode="contain" source={require("../assets/logo.png")} />;
};
export default Logo;
