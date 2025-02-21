import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';
import { ThemeDecorator } from '../../lib/storybook';
import { Theme } from '../../lib/theme/themeContext';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Resize: Story = {
  args: {
    size: 10,
  },
};

