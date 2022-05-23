import { gql } from "@apollo/client";

export const ADD_ORDER_DETAIL = gql`
  mutation AddOrderDetail(
    $accesstoken: String
    $addOrderDetailId: ID
    $quantity: Int
    $orderId: Int
    $name: String
    $price: Int
    $imageUrl: String
  ) {
    AddOrderDetail(
      accesstoken: $accesstoken
      id: $addOrderDetailId
      quantity: $quantity
      OrderId: $orderId
      name: $name
      price: $price
      imageUrl: $imageUrl
    ) {
      message
    }
  }
`;
