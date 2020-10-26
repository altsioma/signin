import React, { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { TypoGraphy, ThemeColors } from "../Common/";

const LabelStyled = styled.label(
  `  
  display: inline-block;
  position: relative;
  margin-right: 18px;
  padding-left: 22px;`,
  TypoGraphy.plainBlack
);

const CheckBoxCustom = styled.span(`
  position: absolute;
  top: 2px;
  left: 0;
  height: 14px;
  width: 14px;
  border: 1px solid ${ThemeColors.blue};
  border-radius: 3px;
    &::after {
      content: "";
      position: absolute;
      display: none;
      top: 0px;
      left: 4px;
      width: 4px;
      height: 9px;
      border: solid ${ThemeColors.blue};
      border-width: 0 1px 1px 0;
      transform: rotate(45deg);
    }
`);

const InputCheckboxStyled = styled.input(`
  position: absolute;
  opacity: 0; 
  &:checked + span {
    &::after {
      display: block;
    }
  }
`);

export const CheckBox: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...props
}) => (
  <LabelStyled>
    {children}
    <InputCheckboxStyled
      type="checkbox"
      {...props}
    />
    <CheckBoxCustom />
  </LabelStyled>
);
