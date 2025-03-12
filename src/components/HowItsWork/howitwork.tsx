import React from "react";
import styled from "styled-components";

const WorksContainer = styled.section`
  padding: 4rem 0;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const WorksTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;

  span {
    color: #6dc7d1;
  }
`;

const WorksStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;

  /* Add vertical connecting lines between steps */
  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    width: 2px;
    height: 2rem;
    background: #6dc7d1;
    transform: translateX(-50%);
  }
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background-color: #6dc7d1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const StepImage = styled.div`
  img {
    max-width: 450px;
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const StepText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-top: 1rem;
`;

const HowItWorksSection: React.FC = () => {
  return (
    <WorksContainer className="works">
      <Container className="container">
        <WorksTitle className="works__title">
          How It <span>Works</span>
        </WorksTitle>
        <WorksStep>
          <StepNumber>1</StepNumber>
          <StepImage>
            <img src="" alt="Step 1" />
          </StepImage>
          <StepText>Fill out a brief</StepText>
        </WorksStep>
        <WorksStep>
          <StepNumber>2</StepNumber>
          <StepImage>
            <img
              src="https://miblart.com/wp-content/themes/miblart/assets/images/get-free-cover3.webp"
              alt="Step 2"
            />
          </StepImage>
          <StepText>Our designers create ideas</StepText>
        </WorksStep>
        <WorksStep>
          <StepNumber>3</StepNumber>
          <StepImage>
            <img
              src="https://miblart.com/wp-content/themes/miblart/assets/images/get-free-cover2.webp"
              alt="Step 3"
            />
          </StepImage>
          <StepText>You get your free cover idea</StepText>
        </WorksStep>
      </Container>
    </WorksContainer>
  );
};

export default HowItWorksSection;
