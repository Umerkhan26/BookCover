import { Button, FullWidthContainer, Heading, SubHeading } from "./RedesignForm.styles";

interface RedesignFormProps {
  heading?: string;
  subHeading?: string;
  buttonText?: string;
}

const RedesignForm = ({
  heading = "Just Fill in <span className='text-[#6dc7d1]'>the Form</span>",
  subHeading = "We’ll start redesigning your cover",
  buttonText = "Redesign My Cover",
}: RedesignFormProps) => {
  return (
    <FullWidthContainer>
      <Heading dangerouslySetInnerHTML={{ __html: heading }} />
      <SubHeading>{subHeading}</SubHeading>
      <Button>{buttonText}</Button>
    </FullWidthContainer>
  );
};

export default RedesignForm;
