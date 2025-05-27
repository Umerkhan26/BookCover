import styled from "styled-components";

export const BenefitItems = styled.div`
  background: #fff;
  padding: 20px;
  padding: 40px 25px;
  border-radius: 10px;
  border: 2px solid #6dc7d1; /* Green border */
  text-align: left;
  height: 100%;
  min-height: 190px;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    padding: 15px 20px;
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
  text-align: left;
  justify-content: center;

  span {
    color: #6dc7d1;
  }

  @media (max-width: 600px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const BenefitsWrap = styled.section`
  padding: 60px 0;
  font-family: "Manrope", sans-serif;
  background-color: #f8f8f8;
  @media (max-width: 768px) {
    margin-bottom: -30px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  /* border: 2px solid red; */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    // padding: 0 32px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 32px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  max-width: 40%;
  padding: 54px 8px;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: left;
    padding: 6px 8px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0 32px;
    margin-top: 0;
  }
`;

export const BenefitItemWrap = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 10px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const BenefitHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const BenefitImage = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 15px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const BenefitTitle = styled.h3`
  font-size: clamp(18px, 3.5vw, 20px);
  font-weight: bold;
  color: #212121;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const BenefitSubtitle = styled.p`
  font-size: clamp(13px, 2.5vw, 14px);
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
