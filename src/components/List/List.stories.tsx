import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { countries } from "../../init";
import { List } from "./List";
import { ErrorLabel } from "../ErrorLabel";

export default {
  title: "Example/List",
  component: List,
} as Meta;

export const Primary = () => <List placeholder="Please enter your name" items={countries} />
export const PrimaryDisabled = () => <List disabled placeholder="Please enter your name" items={countries} />
export const PrimaryError = () => (
  <>
    <List placeholder="Please enter your name" items={countries} />
    <ErrorLabel text="something wrong" />
  </>
);
