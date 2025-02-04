import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/Website Cover 2569 × 949 px.jpg";

// Define styled-components with applied styles
const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 30px 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  font-family: Museo Sans Cyrl;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  display: block;
  min-height: 310px;
  padding-top: 75px;
  padding-bottom: 40px;
  background: unset !important;
`;

const BannerImage = styled.div`
  width: 100%;
  height: 460px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BannerContent = styled.div`
  position: absolute;
  top: 50%; // Centers vertically
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Title = styled.h1`
  font-family: "Proxima Nova ExtraBold";
  font-weight: 800;
  color: #e2f3f4;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0px 15px;
  font-size: 52px;
  font-style: normal;
  line-height: 56px;
  text-transform: uppercase;
  max-width: 607px;
  width: 100%;
  margin-bottom: 16px;
  white-space: unset;

  span {
    color: #00bcd4;
  }
`;

const Subtitle = styled.div`
  max-width: unset;
  color: #fff;
  font-family: "Proxima Nova Rg";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  p {
    span {
      font-weight: 800;
      font-family: "Proxima Nova Bold";
      color: #fff;
    }
  }
`;

const Button = styled.a`
  display: inline-block;
  min-width: 180px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: -10px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #00bcd4;
  border: 2px solid #00bcd4;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 3px 12px rgba(212, 167, 89, 0.3);
  cursor: pointer;
  text-decoration: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
  padding: 20px 0;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TopBannerR = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  font-size: 18px;
  font-family: "Proxima Nova Rg";
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardSection = styled.div`
  flex: 0 0 80%;
  max-width: 80%;
  display: flex;
  gap: 10px;
`;

const Card = styled.a`
  flex: 0 0 auto;
  width: 16%;
  max-width: 150px;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

// React functional component
const TopBanner: React.FC = () => {
  return (
    <Section>
      <BannerImage>
        <img src={bannerImg} alt="Banner Image" />
        <BannerContent>
          <Title>
            CUSTOM BOOK <span>COVER DESIGN</span>
          </Title>
          <Subtitle>
            <p style={{ position: "relative", top: "-30px", right: "-16px" }}>
              Get a book cover that turns into{" "}
              <span>your #1 marketing tool</span>
            </p>
          </Subtitle>
          <Button href="https://miblart.com/cover-idea/">
            Get A Free Cover Design Idea
          </Button>
        </BannerContent>
      </BannerImage>
      <Wrapper>
        <TopBannerR>
          <div className="top-banner-images-title">
            <a>
              Design for all genres{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                style={{ marginBottom: "-7px" }}
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_3877_5778)">
                  <path
                    d="M23.725 11.3364C23.7248 11.3361 23.7245 11.3358 23.7242 11.3355L18.8256 6.4605C18.4586 6.09529 17.865 6.09665 17.4997 6.46368C17.1345 6.83067 17.1359 7.42425 17.5028 7.7895L20.7918 11.0625H0.9375C0.419719 11.0625 0 11.4822 0 12C0 12.5178 0.419719 12.9375 0.9375 12.9375H20.7917L17.5029 16.2105C17.1359 16.5757 17.1345 17.1693 17.4998 17.5363C17.865 17.9034 18.4587 17.9047 18.8256 17.5395L23.7242 12.6645C23.7245 12.6642 23.7248 12.6639 23.7251 12.6636C24.0923 12.2971 24.0911 11.7016 23.725 11.3364Z"
                    fill="#25293F"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3877_5778">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </TopBannerR>
        <CardSection>
          <Card href="#">
            <img
              src="https://miblart.com/wp-content/uploads/2024/01/main.jpg"
              alt="Cover Image"
            />
          </Card>
          <Card href="#">
            <img
              src="https://miblart.com/wp-content/uploads/2024/01/main-3-1-scaled.jpg"
              alt="Cover Image"
            />
          </Card>
          <Card href="#">
            <img
              src="https://miblart.com/wp-content/uploads/2024/01/main-2-scaled.jpg"
              alt="Cover Image"
            />
          </Card>
          <Card href="#">
            <img
              src="https://miblart.com/wp-content/uploads/2024/01/main-4.jpg"
              alt="Cover Image"
            />
          </Card>
          <Card href="#">
            <img
              src="https://miblart.com/wp-content/uploads/2024/01/main-5-scaled.jpg"
              alt="Cover Image"
            />
          </Card>
          <Card href="#">
            <img
              src="https://miblart.com/wp-content/uploads/2024/01/main-6-scaled.jpg"
              alt="Cover Image"
            />
          </Card>
        </CardSection>
      </Wrapper>
    </Section>
  );
};

export default TopBanner;
