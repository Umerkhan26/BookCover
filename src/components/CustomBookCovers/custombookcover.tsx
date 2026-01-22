import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShareIdeasSection from "../../pages/IdeaSection/ideaSection";
import { Helmet } from "react-helmet-async";
import { motion, Variants } from "framer-motion";
import { ShimmerCard } from "../Shimmer/Shimmer";

const variants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

// Dynamically import all images using import.meta.glob
const images = Object.entries(
  import.meta.glob<{ default: string }>(
    "../../assets/CustomBookCovers/*.{jpg,jpeg,png,webp}",
    {
      eager: true,
    },
  ),
)
  .map(([path, mod]) => ({
    id: parseInt(path.match(/\d+/)?.[0] || "0"), // Extract number from filename
    imageUrl: mod.default, // Get image URL
  }))
  .sort((a, b) => a.id - b.id); // Sort images by extracted number

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4 per row on desktop
  gap: 20px;
  padding: 20px;
  justify-items: center;
  width: 100%; // Ensure it spans the full width
  max-width: 1200px; // Match the max-width of the banner
  margin: 0 auto; // Center the container
  /* border: 2px solid red; */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); // 4 per row on large screens
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); // 3 per row on tablets
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr); // 2 per row on smaller screens
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr); // 1 per row on very small screens
  }
`;

const PortfolioItemCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  max-width: 250px; // Limit the maximum width of each card
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
  left: 10px;
`;

const NextPreviewButton = styled(PreviewNavButton)`
  right: 10px;
`;

const CustomCover: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for images to load
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (imageUrl: string) => {
    const index = images.findIndex((img) => img.imageUrl === imageUrl);
    setCurrentIndex(index);
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handlePreviewNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].imageUrl);
  };

  const handlePreviewPrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].imageUrl);
  };

  if (!isLoaded) {
    return (
      <>
        <Helmet>
          <title>Customs Book Covers</title>
          <meta
            name="description"
            content="Explore our diverse collection of book cover designs."
          />
        </Helmet>
        <PortfolioContainer>
          {Array.from({ length: 12 }).map((_, i) => (
            <ShimmerCard key={i} height="350px" width="250px" />
          ))}
        </PortfolioContainer>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Customs Book Covers</title>
        <meta
          name="description"
          content="Explore our diverse collection of book cover designs."
        />
      </Helmet>
      <PortfolioContainer>
        {images.map((img) => (
          <PortfolioItemCard
            key={img.id}
            onClick={() => openModal(img.imageUrl)}
            as={motion.div}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

export default CustomCover;
