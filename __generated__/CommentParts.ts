/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommentParts
// ====================================================

export interface CommentParts_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface CommentParts {
  __typename: "Comment";
  id: number;
  isMine: boolean;
  playload: string;
  createAt: string;
  user: CommentParts_user;
}
