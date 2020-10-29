import React from "react";
import { SignupScreen } from "./screens/";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";
import "./App.css";

const App = () => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SignupScreen />
    </ApolloProvider>
  </React.StrictMode>
);

export default App;
