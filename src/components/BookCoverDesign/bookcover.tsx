import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/PageBanners/PortfolioLUMEARTPORTFOLIOWEBCOVERS-01.webp";

// Updated Styled Components
const Container = styled.div`
  width: 100%;
  margin: 85px 0 0 0;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const CoverPortfolio: React.FC = () => {
  return (
    <Container className="inner-header orbit-wrap">
      <BannerImage
        src={bannerImg}
        loading="eager"
        decoding="async"
        alt="Custom Book Cover Portfolio Banner"
      />
    </Container>
  );
};

export default CoverPortfolio;
