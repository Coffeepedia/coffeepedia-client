import { gql } from "@apollo/client";

export const GET_ITEMS = gql`
  query GetAllItem {
    getAllItem {
      id
      CategoryId
      name
      price
      description
      imageUrl
      errorText
    }
  }
`;

export const GET_ITEM_BY_ID = gql`
  query GetItemById($getItemByIdId: ID) {
    getItemById(id: $getItemByIdId) {
      id
      CategoryId
      name
      price
      description
      imageUrl
      errorText
    }
  }
`;
