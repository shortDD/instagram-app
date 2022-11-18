/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SeeFeed
// ====================================================

export interface SeeFeed_seeFeed_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface SeeFeed_seeFeed_comments_user {
  __typename: "User";
  id: number;
  userName: string;
  avatar: string | null;
}

export interface SeeFeed_seeFeed_comments {
  __typename: "Comment";
  isMine: boolean;
  playload: string;
  id: number;
  user: SeeFeed_seeFeed_comments_user;
}

export interface SeeFeed_seeFeed {
  __typename: "Photo";
  file: string;
  createAt: string;
  id: number;
  isLike: boolean;
  isMine: boolean;
  likes: number;
  caption: string;
  user: SeeFeed_seeFeed_user;
  commentsNumber: number;
  comments: (SeeFeed_seeFeed_comments | null)[] | null;
}

export interface SeeFeed {
  seeFeed: (SeeFeed_seeFeed | null)[] | null;
}
