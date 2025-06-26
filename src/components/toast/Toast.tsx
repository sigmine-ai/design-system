import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // 애니메이션 트리거
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  // 애니메이션 종료 시 onClose 호출
  const handleExitComplete = () => {
    if (onClose) onClose();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: 40,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
        >
          <ToastWrapper>{children}</ToastWrapper>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;

const ToastWrapper = styled.div`
  background: ${({ theme }) => theme.colors.G_700};
  border-radius: 8px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;
