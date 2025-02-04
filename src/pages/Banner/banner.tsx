import React from "react";
import styled from "styled-components";

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
  padding-top: 0;
  padding-bottom: 40px;
  background: unset !important;
`;

const BannerImage = styled.div`
  width: 100%;
  height: auto;
  position: relative; // This will help position the text/button on top of the image
  img {
    width: 100%;
    height: auto;
  }
`;

const BannerContent = styled.div`
  position: absolute;
  top: 50%; // Centers vertically
  left: 0;
  transform: translateY(
    -50%
  ); // Center vertically with respect to the container
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
  color: #fff;
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
    color: #1a8797;
  }
`;

const Subtitle = styled.div`
  font-size: 18px;
  color: #6c757d;
  p {
    span {
      font-weight: bold;
      color: #ff6347;
    }
  }
`;

const Button = styled.a`
  display: inline-block;
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #218838;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.a`
  width: 30%;
  margin-bottom: 15px;
  img {
    width: 100%;
    border-radius: 8px;
  }
`;

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;

const BannerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 20px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #25293f;
    svg {
      margin-left: 10px;
    }
  }
`;

// React functional component
const TopBanner: React.FC = () => {
  return (
    <Section>
      <BannerImage>
        <img
          src="https://miblart.com/wp-content/uploads/2024/01/Custom-Book-Cover-design-scaled.webp"
          alt="Banner Image"
        />
        <BannerContent>
          <Title>
            CUSTOM BOOK <span>COVER DESIGN</span>
          </Title>
          <Subtitle>
            <p>
              Get a book cover that turns into{" "}
              <span>your #1 marketing tool</span>
            </p>
          </Subtitle>
          <Button href="https://miblart.com/cover-idea/">
            Get A Free Cover Design Idea
          </Button>
        </BannerContent>
      </BannerImage>
      {/* <Wrapper>
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
      </Wrapper> */}
    </Section>
  );
};

export default TopBanner;
