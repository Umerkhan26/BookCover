import React from "react";
import styled from "styled-components";
import back from "../../assets/GetACover/works-back.webp";
import book from "../../assets/GetACover/works-book.webp";

const BannerContainer = styled.section`
  position: relative;
  background-color: #f0f0f0;
  padding: 4rem 0;
  overflow: hidden;
  margin-top: 10px;
`;

const BannerBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const BannerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BannerTitle = styled.div`
  text-align: left;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1.5rem;
    color: #6dc7d1;
  }
`;

const BannerImage = styled.div`
  img {
    width: 100%;
    max-width: 240px;
    height: auto;
  }
`;

const BannerSection: React.FC = () => {
  return (
    <BannerContainer className="works__banner">
      <BannerBack className="works__banner-back">
        <img src={back} alt="Banner Background" />
      </BannerBack>
      <Container className="container">
        <BannerBlock className="works__banner-block">
          <BannerTitle className="works__banner-title">
            <h2>Get a Book Cover Design Idea</h2>
            <span>For Free</span>
          </BannerTitle>
          <BannerImage className="works__banner-img">
            <img src={book} alt="Book Cover" />
          </BannerImage>
        </BannerBlock>
      </Container>
    </BannerContainer>
  );
};

export default BannerSection;
