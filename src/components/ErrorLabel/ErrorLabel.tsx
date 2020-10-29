import React from "react";
import styled from "@emotion/styled";
import { TypoGraphy } from "../Common/";

type ErrosProps = {
  text: string;
};

const ErrorWrapperStyled = styled.div(
  `margin: 2px 0 6px 0;
  line-height: 8px;
  height: 13px;`
);

const ErrorTextStyled = styled.span(
  TypoGraphy.errorLabel,
  `padding-left: 18px;`
);

export const ErrorLabel: React.FC<ErrosProps> = ({ text }) => (
  <ErrorWrapperStyled>
    <ErrorTextStyled>{text}</ErrorTextStyled>
  </ErrorWrapperStyled>
);
