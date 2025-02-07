import { 
    Container, 
    LeftColumn, 
    RightColumn, 
    Section, 
    StepsContainer, 
    Step, 
    StepContent, 
    StepDescription, 
    StepNumber, 
    StepTitle, 
    StepImage 
  } from "./DesignLogoBrandingSteps.styles";
  
  import {steps} from '../../services/LogoBrandingStepsData'
  
  const DesignLogoBrandingSteps = () => {
    return (
      <Section>
        <Container>
          <RightColumn>
            <StepsContainer>
              {steps.map((step, index) => (
                <Step key={index}>
                  <LeftColumn>
                    <StepImage src={step.image} alt={`Step ${step.number}`} />
                  </LeftColumn>
                  <StepContent>
                    <StepNumber>{step.number}</StepNumber>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepContent>
                </Step>
              ))}
            </StepsContainer>
            
          </RightColumn>
        </Container>
      </Section>
    );
  };
  
  export default DesignLogoBrandingSteps;
  