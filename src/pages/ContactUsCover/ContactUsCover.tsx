import React from "react";  
import styled, { keyframes } from "styled-components";  

// Keyframes for the animations  
const rotateOuterCircle = keyframes`  
  0% {  
    transform: rotate(0deg);  
  }  
  100% {  
    transform: rotate(360deg);  
  }  
`;  

const ballOrbitAnimation = keyframes`  
  0% {  
    transform: rotate(0deg) translateX(50%);  
  }  
  100% {  
    transform: rotate(360deg) translateX(50%);  
  }  
`;  

// Styled components for the animation  
const OrbitAnimationWrapper = styled.div`  
  position: absolute;  
  width: 400px;  
  height: 400px;  
  top: 40%;  
  left: 50%;  
  transform: translate(-50%, -50%);  
  z-index: 1; // Adjust the z-index to be behind the content  
`;  

const InnerCircle = styled.div`  
  position: absolute;  
  width: 50px;  
  height: 50px;  
  background-color: #6dc7d1;  
  border-radius: 50%;  
  opacity: 0.7; // Set opacity to a lighter value  
`;  

const RotatingOuterCircle = styled.div`  
  position: absolute;  
  width: 300px;  
  height: 300px;  
  border: 2px solid #6dc7d1;  
  border-radius: 50%;  
  animation: ${rotateOuterCircle} 10s linear infinite;  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  opacity: 0.7; // Set opacity to a lighter value  
`;  

const OrbitBall = styled.div`  
  position: absolute;  
  width: 20px;  
  height: 20px;  
  background-color: #6dc7d1;  
  border-radius: 50%;  
  animation: ${ballOrbitAnimation} 5s linear infinite;  
  opacity: 0.7; // Set opacity to a lighter value  
`;  

const RandomCircle = styled.div`  
  position: absolute;  
  width: 150px; // Choose size for the static circle  
  height: 150px; // Choose size for the static circle  
  background-color: #6dc7d1; // Filled circle color  
  border-radius: 50%; // Make it circular  
  opacity: 0.7; // Set opacity to a lighter value  
`;  

const randomBallStyles = [  
  { top: "0%", left: "50%" },  
  { top: "50%", left: "100%" },  
  { top: "100%", left: "50%" },  
  { top: "50%", left: "0%" },  
  { top: "25%", left: "75%" },  
  { top: "75%", left: "25%" },  
];  

// Content section styles  
const ContentWrapper = styled.div`  
  max-width: 800px;  
  margin: 0 auto;  
  padding: 20px;  
  text-align: center;  
  position: relative; // Ensures layering of content above the orbit  
  z-index: 2; // Ensure content appears above the animation  
`;  

const Title = styled.h1`  
  color: #212121;  
  font-weight: 900;  
  font-size: 52px;  
  margin-bottom: 20px;  
  margin-top: 100px;  
`;  

const Subtitle = styled.p`  
  color: #455a64;  
  font-size: 18px;  
  margin-top: 20px;  
  line-height: 1.5;  
`;  

// Main Component  
const ContactUsCover: React.FC = () => {  
  return (  
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>  
      {/* Orbit Animation */}  
      <OrbitAnimationWrapper>  
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
          <RandomCircle />  
        </RotatingOuterCircle>  
      </OrbitAnimationWrapper>  

      {/* Content Section */}  
      <ContentWrapper>  
        <Title>Contact Us</Title>  
        <Subtitle>  
          If you have any questions or simply want to say “Hi,” just do it! You  
          may fill out the form below or mail us at{" "}  
          <a href="mailto:team@miblart.com">team@miblart.com</a>. Drop us a line  
          and we will contact you within 24 hours.  
        </Subtitle>  
      </ContentWrapper>  
    </div>  
  );  
};  

export default ContactUsCover