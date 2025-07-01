import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    name: "SimpleCheck",
    variant: "Bulk",
    color: "G_500",
    size: 12,
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {};
