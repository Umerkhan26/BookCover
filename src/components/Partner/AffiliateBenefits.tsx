import { useNavigate } from "react-router-dom";
import {
  Container,
  ContentWrapper,
  ImageWrapper,
  Image,
  TextWrapper,
  Title,
  BenefitsList,
  BenefitItem,
  Button,
} from "./AffiliateBenefits.styles";
import benfits2 from "../../assets/benifits2.jpg";

interface AffiliateBenefitsProps {
  benefits?: string[];
  buttonText?: string;
  buttonLink?: string;
  image?: string;
  onButtonClick?: () => void;
}

const AffiliateBenefits = ({
  benefits = [
    "On-time monthly payments",
    "24/7 support",
    "A special partner newsletter",
    "A dashboard with all stats",
  ],
  buttonText = "Become an affiliate",
  buttonLink = "/contact-us",
  image = benfits2,
  onButtonClick,
}: AffiliateBenefitsProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
      return;
    }
    navigate(buttonLink);
  };

  return (
    <Container>
      <ContentWrapper>
        <ImageWrapper>
          <Image src={image} alt="Affiliate Benefits" />
        </ImageWrapper>
        <TextWrapper>
          <Title>
            Benefits You <span>Get</span>
          </Title>
          <BenefitsList>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>{benefit}</BenefitItem>
            ))}
          </BenefitsList>
          <Button type="button" onClick={handleClick}>
            {buttonText}
          </Button>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default AffiliateBenefits;
