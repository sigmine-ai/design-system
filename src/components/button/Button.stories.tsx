import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

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

export const SigminePrimary: Story = {
  args: {
    hierarchy: "sigminePrimary",
  },
};

export const sigmineSecondary: Story = {
  args: {
    hierarchy: "sigmineSecondary",
  },
};
