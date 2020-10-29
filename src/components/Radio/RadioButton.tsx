import React, { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { TypoGraphy } from "../Common/";

const LabelStyled = styled.label(
  `  
  display: inline-block;
  position: relative;
  margin-right: 18px;
  padding-left: 22px;`,
  TypoGraphy.plainBlack
);

const RadioCustom = styled.span(`
    position: absolute;
    top: 2px;
    left: 0;
    height: 14px;
    width: 14px;
    border: 1px solid #0094ff;
    border-radius: 50%;
    
    &::after {
      content: "";
      position: absolute;
      display: none;
      top: 2px;
      left: 2px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #0094ff;
    }
`);

const InputRadioStyled = styled.input(`
  position: absolute;
  opacity: 0; 
  &:checked + span {
    &::after {
      display: block;
    }
  }
`);


export const RadioButton: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ children, ...props }) => (
  <LabelStyled>
    {children}
    <InputRadioStyled type="radio" {...props}/>
    <RadioCustom />
  </LabelStyled>
);
