/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchPhoto
// ====================================================

export interface searchPhoto_searchPhoto {
  __typename: "Photo";
  likes: number;
  files: (string | null)[] | null;
  id: number;
}

export interface searchPhoto {
  searchPhoto: (searchPhoto_searchPhoto | null)[];
}

export interface searchPhotoVariables {
  keyword: string;
}
