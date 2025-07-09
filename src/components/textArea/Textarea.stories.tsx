import type { Meta, StoryObj } from "@storybook/react";
import Textarea from "./Textarea";
import { useState } from "react";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    placeholder: "텍스트를 입력하세요",
  },
  argTypes: {
    value: { control: false },
    onChange: { control: false },
    hierarchy: {
      options: ["default", "sigmine"],
      control: { type: "radio" },
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
    defaultHeight: "100px",
  },
};

export const Sigmine: Story = {
  render: (args) => <TextareaStory {...args} />,
  args: {
    hierarchy: "sigmine",
    isMini: false,
    maxHeight: "calc(50vh - 100px)",
    // autoResize: true, // 자동 높이 조절 활성화
  },
};

export const SigmineDefaultHeight: Story = {
  render: (args) => <TextareaStory {...args} />,
  args: {
    hierarchy: "sigmine",
    isMini: false,
    defaultHeight: "200px",
    // autoResize: true, // 자동 높이 조절 활성화
  },
};

export const SigmineMini: Story = {
  render: (args) => <TextareaStory {...args} />,
  args: {
    hierarchy: "sigmine",
    isMini: true,
  },
};
