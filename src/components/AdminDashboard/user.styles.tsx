import styled from "styled-components";

// Container with responsive padding and margin
export const Container = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 10px;
    margin-left: 92px;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.25rem; /* Slightly smaller title on mobile */
  }
`;

export const UserCount = styled.span`
  color: #777;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px; /* Adjust font size for smaller screens */
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
  background-color: #f9f8fa;
  color: black;
  padding: 10px;
  text-align: center; /* Center-align header content */

  @media (max-width: 768px) {
    padding: 8px; /* Reduce padding on mobile */
    font-size: 12px; /* Adjust font size on mobile */
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
  padding: 10px;
  color: black;
  font-size: 15px;
  text-align: center; /* Center-align table data */

  @media (max-width: 768px) {
    padding: 8px; /* Adjust padding for mobile */
    font-size: 14px; /* Adjust font size for mobile */
    display: block; /* Show as block for mobile view */
    width: 100%;
    margin-left: 0; /* Remove margin-left to prevent shifting */
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
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 36px;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
    min-height: 32px;
  }
`;

