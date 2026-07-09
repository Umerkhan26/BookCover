import styled from "styled-components";
// Main Section
export const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 0.5rem 48px;
  font-family: "Manrope", sans-serif;
  text-align: left;

  @media (max-width: 1024px) {
    padding: 20px 1rem 40px;
  }

  @media (max-width: 768px) {
    padding: 14px 1rem 36px;
  }
`;

// Title
export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

// Highlighted Text
export const HighlightedText = styled.span`
  color: #6dc7d1;
`;

// FAQ Item
export const FAQItem = styled.div`
  border-bottom: 89px;
  padding: 1rem 0;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 0.8rem 0;
  }
`;

// Question Row
export const QuestionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Icon Circle (Updated Green color with `?` inside)
export const IconCircle = styled.div`
  width: 30px; /* Increased width */
  height: 30px; /* Increased height */
  background-color: #6dc7d1; /* Changed to the new color */
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 1rem;
  }
`;

// Toggle Icon (Dropdown Arrow)
export const ToggleIcon = styled.span<{ isOpen: boolean }>`
  font-size: 1.2rem;
  color: #000;
  transition: transform 0.3s ease;

  ${({ isOpen }) =>
    isOpen ? "transform: rotate(180deg);" : "transform: rotate(0);"}

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0 32px;
    text-align: left;
  }
`;
