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
  padding-top: 75px;
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
`;

export const Title = styled.h1`
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
`;

export const Button = styled.a`
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
  flex: 0 0 80%;
  max-width: 80%;
  display: flex;
  gap: 10px;
`;

export const Card = styled.a`
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
