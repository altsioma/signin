import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { countries } from "../../init";
import { List } from "./List";

export default {
  title: "Example/List",
  component: List,
} as Meta;

const Template: Story = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "This is a List",
  items: countries,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  placeholder: "This is a disabled List",
  items: countries,
  disabled: true,
};
