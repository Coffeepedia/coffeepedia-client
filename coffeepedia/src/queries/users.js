import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String, $password: String) {
    LoginUser(email: $email, password: $password) {
      id
      username
      balance
      accesstoken
    }
  }
`;
