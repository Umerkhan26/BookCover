import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  padding: 30px 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  display: block;
  min-height: 310px;
  padding-top: 72px;
  padding-bottom: 40px;
  background: unset !important;
`;

export const BannerImage = styled.div`
  width: 100%;
  max-height: 450px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%; // Adjust this to control the overall width
  max-width: 1200px; // Adjust based on your design needs
  padding: 20px 4px; // Reduced left and right padding
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  border-radius: 10px; // Optional: Add rounded corners

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 15px 10px; // Adjusted padding for smaller screens
  }

  @media (max-width: 480px) {
    padding: 10px 5px; // Further reduced padding for mobile screens
    width: 95%; // Adjust for smaller screens
  }
`;

export const Title = styled.h1`
  font-weight: 800;
  color: #e2f3f4;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 52px;
  line-height: 56px;
  text-transform: uppercase;
  margin-bottom: 16px;
  white-space: pre-line; /* Allow line breaks for larger screens */

  span {
    color: #00bcd4;
  }

  .large-screen-break {
    display: inline; /* Show <br /> by default */
  }

  @media (max-width: 1024px) {
    font-size: 2.1rem;
  }
  @media (max-width: 820px) {
    font-size: 1.9rem;
    line-height: 1.2;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 0.9;
    white-space: nowrap;

    .large-screen-break {
      display: none;
    }
  }
`;

export const Subtitle = styled.div`
  color: #fff;
  font-size: 17.5px;
  font-weight: 400;
  margin-bottom: 20px;

  span {
    font-weight: 800;
    font-family: "Manrope", sans-serif;
    color: #fff;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Adjusted for small screens */
    margin-bottom: 6px;
    line-height: 1.2;
  }
`;

export const Button = styled.a`
  display: inline-block;
  min-width: 180px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  color: #00bcd4;
  border: 1px solid #00bcd4;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  border-radius: 7px;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #fff;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 8px 16px;
    min-width: 150px; /* Adjusted for small screens */
  }
`;

export const TopBannerR = styled.div`
  flex: 0 0 auto; // Allow the width to adjust based on content
  padding: 20px 6px; // Match the padding of the banner content
  font-size: 18px;
  font-family: "Manrope", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-start; // Align text to the left
  margin-left: 4px; // Match the left padding of the banner content

  @media (max-width: 768px) {
    display: none;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
  padding: 20px 0px; // Match the left and right padding of BannerContent
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin: 0 auto; // Center the wrapper
  max-width: 1200px; // Match the max-width of the banner content

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 20px 10px; // Adjusted padding for smaller screens
  }

  @media (max-width: 480px) {
    padding: 20px 5px; // Further reduced padding for mobile screens
  }
`;
export const CardSection = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: flex-start;
  width: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  padding: 0 4px; // Match the left and right padding of BannerContent
  box-sizing: border-box;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0 10px; // Adjusted padding for smaller screens
  }

  @media (max-width: 480px) {
    padding: 0 5px; // Further reduced padding for mobile screens
  }
`;
export const Card = styled.a`
  flex: 0 0 calc(20% - 10px);
  max-width: 150px;
  margin-top: 20px;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: auto;
    min-height: 260px;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(33.333% - 10px);
    max-width: calc(33.333% - 10px);
  }

  @media (max-width: 480px) {
    flex: 0 0 calc(33.333% - 10px);
    max-width: calc(33.333% - 10px);
    min-height: 220px;
  }
`;
