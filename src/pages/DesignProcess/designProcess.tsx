import { useState } from 'react';
import { 
  ProcessContainer, 
  Title, 
  StepsContainer, 
  StepCircle, 
  ContentWrapper, 
  LeftContent, 
  StepTitle, 
  StepDescription, 
  RightContent ,
  Button
} from './designProcess.styles';  // Importing styled components
import coverprocess1 from '../../assets/coverprocess1.png'
import coverprocess2 from '../../assets/coverprocess2.png'
import coverprocess3 from '../../assets/coverprocess3.png'
import coverprocess4 from '../../assets/coverprocess4.png'



// Type for each step in the process
interface Step {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
}

// Sample data for the steps
const steps: Step[] = [
  {
    id: 1,
    title: 'Place an order',
    description: 'After choosing a package, you’ll be redirected to our client portal. Note, that we don’t take pre-payment for some services, so you might see a $0 price at the checkout.',
    imgSrc: coverprocess1,
  },
  {
    id: 2,
    title: 'Fill out a brief',
    description: 'Fill out the brief in your client portal to confirm your order. After that, our customer success manager will reach out to you to discuss details..',
    imgSrc: coverprocess2,
  },
  {
    id: 3,
    title: 'Get the first draft',
    description: 'After getting the first draft, feel free to add your suggestions. We don’t limit the number of revisions.',
    imgSrc: coverprocess3,
  },
  {
    id: 4,
    title: 'Make a payment',
    description: 'Once you are completely satisfied with the design, we will send you a payment link. Meanwhile, your designer will prepare the final files, all formatted and ready to use.',
    imgSrc: coverprocess4,
  },
];

const DesignProcess = () => {
  const [activeStep, setActiveStep] = useState<number>(1); // Initial active step (typed as number)

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId); // Change active step on click
  };

  // Find the active step based on the id
  const activeStepData = steps.find(step => step.id === activeStep);

  // Fallback for undefined activeStepData
  if (!activeStepData) {
    return <div>Error: Step not found.</div>; // Optional: Handle if data is not found
  }

  return (
    <ProcessContainer>
      <Title>Our Book Cover Design <span className="text-[#6dc7d1]">Process</span> </Title>

      {/* Steps container */}
      <StepsContainer>
        {steps.map(step => (
          <StepCircle 
            key={step.id}
            isActive={step.id === activeStep}
            onClick={() => handleStepClick(step.id)}
          >
            {step.id}
          </StepCircle>
        ))}
      </StepsContainer>

      {/* Content wrapper for left and right content */}
      <ContentWrapper>
        <LeftContent>
          <StepTitle>{activeStepData.title}</StepTitle>
          <StepDescription>{activeStepData.description}</StepDescription>
        </LeftContent>

        <RightContent>
          <img src={activeStepData.imgSrc} alt={`Step ${activeStep}`} />
        </RightContent>
      </ContentWrapper>
  <div>
                    <Button className='mb-4'>
                    See Our FAQs
                    </Button>
                </div>
    </ProcessContainer>
  );
};

export default DesignProcess;
