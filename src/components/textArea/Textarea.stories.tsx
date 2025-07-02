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
  const [value, setValue] = useState(
    "이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다.이 텍스트 영역은 자동으로 높이가 조절됩니다. 내용을 입력하면 높이가 자동으로 늘어납니다. 내용을 입력하면 높이가 자동으로 늘어납니다."
  );

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
