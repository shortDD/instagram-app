import { gql } from "@apollo/client";

export const USER_FRAMENT = gql`
  fragment UserParts on User {
    id
    userName
    avatar
  }
`;
export const COMMENT_FRAMENT = gql`
  fragment CommentParts on Comment {
    id
    isMine
    playload
    createAt
    user {
      ...UserParts
    }
  }
  ${USER_FRAMENT}
`;

export const PHOTO_FRAMENT = gql`
  fragment PhotoParts on Photo {
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
  ${USER_FRAMENT}
`;
