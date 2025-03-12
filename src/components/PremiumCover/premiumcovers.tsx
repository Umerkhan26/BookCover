import React, { useState } from "react";
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
  subtitle?: string;
  imageUrl: string;
};

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

// Styled Components
const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PortfolioItemCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 250px; // Fixed width for grid items
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
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
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-size: 14px;
  margin: 5px 0 0;
  text-transform: uppercase;
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ModalImage = styled.img`
  width: 100%;
  min-width: 430px;
  height: 525px;
  border-radius: 10px;

  // Reduce image size in preview mode
  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
  @media (max-width: 480px) {
    width: 70%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -70px;
  border: none;
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 50%;
`;

export const PreviewNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1.5rem;
  z-index: 1001;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const PrevPreviewButton = styled(PreviewNavButton)`
  left: -120px;
`;

export const NextPreviewButton = styled(PreviewNavButton)`
  right: -120px;
`;

const PremiumCover: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(portfolioItems[index].imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // const showNext = () => {
  //   const newIndex = (currentIndex + 1) % portfolioItems.length;
  //   setCurrentIndex(newIndex);
  //   setSelectedImage(portfolioItems[newIndex].imageUrl);
  // };

  const handlePreviewNext = () => {
    const newIndex = (currentIndex + 1) % portfolioItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioItems[newIndex].imageUrl);
  };

  const handlePreviewPrev = () => {
    const newIndex = (currentIndex - 1) % portfolioItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioItems[newIndex].imageUrl);
  };

  return (
    <>
      <PortfolioContainer>
        {portfolioItems.map((item, index) => (
          <PortfolioItemCard key={item.id} onClick={() => openModal(index)}>
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
          buttonLink=""
        />
      </div>

      {selectedImage && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={closeModal}>✖</CloseButton>
            <ModalImage src={selectedImage} alt="Preview" />
            <PrevPreviewButton onClick={handlePreviewPrev}>❮</PrevPreviewButton>
            <NextPreviewButton onClick={handlePreviewNext}>❯</NextPreviewButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default PremiumCover;
