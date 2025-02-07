import React from "react";
import styled, { keyframes } from "styled-components";

// Styled Components
const InnerHeader = styled.section`
  position: relative;
  overflow: hidden;
  padding: 60px 0 0;
  margin-top: 50px;
  background-color: #f5f5f5;
`;

const OrbitWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const OrbitItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Circle = styled.div<{
  color?: string;
  size?: string;
  top?: string;
  left?: string;
}>`
  position: absolute;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  background-color: ${({ color }) => color || "#ccc"};
  border-radius: 50%;
  top: ${({ top }) => top || "auto"};
  left: ${({ left }) => left || "auto"};
`;

const orbitAnimation = keyframes`
  0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
`;

const Orbit = styled.div<{
  color?: string;
  size?: string;
  top?: string;
  left?: string;
}>`
  position: absolute;
  width: ${({ size }) => size || "100px"};
  height: ${({ size }) => size || "100px"};
  border: 2px solid ${({ color }) => color || "#ccc"};
  border-radius: 50%;
  top: ${({ top }) => top || "auto"};
  left: ${({ left }) => left || "auto"};

  // Apply animation
  animation: ${orbitAnimation} 5s linear infinite;
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
  font-weight: 900;
  font-size: 52px;
`;

const Subtitle = styled.div`
  position: relative;
  color: #455a64;
  font-size: 18px;
  margin-top: 30px;
`;

// Main Component
const CoverPortfolio: React.FC = () => {
  return (
    <InnerHeader className="inner-header orbit-wrap">
      <OrbitWrap>
        <OrbitItem className="orbit-item">
          <Circle color="#4CAF50" size="100px" top="10%" left="10%" />
          <Circle color="#4CAF50" size="80px" top="20%" left="30%" />
          <Orbit color="#4CAF50" size="150px" top="5%" left="15%" />
          <Orbit color="#FFC107" size="120px" top="25%" left="40%" />
          <Orbit color="#4CAF50" size="130px" top="35%" left="60%" />
          <Orbit color="#FFC107" size="110px" top="45%" left="70%" />
          <Orbit color="#FFC107" size="140px" top="55%" left="80%" />
          <Orbit color="#4CAF50" size="160px" top="65%" left="90%" />
        </OrbitItem>
      </OrbitWrap>
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
  );
};

export default CoverPortfolio;
