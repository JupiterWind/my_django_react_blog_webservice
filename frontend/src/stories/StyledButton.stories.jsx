import React from 'react';
import Button from '../ui/Component/Button';
import * as ButtonStories from './Button.stories';

export default {
  title: 'ui/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label: 'Button',
  },
};

const Template = (args) => <Button {...args} />;

export const StyledButton = Template.bind({});
StyledButton.args = {
  ...ButtonStories.Primary.args,
  ...ButtonStories.Secondary.args,
};
