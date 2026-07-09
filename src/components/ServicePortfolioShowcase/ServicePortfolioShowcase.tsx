import React, { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  servicePortfolioItems,
  ServicePortfolioKey,
} from "../../config/servicePortfolioItems";
import {
  CoverflowStage,
  CoverflowTrack,
  CoverCard,
  NavBtn,
  PortfolioActions,
  PortfolioHeader,
  PortfolioInner,
  PortfolioSection,
  PortfolioSubtitle,
  PortfolioTitle,
  ViewAllLink,
} from "./ServicePortfolioShowcase.styles";

const AUTO_SCROLL_MS = 4000;
const VISIBLE_RANGE = 2;

const getWrappedOffset = (
  index: number,
  activeIndex: number,
  total: number,
): number => {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
};

interface ServicePortfolioShowcaseProps {
  portfolioKey: ServicePortfolioKey;
}

const ServicePortfolioShowcase: React.FC<ServicePortfolioShowcaseProps> = ({
  portfolioKey,
}) => {
  const images = servicePortfolioItems[portfolioKey];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = window.setInterval(goNext, AUTO_SCROLL_MS);
    return () => window.clearInterval(timer);
  }, [goNext, images.length, isPaused]);

  return (
    <PortfolioSection
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <PortfolioInner>
        <PortfolioHeader>
          <PortfolioTitle>
            Our <span>Portfolio</span>
          </PortfolioTitle>
          <PortfolioSubtitle>
            A glimpse of covers crafted for authors across genres and platforms.
          </PortfolioSubtitle>
        </PortfolioHeader>

        <CoverflowStage>
          <CoverflowTrack>
            {images.map((src, index) => {
              const offset = getWrappedOffset(index, activeIndex, images.length);
              if (Math.abs(offset) > VISIBLE_RANGE) return null;

              return (
                <CoverCard
                  key={`${portfolioKey}-${index}`}
                  type="button"
                  $offset={offset}
                  aria-label={`Portfolio item ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={src} alt="" loading="lazy" />
                </CoverCard>
              );
            })}
          </CoverflowTrack>
        </CoverflowStage>

        <PortfolioActions>
          <NavBtn type="button" onClick={goPrev} aria-label="Previous cover">
            <FaChevronLeft />
          </NavBtn>
          <ViewAllLink to="/portfolio">View Full Portfolio</ViewAllLink>
          <NavBtn type="button" onClick={goNext} aria-label="Next cover">
            <FaChevronRight />
          </NavBtn>
        </PortfolioActions>
      </PortfolioInner>
    </PortfolioSection>
  );
};

export default ServicePortfolioShowcase;
