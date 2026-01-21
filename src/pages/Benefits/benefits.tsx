import React, { ReactNode, useEffect, useState } from "react";
import "aos/dist/aos.css";
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
import { ShimmerCard, ShimmerText } from "../../components/Shimmer/Shimmer";

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
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const firstTwoCards = benefits.slice(0, 2);
  const remainingCards = benefits.slice(2);

  const baseDelay = 0;
  const delayIncrement = 200;

  if (!isLoaded) {
    return (
      <BenefitsWrap>
        <Container>
          <FirstRow>
            <TextContainer>
              <ShimmerText lines={2} width="80%" />
            </TextContainer>
            <BenefitItemWrap>
              <ShimmerCard height="190px" />
            </BenefitItemWrap>
            <BenefitItemWrap>
              <ShimmerCard height="190px" />
            </BenefitItemWrap>
          </FirstRow>
          <Row>
            {remainingCards.map((_, index) => (
              <BenefitItemWrap key={index}>
                <ShimmerCard height="190px" />
              </BenefitItemWrap>
            ))}
          </Row>
        </Container>
      </BenefitsWrap>
    );
  }

  return (
    <BenefitsWrap>
      <Container className={isLoaded ? "loaded" : ""}>
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
