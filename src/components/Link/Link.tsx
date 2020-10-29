import styled from "@emotion/styled";
import React from "react";
import { ThemeColors } from "../Common/";

const LinkStyled = styled.a(`
  color: ${ThemeColors.blue};
  text-decoration: none;
`);
interface LinkProps {
  disabled?: boolean;
  href?: string;
}
export const Link: React.FC<LinkProps> = ({ disabled, children, ...props }) =>
  disabled ? (
    <span>{children}</span>
  ) : (
    <LinkStyled {...props}>{children}</LinkStyled>
  );
