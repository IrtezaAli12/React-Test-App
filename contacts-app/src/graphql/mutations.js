/* eslint-disable */
// this is an auto generated file. This will be overwritten

import { gql } from 'apollo-boost';

export const createContact = gql`
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      name
      email
      cell
      profilePicPath
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContact = gql`
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      name
      email
      cell
      profilePicPath
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContact = gql`
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      name
      email
      cell
      profilePicPath
      createdAt
      updatedAt
      __typename
    }
  }
`;
