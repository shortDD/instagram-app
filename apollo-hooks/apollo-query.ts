import { gql, useQuery } from "@apollo/client";
import { Me } from "../__generated__/Me";
import { PHOTO_FRAMENT, USER_FRAMENT } from "./fragments";

export const SEE_FEED = gql`
  query SeeFeed {
    seeFeed {
      files
      createAt
      id
      isLike
      isMine
      likes
      caption
      user {
        ...UserParts
      }
      commentsNumber
      comments {
        isMine
        playload
        id
        user {
          ...UserParts
        }
      }
    }
  }
  ${USER_FRAMENT}
`;
export const SEE_PHOTOLIKES = gql`
  query SeePhotoLikes($seePhotoLikesId: Int!) {
    seePhotoLikes(id: $seePhotoLikesId) {
      avatar
      userName
    }
  }
`;
export const ME = gql`
  query Me {
    me {
      error
      ok
      user {
        avatar
        userName
      }
    }
  }
`;
export const useMe = () => {
  return useQuery<Me>(ME);
};

export const SEARCH_PHOTOS = gql`
  query searchPhoto($keyword: String!) {
    searchPhoto(keyword: $keyword) {
      likes
      files
      id
    }
  }
`;

export const SEE_PHOTO = gql`
  query SeePhoto($seePhotoId: Int!) {
    seePhoto(id: $seePhotoId) {
      ...PhotoParts
    }
  }
  ${PHOTO_FRAMENT}
`;
export const SEE_PROFILE = gql`
  query SeeProfile($userName: String!) {
    seeProfile(userName: $userName) {
      id
      firstName
      lastName
      userName
      email
      password
      bio
      avatar
      createAt
      totalFollowing
      totalFollowers
      isMe
      isFollowing
      photos {
        isMine
        isLike
        id
        files
        likes
      }
    }
  }
`;
