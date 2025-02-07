import styled from "styled-components";
// Main Section
export const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem .5rem;
  text-align: left;
  margin-bottom:20px;
`;

// Title
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
      color: #333;
`;

// Highlighted Text
export const HighlightedText = styled.span`
  color: #6dc7d1;
`;

// FAQ Item
export const FAQItem = styled.div`
  border-bottom: 89px ;
  padding: 1rem 0;
  cursor: pointer;
  
`;

// Question Row
export const QuestionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
      color: #333;
`;

// Icon Circle (Updated Green color with `?` inside)
export const IconCircle = styled.div`
  width: 30px;  /* Increased width */
  height: 30px; /* Increased height */
  background-color: #6dc7d1;  /* Changed to the new color */
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 10px;
`;

// Toggle Icon (Dropdown Arrow)
export const ToggleIcon = styled.span<{ isOpen: boolean }>`
  font-size: 1.2rem;
  color: #000;
  transition: transform 0.3s ease;

  ${({ isOpen }) => (isOpen ? "transform: rotate(180deg);" : "transform: rotate(0);")}
`;

interface AnswerProps {
  isOpen: boolean;
}

// Answer Text (Hidden by default)
export const Answer = styled.p<AnswerProps>`
  color: #6b7280;
  font-size: 1rem;
  margin-top: 1rem;
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`;
