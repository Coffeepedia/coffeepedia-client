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
