import { gql } from "@apollo/client";

export const DO_PAYMENT = gql`
  mutation DoPayment(
    $email: String
    $totalPrice: Int
    $orderId: Int
    $accesstoken: String
  ) {
    DoPayment(
      email: $email
      totalPrice: $totalPrice
      OrderId: $orderId
      accesstoken: $accesstoken
    ) {
      token
      redirect_url
    }
  }
`;

export const DO_PATCH_AFTER_PAYMENT = gql`
  mutation UpdateOrder(
    $updateOrderId: ID
    $status: String
    $accesstoken: String
  ) {
    UpdateOrder(
      id: $updateOrderId
      status: $status
      accesstoken: $accesstoken
    ) {
      message
    }
  }
`;
