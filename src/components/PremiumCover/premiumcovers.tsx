import React from "react";
import styled from "styled-components";

// Import images directly
import img1 from "../../assets/Premiem/img1.jpg";
import img2 from "../../assets/Premiem/img2.jpg";
import img3 from "../../assets/Premiem/img3.jpeg";
import img4 from "../../assets/Premiem/img4.jpeg";
import img5 from "../../assets/Premiem/img5.jpeg";
import img6 from "../../assets/Premiem/img6.jpeg";
import img7 from "../../assets/Premiem/img7.jpeg";
import img8 from "../../assets/Premiem/img8.jpg";
import img9 from "../../assets/Premiem/img9.jpg";
import img10 from "../../assets/Premiem/img10.jpg";
import img11 from "../../assets/Premiem/img11.jpg";
import ShareIdeasSection from "../../pages/IdeaSection/ideaSection";

type PortfolioItem = {
  id: number;
  title: string;
  imageUrl: string;
  subtitle?: string; // Optional subtitle for additional text
};

// Use the imported images in the portfolioItems array
const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "HUNTER'S", subtitle: "BILLMCCURRY", imageUrl: img1 },
  { id: 2, title: "CAM SINCLAIR", subtitle: "FULLY", imageUrl: img2 },
  { id: 3, title: "GALLES", subtitle: "BORGERS", imageUrl: img3 },
  { id: 4, title: "SEAR", subtitle: "ECHOES", imageUrl: img4 },
  { id: 5, title: "SOLECON", subtitle: "OF THE", imageUrl: img5 },
  { id: 6, title: "SIGRA", subtitle: "SAMUEL", imageUrl: img6 },
  { id: 7, title: "ALEXANDER", subtitle: "BOOK TWO", imageUrl: img7 },
  { id: 8, title: "ZIP-KRAMMEN", subtitle: "BROKILLES", imageUrl: img8 },
  { id: 9, title: "Book Nine", imageUrl: img9 },
  { id: 10, title: "Book Ten", imageUrl: img10 },
  { id: 11, title: "Book Eleven", imageUrl: img11 },
];

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4 images per row
  gap: 30px; // Increased gap between images
  padding: 20px;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); // 3 images per row for medium screens
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 images per row for tablets
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr); // 1 image per row for mobile
  }
`;

const PortfolioItemCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px; // Increased width for each card
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin: 5px 0 0;
  text-transform: uppercase;
`;

const PortfolioGrid: React.FC = () => {
  return (
    <>
      <PortfolioContainer>
        {portfolioItems.map((item) => (
          <PortfolioItemCard key={item.id}>
            <Image src={item.imageUrl} alt={item.title} loading="lazy" />
            <TextOverlay>
              <Title>{item.title}</Title>
              {item.subtitle && <Subtitle>{item.subtitle}</Subtitle>}
            </TextOverlay>
          </PortfolioItemCard>
        ))}
      </PortfolioContainer>

      <div style={{ width: "104%", marginLeft: "-18px", marginTop: "100px" }}>
        <ShareIdeasSection
          title="Get a free cover <span>design idea</span>"
          subtitle="We'll help you come up with ideas that work"
          buttonText="Get a free cover design idea"
          buttonLink="https://miblart.com/cover-idea/"
        />
      </div>
    </>
  );
};

export default PortfolioGrid;
