/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeePhoto
// ====================================================

export interface SeePhoto_seePhoto_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface SeePhoto_seePhoto_comments_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface SeePhoto_seePhoto_comments {
  __typename: "Comment";
  isMine: boolean;
  playload: string;
  id: number;
  user: SeePhoto_seePhoto_comments_user;
}

export interface SeePhoto_seePhoto {
  __typename: "Photo";
  files: (string | null)[] | null;
  createAt: string;
  id: number;
  isLike: boolean;
  isMine: boolean;
  likes: number;
  caption: string;
  user: SeePhoto_seePhoto_user;
  commentsNumber: number;
  comments: (SeePhoto_seePhoto_comments | null)[] | null;
}

export interface SeePhoto {
  seePhoto: SeePhoto_seePhoto | null;
}

export interface SeePhotoVariables {
  seePhotoId: number;
}
