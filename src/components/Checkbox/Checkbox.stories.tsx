import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CheckBox } from './Checkbox';

export default {
  title: 'Example/CheckBox',
  component: CheckBox,
} as Meta;

const Template: Story = (args) => <CheckBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a CheckBox",
  disabled: false
};
