// Toast.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Toast from "./Toast";
import Text from "../text/Text";
import Icon from "../icon/Icon";

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
              text="토스트 메시지입니다."
              icon={
                <Icon name="InfoCircle" size={16} color="red" variant="Bold" />
              }
            />
          )}
        </AnimatePresence>
      </>
    );
  },
};
