import styled from "styled-components";

const Section = styled.section`
  padding: 60px 0px;
  font-family: "Manrope", sans-serif;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between; /* Align columns side by side */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Center align on small screens */
    text-align: center; /* Center text on small screens */
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 40%;
  padding: 0 8px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  max-width: 60%;
  padding: 0 60px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 40px;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(24px, 4vw, 34px);
  font-weight: bold;
  color: #212121;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align title for small screens */
    margin: 0 0 10px;
    padding: 0 37px;
    font-size: 28px;
    line-height: 1.5;
  }
`;

const Highlight = styled.span`
  color: #6dc7d1;
  display: inline-block;
  border-bottom: 2px solid #4fa3a2;
`;

const Subtitle = styled.p`
  color: #455a64;
  font-size: clamp(14px, 2.5vw, 16px);
  margin-top: 7px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align subtitle for small screens */
    margin: 0 0 50px;
    padding: 0 37px;
  }
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center; /* Center align steps for small screens */
  }
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Center align steps on small screens */
    text-align: center;
    margin-bottom: 30px;
  }
`;

const StepNumber = styled.div`
  font-size: clamp(24px, 5vw, 33px);
  font-weight: 700;
  color: #6dc7d1;
  margin-right: 40px;
  position: absolute;
  top: 0;
  left: -60px;

  &:after {
    content: "step";
    position: absolute;
    top: 40px;
    left: 6px;
    font-size: 12px;
    font-weight: 400;
    color: #c4c4c4;
    text-transform: uppercase;

    @media (max-width: 768px) {
      content: "step";
      position: absolute;
      top: 52px;
      left: 10px;
      font-size: 12px;
      font-weight: 400;
      color: #c4c4c4;
      text-transform: uppercase;
    }
  }

  @media (max-width: 768px) {
    display: none; /* Hide step number on small screens */
  }
`;

const StepContent = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    text-align: center; /* Center align content for small screens */
  }
`;

const StepTitle = styled.h3`
  font-size: clamp(18px, 3.5vw, 20px);
  font-weight: bold;
  margin-bottom: 5px;
  color: #212121;

  @media (max-width: 768px) {
    text-align: center; /* Center align title for small screens */
    font-size: 20px;
  }
`;

const StepDescription = styled.p`
  font-size: clamp(13px, 2.5vw, 14px);
  color: #333;

  @media (max-width: 768px) {
    text-align: center; /* Center align description for small screens */
    font-size: 14px;
    padding: 5px 0;
  }
`;

const Button = styled.a`
  display: inline-block;
  background-color: #6dc7d1;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgb(74, 164, 174);
  }

  @media (max-width: 768px) {
    display: inline-block;
    min-width: 190px;
    padding: 12px 15px;
    font-size: 16px;
    font-weight: 900;
    justify-items: center;
    justify-content: center;
    text-align: center;
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
