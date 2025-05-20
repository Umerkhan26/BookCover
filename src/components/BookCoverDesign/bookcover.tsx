import React from "react";
import styled from "styled-components";
import bannerImg from '../../assets/PageBanners/Portfolio LUME ART PORTFOLIO WEB COVERS-01.jpg';

// Styled Components - Updated to match PartnerCover styles
const Container = styled.div`
  /* background-color: #e0e0e0;
  padding: 25px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; */
  margin-top: 85px;

  @media (max-width: 768px) {
   
  }
`;

// const Section = styled.section`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   min-height: 310px;
//   padding: 40px 0;
//   padding-top: 93px;
//   padding-bottom: 52px;
//   position: relative;
// `;

// const Title = styled.h1`
//   color: #212529;
//   font-weight: 700;
//   font-size: 52px;
//   line-height: 60px;
//   margin-bottom: 10px;

//   & span {
//     color: #6dc7d1;
//   }

//   @media (max-width: 1024px) {
//     font-size: 2.5rem;
//   }

//   @media (max-width: 768px) {
//     font-size: 1.8rem;
//     font-size: 34px;
//     text-transform: capitalize;
//   }

//   @media (max-width: 480px) {
//     font-size: 34px;
//     line-height: 40px;
//     margin-bottom: 8px;
//     text-transform: capitalize;
//   }
// `;

// const Subtitle = styled.p`
//   font-size: 16px;
//   font-weight: 200;
//   color: #455a64;
//   margin: 0;

//   @media (max-width: 768px) {
//     font-size: 16px;
//     text-align: center;
//   }
// `;

const CoverPortfolio: React.FC = () => {
  return (
    <Container className="inner-header orbit-wrap">
      {/* <Section className="container">
        <Title className="title inner-title">
          Custom Book <br /> Cover Design Portfolio
        </Title>
        <Subtitle className="subtitle">
          Check out our examples of book covers for different genres.
        </Subtitle>
      </Section> */}
      <img src={bannerImg} loading="eager" decoding="async" alt="CustomBookCover Banner" />
    </Container>
  );
};

export default CoverPortfolio;
