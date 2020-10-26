import styled from "@emotion/styled";
import { TypoGraphy, ThemeColors } from "../Common/";

export const ButtonStyled = styled.button(
  `
  background: #0094ff;
  border: none;
  border-radius: 31px;
  height: 62px;
  width: 100%;
  &:disabled {
    background: ${ThemeColors.grey}
  }`,
  TypoGraphy.buttonText
);
