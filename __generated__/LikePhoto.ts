/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LikePhoto
// ====================================================

export interface LikePhoto_likePhoto {
  __typename: "Result";
  error: string | null;
  ok: boolean;
}

export interface LikePhoto {
  likePhoto: LikePhoto_likePhoto;
}

export interface LikePhotoVariables {
  photoId: number;
}
