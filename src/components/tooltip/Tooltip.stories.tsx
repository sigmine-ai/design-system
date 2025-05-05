import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";
import Text from "../text/Text";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "radio" },
      options: ["top", "bottom", "left", "right"],
    },
    content: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: (
      <Text font="b3_14_med" color="white">
        Tooltip
      </Text>
    ),
    position: "top",
    children: (
      <Text font="b3_14_med" color="black">
        Hover me!
      </Text>
    ),
  },
};
