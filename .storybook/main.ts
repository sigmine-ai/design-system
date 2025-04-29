import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const PRODUCT = process.env.PRODUCT || "POCKET_PROMPT";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  docs: {
    autodocs: "tag",
  },
  babel: async (options) => ({
    ...options,
    plugins: ["babel-plugin-styled-components"],
  }),
  viteFinal: async (config) => {
    return {
      ...config,
      define: {
        ...(config.define || {}),
        __PRODUCT__: JSON.stringify(PRODUCT), // 여기에 PRODUCT 주입
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...(config.resolve?.alias || {}),
          "@": path.resolve(__dirname, "../src"), // alias "@/src" 세팅
        },
      },
    };
  },
};
export default config;
