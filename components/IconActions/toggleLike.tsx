import React from "react";
import styled, { MyTheme } from "../../styles";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useMutation } from "@apollo/client";
import { LIKE_PHOTO } from "../../apollo-hooks/apollo-mutation";
import { LikePhoto, LikePhotoVariables } from "../../__generated__/LikePhoto";
export const IconContainer = styled.View`
  margin-right: 5px;
`;
interface IProps {
  isLike: boolean;
  photoId: number;
}
const LikeIconAction: React.FC<IProps> = ({ isLike, photoId }) => {
  const [toggleLike, { loading }] = useMutation<LikePhoto, LikePhotoVariables>(
    LIKE_PHOTO,
    {
      update: (cache, { data }) => {
        if (!data?.likePhoto.ok) return;
        cache.modify({
          id: `Photo:${photoId}`,
          fields: {
            isLike: (pre) => !pre,
            likes: (pre) => (isLike ? pre - 1  : pre + 1),
          },
        });
      },
    }
  );
  const likePhotoEvent = () => {
    if (loading) return;
    toggleLike({
      variables: {
        photoId,
      },
    });
  };
  return (
    <IconContainer>
      <TouchableOpacity onPress={likePhotoEvent}>
        <Ionicons
          name={isLike ? "heart" : "heart-outline"}
          size={24}
          color={isLike ? MyTheme.redColor : MyTheme.blackColor}
        />
      </TouchableOpacity>
    </IconContainer>
  );
};

export default LikeIconAction;
