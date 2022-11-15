import { gql } from "@apollo/client";
export const LOGIN = gql`
  mutation RequestCode($email: String!) {
    requestCode(email: $email) {
      error
      ok
    }
  }
`;
