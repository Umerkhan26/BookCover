import React, { useState } from "react";
import styled from "styled-components";

// Import images directly
import img1 from "../../assets/Marketing Meterial/marketing-material-1-768x512.jpeg";
import img2 from "../../assets/Marketing Meterial/Marketing-materials-2.jpeg";
import img3 from "../../assets/Marketing Meterial/marketing-cover-3.jpeg";
import img4 from "../../assets/Marketing Meterial/marketing-release-4.jpeg";
import img5 from "../../assets/Marketing Meterial/marketing-material-5-768x768.jpeg";
import img6 from "../../assets/Marketing Meterial/marketing-materials-new-6.jpeg";
import img7 from "../../assets/Marketing Meterial/marketing-release-image-7.jpeg";
import img8 from "../../assets/Marketing Meterial/marketing-cover-reveal-8.jpeg";
import img9 from "../../assets/Marketing Meterial/marketing-material-9.jpeg";
import ShareIdeasSection from "../../pages/IdeaSection/ideaSection";
import { Helmet } from "react-helmet-async";

type PortfolioItem = {
  id: number;
  subtitle?: string;
  imageUrl: string;
};

const portfolioItems: PortfolioItem[] = [
  { id: 1, imageUrl: img1 },
  { id: 2, imageUrl: img2 },
  { id: 3, imageUrl: img3 },
  { id: 4, imageUrl: img4 },
  { id: 5, imageUrl: img5 },
  { id: 6, imageUrl: img6 },
  { id: 7, imageUrl: img7 },
  { id: 8, imageUrl: img8 },
  { id: 9, imageUrl: img9 },
];

// Styled Components

const PortfolioItemCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 290px; // Fixed width for grid items
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  text-align: left;
`;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
  }
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

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }
`;

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
  width: 90%;
  max-width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 525px;
  aspect-ratio: 2 / 3;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 85%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
`;

const PreviewNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1.5rem;
  z-index: 1001;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 8px;
  }
`;

const PrevPreviewButton = styled(PreviewNavButton)`
  left: 10px; /* Adjust placement for small screens */
`;

const NextPreviewButton = styled(PreviewNavButton)`
  right: 10px;
`;
const MarketingMaterial: React.FC = () => {
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
    const newIndex =
      (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioItems[newIndex].imageUrl);
  };

  return (
    <>
      <Helmet>
        <title>Marketing Materials</title>
        <meta
          name="description"
          content="Browse our marketing materials for your brand."
        />
      </Helmet>
      <PortfolioContainer>
        {portfolioItems.map((item, index) => (
          <PortfolioItemCard key={item.id} onClick={() => openModal(index)}>
            <Image src={item.imageUrl} alt="book" loading="lazy" />
            <TextOverlay></TextOverlay>
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
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
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

export default MarketingMaterial;
