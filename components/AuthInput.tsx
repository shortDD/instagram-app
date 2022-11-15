import styled from "../styles";
import React from "react";
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputIOSProps,
} from "react-native";
const Container = styled.View`
  margin-bottom: 20px;
`;
const TextInput = styled.TextInput`
  border: 1px solid;
  padding: 10px;
  border-radius: 5px;
  border-color: ${(props) => props.theme.borderColor};
  background: ${(props) => props.theme.inputBgColor};
`;
interface IProps {
  placeholder: string;
  value?: string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  textContentType?: TextInputIOSProps["textContentType"];
  onChange?:
    | ((e: NativeSyntheticEvent<TextInputChangeEventData>) => void)
    | undefined;
}
const AuthInput: React.FC<IProps> = ({
  placeholder,
  value,
  keyboardType = "default",
  onChange,
  onChangeText,
  textContentType,
}) => {
  return (
    <Container>
      <TextInput
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        onChange={onChange}
        textContentType={textContentType}
      />
    </Container>
  );
};
export default AuthInput;
