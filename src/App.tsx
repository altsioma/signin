import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeColors } from "./components/Common";
import { SignupScreen } from "./screens/";
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";
import "./App.css";

const App = () => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Global
        styles={css`
          body {
            background: ${ThemeColors.darkBlue};
          }
        `}
      />
      <SignupScreen />
    </ApolloProvider>
  </React.StrictMode>
);

export default App;
