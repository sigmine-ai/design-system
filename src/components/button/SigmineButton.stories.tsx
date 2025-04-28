import type { Meta, StoryObj } from "@storybook/react";
import SigmineButton from "./SigmineButton";

const meta: Meta<typeof SigmineButton> = {
  title: "Components/SigmineButton",
  component: SigmineButton,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof SigmineButton>;

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

export const Gray: Story = {
  args: {
    hierarchy: "gray",
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
