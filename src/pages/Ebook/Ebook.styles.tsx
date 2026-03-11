import styled, { keyframes } from "styled-components";
import { theme } from "../../theme";

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(109, 199, 209, 0.5); }
  50% { box-shadow: 0 0 20px rgba(109, 199, 209, 0.8); }
  100% { box-shadow: 0 0 5px rgba(109, 199, 209, 0.5); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

export const EbookContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  font-family: "Manrope", sans-serif;
`;

export const EbookBannerSection = styled.section`
  position: relative;
  width: 100%;
  margin-top: 85px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;

export const EbookBannerImage = styled.div`
  position: relative;
  width: 100%;
  max-height: 480px;
  height: 480px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 1024px) {
    height: 380px;
    max-height: 380px;
  }

  @media (max-width: 768px) {
    height: 250px;
    min-height: 250px;
    max-height: 250px;
  }

  @media (max-width: 480px) {
    height: 160px;
    min-height: 160px;
    max-height: 160px;
  }
`;

export const EbookBannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  padding-left: 40px;
  z-index: 2;
  max-width: 50%;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;

  @media (min-width: 1280px) {
    padding-left: max(40px, calc((100% - 1200px) / 2));
  }

  @media (max-width: 1024px) {
    max-width: 55%;
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    max-width: 50%;
    padding-left: 20px;
  }

  @media (max-width: 480px) {
    max-width: 45%;
    padding-left: 16px;
  }
`;

export const EbookBannerTitle = styled.h1`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  color: #ffffff;
  text-align: inherit;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 16px;
  font-family: "Manrope", sans-serif;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 1200px) {
    font-size: clamp(28px, 4.5vw, 42px);
  }

  @media (max-width: 1024px) {
    font-size: clamp(24px, 4vw, 36px);
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    font-size: clamp(18px, 4vw, 24px);
    margin-bottom: 8px;
    line-height: 1.15;
  }

  @media (max-width: 480px) {
    font-size: clamp(14px, 3.5vw, 20px);
    margin-bottom: 6px;
    line-height: 1.1;
  }
`;

export const EbookBannerSubtitle = styled.p`
  font-size: clamp(14px, 1.5vw, 18px);
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  text-align: inherit;
  margin: 0;
  margin-bottom: 24px;
  line-height: 1.5;
  font-family: "Manrope", sans-serif;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    font-size: clamp(13px, 1.8vw, 16px);
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: clamp(10px, 1.8vw, 12px);
    line-height: 1.4;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: clamp(8px, 1.5vw, 10px);
    line-height: 1.3;
    margin-bottom: 12px;
  }
`;

export const EbookBannerButton = styled.button`
  background: #ffffff;
  color: #6dc7d1;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-family: "Manrope", sans-serif;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: #f8f8f8;
  }

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 12px;
  }
`;

export const EbookCoversContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 40px;
  transform: translateY(-50%);
  display: flex;
  gap: 20px;
  z-index: 2;
  align-items: center;

  @media (min-width: 1280px) {
    right: max(40px, calc((100% - 1200px) / 2));
  }

  @media (max-width: 1024px) {
    right: 20px;
    gap: 15px;
  }

  @media (max-width: 768px) {
    right: 15px;
    gap: 10px;
    display: none; /* Hide on mobile for better text visibility */
  }
`;

export const EbookCoverCard = styled.div`
  position: relative;
  transform: rotate(-5deg);
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);

  &:nth-child(1) {
    transform: rotate(-8deg);
    z-index: 1;
  }

  &:nth-child(2) {
    transform: rotate(0deg);
    z-index: 2;
    margin-top: -20px;
  }

  &:nth-child(3) {
    transform: rotate(8deg);
    z-index: 1;
  }

  &:hover {
    transform: translateY(-10px) rotate(0deg) !important;
    z-index: 3;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 140px;
    height: auto;
    display: block;
    border-radius: 4px;

    @media (max-width: 1024px) {
      width: 110px;
    }
  }
`;

export const SectionWrapper = styled.div`
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

export const ProcessWrapper = styled.div`
  padding: 50px 20px 20px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 40px 15px 15px 15px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px 10px 15px;
  }
`;

export const GhostwritingWrapper = styled.div`
  padding: 20px 20px 50px 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px 15px 40px 15px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px 30px 15px;
  }
`;

export const ServicesSection = styled.section`
  text-align: center;
  background-color: #f8f8f8;
  padding: 50px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: #25293f;
  margin-bottom: 50px;
  line-height: 1.2;

  span {
    color: #6dc7d1;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    margin-bottom: 30px;
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  border: 2px solid #e5e7eb;
  border-radius: 16px;
  padding: 35px 30px;
  text-align: left;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  min-height: 280px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #6dc7d1, #4aa5b0);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(109, 199, 209, 0.2);
    border-color: #6dc7d1;

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    padding: 28px 20px;
    min-height: auto;
  }
`;

export const ServiceIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  display: block;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 16px;
  }
`;

export const ServiceName = styled.h3`
  font-size: 24px;
  font-weight: 800;
  color: #25293f;
  margin-bottom: 10px;
  text-align: center;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ServiceCategory = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #6dc7d1;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 16px;
  text-align: center;
  display: block;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 12px;
  }
`;

export const ServiceDescription = styled.p`
  color: #4b5563;
  font-size: 15px;
  line-height: 1.7;
  margin-top: 0;
  flex-grow: 1;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const ProcessSection = styled.section`
  background: #fff;
  border-radius: 16px;
  padding: 40px 40px;
  margin: 0;

  @media (max-width: 768px) {
    padding: 30px 20px;
    margin: 0;
  }

  @media (max-width: 480px) {
    padding: 25px 15px;
    margin: 0;
  }
`;

export const ProcessTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  color: #25293f;
  margin-bottom: 50px;
  text-align: center;
  line-height: 1.2;

  span {
    color: #6dc7d1;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    margin-bottom: 30px;
  }
`;

export const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

export const ProcessStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(109, 199, 209, 0.15);
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 24px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    gap: 16px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const StepNumber = styled.div`
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background-color: #6dc7d1;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 800;
  box-shadow: 0 4px 12px rgba(109, 199, 209, 0.3);

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
`;

export const StepContent = styled.div`
  flex: 1;
`;

export const StepTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const StepDescription = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: #4b5563;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const GhostwritingSection = styled.section`
  background-color: transparent;
  border-radius: 16px;
  padding: 40px 40px;
  color: #25293f;
  margin: 0;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  @media (max-width: 480px) {
    padding: 25px 15px;
  }
`;

export const GhostwritingContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const GhostwritingTitle = styled.h2`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 30px;
  text-align: center;
  color: #25293f;
  line-height: 1.2;

  span {
    color: #6dc7d1;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
`;

export const GhostwritingText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 40px;
  color: #4b5563;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 24px;
  }
`;

export const GhostwritingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

export const FeatureItem = styled.li`
  font-size: 16px;
  line-height: 1.7;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;
  border-left: 4px solid #6dc7d1;

  strong {
    color: #25293f;
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 14px;

    strong {
      font-size: 16px;
    }
  }
`;

export const PackageContainer = styled.div`
  text-align: center;
  padding: 2.5rem 2rem;
  margin: 0 auto;
  background: linear-gradient(to bottom, #f9f9f9, #ffffff);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(to right, #6dc7d1, #4aa5b0, #6dc7d1);
  }

  .packages-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    margin-top: 4rem;
    animation: ${fadeIn} 0.8s ease-out forwards;
    justify-content: center;
  }

  @media (max-width: 1200px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    .packages-wrapper {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-top: 2rem;
    }
  }
`;

export const PackageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #2d3748;
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Montserrat", sans-serif;

  span {
    color: #6dc7d1;
    position: relative;
    padding: 0 0.5rem;

    &::after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 4px;
      background: linear-gradient(to right, #6dc7d1);
      border-radius: 4px;
    }
  }

  &::before {
    content: "✦";
    position: absolute;
    left: -50px;
    top: 30%;
    transform: translateY(-50%);
    color: #6dc7d1;
    font-size: 2rem;
    animation: ${float} 3s ease-in-out infinite;
  }

  &::after {
    content: "✦";
    position: absolute;
    right: -50px;
    top: 50%;
    transform: translateY(-50%);
    color: #6dc7d1;
    font-size: 2rem;
    animation: ${float} 3s ease-in-out infinite 0.5s;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;

    &::before,
    &::after {
      display: none;
    }

    @media (max-width: 488px) {
      font-size: 29px;

      &::before,
      &::after {
        display: none;
      }
    }
  }
`;

export const PricingCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
  position: relative;
  overflow: hidden;
  border: 1px solid #eaeaea;
  height: 100%;
  min-height: 650px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(to right, #6dc7d1, #4aa5b0);
  }

  &.popular {
    border: 2px solid #6dc7d1;
    animation: ${glow} 3s infinite;

    &::after {
      content: "MOST POPULAR";
      position: absolute;
      top: 20px;
      right: -30px;
      background: #6dc7d1;
      color: white;
      padding: 0.25rem 2rem;
      font-size: 0.75rem;
      font-weight: 700;
      transform: rotate(45deg);
      transform-origin: center;
      width: 150px;
      text-align: center;
    }
  }

  .title-price {
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px dashed #e0e0e0;

    h3 {
      font-size: 1.8rem;
      font-weight: 800;
      color: #212121;
      margin: 0;
      text-align: left;
      position: relative;
      padding-left: 2rem;
      font-family: "Montserrat", sans-serif;
      letter-spacing: 0.5px;

      &::before {
        content: "✨";
        position: absolute;
        left: 0;
        color: #6dc7d1;
        font-size: 1.5rem;
      }
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 1.5rem 0;
    flex: 1;
  }

  .features-list,
  .free-addons {
    text-align: left;
    position: relative;
    min-height: 150px;
  }

  .features-list {
    ul {
      display: grid;
      gap: 0.75rem;
    }
  }

  .free-addons {
    background: #f8fcfd;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px dashed #6dc7d1;

    ul {
      display: grid;
      gap: 0.75rem;
    }
  }

  .free-title {
    font-size: 1rem;
    font-weight: 700;
    color: #6dc7d1;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;

    &::before {
      content: "🎁";
      margin-right: 0.5rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: flex-start;
    font-size: 0.95rem;
    color: #455a64;
    line-height: 1.5;
    position: relative;
    padding-left: 1.75rem;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      color: #6dc7d1;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: auto;

    &.popular::after {
      right: -25px;
      top: 40px;
      font-size: 0.65rem;
    }
  }
`;

export const Price = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #6dc7d1;
  background: linear-gradient(to right, #f8fcfd, #fff);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  min-width: 180px;
  text-align: center;
  border: 2px solid #6dc7d1;
  position: relative;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    min-width: 160px;
    padding: 0.6rem 1.2rem;
  }
`;

export const AddOns = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem;
  border: 2px solid #6dc7d1;
  border-radius: 12px;
  background-color: rgba(109, 199, 209, 0.05);
  position: relative;

  &::before {
    content: "ADD-ONS";
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 0 1rem;
    font-size: 0.85rem;
    font-weight: 700;
    color: #6dc7d1;
    letter-spacing: 1px;
  }

  .addons-options {
    display: grid;
    gap: 0.75rem;
    text-align: left;

    > div {
      display: flex;
      align-items: center;
      padding: 0.75rem;
      background: white;
      border-radius: 8px;
      transition: all 0.2s ease;

      &:hover {
        background: #f5f5f5;
        transform: translateX(5px);
      }
    }

    label {
      font-size: 0.95rem;
      color: #455a64;
      margin-left: 0.75rem;
      cursor: pointer;
      flex-grow: 1;
    }

    input[type="checkbox"] {
      appearance: none;
      width: 20px;
      height: 20px;
      border: 2px solid #ddd;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;

      &:checked {
        background-color: #6dc7d1;
        border-color: #6dc7d1;

        &::after {
          content: "✓";
          position: absolute;
          color: white;
          font-size: 0.8rem;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`;

export const OrderButton = styled.button`
  background: linear-gradient(to right, #6dc7d1, #4aa5b0);
  color: white;
  padding: 1.25rem;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: auto;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(109, 199, 209, 0.3);

  &::after {
    content: "→";
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
  }

  &:hover {
    background: linear-gradient(to right, #5ba6b1, #3d8d98);
    box-shadow: 0 6px 20px rgba(109, 199, 209, 0.4);
    padding-right: 3rem;

    &::after {
      right: 15px;
    }
  }

  &:active {
    transform: translateY(2px);
  }
`;

export const WhyChooseUsSection = styled.section`
  background-color: #fff;
  padding: 50px 0;

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const WhyChooseUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 30px;
  }
`;

export const WhyChooseUsItem = styled.div`
  background: #f8f8f8;
  border-radius: 12px;
  padding: 30px 25px;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(109, 199, 209, 0.15);
    border-color: #6dc7d1;
    background: #fff;
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

export const WhyChooseUsIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  display: block;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 12px;
  }
`;

export const WhyChooseUsTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #25293f;
  margin-bottom: 12px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const WhyChooseUsText = styled.p`
  color: #4b5563;
  font-size: 15px;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ContactSection = styled.section`
  background: linear-gradient(135deg, #6dc7d1 0%, #4aa5b0 100%);
  padding: 60px 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const ContactContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const ContactTitle = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #fff;
  margin-bottom: 16px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 12px;
  }
`;

export const ContactText = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 30px;
  opacity: 0.95;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 24px;
  }
`;

export const ContactPhone = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  backdrop-filter: blur(10px);

  .contact-icon {
    font-size: 24px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`;

export const ContactEmail = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  backdrop-filter: blur(10px);

  .contact-icon {
    font-size: 24px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`;

export const ContactButton = styled.button`
  background: #fff;
  color: #6dc7d1;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    background: #f8f8f8;
  }

  @media (max-width: 768px) {
    padding: 14px 32px;
    font-size: 16px;
  }
`;

export const ContactTeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 40px 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin: 30px 0;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 14px;
    margin: 24px 0;
  }
`;

export const ContactTeamItem = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 16px 12px;
  }
`;

export const ContactTeamIcon = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
  display: block;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 8px;
  }
`;

export const ContactTeamText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const StoryJourneySection = styled.section`
  background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(to right, #6dc7d1, #4aa5b0, #6dc7d1);
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const StoryJourneyTitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: #25293f;
  text-align: center;
  margin-bottom: 16px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.2;

  span {
    color: #6dc7d1;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const StoryJourneySubtitle = styled.h3`
  font-size: 32px;
  font-weight: 600;
  color: #4b5563;
  text-align: center;
  margin-bottom: 24px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const StoryJourneyDescription = styled.p`
  font-size: 18px;
  color: #4b5563;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 60px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 50px;
    padding: 0 20px;
  }
`;

export const StoryStepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 60px;
  position: relative;
  padding-top: 20px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, #6dc7d1, #4aa5b0, #6dc7d1);
    z-index: 0;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 50px;
  }
`;

export const StoryStep = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 32px 28px;
  text-align: left;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(109, 199, 209, 0.15);
    border-color: #6dc7d1;
  }

  @media (max-width: 768px) {
    padding: 28px 24px;
  }
`;

export const StoryStepNumber = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: #6dc7d1;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  display: block;
`;

export const StoryStepIcon = styled.div`
  font-size: 56px;
  margin-bottom: 20px;
  display: block;
  line-height: 1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 48px;
    margin-bottom: 16px;
  }
`;

export const StoryStepTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #25293f;
  margin-bottom: 12px;
  font-family: "Montserrat", sans-serif;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

export const StoryStepDescription = styled.p`
  font-size: 15px;
  color: #4b5563;
  line-height: 1.7;
  margin: 0;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }
`;
