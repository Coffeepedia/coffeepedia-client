import { gql } from "@apollo/client";

export const GET_COFFEE_SHOP_BY_ID = gql`
  query GetCoffeeShopById($placeId: String) {
    getCoffeeShopById(place_id: $placeId) {
      _id
      place_id
      name
    }
  }
`;
