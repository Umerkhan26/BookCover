import styled from "styled-components";
const imagesPerRow = 5;
const imageWidth = 220;
const gap = 15;
const slideWidth = imageWidth * imagesPerRow + gap * (imagesPerRow - 1);

export const MainContainer = styled.div`
  display: flex;
  font-family: "Manrope", sans-serif;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin: 0;
  margin-left: 24px;

  span {
    color: #6dc7d1;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-left: 0;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #455a64;
  margin: 0;
  margin-right: 35px;

  @media (max-width: 768px) {
    margin-right: 0;
    text-align: center;
  }
`;

export const SliderContainer = styled.div`
  position: relative;
  width: ${slideWidth}px;
  overflow: hidden;
  border-radius: 10px;

  @media (max-width: 1200px) {
    width: ${imageWidth * 4 + gap * 3}px;
  }

  @media (max-width: 992px) {
    width: ${imageWidth * 3 + gap * 2}px;
  }

  @media (max-width: 768px) {
    width: ${imageWidth * 2 + gap}px;
  }

  @media (max-width: 576px) {
    width: ${imageWidth}px;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const Slide = styled.div`
  display: flex;
  gap: ${gap}px;
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: ${imageWidth}px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 150px;
    height: 200px;
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 150px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const PortfolioButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  background: #6dc7d1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #4fa3a2;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.5rem;
  z-index: 10;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background 0.3s;

  &:hover {
    background: ${(props) =>
      props.disabled ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.8)"};
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 1.2rem;
  }
`;

export const PrevButton = styled(NavButton)`
  left: 10px;

  @media (max-width: 768px) {
    left: -10px;
    padding: 8px 12px;
    font-size: 1.2rem;
  }
`;

export const NextButton = styled(NavButton)`
  right: 10px;

  @media (max-width: 768px) {
    right: 10px;
    padding: 8px 12px;
    font-size: 1.2rem;
  }
`;

export const ImagePreviewOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 95%;
    padding: 10px;
  }
`;

export const ImagePreviewContainer = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-height: 60vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  left: 132%;
  transform: translateX(-50%);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1.5rem;
  z-index: 1001;
  transition: background 0.3s;

  @media (max-width: 768px) {
    top: -5px;
    left: 120%;
    padding: 8px 12px;
    font-size: 1.2rem;
  }
`;

export const PreviewNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1.5rem;
  z-index: 1001;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 1.2rem;
  }
`;

export const PrevPreviewButton = styled(PreviewNavButton)`
  left: -120px;

  @media (max-width: 768px) {
    left: -80px;
  }
`;

export const NextPreviewButton = styled(PreviewNavButton)`
  right: -120px;

  @media (max-width: 768px) {
    right: -80px;
  }
`;
