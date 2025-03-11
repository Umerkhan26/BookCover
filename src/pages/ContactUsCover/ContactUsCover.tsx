import React from "react";
import {
  ContentWrapper,
  // InnerCircle,
  // OrbitAnimationWrapper,
  // OrbitBall,
  // randomBallStyles,
  // RandomCircle,
  // RotatingOuterCircle,
  Subtitle,
  Title,
} from "./ContactUsCover.styles";

// Define interface for props
interface ContactUsCoverProps {
  title?: string;
  subtitle?: string;
  email?: string;
}

const ContactUsCover: React.FC<ContactUsCoverProps> = ({
  title = "Contact Us",
  subtitle = `If you have any questions or simply want to say “Hi,” just do it! You may fill out the form below or mail us at `,
  email = "myeraxon@gmail.com",
}) => {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden"  }}>
      {/* Orbit Animation */}
      {/* <OrbitAnimationWrapper>
        <InnerCircle />
        <RotatingOuterCircle>
          {randomBallStyles.map((style, index) => (
            <OrbitBall
              key={index}
              style={{
                top: style.top,
                left: style.left,
              }}
            />
          ))}
          {/* Static filled circle inside the rotating outer circle */}
          {/* <RandomCircle />
        </RotatingOuterCircle>
      </OrbitAnimationWrapper>  */}

      {/* Content Section */}
      <ContentWrapper>
        <Title>{title}</Title>
        <Subtitle>
          {subtitle}
          <a href={`mailto:${email}`}>{email}</a>
        </Subtitle>
      </ContentWrapper>
    </div>
  );
};

export default ContactUsCover;
