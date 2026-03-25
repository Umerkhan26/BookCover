import React, { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: ${(p) => (p.$open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 10001;
  padding: 20px;
`;

const Box = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  max-width: 520px;
  width: 100%;
  padding: 24px;
  font-family: "Manrope", sans-serif;
`;

const ModalTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
`;

const Hint = styled.p`
  margin: 0 0 16px;
  font-size: 13px;
  line-height: 1.45;
  color: #666;
`;

const UrlRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  align-items: stretch;
`;

const UrlInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 13px;
  color: #1e1e1e;
  background: #f9f9f9;

  &:focus {
    outline: none;
    border-color: #2271b1;
    background: #fff;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const Button = styled.button<{ $primary?: boolean }>`
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Manrope", sans-serif;
  border: none;
  transition: opacity 0.2s, background 0.2s;

  ${(p) =>
    p.$primary
      ? `
    background: #2271b1;
    color: #fff;
    &:hover { background: #135e96; }
  `
      : `
    background: #f0f0f0;
    color: #333;
    &:hover { background: #e5e5e5; }
  `}
`;

const CopiedNote = styled.span`
  font-size: 12px;
  color: #00a32a;
  margin-right: auto;
  align-self: center;
`;

export interface PermalinkModalProps {
  open: boolean;
  url: string;
  title?: string;
  hint?: string;
  confirmLabel?: string;
  onClose: () => void;
}

const PermalinkModal: React.FC<PermalinkModalProps> = ({
  open,
  url,
  title = "Permalink",
  hint = "Visitors open this address to read the post (when it is published).",
  confirmLabel = "Done",
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link:", url);
    }
  };

  if (!open) return null;

  return (
    <Overlay $open={open} onClick={onClose}>
      <Box onClick={(e) => e.stopPropagation()}>
        <ModalTitle>{title}</ModalTitle>
        <Hint>{hint}</Hint>
        <UrlRow>
          <UrlInput readOnly value={url} onFocus={(e) => e.target.select()} />
        </UrlRow>
        <Actions>
          {copied ? <CopiedNote>Copied</CopiedNote> : <span />}
          <Button type="button" onClick={copy} disabled={!url}>
            Copy link
          </Button>
          <Button type="button" $primary onClick={onClose}>
            {confirmLabel}
          </Button>
        </Actions>
      </Box>
    </Overlay>
  );
};

export default PermalinkModal;
