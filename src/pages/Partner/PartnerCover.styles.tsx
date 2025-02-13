import styled from "styled-components";

export const Container = styled.div`
  background-color: #e0e0e0; /* A slightly darker gray */
  padding: 50px 20px;
  margin-top: 2 0px; /* Adds space at the top */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
    margin-top: 50px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 310px;
  padding: 40px 0;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #212529;
  margin: 0 auto;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
