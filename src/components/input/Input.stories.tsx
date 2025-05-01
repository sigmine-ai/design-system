import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
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

type Story = StoryObj<typeof Input>;

const InputStory = (args: React.ComponentProps<typeof Input>) => {
  const [value, setValue] = useState("");

  return <Input {...args} value={value} onChange={(v) => setValue(v)} />;
};

export const Default: Story = {
  render: (args) => <InputStory {...args} />,
  args: {
    hierarchy: "default",
  },
};

export const Sigmine: Story = {
  render: (args) => <InputStory {...args} />,
  args: {
    hierarchy: "sigmine",
  },
};
