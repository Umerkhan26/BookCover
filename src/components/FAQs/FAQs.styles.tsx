import styled from "styled-components";

export const FAQContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px; /* Reduced padding for smaller screens */

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
export const FAQTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Fixes potential overflow */
  margin: 0;
  height: 310px; /* Adjust height */
  background-color: #f8f9fa; /* Light gray background */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05); /* Subtle shadow */
  padding: 20px 0; /* Adds space */
  font-size: 36px;
  font-weight: bold;
  color: #222; /* Darker text for contrast */

  @media (max-width: 768px) {
    height: 140px;
    font-size: 30px;
  }

  @media (max-width: 480px) {
    height: 120px;
    font-size: 26px;
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
  display: flex;
  justify-content: center;
  margin-top: 6vh;
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
    font-size: 34px;
    margin-top: 60px;
  }
`;

export const QuestionWrapper = styled.div`
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  max-width: 800px;
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
