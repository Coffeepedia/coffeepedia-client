import { gql } from "@apollo/client";

// ORDERS
export const GET_ORDER_BY_ID = gql`
  query GetOrderById($accesstoken: String!, $getOrderByIdId: ID) {
    getOrderById(accesstoken: $accesstoken, id: $getOrderByIdId) {
      id
      UserId
      CoffeeShopId
      status
      createdAt
      updatedAt
      OrderDetails {
        id
        ItemId
        OrderId
        name
        price
        quantity
        imageUrl
        createdAt
        updatedAt
      }
      errorText
    }
  }
`;

// ORDER DETAILS
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

export const PATCH_QUANTITY = gql`
  mutation UpdateOrderDetail(
    $accesstoken: String
    $updateOrderDetailId: ID
    $action: String
    $quantity: Int
  ) {
    UpdateOrderDetail(
      accesstoken: $accesstoken
      id: $updateOrderDetailId
      action: $action
      quantity: $quantity
    ) {
      message
    }
  }
`;

export const DELETE_ORDER_ITEM = gql`
  mutation DeleteOrderDetail($accesstoken: String, $deleteOrderDetailId: ID) {
    DeleteOrderDetail(accesstoken: $accesstoken, id: $deleteOrderDetailId) {
      message
    }
  }
`;
