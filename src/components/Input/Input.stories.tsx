import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { ErrorLabel } from "../ErrorLabel";
import { Input } from "./Input";
import icon from "../../img/ico-email.svg";

export default {
  title: "Example/Input",
  component: Input,
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const PrimaryPlain = Template.bind({});
PrimaryPlain.args = {};

export const PrimaryError = () => (
  <>
    <Input placeholder="Please enter your name" />
    <ErrorLabel text="something wrong" />
  </>
);
export const PrimaryDisabled = () => (
  <Input placeholder="Unavaiable" disabled />
);

export const WithIcon = () => <Input placeholder="Type email" icon={icon} />;
export const PasswordInput = () => (
  <Input placeholder="Type password" icon={icon} type="password" />
);
