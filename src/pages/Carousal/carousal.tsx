// import { useState, useEffect } from "react";
// import {
//   MainContainer,
//   TitleContainer,
//   Title,
//   SliderContainer,
//   SliderWrapper,
//   Slide,
//   Image,
//   ButtonContainer,
//   PortfolioButton,
//   PrevButton,
//   NextButton,
//   ImagePreviewOverlay,
//   ImagePreviewContainer,
//   PreviewImage,
//   CloseButton,
//   PrevPreviewButton,
//   NextPreviewButton,
// } from "./carousal.styles";

// import img1 from "../../assets/Slider/img1.jpg";
// import img2 from "../../assets/Slider/img2.jpg";
// import img3 from "../../assets/Slider/img3.jpg";
// import img4 from "../../assets/Slider/img4.jpg";
// import img5 from "../../assets/Slider/img5.jpg";
// import img6 from "../../assets/Slider/img6.jpg";
// import img7 from "../../assets/Slider/img7.jpg";
// import img8 from "../../assets/Slider/img8.jpg";
// import img9 from "../../assets/Slider/img9.jpg";
// import img10 from "../../assets/Slider/img10.jpg";

// const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
// const imageWidth = 220;
// const gap = 15;

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [previewIndex, setPreviewIndex] = useState<number | null>(null);
//   const [imagesPerRow, setImagesPerRow] = useState(5);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 576) {
//         setImagesPerRow(1); // Only one image on small screens
//       } else if (window.innerWidth < 768) {
//         setImagesPerRow(2);
//       } else if (window.innerWidth < 992) {
//         setImagesPerRow(3);
//       } else if (window.innerWidth < 1200) {
//         setImagesPerRow(4);
//       } else {
//         setImagesPerRow(5); // Default for larger screens
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Set initial value

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const totalSlides = Math.ceil(images.length / imagesPerRow);
//   const slideWidth = imageWidth * imagesPerRow + gap * (imagesPerRow - 1);
//   const translateX = -currentIndex * slideWidth;

//   const handleNext = () => {
//     setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const handleImageClick = (index: number) => {
//     setPreviewIndex(index);
//   };

//   const handlePreviewNext = () => {
//     setPreviewIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
//   };

//   const handlePreviewPrev = () => {
//     setPreviewIndex((prev) =>
//       prev !== null
//         ? (prev - 1 + images.length) % images.length
//         : images.length - 1
//     );
//   };

//   const closePreview = () => {
//     setPreviewIndex(null);
//   };

//   return (
//     <MainContainer>
//       <TitleContainer>
//         <Title>
//           Our <span>Portfolio</span>
//         </Title>
//       </TitleContainer>

//       <SliderContainer>
//         <SliderWrapper
//           imagesPerRow={imagesPerRow}
//           style={{ transform: `translateX(${translateX}px)` }}
//         >
//           {Array.from({ length: totalSlides }).map((_, slideIndex) => (
//             <Slide key={slideIndex}>
//               {images
//                 .slice(
//                   slideIndex * imagesPerRow,
//                   (slideIndex + 1) * imagesPerRow
//                 )
//                 .map((image, index) => {
//                   const globalIndex = slideIndex * imagesPerRow + index;
//                   return (
//                     <Image
//                       key={globalIndex}
//                       src={image}
//                       alt={`Slide ${globalIndex}`}
//                       onClick={() => handleImageClick(globalIndex)}
//                       style={{ cursor: "pointer", width: "100%" }} // Ensure image takes full width
//                     />
//                   );
//                 })}
//             </Slide>
//           ))}
//         </SliderWrapper>

//         <PrevButton onClick={handlePrev} disabled={currentIndex === 0}>
//           ❮
//         </PrevButton>
//         <NextButton
//           onClick={handleNext}
//           disabled={currentIndex === totalSlides - 1}
//         >
//           ❯
//         </NextButton>
//       </SliderContainer>

//       <ButtonContainer>
//         <PortfolioButton>See Portfolio</PortfolioButton>
//       </ButtonContainer>

//       {previewIndex !== null && (
//         <ImagePreviewOverlay onClick={closePreview}>
//           <ImagePreviewContainer onClick={(e) => e.stopPropagation()}>
//             <PreviewImage src={images[previewIndex]} alt="Preview" />
//             <PrevPreviewButton onClick={handlePreviewPrev}>❮</PrevPreviewButton>
//             <NextPreviewButton onClick={handlePreviewNext}>❯</NextPreviewButton>
//             <CloseButton onClick={closePreview}>×</CloseButton>
//           </ImagePreviewContainer>
//         </ImagePreviewOverlay>
//       )}
//     </MainContainer>
//   );
// };

// export default Carousel;

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
  // ImageOverlay,
  // ImageTitle,
  // ImageSubtitle,
  ButtonContainer,
  PortfolioButton,
  ImagePreviewOverlay,
  ImagePreviewContainer,
  PreviewImage,
  CloseButton,
  PrevPreviewButton,
  NextPreviewButton,
} from "./carousal.styles";

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

const images = [
  { src: img1, title: "INGLED", subtitle: "OUT" },
  { src: img2, title: "SOLO", subtitle: "ESCAPING" },
  { src: img3, title: "IN MOON", subtitle: "CARL DOLAN" },
  { src: img4, title: "TRAVELER", subtitle: "ALEX GREENHILL" },
  { src: img5, title: "DEMONS", subtitle: "ELEMENTAL" },
  { src: img6, title: "MAGE", subtitle: "B.EVA" },
  { src: img7, title: "TITLE7", subtitle: "SUBTITLE7" },
  { src: img8, title: "TITLE8", subtitle: "SUBTITLE8" },
  { src: img9, title: "TITLE9", subtitle: "SUBTITLE9" },
  { src: img10, title: "TITLE10", subtitle: "SUBTITLE10" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5, // Show 5 images on large screens
  slidesToScroll: 1,
  centerMode: false,
  centerPadding: "0px",
  draggable: true,
  swipe: true,
  responsive: [
    {
      breakpoint: 1440, // Adjust for larger screens
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200, // Adjust for large screens
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // Medium screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Tablets
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Mobile
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
                {/* <ImageOverlay>
                  <ImageTitle>{image.title}</ImageTitle>
                  <ImageSubtitle>{image.subtitle}</ImageSubtitle>
                </ImageOverlay> */}
              </ImageWrapper>
            </div>
          ))}
        </Slider>
      </SliderContainer>

      <ButtonContainer>
        <PortfolioButton>See Portfolio</PortfolioButton>
      </ButtonContainer>

      {previewIndex !== null && (
        <ImagePreviewOverlay onClick={closePreview}>
          <ImagePreviewContainer onClick={(e) => e.stopPropagation()}>
            <PreviewImage src={images[previewIndex].src} alt="Preview" />
            <PrevPreviewButton onClick={handlePreviewPrev}>❮</PrevPreviewButton>
            <NextPreviewButton onClick={handlePreviewNext}>❯</NextPreviewButton>
            <CloseButton onClick={closePreview}>×</CloseButton>
          </ImagePreviewContainer>
        </ImagePreviewOverlay>
      )}
    </MainContainer>
  );
};

export default Carousel;
