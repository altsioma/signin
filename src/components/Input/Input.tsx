import styled from "@emotion/styled";
import { TypoGraphy, ThemeColors } from "../Common";
import { InputHTMLAttributes } from "react";

type InputType = {
  icon?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = styled.input<InputType>(
  ({ icon }: InputType) =>
    icon
      ? `background-repeat: no-repeat;
     background-position: 17px;
     padding-left: 52px;
     background-image: url("${icon}");`
      : `padding-left: 18px;`,
  TypoGraphy.plainBlack,
  `
  width: 100%;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #f5f8fa;
  padding-top: 17px;
  padding-bottom: 16px;
  &::placeholder {
    color: ${ThemeColors.grey};
    letter-spacing: 0px;
  }
  `
);
