import styled from "styled-components";

// Container with responsive padding and margin
export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 16px 18px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
  margin: 20px auto 28px;
  font-family: "Manrope", sans-serif;

  @media (max-width: 768px) {
    padding: 12px;
    margin: 14px auto 20px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: #0f172a;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const UserCount = styled.span`
  color: #64748b;
  font-size: 12px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center; /* Center-align the content of the table */

  @media (max-width: 768px) {
    overflow-x: hidden; /* Disable horizontal scrolling */
    display: block;
    width: 100%;

     tbody{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const TableHeader = styled.th`
  background-color: #f8fafc;
  color: #0f172a;
  padding: 8px 6px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  &.checkbox-column {
    width: 40px;
    padding-left: 8px;
    padding-right: 8px;
  }
  text-align: center;

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 10px;
    display: none; /* Hide all column headers on mobile */
  }

  &.id-column,
  &.name-column,
  &.email-column,
  &.role-column,
  &.action-column {
    @media (max-width: 768px) {
      display: none; /* Hide individual columns' headers on mobile screens */
    }
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 10px; /* Add margin between rows */
  }
`;

export const TableData = styled.td`
  padding: 8px 6px;
  color: #334155;
  font-size: 13px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 12px;
    display: block; /* Show as block for mobile view */
    width: 100%;
    margin-left: 0; /* Remove margin-left to prevent shifting */
  }

  &.checkbox-column {
    vertical-align: middle;
    width: 40px;
  }

  &.id-column {
    @media (max-width: 768px) {
      display: none; /* Hide "ID" column data on mobile screens */
    }
  }

  &.name-column {
    @media (max-width: 768px) {
      display: block; /* Show "Name" data under the name column */
    }
  }

  &.email-column {
    @media (max-width: 768px) {
      display: block; /* Show "Email" data under the name column */
    }
  }

  &.role-column {
    @media (max-width: 768px) {
      display: block; /* Show role under name for mobile */
      font-size: 12px;
      color: #777;
      margin-top: 5px; /* Add margin between name and role */
    }
  }

  &.action-column {
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px; /* Add gap between the buttons */
    }
  }
`;

export const UserProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px; /* Slightly smaller profile picture on mobile */
    margin-right: 8px;
  }
`;

interface ButtonProps {
  bgColor?: string; // Make sure bgColor is optional and can be passed as a string
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || "gray"};
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-height: 30px;

  &:hover:not(:disabled) {
    opacity: 0.92;
    filter: brightness(0.97);
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 11px;
    min-height: 28px;
  }
`;

