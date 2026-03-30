import styled from "styled-components";

// Container and other styles remain the same
export const Container = styled.div`
  width: 100%;
  padding: 16px 18px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
  font-family: "Manrope", sans-serif;
  max-width: 1400px;
  margin: 20px auto 28px;

  @media (max-width: 768px) {
    padding: 12px;
    margin: 14px auto 20px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

export const Title = styled.h1`
  font-size: 1.125rem;
  color: #0f172a;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const RequestCount = styled.span`
  color: #64748b;
  font-size: 12px;
  font-weight: 600;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const TableHeader = styled.th`
  background-color: #f8fafc;
  text-align: left;
  padding: 8px 10px;
  font-size: 11px;
  color: #0f172a;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  &.header-id, &.header-email, &.header-genre, &.header-series, &.header-cover {
    display: table-cell;
  }

  &.header-username, &.header-booktitle, &.header-moreinfo {
    display: table-cell;
  }

  /* For 1024px screens and below, hide certain columns */
  @media (max-width: 1024px) {
    &.header-email, &.header-genre, &.header-series {
      display: none;  /* Hide these columns on 1024px screens */
    }
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 10px;
    &.header-id, &.header-email, &.header-genre, &.header-series, &.header-cover {
      display: none;
    }
  }
`;

export const TableData = styled.td`
  padding: 6px 10px;
  text-align: left;
  font-size: 13px;
  color: #334155;
  border-bottom: 1px solid #e5e7eb;
  vertical-align: middle;

  &.book-id, &.book-email, &.book-genre, &.book-series, &.book-cover {
    display: table-cell;
  }

  &.book-username, &.book-title, &.book-moreinfo {
    display: table-cell;
  }

  &.book-button {
    white-space: nowrap;
    width: 1%;
  }

  /* For 1024px screens and below, hide certain columns */
  @media (max-width: 1024px) {
    &.book-email, &.book-genre, &.book-series {
      display: none;  /* Hide these columns on 1024px screens */
    }
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    padding: 6px;
    font-size: 10px;
    &.book-id, &.book-email, &.book-genre, &.book-series, &.book-cover {
      display: none;
    }
  }
`;

export const TableRow = styled.tr`
  transition: background-color 0.2s ease;

  &:nth-child(even) {
    background-color: #f9fafb;
  }

  &:hover {
    background-color: #f3f4f6;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 0;
  border-radius: 16px;
  max-width: 700px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 10000;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6dc7d1;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 10px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 28px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  line-height: 1;
  z-index: 10001;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: white;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ModalBody = styled.div`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  padding: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const InfoButton = styled.button`
  padding: 8px 16px;
  background-color: #6dc7d1;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #5ab8c2;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(109, 199, 209, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;

export const ClickableLink = styled.span`
  color: #6dc7d1;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: underline;
  text-decoration-color: transparent;

  &:hover {
    color: #5ab8c2;
    text-decoration-color: #5ab8c2;
  }
`;

export const SeriesBadge = styled.span<{ isSeries: boolean }>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) => (props.isSeries ? "#d1fae5" : "#e5e7eb")};
  color: ${(props) => (props.isSeries ? "#065f46" : "#374151")};
`;
