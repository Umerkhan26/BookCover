import styled from 'styled-components';

export const Button = styled.a`
  display: inline-block;
  min-width: 180px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: white;
  border: 2px solid;
  background: #6dc7d1;
  text-align: center;
  position: relative;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  text-decoration: none;

  /* Make the button responsive */
  @media (max-width: 768px) {
    min-width: 150px;
    padding: 8px 20px;
    font-size: 14px;
  }
`;

export const ReviewsWrapper = styled.div`
  width: 100%;
  overflow: hidden; /* Ensures no horizontal scrolling */
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Wrap cards on smaller screens */
  justify-content: space-between;
  gap: 2rem;
  width: 100%; /* Make sure it takes full width */
`;

export const ReviewCard = styled.div`
  min-width: 250px; /* Ensure cards have a minimum width */
  max-width: 350px; /* Max width to avoid excessive stretching */
  flex: 1 1 100%; /* Allow the card to grow and shrink */
  margin-bottom: 2rem;
  padding: 2rem;
  border: 2px solid rgba(109, 199, 209, 0.6);
  border-radius: 1rem;
  background: #fff;
  box-shadow: 0 3px 12px rgba(212, 167, 89, 0.3);
  transition: 0.3s;

  /* Responsive card adjustments */
  @media (max-width: 768px) {
    min-width: 100%; /* Full width on smaller screens */
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

