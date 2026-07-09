import styled from "styled-components";
export const FullWidthContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Manrope", sans-serif;
  align-items: center;
  background-color: #dcf3f4;
  padding: 24px 20px 48px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 20px 20px 40px;
  }

  @media (max-width: 768px) {
    padding: 14px 16px 36px;
  }
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const SubHeading = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 20px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #6dc7d1; /* Theme color */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  margin-bottom: 30px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background-color: #5ab3bc;
  }
`;
