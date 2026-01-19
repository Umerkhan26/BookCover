import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MainContainer,
  TitleContainer,
  Title,
  SliderContainer,
  ImageWrapper,
  Image,
  ButtonContainer,
  PortfolioButton,
  ImagePreviewOverlay,
  ImagePreviewContainer,
  PreviewImage,
  CloseButton,
  PrevPreviewButton,
  NextPreviewButton,
} from "./carousal.styles";

import img1 from "../../assets/banner/TheButterflySpell.webp";
import img2 from "../../assets/banner/TheLastDefenderCover.webp";
import img3 from "../../assets/banner/Stormborn (1).webp";
import img4 from "../../assets/banner/MurderMelodycover.webp";
import img5 from "../../assets/banner/ArchersAscent.webp";
import img6 from "../../assets/banner/Dustanddestinycover.webp";
import { useNavigate } from "react-router-dom";

const images = [
  { src: img1, title: "INGLED", subtitle: "OUT" },
  { src: img2, title: "SOLO", subtitle: "ESCAPING" },
  { src: img3, title: "IN MOON", subtitle: "CARL DOLAN" },
  { src: img4, title: "TRAVELER", subtitle: "ALEX GREENHILL" },
  { src: img5, title: "DEMONS", subtitle: "ELEMENTAL" },
  { src: img6, title: "MAGE", subtitle: "B.EVA" },
  { src: img2, title: "TITLE7", subtitle: "SUBTITLE7" },
  { src: img6, title: "TITLE8", subtitle: "SUBTITLE8" },
  { src: img1, title: "TITLE9", subtitle: "SUBTITLE9" },
  { src: img3, title: "TITLE10", subtitle: "SUBTITLE10" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: "0px",
  draggable: true,
  swipe: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setPreviewIndex(index);
  };

  const handlePreviewNext = () => {
    setPreviewIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  };

  const handlePreviewPrev = () => {
    setPreviewIndex((prev) =>
      prev !== null
        ? (prev - 1 + images.length) % images.length
        : images.length - 1
    );
  };

  const closePreview = () => {
    setPreviewIndex(null);
  };

  const navigate = useNavigate();

  const handleGoToPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <MainContainer>
      <TitleContainer>
        <Title>
          Our <span>Portfolio</span>
        </Title>
      </TitleContainer>

      <SliderContainer>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <ImageWrapper onClick={() => handleImageClick(index)}>
                <Image
                  src={image.src}
                  alt={`Slide ${index}`}
                  style={{ cursor: "pointer" }}
                />
              </ImageWrapper>
            </div>
          ))}
        </Slider>
      </SliderContainer>

      <ButtonContainer>
        <PortfolioButton onClick={handleGoToPortfolio}>
          See Portfolio
        </PortfolioButton>
      </ButtonContainer>

      {previewIndex !== null && (
        <ImagePreviewOverlay onClick={closePreview}>
          <ImagePreviewContainer onClick={(e) => e.stopPropagation()}>
            <PreviewImage src={images[previewIndex].src} alt="Preview" />
            <PrevPreviewButton onClick={handlePreviewPrev}>❮</PrevPreviewButton>
            <NextPreviewButton onClick={handlePreviewNext}>❯</NextPreviewButton>
            <CloseButton onClick={closePreview}>✖</CloseButton>
          </ImagePreviewContainer>
        </ImagePreviewOverlay>
      )}
    </MainContainer>
  );
};

export default Carousel;
