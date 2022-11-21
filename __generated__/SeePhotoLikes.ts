/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeePhotoLikes
// ====================================================

export interface SeePhotoLikes_seePhotoLikes {
  __typename: "User";
  avatar: string | null;
  userName: string;
}

export interface SeePhotoLikes {
  seePhotoLikes: (SeePhotoLikes_seePhotoLikes | null)[] | null;
}

export interface SeePhotoLikesVariables {
  seePhotoLikesId: number;
}
