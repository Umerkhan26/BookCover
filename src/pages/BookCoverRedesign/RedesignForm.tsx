
import { Button, FullWidthContainer, Heading, SubHeading } from "./RedesignForm.styles";


const RedesignForm = () => {
  return (
    <FullWidthContainer>
      <Heading>Just Fill in <span className="text-[#6dc7d1]">the Form</span></Heading>
      <SubHeading>We’ll start redesigning your cover</SubHeading>
      <Button>Redesign My Cover</Button>
    </FullWidthContainer>
  );
};

export default RedesignForm;
