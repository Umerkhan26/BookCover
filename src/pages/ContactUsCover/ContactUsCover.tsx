import React from "react";
import styled from "styled-components";

interface ContactUsCoverProps {
  title?: string;
  subtitle?: string;
  email?: string;
}

const ContactUsCover: React.FC<ContactUsCoverProps> = ({
  title = "Contact Us",
  subtitle = `If you have any questions or simply want to say “Hi,” just do it! You may fill out the form below or mail us at `,
  email = "myLumeeartstudio@gmail.com",
}) => {
  return (
    <Container>
      <ContentWrapper>
        <Title>{title}</Title>
        <Subtitle>
          {subtitle}
          <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
        </Subtitle>
      </ContentWrapper>
    </Container>
  );
};

export default ContactUsCover;

// Styled Components
export const Container = styled.div`
  position: relative;
  height: auto;
  overflow: hidden;
  padding: 5vw;
  background-color: #f9fafb;

  @media (min-width: 1024px) {
    padding: 0px 3px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 5vw;
  text-align: center;
  z-index: 2;

  @media (min-width: 1024px) {
    max-width: 800px;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  color: #212121;
  font-weight: 700;
  font-size: clamp(28px, 5vw, 52px);
  margin-bottom: 4vh;
  margin-top: 16vh;

  @media (max-width: 768px) {
    margin-top: 6vh;
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  color: #455a64;
  font-size: clamp(12px, 2.5vw, 18px);
  margin-top: 2vh;
  line-height: 1.6;
  margin-bottom: 50px;
  word-break: break-word;

  @media (max-width: 480px) {
    text-align: justify;
  }
`;

export const EmailLink = styled.a`
  color: rgba(71, 241, 119, 0.84);
  font-weight: bold;
  word-break: break-word;
  display: inline-block;
  margin-top: 10px;
  font-size: inherit;

  @media (max-width: 480px) {
    margin-top: 0px;
  }
`;
