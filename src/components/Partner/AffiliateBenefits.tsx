import {
  Container,
  ContentWrapper,
  ImageWrapper,
  Image,
  TextWrapper,
  Title,
  BenefitsList,
  BenefitItem,
  Button
} from "./AffiliateBenefits.styles";
// import defaultImage from "../../assets/pacakge1.jpeg"; // Default image
import benfits2 from '../../assets/benifits2.jpg'

const AffiliateBenefits = ({
  title = "Benefits You Get",
  benefits = [
    "On-time monthly payments",
    "24/7 support",
    "A special partner newsletter",
    "A dashboard with all stats",
  ],
  buttonText = "Become an affiliate",
  image = benfits2,
}) => {
  return (
    <Container>
      <ContentWrapper>
        <ImageWrapper>
          <Image src={image} alt="Affiliate Benefits" />
        </ImageWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <BenefitsList>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>{benefit}</BenefitItem>
            ))}
          </BenefitsList>
          <Button>{buttonText}</Button>
        </TextWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default AffiliateBenefits;
