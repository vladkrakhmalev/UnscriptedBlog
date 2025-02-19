import type { Preview } from "@storybook/react";
import React from 'react';
import { StyleDecorator, ThemeDecorator } from "../../src/shared/lib/storybook";
import { Theme } from "../../src/shared/lib/theme/themeContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).React = React;

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
  ]
};

export default preview;
