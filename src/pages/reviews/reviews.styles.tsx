import styled from "styled-components";

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: 200px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: white;
  border: 2px solid #6dc7d1;
  background: #6dc7d1;
  text-align: center;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  font-family: "Manrope", sans-serif;

  &:hover {
    background: #5ab8c2;
    border-color: #5ab8c2;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(109, 199, 209, 0.3);
  }

  @media (max-width: 768px) {
    min-width: 180px;
    padding: 10px 24px;
    font-size: 14px;
  }
`;

export const ReviewsWrapper = styled.div`
  /* border: 2px solid red; */
  width: 100%;
  font-family: "Manrope", sans-serif;
  overflow: hidden; /* Ensures no horizontal scrolling */
  display: flex;
  justify-content: center;
  
  /* Desktop: Ensure proper centering */
  @media (min-width: 1200px) {
    justify-content: center;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  width: 100%; /* Make sure it takes full width */
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;

  /* Desktop: Align cards to the start (left) */
  @media (min-width: 1200px) {
    justify-content: flex-start;
    width: 100%;
    margin: 0 auto;
  }

  /* Laptop: Keep space-between */
  @media (min-width: 769px) and (max-width: 1199px) {
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    gap: 1.5rem; /* Maintain gap on mobile */
    padding-left: clamp(12px, 3vw, 20px); /* Left padding on mobile */
    padding-right: clamp(12px, 3vw, 20px); /* Right padding on mobile */
  }

  @media (max-width: 480px) {
    gap: 1.25rem; /* Slightly smaller gap on very small screens */
    padding-left: clamp(
      10px,
      2.5vw,
      16px
    ); /* Left padding on very small screens */
    padding-right: clamp(
      10px,
      2.5vw,
      16px
    ); /* Right padding on very small screens */
  }
`;

export const ReviewCard = styled.div`
  min-width: 250px; /* Ensure cards have a minimum width */
  max-width: 350px; /* Max width to avoid excessive stretching */
  flex: 1 1 100%; /* Allow the card to grow and shrink */
  margin-bottom: 2rem;
  padding: 2rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border: 2px solid rgba(109, 199, 209, 0.6);
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 3px 12px rgba(212, 167, 89, 0.3);
  transition: 0.3s;
  box-sizing: border-box;

  /* Desktop: Ensure cards don't stretch too much */
  @media (min-width: 1200px) {
    flex: 0 1 auto; /* Don't grow, just use natural width */
    min-width: 280px;
    max-width: 320px;
  }

  /* Responsive card adjustments */
  @media (max-width: 768px) {
    min-width: 100%; /* Full width on smaller screens */
    padding-left: 1.5rem; /* Internal left padding on mobile */
    padding-right: 1.5rem; /* Internal right padding on mobile */
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding-left: 1.25rem; /* Internal padding on very small screens */
    padding-right: 1.25rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .flex {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .text-lg {
    font-size: 1.25rem;
  }

  .text-sm {
    font-size: 0.875rem;
  }

  .text-yellow-500 {
    color: #facc15;
  }

  .mt-8 {
    margin-top: 2rem;
  }
`;
