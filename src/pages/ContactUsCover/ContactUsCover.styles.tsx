import styled, { keyframes } from "styled-components";  


export const rotateOuterCircle = keyframes`  
  0% {  
    transform: rotate(0deg);  
  }  
  100% {  
    transform: rotate(360deg);  
  }  
`;  

export const ballOrbitAnimation = keyframes`  
  0% {  
    transform: rotate(0deg) translateX(50%);  
  }  
  100% {  
    transform: rotate(360deg) translateX(50%);  
  }  
`;  

// Styled components for the animation  
export const OrbitAnimationWrapper = styled.div`  
  position: absolute;  
  width: 400px;  
  height: 400px;  
  top: 40%;  
  left: 50%;  
  transform: translate(-50%, -50%);  
  z-index: 1; // Adjust the z-index to be behind the content  
`;  

export const InnerCircle = styled.div`  
  position: absolute;  
  width: 50px;  
  height: 50px;  
  background-color: #6dc7d1;  
  border-radius: 50%;  
  opacity: 0.7; // Set opacity to a lighter value  
`;  

export const RotatingOuterCircle = styled.div`  
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

export const OrbitBall = styled.div`  
  position: absolute;  
  width: 20px;  
  height: 20px;  
  background-color: #6dc7d1;  
  border-radius: 50%;  
  animation: ${ballOrbitAnimation} 5s linear infinite;  
  opacity: 0.7; // Set opacity to a lighter value  
`;  

export const RandomCircle = styled.div`  
  position: absolute;  
  width: 150px; // Choose size for the static circle  
  height: 150px; // Choose size for the static circle  
  background-color: #6dc7d1; // Filled circle color  
  border-radius: 50%; // Make it circular  
  opacity: 0.7; // Set opacity to a lighter value  
`;  

export const randomBallStyles = [  
  { top: "0%", left: "50%" },  
  { top: "50%", left: "100%" },  
  { top: "100%", left: "50%" },  
  { top: "50%", left: "0%" },  
  { top: "25%", left: "75%" },  
  { top: "75%", left: "25%" },  
];  

// Content section styles  
export const ContentWrapper = styled.div`  
  max-width: 800px;  
  margin: 0 auto;  
  padding: 20px;  
  text-align: center;  
  position: relative; // Ensures layering of content above the orbit  
  z-index: 2; // Ensure content appears above the animation  
`;  

export const Title = styled.h1`  
  color: #212121;  
  font-weight: 900;  
  font-size: 52px;  
  margin-bottom: 20px;  
  margin-top: 100px;  
`;  

export const Subtitle = styled.p`  
  color: #455a64;  
  font-size: 18px;  
  margin-top: 20px;  
  line-height: 1.5;  
                                                                                                                                                                                            `; 