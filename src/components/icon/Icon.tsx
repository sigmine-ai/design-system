"use client";

import React from "react";
import theme from "@/styles/theme";
import * as Icons from "iconsax-react";

export type IconNameType =
  | keyof typeof Icons
  | React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface IconProps {
  name: IconNameType;
  color?: keyof typeof theme.colors;
  size?: number;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  color = "primary",
  size = 20,
  onClick,
}: IconProps) => {
  const hexColor = theme.colors[color];

  // name이 문자열이면 iconsax-react의 해당 아이콘 컴포넌트를 사용하고,
  // 그렇지 않으면 전달받은 React 컴포넌트를 사용합니다.
  const IconComponent =
    typeof name === "string" ? Icons[name as keyof typeof Icons] : name;

  return (
    <IconComponent
      color={hexColor}
      size={size}
      onClick={onClick}
      style={{ pointerEvents: "none" }}
    />
  );
};

export default Icon;
