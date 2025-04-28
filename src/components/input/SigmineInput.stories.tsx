import type { Meta, StoryObj } from "@storybook/react";
import SigmineInput from "./SigmineInput";
import { useState } from "react";

const meta: Meta<typeof SigmineInput> = {
  title: "Components/SigmineInput",
  component: SigmineInput,
  tags: ["autodocs"],
  args: {
    placeholder: "텍스트를 입력하세요",
    count: 100,
  },
};

export default meta;

type Story = StoryObj<typeof SigmineInput>;

const SigmineInputStory = (args: React.ComponentProps<typeof SigmineInput>) => {
  const [value, setValue] = useState("");

  return <SigmineInput {...args} value={value} onChange={(v) => setValue(v)} />;
};

export const Primary: Story = {
  render: (args) => <SigmineInputStory {...args} />,
};
