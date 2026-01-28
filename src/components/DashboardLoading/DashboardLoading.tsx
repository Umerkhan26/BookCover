import React from "react";
import styled, { keyframes } from "styled-components";

// Shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

// Base shimmer style
const ShimmerBase = styled.div`
  background: linear-gradient(
    90deg,
    #f0f0f0 0px,
    #e0e0e0 40px,
    #f0f0f0 80px
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 4px;
`;

// Table Row Skeleton
export const TableRowSkeleton = styled(ShimmerBase)`
  height: 56px;
  margin-bottom: 8px;
  width: 100%;
`;

// Stat Card Skeleton
export const StatCardSkeleton = styled(ShimmerBase)`
  height: 120px;
  border-radius: 12px;
  flex: 1;
  margin: 0 10px;
`;

// Table Skeleton
export const TableSkeleton: React.FC<{ rows?: number; cols?: number }> = ({
  rows = 5,
  cols = 4,
}) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRowSkeleton key={rowIndex} style={{ marginBottom: "8px" }} />
      ))}
    </>
  );
};

// Stat Cards Skeleton
export const StatCardsSkeleton: React.FC<{ count?: number }> = ({
  count = 3,
}) => {
  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
      {Array.from({ length: count }).map((_, index) => (
        <StatCardSkeleton key={index} />
      ))}
    </div>
  );
};

// Spinner Component
const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #6dc7d1;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingSpinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

// Button Loading State
export const ButtonLoading = styled.button`
  position: relative;
  opacity: 0.7;
  cursor: not-allowed;

  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 50%;
    left: 50%;
    margin-left: -8px;
    margin-top: -8px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 0.6s linear infinite;
  }
`;

// Page Loading Wrapper
export const PageLoadingWrapper = styled.div`
  padding: 40px 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

// Error Message Component
export const ErrorMessage = styled.div`
  background-color: #fee;
  border: 1px solid #fcc;
  color: #c33;
  padding: 16px;
  border-radius: 8px;
  margin: 20px 0;
  text-align: center;
  font-weight: 500;
`;

// Empty State Component
export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #666;

  svg {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    opacity: 0.5;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;
