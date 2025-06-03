import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import Icon from "../icon/Icon";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: <Icon name="SimpleX" variant="Linear" size={16} />,
    style: { padding: "7.5px" },
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

export const SigminePrimary: Story = {
  args: {
    hierarchy: "sigminePrimary",
  },
};

export const SigmineSecondary: Story = {
  args: {
    hierarchy: "sigmineSecondary",
  },
};

export const SigmineDefault: Story = {
  args: {
    hierarchy: "sigmineDefault",
  },
};
