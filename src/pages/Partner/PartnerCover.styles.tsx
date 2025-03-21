import styled from "styled-components";

export const Container = styled.div`
  background-color: #e0e0e0; /* A slightly darker gray */
  padding: 25px 20px;
  // margin-top: 2 0px; /* Adds space at the top */
  // display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  // padding-top: 93px;
  // padding-bottom: 52px;
  // position: relative;

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
  padding-top: 93px;
  padding-bottom: 52px;
  position: relative;
`;

export const Title = styled.h1`
  color: #212529;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 24px;
  color: #000;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
