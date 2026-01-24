import React, { ReactNode, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  BenefitsWrap,
  Container,
  Row,
  BenefitItemWrap,
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

  const baseDelay = 0;
  const delayIncrement = 200;

  useEffect(() => {
    // Refresh AOS when component mounts to ensure animations work on refresh
    AOS.refresh();
  }, []);

  return (
    <BenefitsWrap>
      <Container className="loaded">
        {/* First row with text and the first two cards */}
        <FirstRow>
          <TextContainer>
            <SectionTitle
              data-aos="fade-right"
              data-aos-delay={baseDelay}
              data-aos-duration="1000"
              data-aos-once="false"
            >
              {title}
            </SectionTitle>
          </TextContainer>
          {firstTwoCards.map((benefit, index) => (
            <BenefitItemWrap
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={baseDelay + (index + 1) * delayIncrement}
              data-aos-once="true"
              key={index}
            >
              <BenefitItems>
                <BenefitHeader>
                  <BenefitImage>
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      width={50}
                      height={50}
                      loading="lazy"
                      decoding="async"
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
        </FirstRow>

        {/* Remaining cards */}
        <Row>
          {remainingCards.map((benefit, index) => (
            <BenefitItemWrap
              data-aos="fade-up"
              data-aos-duration="600"
              // Calculate delay: baseDelay + (position_in_sequence) * delayIncrement
              // (2 + index + 1) means we start after the first two cards and the text container
              data-aos-delay={baseDelay + (2 + index + 1) * delayIncrement}
              data-aos-once="false"
              key={index}
            >
              <BenefitItems>
                <BenefitHeader>
                  <BenefitImage>
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      width={50}
                      height={50}
                      loading="lazy"
                      decoding="async"
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
