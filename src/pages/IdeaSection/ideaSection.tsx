import React, { ReactNode } from "react";
import styled from "styled-components";

// Styled Components
const Section = styled.section`
  position: relative;
  background: linear-gradient(90deg, #e6eef1, #e1f4f0);
  padding: 4rem 0;
  overflow: hidden;
  font-family: "Manrope", sans-serif;
`;

const SvgBlock = styled.div`
  position: absolute;
  z-index: 1;

  &.top-left {
    top: 0px;
    left: 916px;
  }

  &.bottom-left {
    bottom: 20px;
    left: 20px;
  }

  &.top-right {
    top: 167px;
    right: 1170px;
  }

  &.bottom-right {
    bottom: 0px;
    right: 945px;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 34px;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;

  span {
    color: #6dc7d1;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: #666;
`;

const SvgSphere = styled.svg`
  margin: 1rem auto;
  display: block;
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #6dc7d1;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4fa3a2;
  }
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #6dc7d1;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4fa3a2;
  }
`;

// TypeScript Props
interface ShareIdeasSectionProps {
  title: ReactNode;
  subtitle: string;
  buttonText: string;
  buttonLink?: string;
  onButtonClick: () => void;
}

// Component
const ShareIdeasSection: React.FC<ShareIdeasSectionProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Section className="section-share-ideas">
      {/* SVG Blocks */}
      <SvgBlock className="top-left">
        <svg width="210" height="36" viewBox="0 0 210 36" fill="none">
          <circle
            cx="175"
            cy="1.00016"
            r="34.4999"
            transform="rotate(90 175 1.00016)"
            stroke="#38555F"
          />
          <circle
            cx="105"
            cy="1.00016"
            r="34.4999"
            transform="rotate(90 105 1.00016)"
            stroke="#38555F"
          />
          <circle
            cx="34.9999"
            cy="1.00016"
            r="34.4999"
            transform="rotate(90 34.9999 1.00016)"
            stroke="#38555F"
          />
        </svg>
      </SvgBlock>

      <SvgBlock className="top-right">
        <svg width="99" height="97" viewBox="0 0 99 97" fill="none">
          <circle cx="1.40276" cy="32.7859" r="31.8231" stroke="#38555F" />
          <circle cx="66.0446" cy="32.7859" r="31.8231" stroke="#38555F" />
          <circle cx="66.0446" cy="97.4322" r="31.8231" stroke="#38555F" />
        </svg>
      </SvgBlock>
      <SvgBlock className="bottom-right">
        <svg width="348" height="69" viewBox="0 0 348 69" fill="none">
          <path
            d="M347 69.5C347.003 60.5037 345.13 51.5951 341.49 43.2832C337.85 34.9712 332.513 27.4188 325.784 21.0575C319.056 14.6961 311.067 9.65053 302.275 6.209C293.483 2.76746 284.06 0.99742 274.544 1L-11 0.999987L-11 138L274.544 138C293.761 138 312.19 130.783 325.778 117.937C339.366 105.091 347 87.6673 347 69.5V69.5Z"
            stroke="#38555F"
            strokeMiterlimit="10"
          />
        </svg>
      </SvgBlock>

      {/* Content */}
      <Container className="container">
        <SectionTitle className="section-title">
          <Title dangerouslySetInnerHTML={{ __html: title }} />{" "}
          {/* Render HTML */}
          <SvgSphere width="40" height="10" viewBox="0 0 40 10" fill="none">
            <circle cx="4.85442" cy="4.85549" r="4.35549" stroke="#212121" />
            <path
              d="M24.47 4.85549C24.47 7.24994 22.4794 9.21098 19.9989 9.21098C17.5185 9.21098 15.5278 7.24994 15.5278 4.85549C15.5278 2.46105 17.5185 0.5 19.9989 0.5C22.4794 0.5 24.47 2.46105 24.47 4.85549Z"
              stroke="#212121"
            />
            <circle cx="35.1434" cy="4.85549" r="4.35549" stroke="#212121" />
          </SvgSphere>
          <Subtitle>{subtitle}</Subtitle>
        </SectionTitle>
        <div className="text-center">
          <LinkButton href="#" onClick={onButtonClick}>
            {buttonText}
          </LinkButton>
        </div>
      </Container>
    </Section>
  );
};

export default ShareIdeasSection;
