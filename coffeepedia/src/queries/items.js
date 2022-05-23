import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetAllArticle {
    getAllArticle {
      _id
      title
      content
      imageUrl
      author
      tag
      createdAt
    }
  }
`;

export const GET_ARTICLE = gql`
  query GetArticleById($id: ID) {
    getArticleById(_id: $id) {
      title
      content
      imageUrl
      author
      tag
      createdAt
    }
  }
`;

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
