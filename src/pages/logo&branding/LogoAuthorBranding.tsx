import React, { useState } from "react";
import {
  MainContainer,
  TitleContainer,
  Title,
  SliderContainer,
  SliderWrapper,
  Slide,
  Image,
  ButtonContainer,
  PortfolioButton,
  PrevButton,
  NextButton,
  ImagePreviewOverlay,
  ImagePreviewContainer,
  PreviewImage,
  CloseButton,
  PrevPreviewButton,
  NextPreviewButton,
} from "./LogoAuthorBranding.styles";

import img1 from "../../assets/Slider/img1.jpg";
import img2 from "../../assets/Slider/img2.jpg";
import img3 from "../../assets/Slider/img3.jpg";
import img4 from "../../assets/Slider/img4.jpg";
import img5 from "../../assets/Slider/img5.jpg";
import img6 from "../../assets/Slider/img6.jpg";
import img7 from "../../assets/Slider/img7.jpg";
import img8 from "../../assets/Slider/img8.jpg";
import img9 from "../../assets/Slider/img9.jpg";
import img10 from "../../assets/Slider/img10.jpg";

// Define an array of images
const images: string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

// Constants
const imagesPerRow: number = 5;
const imageWidth: number = 220;
const gap: number = 15;
const slideWidth: number = imageWidth * imagesPerRow + gap * (imagesPerRow - 1);

const LogoAuthorBranding: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const totalSlides: number = Math.ceil(images.length / imagesPerRow);
  const translateX: number = -currentIndex * slideWidth;

  // Handlers
  const handleNext = (): void => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  const handlePrev = (): void => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleImageClick = (index: number): void => {
    setPreviewIndex(index);
  };

  const handlePreviewNext = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    setPreviewIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  };

  const handlePreviewPrev = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    setPreviewIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0));
  };

  const closePreview = (): void => {
    setPreviewIndex(null);
  };

  return (
    <MainContainer>
      <TitleContainer>
        <Title>
        Examples of Author <span>Branding Design</span>
        </Title>
        {/* <Subtitle>Enjoy the examples of our book cover portfolio</Subtitle> */}
      </TitleContainer>

      <SliderContainer>
        <SliderWrapper style={{ transform: `translateX(${translateX}px)` }}>
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <Slide key={slideIndex}>
              {images
                .slice(slideIndex * imagesPerRow, (slideIndex + 1) * imagesPerRow)
                .map((image, index) => {
                  const globalIndex = slideIndex * imagesPerRow + index;
                  return (
                    <Image
                      key={globalIndex}
                      src={image}
                      alt={`Slide ${globalIndex}`}
                      onClick={() => handleImageClick(globalIndex)}
                      style={{ cursor: "pointer" }}
                    />
                  );
                })}
            </Slide>
          ))}
        </SliderWrapper>

        <PrevButton onClick={handlePrev} disabled={currentIndex === 0}>
          ❮
        </PrevButton>
        <NextButton onClick={handleNext} disabled={currentIndex === totalSlides - 1}>
          ❯
        </NextButton>
      </SliderContainer>

      <ButtonContainer>
        <PortfolioButton>More Examples</PortfolioButton>
      </ButtonContainer>

      {previewIndex !== null && (
        <ImagePreviewOverlay onClick={closePreview}>
          <ImagePreviewContainer onClick={(e) => e.stopPropagation()}>
            <PreviewImage src={images[previewIndex]} alt="Preview" />
            <PrevPreviewButton onClick={handlePreviewPrev}>❮</PrevPreviewButton>
            <NextPreviewButton onClick={handlePreviewNext}>❯</NextPreviewButton>
            <CloseButton onClick={closePreview}>×</CloseButton>
          </ImagePreviewContainer>
        </ImagePreviewOverlay>
      )}
    </MainContainer>
  );
};

export default LogoAuthorBranding;
