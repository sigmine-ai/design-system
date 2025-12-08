import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import * as Icons from "iconsax-react";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    name: "ReplyArrow", // 예시로 사용되는 아이콘 이름
    variant: "Bulk",
    color: "primary",
    size: 12,
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Primary: Story = {};

export const OverflowVisibility: Story = {
  render: () => {
    const [width, setWidth] = React.useState(24);
    const [height, setHeight] = React.useState(24);
    const size = 48; // 아이콘 자체 크기(컨테이너보다 크게)
    return (
      <div style={{ display: "grid", gap: 12 }}>
        <div>
          <div style={{ marginBottom: 8 }}>
            컨테이너 크기: {width}×{height}px
          </div>
          <input
            type="range"
            min={12}
            max={120}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            style={{ width: 260, marginRight: 8 }}
          />
          <input
            type="range"
            min={12}
            max={120}
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            style={{ width: 260 }}
          />
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
        >
          <div>
            <div style={{ fontSize: 12, marginBottom: 6 }}>
              iconsax-react 원본 (svg overflow: hidden)
            </div>
            <div
              style={{
                width,
                height,
                border: "1px dashed #d9d9d9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "visible",
                background: "#fff",
              }}
            >
              <Icons.ArrowRight2
                size={size}
                color="#333"
                style={{ overflow: "hidden" }}
                variant="Bold"
              />
            </div>
          </div>

          <div>
            <div style={{ fontSize: 12, marginBottom: 6 }}>
              우리 Icon (svg overflow: visible)
            </div>
            <div
              style={{
                width,
                height,
                border: "1px dashed #d9d9d9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "visible",
                background: "#fff",
              }}
            >
              <Icon
                name="ArrowRight2"
                variant="Bold"
                color="G_800"
                size={size}
              />
            </div>
          </div>
        </div>

        <div style={{ fontSize: 12, color: "#666" }}>
          - 컨테이너를 작게 줄였을 때, 오른쪽(우리 Icon)은 컨테이너 박스
          밖으로도 보이는지 확인하세요.
        </div>
      </div>
    );
  },
};
