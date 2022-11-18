import { gql } from "@apollo/client";
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
