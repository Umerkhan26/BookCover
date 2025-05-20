import React from "react";
import styled from "styled-components";

interface ContactUsCoverProps {
  title?: string;
  subtitle?: string;
  email?: string;
}

const ContactUsCover: React.FC<ContactUsCoverProps> = ({
  title = "Contact Us",
  subtitle = `If you have any questions or simply want to say "Hi," just do it!`,
  email = "myLumeeartstudio@gmail.com",
}) => {
  return (
    <Container>
      <Section>
        <Title>{title}</Title>
        <Subtitle>
          {subtitle}
          <br />
          <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
        </Subtitle>
      </Section>
    </Container>
  );
};

export default ContactUsCover;

// Styled Components
const Container = styled.div`
  background-color: #fff1f5;
  padding: 25px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
    margin-top: 50px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 310px;
  padding: 40px 0;
  padding-top: 93px;
  padding-bottom: 52px;
  position: relative;
`;

const Title = styled.h1`
  color: #212529;
  font-weight: 700;
  font-size: 52px;
  line-height: 40px;
  margin-bottom: 16px;

  & span {
    color: #6dc7d1;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 34px;
    text-transform: capitalize;
  }

  @media (max-width: 480px) {
    font-size: 34px;
    line-height: 40px;
    margin-bottom: 8px;
    text-transform: capitalize;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 200;
  color: #455a64;
  margin: 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const EmailLink = styled.a`
  color: #455a64;
  font-weight: bold;
  word-break: break-word;
  display: inline-block;
  margin-top: 6px;
  font-size: inherit;

  @media (max-width: 480px) {
    margin-top: 0px;
  }
`;
