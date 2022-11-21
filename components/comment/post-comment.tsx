import React from "react";
import styled, { MyTheme } from "../../styles";
import { useForm, Controller } from "react-hook-form";
import { Button, TextInput, View, Text } from "react-native";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../../apollo-hooks/apollo-mutation";
import {
  CreateComment,
  CreateCommentVariables,
} from "../../__generated__/CreateComment";
const Container = styled.View`
  border-width: 1px;
  border-color: ${(props) => props.theme.borderGray};
  height: 60px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
interface IProps {
  playload: string;
  photoId: number;
}
const PostComment: React.FC<IProps> = ({ playload, photoId }) => {
  const { control, handleSubmit, getValues, reset } = useForm({
    defaultValues: {
      playload: "",
    },
  });
  const [createComment, { loading }] = useMutation<
    CreateComment,
    CreateCommentVariables
  >(CREATE_COMMENT, {
    update: (cache, { data }) => {
      if (data?.createComment.ok) {
        reset();
        cache.modify({
          id: `Photo:${photoId}`,
          fields: {
            comments: (pre) => [...pre, data.createComment.comment],
            commentsNumber: (pre) => pre + 1,
          },
        });
      }
    },
  });
  const post = () => {
    const { playload } = getValues();
    if (loading || !playload) return;
    createComment({
      variables: {
        photoId,
        playload,
      },
    });
  };
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
      <Button title=" Post " onPress={handleSubmit(post)} />
    </Container>
  );
};

export default PostComment;
