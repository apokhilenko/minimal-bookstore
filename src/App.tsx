import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/graphql";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  );
}

export default App;
