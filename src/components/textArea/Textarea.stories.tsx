import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";
import { useState } from "react";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "텍스트를 입력하세요",
    count: 100,
  },
  argTypes: {
    hierarchy: {
      options: ["default", "sigmine"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

const TextareaStory = (args: React.ComponentProps<typeof Textarea>) => {
  const [value, setValue] = useState("");

  return <Textarea {...args} value={value} onChange={(v) => setValue(v)} />;
};

export const Default: Story = {
  render: (args) => <TextareaStory {...args} />,
  args: {
    hierarchy: "default",
  },
};

export const Sigmine: Story = {
  render: (args) => <TextareaStory {...args} />,
  args: {
    hierarchy: "sigmine",
  },
};
