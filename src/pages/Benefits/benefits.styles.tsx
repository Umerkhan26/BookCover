import styled from "styled-components";

// Styled Components
export const BenefitsWrap = styled.section`
  padding: 60px 0;
  background-color: #ffffff; /* White background */
  font-family: "Manrope", sans-serif;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

export const BenefitItemWrap = styled.div`
  flex: 1 1 48%;
  max-width: 48%;

  @media (min-width: 768px) {
    flex: 1 1 30%;
    max-width: 30%;
  }

  @media (min-width: 992px) {
    flex: 1 1 30%;
    max-width: 30%;
  }

  @media (max-width: 600px) {
    flex: 1 1 100%;
    max-width: 100%; /* Full width for small screens */
  }
`;

export const BenefitItem = styled.div`
  background: #fff;
  padding: 40px 25px;
  border-radius: 10px;
  border: 2px solid #6dc7d1; /* Green border */
  text-align: left;
  height: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 30px 20px; /* Adjust padding for smaller screens */
  }
`;

export const BenefitItems = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #6dc7d1; /* Green border */
  text-align: left;
  height: 100%;
  min-height: 190px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 15px; /* Reduce padding slightly on mobile */
  }
`;

export const BenefitHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const BenefitImage = styled.div`
  margin-right: 15px;

  img {
    width: 50px;
    height: 50px;

    @media (max-width: 600px) {
      width: 40px; /* Adjust image size for small screens */
      height: 40px;
    }
  }
`;

export const BenefitTitle = styled.span`
  font-size: 18px;
  color: #25293f;
  font-style: normal;
  font-weight: 400;
  webkit-font-smoothing: antialiased;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const BenefitSubtitle = styled.div`
  font-size: 14px;
  color: #666;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 34px;
  font-weight: bold;
  color: #25293f;
  position: relative;
  padding: 0px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  line-height: 1.3;

  span {
    color: #6dc7d1;
  }

  @media (max-width: 600px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: center; /* Center align items */
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 50%;

   @media (max-width: 600px) {
    max-width: 100%;
    text-align: center;
`;
