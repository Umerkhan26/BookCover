import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  BoxDescription,
  ButtonGreen,
  ButtonWrapper,
  Container,
  MainScreen,
  SectionTestimonials,
  Subtitle,
  TestimonialDescription,
  TestimonialTitle,
  Title,
  TestimonialCard,
  SvgLeftTop,
  SvgLeftBottom,
  SvgRightTop,
  SvgRightBottom,
  WrapTestimonials,
  CarouselContainer,
  CarouselTrack,
  CarouselButton,
  CarouselDots,
  Dot,
} from "./testimonial.styles";
import "aos/dist/aos.css";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  const testimonials = [
    {
      name: "David Lyons",
      description:
        "Lumeart team is super patient and approachable, but they're also talented book cover designers who are always open to collaboration.",
    },
    {
      name: "Kate Myers",
      description:
        "The entire Lumeart team is super friendly and they spend a lot of time making sure that you get what you want. I recommend them to anyone I can.",
    },
    {
      name: "Kate Jones",
      description:
        "Lumeart is extremely professional and they always deal with my order in a very timely manner. They always produce a result I'm never disappointed with.",
    },
    {
      name: "John Smith",
      description:
        "Working with Lumeart was a fantastic experience. Their attention to detail and creative approach resulted in a cover that perfectly captured my book's essence.",
    },
    {
      name: "Sarah Johnson",
      description:
        "I've used Lumeart for three book covers now and each one has been better than the last. They truly understand author needs and deliver exceptional quality.",
    },
    {
      name: "Emily Carter",
      description:
        "From concept to completion, the Lumeart team exceeded my expectations. Their designs brought my vision to life in a way I couldn't have imagined.",
    },
    {
      name: "Michael Daniels",
      description:
        "I was impressed with how quickly Lumeart understood my genre and audience. The cover they created helped boost my book sales significantly.",
    },
    {
      name: "Laura Bennett",
      description:
        "Absolutely phenomenal experience! The process was smooth, communication was clear, and the final design was exactly what I wanted.",
    },
    {
      name: "James Turner",
      description:
        "Lumeart's creative talent and professional service made the entire cover design process seamless. Highly recommended!",
    },
    {
      name: "Olivia Hughes",
      description:
        "The team really listens and cares. They went the extra mile to ensure I was happy with every detail. I'll definitely work with them again.",
    },
  ];

  // Handle window resize to adjust number of cards shown
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else if (window.innerWidth < 1280) {
        setCardsToShow(3);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= testimonials.length ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? testimonials.length - cardsToShow : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <SectionTestimonials>
      <WrapTestimonials>
        {/* SVG Left Top */}
        <SvgLeftTop>
          <svg
            width="90"
            height="90"
            viewBox="0 0 105 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_59_2010"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="3"
              y="0"
              width="102"
              height="108"
            >
              <rect
                x="3.0293"
                y="107.06"
                width="107.06"
                height="101"
                rx="10"
                transform="rotate(-90 3.0293 107.06)"
                fill="#FDFFFD"
              />
            </mask>
            <g mask="url(#mask0_59_2010)">
              <circle
                cx="59.2434"
                cy="1.40289"
                r="31.8231"
                transform="rotate(90 59.2434 1.40289)"
                stroke="#38555F"
              />
              <circle
                cx="59.2434"
                cy="66.0447"
                r="31.8231"
                transform="rotate(90 59.2434 66.0447)"
                stroke="#38555F"
              />
              <circle
                cx="-5.40313"
                cy="66.0447"
                r="31.8231"
                transform="rotate(90 -5.40313 66.0447)"
                stroke="#38555F"
              />
            </g>
          </svg>
        </SvgLeftTop>

        {/* SVG Left Bottom */}
        <SvgLeftBottom>
          <svg
            width="91"
            height="245"
            viewBox="0 0 91 257"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 1C12.5037 0.997274 3.59512 2.86953 -4.71685 6.50981C-13.0288 10.1501 -20.5812 15.4871 -26.9425 22.2157C-33.3039 28.9444 -38.3495 36.933 -41.791 45.725C-45.2325 54.517 -47.0026 63.94 -47 73.4559L-47 359H90L90 73.4559C90 54.2394 82.7831 35.8099 69.9368 22.2218C57.0906 8.63373 39.6673 1 21.5 1V1Z"
              stroke="#38555F"
              strokeMiterlimit="10"
            />
          </svg>
        </SvgLeftBottom>

        {/* SVG Right Top */}
        <SvgRightTop>
          <svg
            width="190"
            height="33"
            viewBox="0 0 210 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="175"
              cy="-1.99984"
              r="34.4999"
              transform="rotate(90 175 -1.99984)"
              stroke="#38555F"
            />
            <circle
              cx="105"
              cy="-1.99984"
              r="34.4999"
              transform="rotate(90 105 -1.99984)"
              stroke="#38555F"
            />
            <circle
              cx="35.0001"
              cy="-1.99984"
              r="34.4999"
              transform="rotate(90 35.0001 -1.99984)"
              stroke="#38555F"
            />
          </svg>
        </SvgRightTop>

        {/* SVG Right Bottom */}
        <SvgRightBottom>
          <svg
            width="69"
            height="245"
            viewBox="0 0 69 257"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69 0.999997C77.9306 0.997268 86.7742 2.86953 95.0255 6.50981C103.277 10.1501 110.774 15.4871 117.089 22.2157C123.404 28.9444 128.413 36.933 131.829 45.725C135.245 54.517 137.003 63.94 137 73.4559L137 359L0.999996 359L1.00002 73.4558C1.00002 54.2394 8.16431 35.8099 20.9168 22.2218C33.6692 8.63372 50.9653 0.999995 69 0.999997V0.999997Z"
              stroke="#38555F"
              strokeMiterlimit="10"
            />
          </svg>
        </SvgRightBottom>

        <Container>
          <MainScreen>
            <svg
              width="48"
              height="12"
              viewBox="0 0 48 12"
              fill="none"
              style={{ display: "block", margin: "auto", marginBottom: "30px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5.82952" cy="5.82659" r="5.32659" stroke="#25293F" />
              <path
                d="M29.4648 5.82659C29.4648 8.75736 27.0291 11.1532 23.9995 11.1532C20.9699 11.1532 18.5342 8.75736 18.5342 5.82659C18.5342 2.89582 20.9699 0.5 23.9995 0.5C27.0291 0.5 29.4648 2.89582 29.4648 5.82659Z"
                stroke="#25293F"
              />
              <circle cx="42.1733" cy="5.82659" r="5.32659" stroke="#25293F" />
            </svg>

            <Title>Meet Our Customers</Title>
            <Subtitle>
              Indie authors share their stories about how Lumeart helped them{" "}
              <br />
              get a cover of their dreams
            </Subtitle>
          </MainScreen>

          <CarouselContainer>
            <CarouselButton direction="left" onClick={prevSlide}>
              <FaChevronLeft />
            </CarouselButton>

            <CarouselTrack>
              {testimonials
                .slice(currentIndex, currentIndex + cardsToShow)
                .map((testimonial, index) => (
                  <TestimonialCard key={index} cardsToShow={cardsToShow}>
                    <BoxDescription>
                      <TestimonialTitle>{testimonial.name}</TestimonialTitle>
                      <TestimonialDescription>
                        {testimonial.description}
                      </TestimonialDescription>
                    </BoxDescription>
                  </TestimonialCard>
                ))}
            </CarouselTrack>

            <CarouselButton direction="right" onClick={nextSlide}>
              <FaChevronRight />
            </CarouselButton>
          </CarouselContainer>

          <CarouselDots>
            {Array.from({ length: testimonials.length - cardsToShow + 1 }).map(
              (_, index) => (
                <Dot
                  key={index}
                  active={index === currentIndex}
                  onClick={() => goToSlide(index)}
                />
              ),
            )}
          </CarouselDots>

          <ButtonWrapper>
            <ButtonGreen href="">View all reviews</ButtonGreen>
          </ButtonWrapper>
        </Container>
      </WrapTestimonials>
    </SectionTestimonials>
  );
};

export default Testimonials;
