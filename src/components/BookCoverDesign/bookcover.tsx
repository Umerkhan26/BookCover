import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/PageBanners/PortfolioLUMEARTPORTFOLIOWEBCOVERS-01.jpg";

// Styled Components - Updated to match PartnerCover styles
const Container = styled.div`
  padding: 25px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center; */
  margin-top: 85px;

  @media (h: 768px) {
  }
`;

const CoverPortfolio: React.FC = () => {
  return (
    <Container className="inner-header orbit-wrap">
      <img
        src={bannerImg}
        loading="eager"
        decoding="async"
        alt="CustomBookCover Banner"
        style={{ width: "100%", height: "auto" }}
      />
    </Container>
  );
};

export default CoverPortfolio;
