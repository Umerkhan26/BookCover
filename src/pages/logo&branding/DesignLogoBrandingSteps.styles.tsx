import styled from "styled-components";

// Main Section Styling
export const Section = styled.section`
  padding: 60px 0;
  font-family: "Manrope", sans-serif;
  background-color: #eaeaea;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 20px;
  }
`;

// Left Column for Step Image
export const LeftColumn = styled.div`
  flex: 0.3; /* Adjusts image size */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

export const RightColumn = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    align-items: center;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// Individual Step Container
export const Step = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

// Number Styling
export const StepNumber = styled.div`
  font-size: 33px;
  font-weight: 700;
  color: #fbc02d;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 28px;
    display: none;
  }
`;

// Step Content (Title + Description)
export const StepContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const StepTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #212121;

  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
`;

export const StepDescription = styled.p`
  font-size: 14px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 15px;
  }
`;

// Image for each step
export const StepImage = styled.img`
  width: 100%; /* Adjust size */
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 200px;

  @media (max-width: 768px) {
    max-width: 3500px;
    margin-right: 0;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

// Button Styling
export const Button = styled.a`
  display: inline-block;
  background-color: #6dc7d1;
  color: white;
  padding: 12px 24px;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;

  &:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;
