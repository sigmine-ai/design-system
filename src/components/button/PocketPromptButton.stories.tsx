import type { Meta, StoryObj } from "@storybook/react";
import PocketPromptButton from "./PocketPromptButton";

const meta: Meta<typeof PocketPromptButton> = {
  title: "Components/PocketPromptButton",
  component: PocketPromptButton,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof PocketPromptButton>;

export const Primary: Story = {
  args: {
    hierarchy: "primary",
  },
};

export const Secondary: Story = {
  args: {
    hierarchy: "secondary",
  },
};

export const Normal: Story = {
  args: {
    hierarchy: "normal",
  },
};

export const Default: Story = {
  args: {
    hierarchy: "default",
  },
};

export const Disabled: Story = {
  args: {
    hierarchy: "disabled",
  },
};
