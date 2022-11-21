/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DelPhoto
// ====================================================

export interface DelPhoto_delPhoto {
  __typename: "Result";
  error: string | null;
  ok: boolean;
}

export interface DelPhoto {
  delPhoto: DelPhoto_delPhoto;
}

export interface DelPhotoVariables {
  photoId: number;
}
