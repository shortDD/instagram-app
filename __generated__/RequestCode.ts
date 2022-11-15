/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RequestCode
// ====================================================

export interface RequestCode_requestCode {
  __typename: "Result";
  error: string | null;
  ok: boolean;
}

export interface RequestCode {
  requestCode: RequestCode_requestCode;
}

export interface RequestCodeVariables {
  email: string;
}
