import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    name: "MessageQuestion",
    variant: "Bulk",
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {};
