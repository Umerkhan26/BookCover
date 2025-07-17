// import styled from "styled-components";
// const imagesPerRow = 5;
// const imageWidth = 220;
// const gap = 15;
// const slideWidth = imageWidth * imagesPerRow + gap * (imagesPerRow - 1);

// export const MainContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   font-family: "Manrope", sans-serif;
//   align-items: center;
//   text-align: center;
//   padding: 40px 20px;
// `;

// export const TitleContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: baseline;
//   width: 100%;
//   margin-bottom: 40px;
// `;

// export const Title = styled.h1`
//   font-size: 2.5rem;
//   color: #333;
//   margin: 0;
//   margin-left: 460px;

//   span {
//     color: #6dc7d1;
//   }

//   @media (max-width: 768px) {
//     font-size: 34px;
//     text-align: center;
//     margin: 0 0 8px;
//   }
// `;

// export const Subtitle = styled.p`
//   font-size: 16px;
//   font-weight: 200;
//   color: #455a64;
//   margin: 0;
//   // margin-right: 35px;

//   @media (max-width: 768px) {
//     font-size: 16px;
//     text-align: center;
//   }
// `;

// export const SliderContainer = styled.div`
//   position: relative;
//   width: ${slideWidth}px;
//   overflow: hidden;
//   border-radius: 10px;
// `;

// export const SliderWrapper = styled.div`
//   display: flex;
//   transition: transform 0.5s ease-in-out;
// `;

// export const Slide = styled.div`
//   display: flex;
//   gap: ${gap}px;
//   flex-shrink: 0;
// `;

// export const Image = styled.img`
//   width: ${imageWidth}px;
//   height: 280px;
//   object-fit: cover;
//   border-radius: 8px;
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   margin-top: 30px;
//   padding: 0 20px;
// `;

// export const PortfolioButton = styled.button`
//   padding: 12px 24px;
//   font-size: 1rem;
//   background: #6dc7d1;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background 0.3s;

//   &:hover {
//     background: #4fa3a2;
//   }
// `;

// export const NavButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background: rgba(0, 0, 0, 0.5);
//   color: white;
//   border: none;
//   padding: 10px 15px;
//   cursor: pointer;
//   border-radius: 5px;
//   font-size: 1.5rem;
//   z-index: 10;
//   opacity: ${(props) => (props.disabled ? 0.5 : 1)};
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   transition: background 0.3s;

//   &:hover {
//     background: ${(props) =>
//       props.disabled ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.8)"};
//   }
// `;

// export const PrevButton = styled(NavButton)`
//   left: 10px;
// `;

// export const NextButton = styled(NavButton)`
//   right: 10px;
// `;

// export const ImagePreviewOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.9);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// export const ImagePreviewContainer = styled.div`
//   position: relative;
//   max-width: 90%;
//   max-height: 90%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;
// `;

// export const PreviewImage = styled.img`
//   max-width: 100%;
//   max-height: 80vh;
//   border-radius: 10px;
// `;

// export const CloseButton = styled.button`
//   position: absolute;
//   top: -30px;
//   left: 232%;
//   transform: translateX(-50%);
//   color: white;
//   border: none;
//   padding: 10px 15px;
//   cursor: pointer;
//   border-radius: 50%;
//   font-size: 1.5rem;
//   z-index: 1001;
//   transition: background 0.3s;
// `;

// export const PreviewNavButton = styled.button`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   background: rgba(255, 255, 255, 0.3);
//   color: white;
//   border: none;
//   padding: 10px 15px;
//   cursor: pointer;
//   border-radius: 50%;
//   font-size: 1.5rem;
//   z-index: 1001;
//   transition: background 0.3s;

//   &:hover {
//     background: rgba(255, 255, 255, 0.5);
//   }
// `;

// export const PrevPreviewButton = styled(PreviewNavButton)`
//   left: -120px;
// `;

// export const NextPreviewButton = styled(PreviewNavButton)`
//   right: -120px;
// `;

import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  font-family: "Manrope", sans-serif;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 5px;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }

  @media (max-width: 390px) {
    padding: 20px 10px;
  }
`;

export const TitleContainer = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 600px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 34px;
  font-weight: bold;
  color: #25293f;
  position: relative;
  padding: 0px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
  line-height: 1.3;

  span {
    color: #6dc7d1;
  }

  @media (max-width: 600px) {
    font-size: 28px;
    text-align: center;
  }

  @media (max-width: 390px) {
    font-size: 1.8rem;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 200px;
  height: 280px;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 10px;

  @media (max-width: 768px) {
    width: auto;
    height: 280px;
    -o-object-fit: cover;
    object-fit: cover;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    width: auto;
    height: 280px;
    object-fit: cover;
    margin: 0 auto;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  // background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  padding: 20px;
  color: white;
  text-align: center;
`;

export const ImageTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  font-weight: bold;
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
  margin-top: 10px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: #4fa3a2;
  }

  @media (max-width: 480px) {
    width: 190px;
    padding: 12px 0;
    margin-top: 10px;
    font-weight: 900;
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
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1.5rem;
  z-index: 1001;
  transition: background 0.3s;
  background: rgba(0, 0, 0, 0.5);

  &:hover {
    background: rgba(0, 0, 0, 0.8);
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
`;

export const PrevPreviewButton = styled(PreviewNavButton)`
  left: 20px;
`;

export const NextPreviewButton = styled(PreviewNavButton)`
  right: 20px;
`;
