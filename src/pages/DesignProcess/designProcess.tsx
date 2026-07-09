import { useState } from "react";
import {
  ProcessContainer,
  Header,
  Title,
  HeaderSubtitle,
  StepsContainer,
  StepItem,
  StepCircle,
  StepLabel,
  ContentWrapper,
  LeftContent,
  StepBadge,
  StepTitle,
  StepDescription,
  RightContent,
  Button,
} from "./designProcess.styles";
import coverprocess1 from "../../assets/coverprocess1.webp";
import coverprocess2 from "../../assets/coverprocess2.webp";
import coverprocess3 from "../../assets/coverprocess3.webp";
import coverprocess4 from "../../assets/coverprocess4.webp";

interface Step {
  id: number;
  shortLabel: string;
  title: string;
  description: string;
  imgSrc: string;
}

const steps: Step[] = [
  {
    id: 1,
    shortLabel: "Order",
    title: "Place an order",
    description:
      "After choosing a package, you’ll be redirected to our client portal. Note, that we don’t take pre-payment for some services, so you might see a $0 price at the checkout.",
    imgSrc: coverprocess1,
  },
  {
    id: 2,
    shortLabel: "Brief",
    title: "Fill out a brief",
    description:
      "Fill out the brief in your client portal to confirm your order. After that, our customer success manager will reach out to you to discuss details.",
    imgSrc: coverprocess2,
  },
  {
    id: 3,
    shortLabel: "Draft",
    title: "Get the first draft",
    description:
      "After getting the first draft, feel free to add your suggestions. We don’t limit the number of revisions.",
    imgSrc: coverprocess3,
  },
  {
    id: 4,
    shortLabel: "Payment",
    title: "Make a payment",
    description:
      "Once you are completely satisfied with the design, we will send you a payment link. Meanwhile, your designer will prepare the final files, all formatted and ready to use.",
    imgSrc: coverprocess4,
  },
];

const DesignProcess = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const activeStepData = steps.find((step) => step.id === activeStep);

  if (!activeStepData) {
    return <div>Error: Step not found.</div>;
  }

  return (
    <ProcessContainer>
      <Header>
        <Title>
          Our Book Cover Design <span>Process</span>
        </Title>
        <HeaderSubtitle>
          A simple 4-step flow from order to final files — clear, guided, and
          revision-friendly.
        </HeaderSubtitle>
      </Header>

      <StepsContainer>
        {steps.map((step) => (
          <StepItem
            key={step.id}
            type="button"
            onClick={() => setActiveStep(step.id)}
            aria-label={`Step ${step.id}: ${step.title}`}
          >
            <StepCircle isActive={step.id === activeStep}>{step.id}</StepCircle>
            <StepLabel $active={step.id === activeStep}>
              {step.shortLabel}
            </StepLabel>
          </StepItem>
        ))}
      </StepsContainer>

      <ContentWrapper>
        <LeftContent>
          <StepBadge>Step {activeStepData.id} of 4</StepBadge>
          <StepTitle>{activeStepData.title}</StepTitle>
          <StepDescription>{activeStepData.description}</StepDescription>
        </LeftContent>

        <RightContent>
          <img src={activeStepData.imgSrc} alt={`Step ${activeStep}`} />
        </RightContent>
      </ContentWrapper>

      <Button href="/faqs">See Our FAQs</Button>
    </ProcessContainer>
  );
};

export default DesignProcess;
