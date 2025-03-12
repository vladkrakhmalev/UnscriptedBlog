import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Modal conent',
    isOpen: true,
    onClose() { console.log('Modal closed') },
  },
};

export const WithTrigger: Story = {
  args: {
    children: 'Modal conent',
    trigger: <div>Modal Trigger</div>,
    onClose() { console.log('Modal closed') },
  },
};

export const WithTitle: Story = {
  args: {
    children: 'Modal conent',
    isOpen: true,
    title: 'Modal title',
    onClose() { console.log('Modal closed') },
  },
};

export const WithNotCloseOnWrapper: Story = {
  args: {
    children: 'Modal conent',
    isOpen: true,
    closeOnWrapper: false,
    onClose() { console.log('Modal closed') },
  },
};