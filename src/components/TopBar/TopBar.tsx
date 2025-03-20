import styled, { keyframes } from "styled-components";

// Animation for scrolling text
const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const TopBar = () => {
  return (
    <TopBarContainer>
      <RunningText>
        <span>First Preview and First Order is FREE. On second order, payment will be after work done.</span>
      </RunningText>
    </TopBarContainer>
  );
};

// Styling for the top bar
const TopBarContainer = styled.div`
  background-color: #4caf50; // Green background
  color: white;
  padding: 10px 0;  // Adjust padding to your design preference
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const RunningText = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${marquee} 15s linear infinite; // Adjust speed with time
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  
  span {
    display: inline-block;
    padding-right: 100%;
  }
`;

export default TopBar;
