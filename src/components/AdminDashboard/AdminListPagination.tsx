import React from "react";
import styled from "styled-components";

const PaginationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  padding-bottom: 24px;
`;

const PaginationButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  font-family: "Manrope", sans-serif;
  color: #374151;

  &:hover:not(:disabled) {
    background: #f3f4f6;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const PaginationInfo = styled.span`
  font-size: 14px;
  color: #6b7280;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const PaginationHint = styled.span`
  font-size: 12px;
  color: #9ca3af;
  font-weight: 400;
`;

export type AdminListPaginationProps = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  disabled?: boolean;
  /** When set, shows "(N per page)" under the page label */
  pageSizeLabel?: number;
};

const AdminListPagination: React.FC<AdminListPaginationProps> = ({
  page,
  totalPages,
  onPrev,
  onNext,
  disabled = false,
  pageSizeLabel,
}) => (
  <PaginationBar>
    <PaginationButton
      type="button"
      disabled={disabled || page <= 1}
      onClick={onPrev}
    >
      ← Previous
    </PaginationButton>
    <PaginationInfo>
      Page {page} of {totalPages}
      {pageSizeLabel != null ? (
        <PaginationHint>({pageSizeLabel} per page)</PaginationHint>
      ) : null}
    </PaginationInfo>
    <PaginationButton
      type="button"
      disabled={disabled || page >= totalPages}
      onClick={onNext}
    >
      Next →
    </PaginationButton>
  </PaginationBar>
);

export default AdminListPagination;
