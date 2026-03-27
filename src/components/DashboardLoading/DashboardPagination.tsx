import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
  padding: 8px 12px;
  flex-wrap: wrap;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
`;

const NavButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  min-width: 36px;
  height: 32px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: #fff;
  color: #334155;
  cursor: pointer;
  font-family: "Manrope", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease,
    box-shadow 0.15s ease;

  &:hover:not(:disabled) {
    background: #fff;
    border-color: #6dc7d1;
    color: #0f172a;
    box-shadow: 0 2px 6px rgba(109, 199, 209, 0.2);
  }

  &:disabled {
    opacity: 0.42;
    cursor: not-allowed;
    box-shadow: none;
  }

  svg {
    flex-shrink: 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  min-width: 108px;
`;

const InfoMain = styled.span`
  font-size: 11px;
  color: #475569;
  font-weight: 600;
`;

const InfoHint = styled.span`
  font-size: 10px;
  color: #94a3b8;
  font-weight: 500;
`;

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type DashboardPaginationProps = {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  disabled?: boolean;
  pageSizeLabel?: number;
};

const DashboardPagination: React.FC<DashboardPaginationProps> = ({
  page,
  totalPages,
  onPrev,
  onNext,
  disabled = false,
  pageSizeLabel,
}) => (
  <Bar>
    <NavButton
      type="button"
      disabled={disabled || page <= 1}
      onClick={onPrev}
      aria-label="Previous page"
    >
      <ChevronLeft />
      <span>Prev</span>
    </NavButton>
    <Info>
      <InfoMain>
        Page {page} of {totalPages}
      </InfoMain>
      {pageSizeLabel != null ? (
        <InfoHint>{pageSizeLabel} per page</InfoHint>
      ) : null}
    </Info>
    <NavButton
      type="button"
      disabled={disabled || page >= totalPages}
      onClick={onNext}
      aria-label="Next page"
    >
      <span>Next</span>
      <ChevronRight />
    </NavButton>
  </Bar>
);

export default DashboardPagination;
