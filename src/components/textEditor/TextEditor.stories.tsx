import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import TextEditor from "./TextEditor";

const meta: Meta<typeof TextEditor> = {
  title: "Components/TextEditor",
  component: TextEditor,
  tags: ["autodocs"],
  args: {
    placeholder: "텍스트를 입력하세요",
  },
  argTypes: {
    value: { control: false },
    onChange: { control: false },
    onAttachmentChange: { control: false },
    attachments: { control: false },
    onAttachmentRemove: { control: false },
    hierarchy: {
      options: ["default", "sigmine"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextEditor>;

const Template = (args: React.ComponentProps<typeof TextEditor>) => {
  const [value, setValue] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);

  function handleAttachmentChange(files: FileList | null) {
    if (!files || files.length === 0) return;
    setAttachments((prev) => [...prev, ...Array.from(files)]);
  }

  function handleAttachmentRemove(_: File, index: number) {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <TextEditor
      {...args}
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
      attachments={attachments}
      onAttachmentChange={handleAttachmentChange}
      onAttachmentRemove={handleAttachmentRemove}
    />
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    hierarchy: "default",
    defaultHeight: "120px",
  },
};

export const Sigmine: Story = {
  render: (args) => <Template {...args} />,
  args: {
    hierarchy: "sigmine",
    maxHeight: "calc(50vh - 120px)",
  },
};

export const Mini: Story = {
  render: (args) => <Template {...args} />,
  args: {
    hierarchy: "default",
    isMini: true,
  },
};
