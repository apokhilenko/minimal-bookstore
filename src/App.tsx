import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/graphql";

function App() {
  return <ApolloProvider client={client}>aa</ApolloProvider>;
}

export default App;
