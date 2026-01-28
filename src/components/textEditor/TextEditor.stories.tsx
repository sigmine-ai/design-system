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
    attachmentUrls: { control: false },
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
  const {
    attachmentUrls: initialAttachmentUrls = [],
    attachments: _ignoredAttachments,
    onAttachmentChange: _ignoredAttachmentChange,
    onAttachmentRemove: _ignoredAttachmentRemove,
    value: _ignoredValue,
    onChange: _ignoredOnChange,
    ...rest
  } = args;

  const [value, setValue] = useState(_ignoredValue ?? "");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [attachmentUrls, setAttachmentUrls] = useState<(string | { url: string; name?: string; id?: string })[]>(
    initialAttachmentUrls
  );

  function handleAttachmentChange(files: FileList | null) {
    if (!files || files.length === 0) return;
    setAttachments((prev) => [...prev, ...Array.from(files)]);
  }

  function handleAttachmentRemove(
    attachment: File | string | { url: string; name?: string; id?: string },
    index: number,
    source: "file" | "url"
  ) {
    if (source === "file") {
      setAttachments((prev) => prev.filter((_, i) => i !== index));
      return;
    }

    setAttachmentUrls((prev) => prev.filter((_, i) => i !== index));
    console.log("Removed remote attachment", attachment);
  }

  return (
    <TextEditor
      {...rest}
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
      attachments={attachments}
      attachmentUrls={attachmentUrls}
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

export const WithRemoteAttachments: Story = {
  render: (args) => <Template {...args} />,
  args: {
    hierarchy: "default",
    attachmentUrls: [
      {
        url: "https://picsum.photos/seed/design-system-1/160/160",
        name: "기존 이미지 1",
      },
      {
        url: "https://picsum.photos/seed/design-system-2/160/160",
        name: "기존 이미지 2",
      },
    ],
  },
};
