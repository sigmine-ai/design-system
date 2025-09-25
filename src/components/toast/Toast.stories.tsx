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
              text="해당 기능은 곧 제공될 예정입니다."
              text2="해당 기능은 곧 제공될 예정입니다. 조금만 기다려 주세요!"
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

const customViewports = {
  narrow: {
    name: "Narrow 375px",
    styles: { width: "375px", height: "800px" },
    type: "mobile",
  },
  wide: {
    name: "Wide 1200px",
    styles: { width: "1200px", height: "800px" },
    type: "desktop",
  },
};

export const NarrowViewport: Story = {
  parameters: {
    viewport: { viewports: customViewports as any, defaultViewport: "narrow" },
  },
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <>
        <button onClick={() => setShow((p) => !p)}>
          {show ? "토스트 숨기기" : "토스트 보이기"}
        </button>
        <AnimatePresence>
          {show && (
            <Toast
              isAutoClose={false}
              text="이 텍스트는 매우 길어서 작은 화면에서는 줄바꿈되어야 하며, 최대 폭을 넘어가지 않도록 말줄임/줄바꿈이 적용됩니다."
              text2="서브 텍스트도 동일하게 동작합니다. 화면이 좁으면 여러 줄로 보이고, 넓으면 한 줄로 유지됩니다."
              icon={
                <Icon
                  name="InfoCircle"
                  size={16}
                  color="primary"
                  variant="Bold"
                />
              }
            />
          )}
        </AnimatePresence>
      </>
    );
  },
};

export const WideViewport: Story = {
  parameters: {
    viewport: { viewports: customViewports as any, defaultViewport: "wide" },
  },
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <>
        <button onClick={() => setShow((p) => !p)}>
          {show ? "토스트 숨기기" : "토스트 보이기"}
        </button>
        <AnimatePresence>
          {show && (
            <Toast
              isAutoClose={false}
              text="이 텍스트는 넓은 화면에서는 한 줄로 유지되어야 합니다. 너비가 충분하므로 말줄임 없이 한 줄 표시가 기대됩니다."
              text2="서브 텍스트도 한 줄로 보입니다."
              icon={
                <Icon
                  name="InfoCircle"
                  size={16}
                  color="primary"
                  variant="Bold"
                />
              }
            />
          )}
        </AnimatePresence>
      </>
    );
  },
};
