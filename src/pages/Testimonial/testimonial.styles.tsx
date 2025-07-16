// import styled from "styled-components";

// export const SectionTestimonials = styled.section`
//   background-color: #f9f9f9;
//   font-family: "Manrope", sans-serif;
// `;

// export const WrapTestimonials = styled.div`
//   background: #d5e7fc;
//   padding-top: 114px;
//   padding-bottom: 204px;
//   position: relative;

//   @media (max-width: 768px) {
//     padding-top: 80px;
//     padding-bottom: 150px;
//   }

//   @media (max-width: 480px) {
//     padding-top: 60px;
//     padding-bottom: 120px;
//   }
// `;

// export const SvgContainer = styled.div`
//   position: absolute;
//   z-index: 1;
// `;

// export const SvgLeftTop = styled(SvgContainer)`
//   top: 0;
//   left: 0;
// `;

// export const SvgLeftBottom = styled(SvgContainer)`
//   bottom: 0;
//   left: 0;

//   @media (max-width: 480px) {
//     display: none;
//   }
// `;

// export const SvgRightTop = styled(SvgContainer)`
//   top: 0;
//   right: 0;
// `;

// export const SvgRightBottom = styled(SvgContainer)`
//   bottom: 0;
//   right: 0;

//   @media (max-width: 480px) {
//     display: none;
//   }
// `;

// export const Container = styled.div`
//   position: relative;
//   z-index: 2;
//   /* border: 2px solid red; */
// `;

// export const MainScreen = styled.div`
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// export const Title = styled.h2`
//   font-size: 52px;
//   font-weight: 700;
//   color: #25293f;
//   margin-bottom: 1rem;
//   line-height: 63px;
//   text-transform: capitalize;

//   @media (max-width: 768px) {
//     max-width: 334px;
//     margin: 0 auto;
//     margin-top: 24px;
//     font-size: 40px;
//     line-height: 49px;
//   }

//   // @media (max-width: 480px) {
//   //   font-size: 1.5rem;
//   // }
// `;

// export const Subtitle = styled.p`
//   font-size: 24px;
//   font-weight: 400;
//   line-height: 32px;
//   color: #25293f;

//   @media (max-width: 768px) {
//     font-weight: 400;
//     font-size: 24px;
//     line-height: 32px;
//     color: #25293f;
//     max-width: 675px;
//     margin: 0 auto;
//     margin-top: 30px;
//     padding: 0 10px;
//   }
// `;

// export const ListTestimonials = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 1rem;
//   justify-content: center;

//   @media (max-width: 820px) {
//     display: flex;
//     flex-wrap: nowrap;
//     gap: 0.6rem;
//     justify-content: center;
//     padding: 0 5px;
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 20px;
//   }

//   @media (max-width: 480px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 60px;
//   }

//   @media (max-width: 390px) {
//     flex-direction: column;
//     align-items: center;
//     gap: 75px;
//   }
// `;

// export const ColTestimonials = styled.div`
//   background-color: #fff;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   max-width: 300px;
//   text-align: center;
//   margin-top: -165px;

//   @media (max-width: 768px) {
//     margin-top: 0px;
//     max-width: 70%;
//   }

//   @media (max-width: 480px) {
//     margin-top: -50px;
//     max-width: 90%;
//   }

//   @media (max-width: 390px) {
//     margin-top: -60px;
//     max-width: 90%;
//   }
// `;

// export const TestimonialImage = styled.img`
//   width: 100%;
//   height: auto;
// `;

// export const BoxDescription = styled.div`
//   padding: 1rem;

//   @media (max-width: 480px) {
//     padding: 0.5rem;
//   }
// `;

// export const TestimonialTitle = styled.h3`
//   font-size: 1.6rem;
//   padding-top: 0px;
//   margin-top: -30px;
//   color: #25293f;
//   margin-bottom: 0.5rem;

//   @media (max-width: 768px) {
//     font-size: 1.4rem;
//     margin-top: -20px;
//   }

//   @media (max-width: 480px) {
//     font-size: 24px;
//     margin-top: -15px;
//   }
// `;

// export const TestimonialDescription = styled.p`
//   font-size: 0.875rem;
//   color: #6c757d;

//   @media (max-width: 480px) {
//     font-size: 16px;
//   }
// `;

// export const SocialNetwork = styled.div`
//   display: flex;
//   gap: 0.5rem;
//   margin-top: 1rem;

//   @media (max-width: 480px) {
//     justify-content: center;
//     margin-top: 0;
//     margin-bottom: 6px;
//   }
// `;

// export const IconSocNet = styled.a`
//   border: 1px solid #e0e0e0;
//   border-radius: 6px;
//   height: 32px;
//   width: 32px;
//   margin-right: 16px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none;

//   svg {
//     height: 20px;
//     width: 20px;
//     fill: ${(props) => props.color || "#5476be"};
//     transition: fill 0.3s ease;
//   }

//   @media (max-width: 480px) {
//     width: 30px;
//     height: 30px;
//     margin-right: 8px;
//   }
// `;

// export const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 2rem;

//   @media (max-width: 480px) {
//     margin-top: 1rem;
//   }
// `;

// export const ButtonGreen = styled.a`
//   display: inline-block;
//   padding: 12px 50px;
//   background-color: #6dc7d1;
//   color: #fff;
//   border-radius: 4px;
//   font-weight: 600;
//   font-size: 16px;
//   margin-bottom: 120px;
//   text-decoration: none;
//   margin-top: 2rem;

//   &:hover {
//     background-color: #4fa3a2;
//   }

//   @media (max-width: 768px) {
//     display: block;
//     width: 230px;
//     margin-bottom: 80px;
//   }

//   @media (max-width: 480px) {
//     display: block;
//     width: 190px;
//     font-size: 16px;
//     margin-bottom: 60px;
//     padding: 12px 0;
//     text-align: center;
//     font-weight: 900;
//   }
// `;

// export const YoutubeIconWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   top: -180px;

//   svg path.ytp-large-play-button-bg {
//     fill: gray;
//     transition: fill 0.3s ease;
//   }

//   &:hover svg path.ytp-large-play-button-bg {
//     fill: red;
//   }

//   @media (max-width: 768px) {
//     top: -150px;
//   }

//   @media (max-width: 480px) {
//     top: -120px;
//   }
// `;

import styled from "styled-components";

interface TestimonialCardProps {
  cardsToShow?: number;
}

export const SectionTestimonials = styled.section`
  background-color: #f9f9f9;
  font-family: "Manrope", sans-serif;
`;

export const WrapTestimonials = styled.div`
  background: #d5e7fc;
  padding-top: 114px;
  padding-bottom: 120px;
  position: relative;

  @media (max-width: 768px) {
    padding-top: 80px;
    padding-bottom: 90px;
  }

  @media (max-width: 480px) {
    padding-top: 60px;
    padding-bottom: 70px;
  }
`;

export const SvgLeftTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const SvgLeftBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const SvgRightTop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const SvgRightBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const MainScreen = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const Title = styled.h2`
  font-size: 52px;
  font-weight: 700;
  color: #25293f;
  margin-bottom: 1rem;
  line-height: 63px;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 49px;
  }
`;

export const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #25293f;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 40px 0;
`;

export const CarouselTrack = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  justify-content: flex-start;
  transition: transform 0.3s ease;
`;

export const TestimonialCard = styled.div<TestimonialCardProps>`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  min-width: 280px;
  flex: 0 0 calc(${(props) => 100 / (props.cardsToShow || 4)}% - 20px); /* Subtract a bit for margin */
  margin-right: 30px;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1280px) {
    flex: 0 0 calc(33.333% - 20px);
  }

  @media (max-width: 1024px) {
    flex: 0 0 calc(50% - 20px);
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    margin-right: 0;
  }
`;

export const BoxDescription = styled.div`
  padding: 1rem;
`;

export const TestimonialTitle = styled.h3`
  font-size: 22px;
  color: #25293f;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TestimonialDescription = styled.p`
  font-size: 16px;
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const SocialNetwork = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const IconSocNet = styled.a`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  svg {
    height: 20px;
    width: 20px;
    fill: ${(props) => props.color || "#5476be"};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const ButtonGreen = styled.a`
  display: inline-block;
  padding: 12px 50px;
  background-color: #6dc7d1;
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4fa3a2;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
  }
`;

export const CarouselButton = styled.button<{ direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-size: 20px;
  z-index: 10;
  transition: all 0.3s ease;
  color: #38555f;

  ${({ direction }) =>
    direction === "left" ? "left: -25px;" : "right: -25px;"}

  &:hover {
    background: #f0f0f0;
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
    ${({ direction }) =>
      direction === "left" ? "left: -15px;" : "right: -15px;"}
  }
`;

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#6dc7d1" : "#ddd")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? "#6dc7d1" : "#bbb")};
  }
`;
