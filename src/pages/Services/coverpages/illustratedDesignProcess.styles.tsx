import styled from "styled-components";
interface LargeImageWrapperProps {
  expanded: boolean;
}
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Manrope", sans-serif;
  gap: 60px;
  padding: 60px 10%;
  color: #666;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 40px 5%;
  }
`;

export const Title = styled.h2`
  font-size: 34px;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  margin-top: 24px;
  text-align: center;
  margin-bottom: -25px;

  span {
    display: block;
    font-size: 1.8rem;
    color: #6dc7d1; /* Your theme color */
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
    margin-bottom: -25px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 560px;
  color: #666;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SmallImage = styled.img`
  width: 280px;
  height: 180px;
  border: 3px solid green;
  position: absolute;
  top: 5px;
  left: 0;
  color: #666;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 90px;
  }
`;
export const LargeImageWrapper = styled.div<LargeImageWrapperProps>`
  width: 120%;
  height: ${({ expanded }) => (expanded ? "auto" : "520px")};
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  color: #666;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const LargeImage = styled.img`
  width: 120%;
  height: 420px;
  object-fit: cover;
  color: #666;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px 90px;
  }
`;

export const StepsContainer = styled.div`
  flex: 1;
  max-width: 600px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #666;

    span {
      color: #6dc7d1;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Step = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 24px;
    color: #6dc7d1;
    margin-bottom: 5px;

    span {
      font-size: 24px;
      color: #6dc7d1;
      margin-left: 5px;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    color: #666;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    color: #666;
  }

  strong {
    font-weight: bold;
    color: #666;
  }

  @media (max-width: 768px) {
    h4 {
      text-align: center;
      font-size: 22px; 
    }

    p {
      text-align: center;
      font-size: 16px; 
    }
     
    h3 {
      font-size: 20px; 
    }

    h3 {
    font-size: 24px;
    color: #6dc7d1;
    margin-bottom: 5px;
    text-align: center;

    span {
      font-size: 24px;
      color: #6dc7d1;
      margin-left: 5px;
    }
     
  }
`;
