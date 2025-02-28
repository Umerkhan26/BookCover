import React from "react";
import bannerImg from "../../assets/logo/Website Cover 1263 × 651 px (2).jpg";
import {
  Section,
  BannerImage,
  BannerContent,
  Title,
  Subtitle,
  Button,
  Wrapper,
  TopBannerR,
  CardSection,
  Card,
} from "./banner.styles";

// React functional component
const TopBanner: React.FC = () => {
  return (
    <Section>
      <BannerImage>
        <img src={bannerImg} alt="Banner Image" />
        <BannerContent>
          <Title>
            CUSTOM BOOK{" "}
            <span>
              COVER <br /> DESIGN
            </span>
          </Title>
          <Subtitle>
            <p style={{ position: "relative", top: "-5px", right: "-30px" }}>
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
