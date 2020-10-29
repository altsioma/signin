import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ColorSet } from './';

export default {
  title: 'Example/ThemeColors',
  component: ColorSet,
} as Meta;

const Template: Story = () => <ColorSet/>;

export const Primary = Template.bind({});
Primary.args = {
};
