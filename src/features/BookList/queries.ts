import gql from "graphql-tag";

export const GET_BOOKS = gql`
  query {
    books {
      bookId
      title
      author
      price
    }
  }
`;
