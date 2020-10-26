import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeColors } from "./components/Common";
import { LoginScreen } from "./screens/";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";

const App = () => (
  <Provider store={store}>
    <Global
      styles={css`
        body {
          background: ${ThemeColors.darkBlue};
        }
      `}
    />
    <LoginScreen />
  </Provider>
);

export default App;
