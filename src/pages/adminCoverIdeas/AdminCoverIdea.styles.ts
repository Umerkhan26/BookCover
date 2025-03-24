import styled from "styled-components";

// Container and other styles remain the same
export const Container = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
    margin-left: 65px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-left: 65px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const TableHeader = styled.th`
  background-color: #f9f8fa;
  text-align: left;
  padding: 10px;
  font-size: 14px;
  color: black;
  font-weight: bold;

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
  padding: 12px;
  text-align: left;
  font-size: 14px;
  color: black;
  margin-top: 18px;
  border-bottom: 1px solid #ececec;

  &.book-id, &.book-email, &.book-genre, &.book-series, &.book-cover {
    display: table-cell;
  }

  &.book-username, &.book-title, &.book-moreinfo {
    display: table-cell;
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
  &:nth-child(even) {
    background-color: #fafafa;
  }

  &:hover {
    background-color: #f0f8ff;
    cursor: pointer;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 10000;
  position: relative;

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
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  background: none;
  border: none;
  color: black;
  font-weight: bold;
  padding: 5px 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  color: black;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;

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
  padding: 10px;

  p {
    margin: 8px 0;
  }

  strong {
    font-weight: bold;
  }

  img {
    max-width: 100%;
    margin: 5px;
  }

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
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4aa0b5;
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
