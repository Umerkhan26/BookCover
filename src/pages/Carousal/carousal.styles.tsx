// import styled from "styled-components";

// const imageWidth = 220;
// const gap = 15; // Default gap for larger screens

// export const MainContainer = styled.div`
//   display: flex;
//   font-family: "Manrope", sans-serif;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   padding: 40px 5px; /* Reduced padding on left and right */

//   @media (max-width: 768px) {
//     padding: 20px 15px; /* Further reduced padding for small screens */
//   }

//   @media (max-width: 390px) {
//     padding: 20px 10px; /* Adjusted padding for very small screens */
//   }
// `;

// export const TitleContainer = styled.div`
//   flex: 1;
//   max-width: 50%;

//   @media (max-width: 600px) {
//     max-width: 100%;
//     text-align: center;
//   }
// `;

// export const SectionTitle = styled.h2`
//   font-size: 34px;
//   font-weight: bold;
//   color: #212121;
//   margin-bottom: 20px;
//   span {
//     color: #6dc7d1;
//   }

//   @media (max-width: 600px) {
//     font-size: 28px;
//     text-align: center;
//   }
// `;

// export const Title = styled.h1`
//   font-size: 34px;
//   font-weight: bold;
//   color: #25293f;
//   position: relative;
//   padding: 0px;
//   margin-bottom: 20px;
//   width: 100%;
//   max-width: 500px;
//   line-height: 1.3;

//   span {
//     color: #6dc7d1;
//   }

//   @media (max-width: 600px) {
//     font-size: 28px;
//     text-align: center;
//   }

//   @media (max-width: 390px) {
//     font-size: 1.8rem; /* Adjusted font size for very small screens */
//   }
// `;

// export const Subtitle = styled.p`
//   font-size: 18px;
//   font-weight: 400;
//   color: #455a64;
//   margin: 0;
//   margin-right: 35px;

//   @media (max-width: 768px) {
//     margin-right: 0;
//     text-align: center;
//   }

//   @media (max-width: 390px) {
//     font-size: 16px; /* Adjusted font size for very small screens */
//   }
// `;

// export const SliderContainer = styled.div`
//   position: relative;
//   width: 100%;
//   max-width: ${imageWidth * 5 + gap * 4}px; // Default for larger screens
//   overflow: hidden;
//   border-radius: 10px;
//   margin: 0 auto;
//   padding: 0 2px;

//   @media (max-width: 1200px) {
//     max-width: ${imageWidth * 4 + gap * 3}px;
//   }

//   @media (max-width: 992px) {
//     max-width: ${imageWidth * 3 + gap * 2}px;
//   }

//   @media (max-width: 768px) {
//     max-width: ${imageWidth * 3 + gap * 2}px; /* Adjusted for 3 images */
//     padding: 0 5px; /* Further reduced padding for small screens */
//   }

//   @media (max-width: 576px) {
//     max-width: 100%; /* Full width on small screens */
//     padding: 0; /* No padding on very small screens */
//   }

//   @media (max-width: 390px) {
//     max-width: 100%; /* Full width for very small screens */
//     padding: 0; /* No padding for very small screens */
//   }
// `;

// export const Slide = styled.div`
//   display: flex;
//   gap: ${gap}px; /* Default gap for larger screens */
//   flex-shrink: 0;

//   @media (max-width: 768px) {
//     gap: 10px; /* Small gap for small screens */
//   }

//   @media (max-width: 576px) {
//     gap: 8px; /* Slightly smaller gap for very small screens */
//   }

//   @media (max-width: 390px) {
//     gap: 10px !important; /* Force gap for iPhone series */
//   }
// `;

// interface SliderWrapperProps {
//   imagesPerRow: number;
// }

// export const SliderWrapper = styled.div<SliderWrapperProps>`
//   display: flex;
//   transition: transform 0.5s ease-in-out;
//   width: ${({ imagesPerRow }) =>
//     imagesPerRow * imageWidth + (imagesPerRow - 1) * gap}px;
// `;

// export const Image = styled.img`
//   width: ${imageWidth}px;
//   height: 280px;
//   object-fit: cover;
//   border-radius: 8px;

//   @media (max-width: 768px) {
//     width: 180px; /* Increased width for small screens */
//     height: 240px; /* Increased height for small screens */
//   }

//   @media (max-width: 576px) {
//     width: 100%; /* Full width on very small screens */
//     height: 200px; /* Adjusted height for very small screens */
//   }

//   @media (max-width: 390px) {
//     height: 180px; /* Adjusted height for iPhone series */
//   }
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   margin-top: 30px;
//   padding: 0 20px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 10px;
//   }

//   @media (max-width: 390px) {
//     gap: 8px; /* Adjusted gap for very small screens */
//   }
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

//   @media (max-width: 480px) {
//     width: 190px;
//     padding: 12px 0;
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

//   @media (max-width: 768px) {
//     padding: 8px 12px;
//     font-size: 1.2rem;
//   }

//   @media (max-width: 390px) {
//     padding: 6px 10px; /* Adjusted padding for very small screens */
//     font-size: 1rem; /* Adjusted font size for very small screens */
//   }
// `;

// export const PrevButton = styled(NavButton)`
//   left: 10px;

//   @media (max-width: 768px) {
//     left: -10px;
//     padding: 8px 12px;
//     font-size: 1.2rem;
//   }

//   @media (max-width: 390px) {
//     left: -5px; /* Adjusted position for very small screens */
//   }
// `;

// export const NextButton = styled(NavButton)`
//   right: 10px;

//   @media (max-width: 768px) {
//     right: 10px;
//     padding: 8px 12px;
//     font-size: 1.2rem;
//   }

//   @media (max-width: 390px) {
//     right: 5px; /* Adjusted position for very small screens */
//   }
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

//   @media (max-width: 768px) {
//     max-width: 95%;
//     max-height: 95%;
//     padding: 10px;
//   }

//   @media (max-width: 390px) {
//     padding: 5px; /* Adjusted padding for very small screens */
//   }
// `;

// export const ImagePreviewContainer = styled.div`
//   position: relative;
//   max-width: 90%;
//   max-height: 90%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;

//   @media (max-width: 390px) {
//     padding: 10px; /* Adjusted padding for very small screens */
//   }
// `;

// export const PreviewImage = styled.img`
//   max-width: 100%;
//   max-height: 80vh;
//   border-radius: 10px;

//   @media (max-width: 768px) {
//     max-height: 60vh;
//   }

//   @media (max-width: 390px) {
//     max-height: 50vh; /* Adjusted height for very small screens */
//   }
// `;

// export const CloseButton = styled.button`
//   position: absolute;
//   top: 10px; // Adjusted to stay within the viewport
//   right: 10px; // Adjusted to stay within the viewport
//   color: white;
//   border: none;
//   padding: 10px 15px;
//   cursor: pointer;
//   border-radius: 50%;
//   font-size: 1.5rem;
//   z-index: 1001;
//   transition: background 0.3s;
//   background: rgba(0, 0, 0, 0.5); // Add background for better visibility

//   &:hover {
//     background: rgba(0, 0, 0, 0.8);
//   }

//   @media (max-width: 768px) {
//     padding: 8px 12px;
//     font-size: 1.2rem;
//   }

//   @media (max-width: 390px) {
//     padding: 6px 10px; // Adjusted padding for very small screens
//     font-size: 1rem; // Adjusted font size for very small screens
//   }
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

//   @media (max-width: 768px) {
//     padding: 8px 12px;
//     font-size: 1.2rem;
//   }

//   @media (max-width: 390px) {
//     padding: 6px 10px; /* Adjusted padding for very small screens */
//     font-size: 1rem; /* Adjusted font size for very small screens */
//   }
// `;

// export const PrevPreviewButton = styled(PreviewNavButton)`
//   left: -120px;

//   @media (max-width: 768px) {
//     left: -80px;
//   }

//   @media (max-width: 390px) {
//     left: -60px; /* Adjusted position for very small screens */
//   }
// `;

// export const NextPreviewButton = styled(PreviewNavButton)`
//   right: -120px;

//   @media (max-width: 768px) {
//     right: -80px;
//   }

//   @media (max-width: 390px) {
//     right: -60px; /* Adjusted position for very small screens */
//   }
// `;
//
//
//
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
    height: 100%;
    -o-object-fit: cover;
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

export const ImageSubtitle = styled.p`
  font-size: 1rem;
  margin: 5px 0 0;
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

  @media (max-width: 480px) {
    width: 190px;
    padding: 12px 0;
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
