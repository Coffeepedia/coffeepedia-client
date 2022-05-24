import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String, $password: String) {
    LoginUser(email: $email, password: $password) {
      id
      username
      balance
      accesstoken
      email
    }
  }
`;

export const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String
    $email: String
    $password: String
    $phoneNumber: String
    $address: String
  ) {
    RegisterUser(
      username: $username
      email: $email
      password: $password
      phoneNumber: $phoneNumber
      address: $address
    ) {
      message
    }
  }
`;
