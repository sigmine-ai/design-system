import * as React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";

if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).NEXT_PUBLIC_PRODUCT =
    process.env.NEXT_PUBLIC_PRODUCT || "POCKET_PROMPT";
}

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
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
