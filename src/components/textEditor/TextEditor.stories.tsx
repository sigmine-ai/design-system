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
    attachmentLimit: { control: { type: "number", min: 0 } },
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
      {
        url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        name: "샘플 비디오",
        type: "video",
      },
    ],
  },
};

export const WithAttachmentLimit: Story = {
  render: (args) => <Template {...args} />,
  args: {
    hierarchy: "default",
    attachmentLimit: 3,
  },
};

export const DraggingHighlight: Story = {
  render: (args) => <Template {...args} />,
  args: {
    hierarchy: "default",
    isDragging: true,
    placeholder: "드래그 상태 강조 예시",
  },
};

export const Focused: Story = {
  render: (args) => <Template {...args} />,
  args: {
    hierarchy: "default",
    isFocused: true,
    placeholder: "자동 포커스 예시",
  },
};

export const DragAndDrop: Story = {
  render: (args) => (
    <div>
      <div style={{ marginBottom: 16, padding: 12, background: "#f0f4ff", borderRadius: 8 }}>
        <strong>🖱️ 드래그 앤 드롭 테스트</strong>
        <p style={{ margin: "8px 0 0", fontSize: 14, color: "#666" }}>
          이미지나 영상 파일을 아래 에디터 영역에 드래그해서 놓아보세요.<br />
          드래그 중 점선 테두리가 표시되고, 드롭 시 미리보기가 나타납니다.
        </p>
      </div>
      <Template {...args} />
    </div>
  ),
  args: {
    hierarchy: "default",
    attachmentAccept: "image/*,video/*",
    attachmentLimit: 5,
    placeholder: "이미지/영상을 드래그 앤 드롭하세요",
  },
};

export const PasteMedia: Story = {
  render: (args) => (
    <div>
      <div style={{ marginBottom: 16, padding: 12, background: "#f0fff4", borderRadius: 8 }}>
        <strong>📋 붙여넣기 테스트</strong>
        <p style={{ margin: "8px 0 0", fontSize: 14, color: "#666" }}>
          클립보드에 이미지를 복사한 후 (스크린샷, 이미지 우클릭 복사 등)<br />
          에디터에 포커스한 상태에서 Ctrl+V (Mac: Cmd+V)로 붙여넣기하세요.
        </p>
      </div>
      <Template {...args} />
    </div>
  ),
  args: {
    hierarchy: "default",
    attachmentAccept: "image/*",
    attachmentLimit: 3,
    placeholder: "Ctrl+V로 이미지를 붙여넣으세요",
  },
};
