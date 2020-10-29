import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { RadioButton } from "./RadioButton";

export default {
  title: "Example/RadioButton",
  component: RadioButton,
} as Meta;

const Template: Story = (args) => <RadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Simple radio",
  disabled: false,
};

export const RadioGroup = () => (
  <>
    {["option 1", "option 2"].map((value, index) => (
      <RadioButton key={index} value={value} name="group">
        {value}
      </RadioButton>
    ))}
  </>
);
