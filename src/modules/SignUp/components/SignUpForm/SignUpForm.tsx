import React from "react";
import styled from "@emotion/styled";
import { TypoGraphy, ThemeColors } from "../../../../components/Common";

export const SignUpFormStyled = styled.form`
  padding: 32px 30px 53px 30px;
`;

export const SignUpHeaderStyled = styled.div(
  TypoGraphy.titleForm,
  "text-align: center;",
  "margin-bottom: 36px;"
);

export const FormRow = styled.div("height: 71px;");

export const FormSubRow = styled.div("height:26px; margin-bottom:11px;");

export const SignUpFormWrapper = styled.div`
  background: ${ThemeColors.white} 0% 0% no-repeat padding-box;
  border-radius: 8px;
  width: 400px;
  max-width: 400px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
interface SignUpProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
}
export const SignUpForm: React.FC<SignUpProps> = ({
  children,
  onSubmit,
  title,
}) => (
  <SignUpFormWrapper>
    <SignUpFormStyled onSubmit={onSubmit}>
      <SignUpHeaderStyled>{title}</SignUpHeaderStyled>
      {children}
    </SignUpFormStyled>
  </SignUpFormWrapper>
);
