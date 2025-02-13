import React, { useState } from "react";
import styled from "styled-components";
import ShareIdeasSection from "../../../pages/IdeaSection/ideaSection";

const images = Object.entries(
  import.meta.glob<{ default: string }>(
    "../../../assets/CustomBookCovers/*.{jpg,jpeg,png}",
    {
      eager: true,
    }
  )
)
  .map(([path, mod]) => ({
    id: parseInt(path.match(/\d+/)?.[0] || "0"),
    imageUrl: mod.default,
  }))
  .sort((a, b) => a.id - b.id);

const selectedIndices = [44, 18, 43, 37, 13, 31, 1, 22, 32, 14, 47, 30];
const filteredImages = images.filter((img) => selectedIndices.includes(img.id));

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
  max-width: 250px;
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
  min-width: 380px;
  height: 450px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
  @media (max-width: 480px) {
    width: 70%;
  }
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

const Horror: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handlePreviewNext = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].imageUrl);
  };

  const handlePreviewPrev = () => {
    const newIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].imageUrl);
  };

  return (
    <>
      <PortfolioContainer>
        {filteredImages.map((img, index) => (
          <PortfolioItemCard
            key={img.id}
            onClick={() => openModal(img.imageUrl, index)}
          >
            <Image src={img.imageUrl} alt={`Book ${img.id}`} loading="lazy" />
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

export default Horror;
