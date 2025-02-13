import styled from "styled-components";

// Define styled-components
export const Section = styled.section`
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
  padding-top: 72px;
  padding-bottom: 40px;
  background: unset !important;
`;

export const BannerImage = styled.div`
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

export const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 768px) {
    width: 80%;
    padding: 15px;
  }
`;

export const Title = styled.h1`
  font-family: "Proxima Nova ExtraBold";
  font-weight: 800;
  color: #e2f3f4;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0px 29px;
  font-size: 52px;
  font-style: normal;
  line-height: 56px;
  font-style: normal;
  text-transform: uppercase;
  max-width: 800px;
  width: 100%;
  margin-bottom: 16px;
  white-space: unset;

  span {
    color: #00bcd4;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.div`
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

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Button = styled.a`
  display: inline-block;
  min-width: 180px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: bold;
  margin-left: 30px;
  margin-top: 28px;
  font-family: "Proxima Nova ExtraBold";
  letter-spacing: 0.8px;
  color: #00bcd4;
  border: 1px solid #00bcd4;
  background: rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
  border-radius: 7px;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 15px;
  }
`;

export const Wrapper = styled.div`
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

export const TopBannerR = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
  font-size: 18px;
  font-family: "Proxima Nova Rg";
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap on smaller screens */
  gap: 10px;
  justify-content: center; /* Center align when wrapped */
  width: 100%;
  max-width: 80%;

  @media (max-width: 1024px) {
    max-width: 90%; /* Adjust max width for tablets */
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Card = styled.a`
  flex: 1 1 calc(20% - 10px);
  max-width: 150px;
  margin-top: 20px;
  transition: transform 0.3s ease-in-out;

  img {
    width: 100%;
    height: auto;
    min-height: 250px;
    border-radius: 8px;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(25% - 10px); /* Adjust width on tablets */
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(33.33% - 10px); /* Adjust for mobile */
  }

  @media (max-width: 480px) {
    flex: 1 1 calc(50% - 10px); /* Show two cards per row on small screens */
  }
`;
