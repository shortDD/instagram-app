/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_user {
  __typename: "User";
  avatar: string | null;
  userName: string;
}

export interface Me_me {
  __typename: "MeResult";
  error: string | null;
  ok: string;
  user: Me_me_user | null;
}

export interface Me {
  me: Me_me;
}
