import React from "react";
import { SignUp } from "../modules/SignUp";
import styled from "@emotion/styled";
import { ThemeColors } from "../components/Common";

const IntroPage = styled("div")`
  background-color: ${ThemeColors.darkBlue};
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const SignupScreen = () => (
  <IntroPage>
    <SignUp />
  </IntroPage>
);
