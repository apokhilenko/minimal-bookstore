import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/graphql";
import { BrowserRouter as Router } from "react-router-dom";
import { BookList } from "./features/BookList";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <BookList />
      </Router>
    </ApolloProvider>
  );
}

export default App;
