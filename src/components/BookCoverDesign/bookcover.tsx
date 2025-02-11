import React from "react";
import styled, { keyframes } from "styled-components";

// Styled Components
const InnerHeader = styled.section`
  position: relative;
  overflow: hidden;
  padding: 51px 0 0;
  margin-top: 40px;
  padding-bottom: 70px;
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
`;

const Column = styled.div`
  flex: 1;
  padding: 15px;
  text-align: center;
`;

const Title = styled.h1`
  color: #212121;
  font-weight: 800;
  font-size: 45px;
`;

const Subtitle = styled.div`
  position: relative;
  color: #455a64;
  font-size: 18px;
  margin-top: 30px;
`;

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

const OrbitAnimationWrapper = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  padding-bottom: 40px;
  top: 70%;
  left: 60%;
  transform: translate(-50%, -50%);
  z-index: 1; // Adjust the z-index to be behind the content
`;

const RotatingOuterCircle = styled.div`
  position: absolute;
  width: 280px;
  height: 280px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  animation: ${rotateOuterCircle} 10s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7; // Set opacity to a lighter value
`;

const OrbitBall = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: #6dc7d1;
  border-radius: 50%;
  animation: ${ballOrbitAnimation} 5s linear infinite;
  opacity: 0.7; // Set opacity to a lighter value
`;

const RandomCircle = styled.div`
  position: absolute;
  width: 170px;
  height: 170px;
  background-color: #6dc7d1;
  border-radius: 50%;
  opacity: 0.7;
`;

const randomBallStyles = [
  { top: "0%", left: "50%" },
  { top: "50%", left: "100%" },
  { top: "100%", left: "50%" },
  { top: "50%", left: "0%" },
  { top: "25%", left: "75%" },
  { top: "75%", left: "25%" },
];

// Main Component
const CoverPortfolio: React.FC = () => {
  return (
    <>
      <InnerHeader className="inner-header orbit-wrap">
        <OrbitAnimationWrapper>
          {/* <InnerCircle /> */}
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
        <Container className="container">
          <Row className="row">
            <Column className="col-12 section-title centered">
              <Title className="title inner-title">
                Custom Book <br /> Cover Design Portfolio
              </Title>
              <Subtitle className="subtitle">
                Check out our examples of book covers for different genres.
              </Subtitle>
            </Column>
          </Row>
        </Container>
      </InnerHeader>
    </>
  );
};

export default CoverPortfolio;
