import React from "react";
import styled from "styled-components";

const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${(p) => (p.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
`;

const Box = styled.div<{ variant?: "danger" | "primary" }>`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  max-width: 420px;
  width: 100%;
  padding: 24px;
`;

const ModalTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  font-family: "Manrope", sans-serif;
`;

const Message = styled.p`
  margin: 0 0 24px;
  font-size: 15px;
  line-height: 1.5;
  color: #555;
  font-family: "Manrope", sans-serif;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const Button = styled.button<{ variant?: "cancel" | "confirm" }>`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  font-family: "Manrope", sans-serif;
  border: none;

  ${(p) =>
    p.variant === "cancel"
      ? `
    background: #f0f0f0;
    color: #333;
    &:hover { background: #e5e5e5; }
  `
      : `
    background: #e74c3c;
    color: #fff;
    &:hover { background: #c0392b; }
  `}
`;

export interface ConfirmModalProps {
  open: boolean;
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
  variant?: "danger" | "primary";
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  title = "Confirm",
  message,
  confirmLabel = "OK",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  variant = "danger",
}) => {
  if (!open) return null;
  return (
    <Overlay open={open} onClick={onCancel}>
      <Box variant={variant} onClick={(e) => e.stopPropagation()}>
        <ModalTitle>{title}</ModalTitle>
        <Message>{message}</Message>
        <Actions>
          <Button type="button" variant="cancel" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button type="button" variant="confirm" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </Actions>
      </Box>
    </Overlay>
  );
};

export default ConfirmModal;
