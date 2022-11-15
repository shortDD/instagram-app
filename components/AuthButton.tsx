import React from "react";
import { FlexStyle, GestureResponderEvent, StyleProp } from "react-native";
import { width } from "../constanst";
import styled from "../styles";
const Touchable = styled.TouchableOpacity``;
const Button = styled.View`
  background-color: ${(props) => props.theme.blueColor};
  width: ${width / 1.5}px;
  padding: 10px;
  border-radius: 5px;
`;
const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
`;
interface IProps {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
const AuthButton: React.FC<IProps> = ({ text, onPress }) => {
  return (
    <Touchable onPress={onPress}>
      <Button>
        <ButtonText>{text}</ButtonText>
      </Button>
    </Touchable>
  );
};
export default AuthButton;
