import React, { ReactNode } from "react";
import type { BenefitIconKey, BenefitItem } from "../../services/benefits";
import {
  BenefitCard,
  BenefitIconWrap,
  BenefitsGrid,
  BenefitsHeader,
  BenefitsWrap,
  BenefitSubtitle,
  BenefitTitle,
  CardFold,
  CardInner,
  CardSpine,
  Container,
  Eyebrow,
  SectionDescription,
  SectionTitle,
} from "./benefits.styles";

const benefitIcons: Record<BenefitIconKey, ReactNode> = {
  revisions: (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </svg>
  ),
  genre: (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 4a8 8 0 0 0 0 16 8 8 0 0 0 0-16Z" />
      <path d="M12 4c-2.5 2.5-2.5 13.5 0 16" />
      <path d="M12 4c2.5 2.5 2.5 13.5 0 16" />
      <path d="M4.5 9h15M4.5 15h15" />
    </svg>
  ),
  print: (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      <path d="M9 7h7M9 11h7" />
    </svg>
  ),
  illustration: (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  turnaround: (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
  direct: (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 11.5a8.5 8.5 0 0 1-11.9 7.8L4 21l1.8-5.4A8.5 8.5 0 1 1 21 11.5Z" />
    </svg>
  ),
};

interface BenefitsSectionProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  benefits: BenefitItem[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  eyebrow = "Why Choose Lumeart Studio",
  title,
  description = "We make the design process simple, flexible, and creative. Our goal is a cover that represents your story perfectly — and holds up next to any title on the shelf.",
  benefits,
}) => {
  return (
    <BenefitsWrap>
      <Container>
        <BenefitsHeader>
          <Eyebrow>{eyebrow}</Eyebrow>
          <SectionTitle>{title}</SectionTitle>
          {description && <SectionDescription>{description}</SectionDescription>}
        </BenefitsHeader>

        <BenefitsGrid>
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title}>
              <CardFold aria-hidden />
              <CardSpine aria-hidden />
              <CardInner>
                <BenefitIconWrap>{benefitIcons[benefit.icon]}</BenefitIconWrap>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitSubtitle>{benefit.subtitle}</BenefitSubtitle>
              </CardInner>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Container>
    </BenefitsWrap>
  );
};

export default BenefitsSection;
