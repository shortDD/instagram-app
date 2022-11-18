import React from "react";
import styled, { MyTheme } from "../../styles";
import { useForm, Controller } from "react-hook-form";
import AuthInput from "../auth/AuthInput";
import { Button, TextInput, View, Text } from "react-native";
const Container = styled.View`
  border-width: 1px;
  border-color: ${(props) => props.theme.borderGray};
  height: 60px;
  width: 100%;
  padding-left: 15;
  padding-right: 15;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
interface IProps {
  playload: string;
  photoId: number;
}
const PostComment: React.FC<IProps> = ({ playload, photoId }) => {
  const { control } = useForm({
    defaultValues: {
      playload: "",
    },
  });
  return (
    <Container>
      <View style={{ flex: 1, marginRight: 10 }}>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <TextInput
                placeholder="输入内容...."
                value={value}
                onChangeText={onChange}
                style={{
                  backgroundColor: MyTheme.inputBgColor,
                  padding: 5,
                  borderRadius: 5,
                }}
              />
            );
          }}
          name="playload"
        />
      </View>
      <Button title=" Post " />
    </Container>
  );
};

export default PostComment;
