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
