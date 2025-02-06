import styled, { keyframes } from 'styled-components';

export const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-33.33%);
  }
`;

export const Button = styled.a`
  display: inline-block;
  min-width: 180px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 510px;
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

export const ReviewsWrapper = styled.div`
  width: 100%;
  overflow: hidden; /* Hide cards that are out of view */
`;

export const CardsWrapper = styled.div`
  display: flex;
  animation: ${slide} 15s infinite linear; /* Slide cards left */
`;

export const ReviewCard = styled.div`
  min-width: 33.33%; /* Each card takes up one-third of the container */
  margin-right: 30px; /* Space between the cards */
  padding: 2rem;
  border: 2px solid rgba(109,199,209,0.6);
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 3px 12px rgba(212, 167, 89, 0.3);
  transition: 0.3s;
`;
