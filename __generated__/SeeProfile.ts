/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeeProfile
// ====================================================

export interface SeeProfile_seeProfile_photos {
  __typename: "Photo";
  isMine: boolean;
  isLike: boolean;
  id: number;
  files: (string | null)[] | null;
  likes: number;
}

export interface SeeProfile_seeProfile {
  __typename: "User";
  id: number;
  firstName: string;
  lastName: string | null;
  userName: string;
  email: string;
  password: string;
  bio: string | null;
  avatar: string | null;
  createAt: string;
  totalFollowing: number;
  totalFollowers: number;
  isMe: boolean;
  isFollowing: boolean;
  photos: (SeeProfile_seeProfile_photos | null)[] | null;
}

export interface SeeProfile {
  seeProfile: SeeProfile_seeProfile;
}

export interface SeeProfileVariables {
  userName: string;
}
