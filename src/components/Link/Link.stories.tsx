import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Link } from './Link';

export default {
  title: 'Example/Link',
  component: Link,
} as Meta;

const Template: Story = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "This is a Link",
  href: "#",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: "This is a not avaiable Link",
  href: "#",
  disabled: true,
};
