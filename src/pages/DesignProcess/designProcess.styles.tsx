import styled from 'styled-components';

interface StepCircleProps {
  isActive: boolean;
}

// Container for the overall layout
export const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

// Title for the process
export const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 40px;
`;

// Steps container with clickable steps
export const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
  gap: 30px;
`;

// Individual step clickable circle
export const StepCircle = styled.div<StepCircleProps>`
  background-color: ${({ isActive }) => (isActive ? '#6dc7d1' : '#E2E8F0')};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #6dc7d1;
  }
`;

// Content Wrapper
export const ContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// Left content (text)
export const LeftContent = styled.div`
  flex: 1;
  padding: 20px;
  margin-bottom:20px;
`;

// Step title
export const StepTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
`;

// Step description
export const StepDescription = styled.p`
  font-size: 1.125rem;
  color: #4a5568;
  margin-top: 20px;
`;

// Image container for the right side
export const RightContent = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;
  }
`;
export const Button = styled.a`
  display: inline-block;
  min-width: 180px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
  margin-top:30px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: white;
  border: 2px ;
  background: #6dc7d1;
  text-align: center;
  position: relative;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
`;