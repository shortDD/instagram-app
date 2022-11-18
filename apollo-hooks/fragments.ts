import { gql } from "@apollo/client";

export const USER_FRAMENT = gql`
  fragment UserParts on User {
    id
    userName
    avatar
  }
`;