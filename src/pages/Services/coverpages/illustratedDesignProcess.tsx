import {
  ProcessSection,
  Header,
  Title,
  Subtitle,
  ContentCard,
  ImagePanel,
  MainImageFrame,
  SketchImageFrame,
  ImageCaption,
  StepsPanel,
  StepsIntro,
  StepsContainer,
  Step,
  StepNumber,
  StepBody,
  StepLabel,
  StepTitle,
  StepText,
} from "./illustratedDesignProcess.styles";
import image1 from "../../../assets/pacakge1.webp";
import image2 from "../../../assets/package2.webp";

const steps = [
  {
    id: "01",
    title: "Place an order",
    text: "After paying a deposit, fill in a creative brief and provide information about your book.",
  },
  {
    id: "02",
    title: "Choose a style",
    text: (
      <>
        Depending on your package, we will send you different illustration
        styles to choose from.{" "}
        <strong>The final price depends on the complexity</strong> of the style
        you decide on. The price will be agreed before cooperation begins.
      </>
    ),
  },
  {
    id: "03",
    title: "Get your first sketch",
    text: (
      <>
        You'll receive the <strong>first black-and-white sketch</strong>.
        Unlimited revisions are available at this stage.
      </>
    ),
  },
  {
    id: "04",
    title: "Final concept & typography",
    text: (
      <>
        After approving the final concept, our illustrators{" "}
        <strong>add details, colors, and typography.</strong>
      </>
    ),
  },
];

const DesignProcess = () => {
  return (
    <ProcessSection>
      <Header>
        <Title>
          Our Illustrated Book Cover <span>Design Process</span>
        </Title>
        <Subtitle>
          From first brief to final artwork — a clear path built for custom
          illustrated covers.
        </Subtitle>
      </Header>

      <ContentCard>
        <ImagePanel>
          <MainImageFrame>
            <img src={image2} alt="Illustrated book cover examples" />
          </MainImageFrame>
          <SketchImageFrame>
            <img src={image1} alt="Illustrated cover sketches" />
          </SketchImageFrame>
          <ImageCaption>Custom illustrated covers & concepts</ImageCaption>
        </ImagePanel>

        <StepsPanel>
          <StepsIntro>
            Four simple steps to get a cover that matches your story and style.
          </StepsIntro>
          <StepsContainer>
            {steps.map((step) => (
              <Step key={step.id}>
                <StepNumber>{step.id}</StepNumber>
                <StepBody>
                  <StepLabel>Step {step.id}</StepLabel>
                  <StepTitle>{step.title}</StepTitle>
                  <StepText>{step.text}</StepText>
                </StepBody>
              </Step>
            ))}
          </StepsContainer>
        </StepsPanel>
      </ContentCard>
    </ProcessSection>
  );
};

export default DesignProcess;
