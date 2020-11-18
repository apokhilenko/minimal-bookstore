import gql from "graphql-tag";

export const GET_BOOK = gql`
  query getBook($bookId: Int!) {
    book(bookId: $bookId) {
      bookId
      title
      author
      price
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $author: String!, $price: Float!) {
    createBook(title: $title, author: $author, price: $price) {
      bookId
      title
      author
      price
    }
  }
`;

export const EDIT_BOOK = gql`
  mutation editBook(
    $bookId: Int!
    $title: String!
    $author: String!
    $price: Float!
  ) {
    editBook(bookId: $bookId, title: $title, author: $author, price: $price) {
      bookId
      title
      author
      price
    }
  }
`;
