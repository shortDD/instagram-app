import { gql } from "@apollo/client";
import { COMMENT_FRAMENT } from "./fragments";
export const LOGIN = gql`
  mutation Login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      error
      ok
      token
    }
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation CreateAccount(
    $firstName: String!
    $userName: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      userName: $userName
      email: $email
      password: $password
    ) {
      error
      ok
    }
  }
`;
export const LIKE_PHOTO = gql`
  mutation LikePhoto($photoId: Int!) {
    likePhoto(photoId: $photoId) {
      error
      ok
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($photoId: Int!, $playload: String!) {
    createComment(photoId: $photoId, playload: $playload) {
      error
      ok
      comment {
        ...CommentParts
      }
    }
  }
  ${COMMENT_FRAMENT}
`;

export const DEL_COMMENT = gql`
  mutation DelComment($commentId: Int!) {
    delComment(commentId: $commentId) {
      error
      ok
    }
  }
`;
export const EDIT_COMMENT = gql`
  mutation DelPhoto($photoId: Int!) {
    delPhoto(photoId: $photoId) {
      error
      ok
    }
  }
`;
