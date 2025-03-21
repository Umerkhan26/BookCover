import styled from "styled-components";

export const FAQContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 100px 20px; /* Reduced padding for smaller screens */

  @media (max-width: 1024px) {
    padding: 80px 20px;
  }

  @media (max-width: 768px) {
    padding: 60px 15px;
  }

  @media (max-width: 480px) {
    padding: 40px 10px;
  }
`;

export const FAQTitle = styled.h2`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  position: relative;
  display: inline-block;
  margin-bottom: 40px;
  color: black;

  &::after {
    content: "";
    display: block;
    width: 50%;
    height: 4px;
    background-color: #6dc7d1;
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-top: 60px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-top: 60px;
  }
`;

export const QuestionWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
`;

export const Question = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;

  &:hover {
    color: black;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 12px;
  }
`;

export const Answer = styled.div`
  font-size: 1rem;
  color: #555;
  padding: 15px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 12px;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 10px;
  }
`;

export const Icon = styled.span`
  font-size: 1.5rem;
  color: #6dc7d1;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
