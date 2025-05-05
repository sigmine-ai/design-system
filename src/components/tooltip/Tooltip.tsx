import React, { ReactNode, useState } from "react";
import styled from "styled-components";

type TooltipPosition = "top" | "bottom" | "left" | "right";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: TooltipPosition;
}

const Tooltip = ({ content, children, position = "top" }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <TooltipBox $position={position}>
          {content}
          <Arrow $position={position} />
        </TooltipBox>
      )}
    </Wrapper>
  );
};

export default Tooltip;

const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`;

const TooltipBox = styled.div<{ $position: TooltipPosition }>`
  position: absolute;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.G_600};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  border-radius: 8px;
  white-space: nowrap;

  ${({ $position }) =>
    ({
      top: `
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 8px;
      `,
      bottom: `
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 8px;
      `,
      left: `
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 8px;
      `,
      right: `
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 8px;
      `,
    }[$position])}
`;

const Arrow = styled.div<{ $position: TooltipPosition }>`
  position: absolute;
  width: 0;
  height: 0;
  border: 6px solid transparent;

  ${({ $position, theme }) =>
    ({
      top: `
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-top-color: ${theme.colors.G_600};
      `,
      bottom: `
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-bottom-color: ${theme.colors.G_600};
      `,
      left: `
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-left-color: ${theme.colors.G_600};
      `,
      right: `
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-right-color: ${theme.colors.G_600};
      `,
    }[$position])}
`;
