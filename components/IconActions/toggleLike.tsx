import React from "react";
import styled, { MyTheme } from "../../styles";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useApolloClient, useMutation } from "@apollo/client";
import { LIKE_PHOTO } from "../../apollo-hooks/apollo-mutation";
import { LikePhoto, LikePhotoVariables } from "../../__generated__/LikePhoto";
import {
  SEE_FEED,
  SEE_PHOTOLIKES,
  useMe,
} from "../../apollo-hooks/apollo-query";
import {
  SeePhotoLikes,
  SeePhotoLikesVariables,
  SeePhotoLikes_seePhotoLikes,
} from "../../__generated__/SeePhotoLikes";
import { iconsize } from "../../constanst";
export const IconContainer = styled.View`
  margin-right: 5px;
`;
interface IProps {
  isLike: boolean;
  photoId: number;
}
const LikeIconAction: React.FC<IProps> = ({ isLike, photoId }) => {
  const { data: meData } = useMe();
  const [toggleLike, { loading }] = useMutation<LikePhoto, LikePhotoVariables>(
    LIKE_PHOTO,
    {
      update: (cache, { data }) => {
        if (!data?.likePhoto.ok) return;
        cache.modify({
          id: `Photo:${photoId}`,
          fields: {
            isLike: (pre) => !pre,
            likes: (pre) => (isLike ? pre - 1 : pre + 1),
          },
        });
        cache.updateQuery<SeePhotoLikes, SeePhotoLikesVariables>(
          {
            query: SEE_PHOTOLIKES,
            variables: {
              seePhotoLikesId: photoId,
            },
          },
          (data) => {
            const oldLikers = data?.seePhotoLikes ? data.seePhotoLikes : [];
            let newLikes: (SeePhotoLikes_seePhotoLikes | null)[];
            if (isLike) {
              newLikes = oldLikers.filter(
                (liker) => liker?.userName !== meData?.me.user?.userName
              );
            } else {
              newLikes = [...oldLikers, meData?.me.user!];
            }
            return {
              seePhotoLikes: newLikes,
            };
          }
        );
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
          size={iconsize.md}
          color={isLike ? MyTheme.redColor : MyTheme.blackColor}
        />
      </TouchableOpacity>
    </IconContainer>
  );
};

export default LikeIconAction;
