import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import TranslateIcon from '../../../shared/assets/icons/translate.svg'  

import { Button } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Button',
    icon: <TranslateIcon/>,
  },
};

export const OnlyIcon: Story = {
  args: {
    icon: <TranslateIcon/>,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};
