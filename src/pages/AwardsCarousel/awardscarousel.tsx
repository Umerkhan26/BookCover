import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Styled Components
const AwardsSectionWrapper = styled.section`
  background-color: #fafafa;
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
`;

const SectionTitle = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 34px;
  font-weight: 700;
  color: #00bcd4;
  margin-bottom: 0;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
`;

const AwardsCarouselItem = styled.div`
  text-align: center;
  padding: 1rem;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AwardImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const AwardImage = styled.img`
  max-width: 180px;
  height: auto;
  border-radius: 5px;
`;

const Badge = styled.img`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 50px;
  height: auto;
`;

const AwardTitle = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-top: 0.5rem;
`;

const AwardSubtitle = styled.span`
  display: block;
  font-size: 0.875rem;
  color: #666;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
  font-size: 2rem;
  color: #333;

  &:focus {
    outline: none;
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  @media (max-width: 768px) {
    &.prev {
      left: 5px;
    }
    &.next {
      right: 5px;
    }
  }
`;

const carouselSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};

interface AwardItem {
  image: string;
  badge?: string;
  title: string;
  subtitle: string;
}

interface AwardsCarouselProps {
  title: string;
  subtitle: string;
  awards: AwardItem[];
}

const AwardsCarousel: React.FC<AwardsCarouselProps> = ({
  title,
  subtitle,
  awards,
}) => {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <AwardsSectionWrapper>
      <Container>
        <SectionTitle>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </SectionTitle>

        <Slider ref={sliderRef} {...carouselSettings}>
          {awards.map((award, index) => (
            <AwardsCarouselItem key={index}>
              <AwardImageWrapper>
                <AwardImage src={award.image} alt={award.title} />
                {award.badge && <Badge src={award.badge} alt="Award Badge" />}
              </AwardImageWrapper>
              <AwardTitle>{award.title}</AwardTitle>
              <AwardSubtitle>{award.subtitle}</AwardSubtitle>
            </AwardsCarouselItem>
          ))}
        </Slider>

        <ArrowButton
          className="prev"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaChevronLeft />
        </ArrowButton>
        <ArrowButton
          className="next"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaChevronRight />
        </ArrowButton>
      </Container>
    </AwardsSectionWrapper>
  );
};

export default AwardsCarousel;
