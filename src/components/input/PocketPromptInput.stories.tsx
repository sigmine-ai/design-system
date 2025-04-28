import type { Meta, StoryObj } from "@storybook/react";
import PocketPromptInput from "./PocketPromptInput";
import { useState } from "react";

const meta: Meta<typeof PocketPromptInput> = {
  title: "Components/PocketPromptInput",
  component: PocketPromptInput,
  tags: ["autodocs"],
  args: {
    placeholder: "텍스트를 입력하세요",
    count: 100,
  },
};

export default meta;

type Story = StoryObj<typeof PocketPromptInput>;

const PocketPromptInputStory = (
  args: React.ComponentProps<typeof PocketPromptInput>
) => {
  const [value, setValue] = useState("");

  return (
    <PocketPromptInput {...args} value={value} onChange={(v) => setValue(v)} />
  );
};

export const Primary: Story = {
  render: (args) => <PocketPromptInputStory {...args} />,
};
