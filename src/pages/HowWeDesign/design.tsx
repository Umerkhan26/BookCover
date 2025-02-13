import React from "react";
import styled from "styled-components";

// Styled components
const Section = styled.section`
  padding: 60px 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 40%;
  padding: 0 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  max-width: 60%;
  padding: 0 20px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 34px;
  font-weight: bold;
  color: #212121;
`;

const Highlight = styled.span`
  color: #6dc7d1;
  display: inline-block;
  border-bottom: 2px solid #4fa3a2;
`;

const Subtitle = styled.p`
  color: #455a64;
  font-size: 16px;
  margin-top: 7px;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  position: relative;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const StepNumber = styled.div`
  font-size: 33px;
  line-height: 1;
  font-weight: 700;
  color: #fbc02d;
  margin-right: 40px;
  position: absolute;
  top: 0;
  left: -73px;

  &:after {
    content: "step";
    position: absolute;
    top: 35px;
    left: 6px;
    font-size: 12px;
    font-weight: 400;
    color: #c4c4c4;
    text-transform: uppercase;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #212121;
`;

const StepDescription = styled.p`
  font-size: 14px;
  color: #333;
`;

const Button = styled.a`
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

  @media (max-width: 480px) {
    width: 100%;
    padding: 14px 0;
  }
`;

const DesignProcess = ({
  title = "How We Design",
  highlight = "Book Cover",
  subtitle = "Here are the steps we make to create a design that piques curiosity.",
  steps = [
    {
      number: "01",
      title: "Dig deeper into your book concept",
      description:
        "We ask you to fill in the creative brief to grasp your requirements, catch the hook of your story, and reflect it on the book cover.",
    },
    {
      number: "02",
      title: "Analyze your genre",
      description:
        "We research typography, layouts, and color themes common to your genre to make sure that your book cover design will fit the market.",
    },
    {
      number: "03",
      title: "Provide you with the first sketch",
      description:
        "You get the first concept in just 9 business days for a photo-manipulated cover and 14 business days for an illustrated one.",
    },
    {
      number: "04",
      title: "Implement your revisions",
      description:
        "We understand how much time you’ve spent mastering your work and want to do the same for the cover. That’s why we don’t limit the number of revisions.",
    },
  ],
  buttonText = "Order Design",
  buttonLink = "/services",
}) => {
  return (
    <Section>
      <Container>
        <LeftColumn>
          <SectionTitle>
            {title} <br />
            <Highlight>{highlight}</Highlight>
          </SectionTitle>
          <Subtitle>{subtitle}</Subtitle>
        </LeftColumn>
        <RightColumn>
          <StepsContainer>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepNumber>{step.number}</StepNumber>
                <StepContent>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepContent>
              </Step>
            ))}
          </StepsContainer>
          <Button href={buttonLink}>{buttonText}</Button>
        </RightColumn>
      </Container>
    </Section>
  );
};

export default DesignProcess;
