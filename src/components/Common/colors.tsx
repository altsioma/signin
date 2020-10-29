import React from "react";
import styled from "@emotion/styled";
export const ThemeColors: { [key: string]: string } = {
  blue: "#0094FF",
  grey: "#A2A2A2",
  black: "#222222",
  ash: "#00193685",
  red: "#E82828",
  white: "#FFFFFF",
  lightGrey: "#F5F8FA",
  darkBlue: "#102250",
};

interface TailColor {
  color: string;
}

const ColorTail = styled("div")<TailColor>`
  background-color: ${(props: TailColor) => props.color};
  height: 100px;
  width: 100px;
  margin-right: 20px;
  border: 1px solid #c0c0c0;
`;

export const ColorSet: React.FC = () => (
  <>
    {Object.keys(ThemeColors).map((color, index) => (
      <div
        key={index}
        style={{
          display: "inline-block",
          fontWeight: 600,
          backgroundColor: "white",
        }}
      >
        {color}
        <br />
        {ThemeColors[color]}
        <ColorTail color={ThemeColors[color]} />
      </div>
    ))}
  </>
);
