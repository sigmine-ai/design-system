// Toast.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(false);

    return (
      <>
        <button onClick={() => setShow(true)}>토스트 띄우기</button>
        <AnimatePresence>
          {show && (
            <Toast
              duration={2000}
              onClose={() => {
                setShow(false);
              }}
            >
              기본 토스트 메시지입니다.
            </Toast>
          )}
        </AnimatePresence>
      </>
    );
  },
};
