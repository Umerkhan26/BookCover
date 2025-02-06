import React, { ReactNode } from "react";
import {
  BenefitsWrap,
  Container,
  Row,
  BenefitItemWrap,
  BenefitItem,
  BenefitItems,
  BenefitHeader,
  BenefitImage,
  BenefitTitle,
  BenefitSubtitle,
  SectionTitle,
  FirstRow,
  TextContainer,
} from "./benefits.styles";

type BenefitItem = {
  image: string;
  title: string;
  subtitle: string;
};

// Define the props for the BenefitsSection component
interface BenefitsSectionProps {
  title: ReactNode;
  benefits: BenefitItem[];
}

<<<<<<< HEAD
=======
// Styled Components
const BenefitsWrap = styled.section`
  padding: 60px 0;
  background-color: #ffffff; /* White background */
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; /* Add spacing between items */
  gap: 20px;
`;

const BenefitItemWrap = styled.div`
  flex: 1 1 48%;
  max-width: 48%;

  @media (min-width: 768px) {
    flex: 1 1 30%;
    max-width: 30%;
  }

  @media (min-width: 992px) {
    flex: 1 1 30%;
    max-width: 30%;
  }
`;

const BenefitItem = styled.div`
  background: #fff;
  padding: 40px 25px;
  border-radius: 10px;
border: 2px solid rgba(0, 188, 212, 0.3); /* Lightens the border using opacity */
  text-align: left;
  height: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
`;

const BenefitItems = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
border: 2px solid rgba(0, 188, 212, 0.3); /* Lightens the border using opacity */
; /* Green border */
  text-align: left;
  height: 100%;
  min-height: 170px;
  display: flex;
  flex-direction: column;
`;

const BenefitHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const BenefitImage = styled.div`
  margin-right: 15px;

  img {
    width: 50px;
    height: 50px;
  }
`;

const BenefitTitle = styled.span`
  font-size: 18px;
  color: #25293f;
  font-family: Museo Sans Cyrl;
  font-style: normal;
  font-weight: 400;
  webkit-font-smoothing: antialiased;
`;

const BenefitSubtitle = styled.div`
  font-size: 14px;
  color: #666;
`;

const SectionTitle = styled.h2`
  font-size: 34px;
  font-weight: bold;
  color: #25293f;
  position: relative;
  padding: 0px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  line-height: 1.3;

  span {
    color: #00bcd4;
  }
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center; /* Center align items */
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;
`;

>>>>>>> FictionCover
const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  benefits,
}) => {
  const firstTwoCards = benefits.slice(0, 2);
  const remainingCards = benefits.slice(2);

  return (
    <BenefitsWrap>
      <Container>
        {/* First row with text and the first two cards */}
        <FirstRow>
          <TextContainer>
            <SectionTitle>{title}</SectionTitle>
          </TextContainer>
          {firstTwoCards.map((benefit, index) => (
            <BenefitItemWrap key={index}>
              <BenefitItem>
                <BenefitHeader>
                  <BenefitImage>
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      loading="lazy"
                    />
                  </BenefitImage>
                  <BenefitTitle
                    dangerouslySetInnerHTML={{ __html: benefit.title }}
                  />
                </BenefitHeader>
                <BenefitSubtitle>{benefit.subtitle}</BenefitSubtitle>
              </BenefitItem>
            </BenefitItemWrap>
          ))}
        </FirstRow>

        {/* Remaining cards */}
        <Row>
          {remainingCards.map((benefit, index) => (
            <BenefitItemWrap key={index}>
              <BenefitItems>
                <BenefitHeader>
                  <BenefitImage>
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      loading="lazy"
                    />
                  </BenefitImage>
                  <BenefitTitle
                    dangerouslySetInnerHTML={{ __html: benefit.title }}
                  />
                </BenefitHeader>
                <BenefitSubtitle>{benefit.subtitle}</BenefitSubtitle>
              </BenefitItems>
            </BenefitItemWrap>
          ))}
        </Row>
      </Container>
    </BenefitsWrap>
  );
};

export default BenefitsSection;
