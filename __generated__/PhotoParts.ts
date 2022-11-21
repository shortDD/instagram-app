/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PhotoParts
// ====================================================

export interface PhotoParts_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface PhotoParts_comments_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface PhotoParts_comments {
  __typename: "Comment";
  isMine: boolean;
  playload: string;
  id: number;
  user: PhotoParts_comments_user;
}

export interface PhotoParts {
  __typename: "Photo";
  files: (string | null)[] | null;
  createAt: string;
  id: number;
  isLike: boolean;
  isMine: boolean;
  likes: number;
  caption: string;
  user: PhotoParts_user;
  commentsNumber: number;
  comments: (PhotoParts_comments | null)[] | null;
}
