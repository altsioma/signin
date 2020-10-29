/** @jsx jsx */
import { css } from "@emotion/core";
import { ThemeColors } from "./colors";

const baseFontFamily = "Roboto";

export const TypoGraphy = {
  titleForm: css`
    font-family: ${baseFontFamily};
    font-weight: bold;
    font-size: 28px;
    line-height: 34px;
    color: ${ThemeColors.black};
  `,
  placeholder: css`
    font-family: ${baseFontFamily};
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: ${ThemeColors.grey};
  `,
  plainBlack: css`
    font-family: ${baseFontFamily};
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: ${ThemeColors.black};
  `,
  links: css`
    font-family: ${baseFontFamily};
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: ${ThemeColors.blue};
  `,
  buttonText: css`
    font-family: ${baseFontFamily};
    font-weight: normal;
    font-size: 18px;
    line-height: 22x;
    color: ${ThemeColors.white};
  `,
  errorLabel: css`
    font-family: ${baseFontFamily};
    font-weight: normal;
    font-size: 10px;
    line-height: 13x;
    color: ${ThemeColors.red};
  `,
};
