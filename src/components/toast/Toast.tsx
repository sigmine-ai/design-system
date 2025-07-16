import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import Text from "../text/Text";
import Icon, { IconNameType } from "../icon/Icon";

interface ToastProps {
  text: string;
  icon?: React.ReactNode;
  duration?: number;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  text,
  icon,
  duration = 2000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // setIsVisible(false); // 애니메이션 트리거
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  // 애니메이션 종료 시 onClose 호출
  const handleExitComplete = () => {
    if (onClose) onClose();
  };

  if (typeof window === "undefined") return null; // SSR 방어

  return createPortal(
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 0, x: "-50%" }}
          transition={{ duration: 0.5 }}
          style={{
            position: "fixed",
            top: "76px",
            left: "50%",
            zIndex: 9999,
          }}
        >
          <ToastWrapper>
            {icon}
            <Text
              font="b3_14_reg"
              color="G_800"
              style={{ whiteSpace: "nowrap" }}
            >
              {text}
            </Text>
          </ToastWrapper>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Toast;

const ToastWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  gap: 8px;
  box-shadow: 0px 2px 42px 0px rgba(32, 34, 50, 0.09);
`;
