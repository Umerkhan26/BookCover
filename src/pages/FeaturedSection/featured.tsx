import React from "react";
import styled from "styled-components";

// Styled Components
const FeaturedSectionWrapper = styled.section`
  background-color: #fff; // Adjust as needed
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 900;
  color: #333;
  margin-bottom: 2rem;
  letter-spacing: 1px;

  span {
    color: #6dc7d1;
    font-weight: 900;
  }
`;

const FeaturedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; // Space between items
  gap: 1.5rem; // Consistent gap between items

  @media (max-width: 768px) {
    justify-content: center; // Center items on mobile
    gap: 1rem; // Smaller gap on mobile
  }
`;

const FeaturedItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease;
  width: calc(25% - 1.5rem); // 4 items per row with gap
  height: 80px; // Fixed height for each item
  background-color: #f9f9f9; // Background color for the item container
  border-radius: 8px; // Optional: Add rounded corners
  padding: 10px; // Optional: Add padding inside the container

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: calc(50% - 1rem); // 2 items per row on mobile
    height: 60px; // Smaller height on mobile
  }
`;

const FeaturedImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; // Ensure the image fits within the container
`;

// Component Props
interface FeaturedSectionProps {
  title: string;
  featuredItems: {
    href: string;
    src: string;
    alt: string;
  }[];
}

// Main Component
const FeaturedSection: React.FC<FeaturedSectionProps> = ({ featuredItems }) => {
  return (
    <FeaturedSectionWrapper>
      <Container>
        <Title>
          As featured <span>in</span> {/* Render the title directly */}
        </Title>
        <FeaturedList>
          {featuredItems.map((item, index) => (
            <FeaturedItem
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FeaturedImage src={item.src} alt={item.alt} />
            </FeaturedItem>
          ))}
        </FeaturedList>
      </Container>
    </FeaturedSectionWrapper>
  );
};

export default FeaturedSection;
