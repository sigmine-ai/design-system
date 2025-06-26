import React, { useEffect } from "react";
import styled from "styled-components";

interface ToastProps {
  children: React.ReactNode;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  children,
  duration = 2000,
  onClose,
}) => {
  useEffect(() => {
    if (!onClose) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return <ToastWrapper>{children}</ToastWrapper>;
};

export default Toast;

const ToastWrapper = styled.div`
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.G_700};
  border-radius: 8px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  width: fit-content;
`;
