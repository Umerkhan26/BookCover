import styled from "styled-components";

// Main Section Container
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3rem 1.5rem;
`;

// Title Styling
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
      color: #333;
`;

export const HighlightedText = styled.span`
  color: #6dc7d1; /* Green Color */
`;

// Underline
export const Underline = styled.div`
  width: 70px;
  height: 3px;
  background-color: #6dc7d1;
  margin-top: 8px;
`;

// Subtitle
export const Subtitle = styled.p`
  color: #6b7280; /* Gray Color */
  margin-top: 1rem;
  font-size: 1rem;
`;

// Grid Layout
export const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem; /* Increased gap between columns */
  margin-top: 2rem;
`;

// List Column
export const ListColumn = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

// List Item
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #000;
  margin-bottom: 1rem;
`;

// Exact Tick Symbol
export const TickIcon = styled.span`
  color: #6dc7d1;
  font-size: 1.2rem; /* Adjusted to match the provided UI */
  font-weight: bold;
  margin-right: 10px;
`;

// Order Button
export const OrderButton = styled.button`
  margin-top: 2rem;
  padding: 12px 24px;
  background-color: #6dc7d1;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #6dc7d1;
  }
`;
