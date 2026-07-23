import { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Avatar,
  ButtonWrap,
  CardFooter,
  CardHeader,
  CarouselOuter,
  CarouselTrack,
  CarouselViewport,
  Container,
  Heading,
  HeadingWrapper,
  NavButton,
  ReviewButton,
  ReviewCard,
  ReviewText,
  ReviewerName,
  Section,
  Stars,
} from "./reviews.styles";

const GAP = 16;

const reviewsData = [
  {
    name: "Adriana Pridemore Author",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "Lumeart Studio turned my fiction cover idea into a clean, professional design that matched my vision perfectly. Communication was smooth, and revisions were handled quickly.",
    timeAgo: "2 weeks ago",
  },
  {
    name: "David Lyons Author",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The Lumeart team is super patient and approachable, but they're also talented book cover designers who are always open to collaboration. My fantasy cover looks incredible on Amazon.",
    timeAgo: "3 weeks ago",
  },
  {
    name: "Kate Myers Author",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The entire Lumeart team is super friendly and they spend a lot of time making sure that you get what you want. I recommend them to every indie author I know.",
    timeAgo: "1 month ago",
  },
  {
    name: "Sarah Johnson Author",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "I've used Lumeart for three book covers now and each one has been better than the last. They truly understand author needs and deliver exceptional quality every time.",
    timeAgo: "5 days ago",
  },
  {
    name: "Michael Daniels Author",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "I was impressed with how quickly Lumeart understood my non-fiction genre and audience. The cover they created helped boost my book sales significantly after launch.",
    timeAgo: "2 weeks ago",
  },
  {
    name: "Emily Carter Author",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "From concept to completion, the Lumeart team exceeded my expectations. My illustrated cover design brought my story world to life in a way I couldn't have imagined.",
    timeAgo: "4 days ago",
  },
  {
    name: "James Turner Author",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "Lumeart's creative talent made my audiobook cover redesign seamless. The square format looks sharp on Audible and the branding feels consistent across all my titles.",
    timeAgo: "1 week ago",
  },
  {
    name: "Laura Bennett Author",
    avatar: "https://randomuser.me/api/portraits/women/36.jpg",
    text: "Absolutely phenomenal experience! The process was smooth, communication was clear, and my romance cover design was exactly what I wanted for my new release.",
    timeAgo: "3 days ago",
  },
  {
    name: "Olivia Hughes Author",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    text: "The team really listens and cares. They went the extra mile on my logo and author branding package. I'll definitely work with Lumeart again for my next series.",
    timeAgo: "6 days ago",
  },
  {
    name: "John Smith Author",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Stunning work by Lumeart Studio! My book cover redesign was modern, sharp, and exactly what I had imagined. It gave my backlist a fresh, professional look.",
    timeAgo: "1 week ago",
  },
  {
    name: "Rachel Kim Author",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    text: "My thriller cover needed to feel tense and cinematic — Lumeart nailed the mood on the first concept. Revisions were fast and the final files were print-ready.",
    timeAgo: "4 days ago",
  },
  {
    name: "Thomas Wright Author",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "Professional from start to finish. They guided me through typography, layout, and genre expectations without ever making the process feel overwhelming.",
    timeAgo: "2 weeks ago",
  },
  {
    name: "Nina Patel Author",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    text: "I loved how collaborative the team was on my memoir cover. Every round of feedback was taken seriously and the result feels authentic to my story.",
    timeAgo: "8 days ago",
  },
  {
    name: "Marcus Allen Author",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    text: "Great value and even better quality. My series now has a cohesive look across all three books, and readers have complimented the covers on social media.",
    timeAgo: "5 days ago",
  },
  {
    name: "Sophie Laurent Author",
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    text: "Lumeart transformed a rough idea into a polished cover that stands out in my category. Communication was clear and turnaround was quicker than I expected.",
    timeAgo: "3 weeks ago",
  },
];

const STAR_COUNT = 5;

const AUTO_SCROLL_MS = 4500;

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [cardWidth, setCardWidth] = useState(300);
  const [isPaused, setIsPaused] = useState(false);
  const maxIndexRef = useRef(0);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      let visible = 3;

      if (width < 640) {
        visible = 1;
      } else if (width < 992) {
        visible = 2;
      } else if (width < 1440) {
        visible = 3;
      } else {
        visible = 4;
      }

      const containerMax = width >= 1440 ? 1520 : 1200;
      const carouselWidth = Math.min(width, containerMax) - 40 - 96;
      const calculatedWidth = Math.floor(
        (carouselWidth - GAP * (visible - 1)) / visible,
      );

      setCardsToShow(visible);
      setCardWidth(Math.max(calculatedWidth, visible === 4 ? 240 : 260));
      setCurrentIndex((prev) =>
        Math.min(prev, Math.max(0, reviewsData.length - visible)),
      );
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const maxIndex = Math.max(0, reviewsData.length - cardsToShow);
  maxIndexRef.current = maxIndex;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndexRef.current ? 0 : prev + 1));
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const timer = window.setInterval(() => {
      handleNext();
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, maxIndex, handleNext]);

  return (
    <Section id="reviews">
      <Container>
        <HeadingWrapper>
          <Heading>
            Customer <span>Feedback</span>
          </Heading>
        </HeadingWrapper>

        <ButtonWrap>
          <ReviewButton
            href="https://www.facebook.com/share/1EreeG179x/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave A Review
          </ReviewButton>
        </ButtonWrap>

        <CarouselOuter
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <NavButton type="button" onClick={handlePrev} aria-label="Previous">
            <FaChevronLeft />
          </NavButton>

          <CarouselViewport>
            <CarouselTrack
              $offset={currentIndex}
              $cardWidth={cardWidth}
              $gap={GAP}
            >
              {reviewsData.map((review, index) => (
                <ReviewCard key={`${review.name}-${index}`} $cardWidth={cardWidth}>
                  <CardHeader>
                    <Avatar
                      src={review.avatar}
                      alt={review.name}
                  loading="lazy"
                />
                    <ReviewerName>{review.name}</ReviewerName>
                  </CardHeader>

                  <Stars aria-label="5 out of 5 stars">
                    {Array.from({ length: STAR_COUNT }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </Stars>

                  <ReviewText>
                    {review.text}{" "}
                    <a href="#reviews" onClick={(e) => e.preventDefault()}>
                      See More
                    </a>
                  </ReviewText>

                  <CardFooter>{review.timeAgo}</CardFooter>
            </ReviewCard>
              ))}
            </CarouselTrack>
          </CarouselViewport>

          <NavButton type="button" onClick={handleNext} aria-label="Next">
            <FaChevronRight />
          </NavButton>
        </CarouselOuter>
      </Container>
    </Section>
  );
};

export default Reviews;
