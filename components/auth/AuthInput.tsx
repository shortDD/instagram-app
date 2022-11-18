import styled from "../../styles";
import React from "react";
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputIOSProps,
} from "react-native";
import {
  Control,
  Controller,
  Message,
  RegisterOptions,
  ValidationRule,
} from "react-hook-form";
const Container = styled.View`
  margin-bottom: 10px;
`;
const TextInput = styled.TextInput`
  border: 1px solid;
  padding: 8px;
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
  secureTextEntry?: boolean;
  control: Control<any>;
  name: string;
  rules?: Rules;
}
type Rules = {
  pattern?: ValidationRule<RegExp>;
  required?: Message | ValidationRule<boolean>;
};
const AuthInput: React.FC<IProps> = ({
  placeholder,
  keyboardType = "default",
  textContentType,
  secureTextEntry = false,
  control,
  name,
  rules,
}) => {
  return (
    <Container>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => {
          return (
            <TextInput
              placeholder={placeholder}
              value={value}
              keyboardType={keyboardType}
              onChangeText={onChange}
              // onChange={onChange}
              textContentType={textContentType}
              secureTextEntry={secureTextEntry}
            />
          );
        }}
        name={name}
      />
    </Container>
  );
};
export default AuthInput;
