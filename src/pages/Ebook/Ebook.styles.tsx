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

export const HeroSection = styled.section`
  position: relative;
  background-color: #6dc7d1;
  padding: 140px 20px 80px;
  text-align: center;
  color: #fff;
  overflow: hidden;
  margin-top: 85px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 120px 20px 60px;
    margin-top: 80px;
    min-height: 350px;
  }

  @media (max-width: 768px) {
    padding: 100px 20px 50px;
    margin-top: 75px;
    min-height: 300px;
  }

  @media (max-width: 480px) {
    padding: 80px 15px 40px;
    margin-top: 70px;
    min-height: 250px;
  }
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 15px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
  color: #ffffff;
  text-align: center;

  span {
    color: #ffffff;
    display: block;
  }

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    margin-bottom: 16px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 32px;
  color: #ffffff;
  max-width: 800px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 28px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

export const HeroButton = styled.button`
  display: inline-block;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  color: #6dc7d1;
  background-color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 14px 32px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px 28px;
    font-size: 14px;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ServiceCard = styled.div`
  background: #fff;
  border: 2px solid #6dc7d1;
  border-radius: 10px;
  padding: 40px 25px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  min-height: 190px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(109, 199, 209, 0.15);
    border-color: #4fa3a2;
  }

  p {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.6;
    margin-top: 12px;
  }

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

export const ServiceIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  display: block;
`;

export const ServiceName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #212121;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 18px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      flex: 1;
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
  font-size: 2rem;
  font-weight: 800;
  color: #212121;
  background: linear-gradient(to right, #f5f5f5, #fff);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  min-width: 120px;
  text-align: center;
  border: 1px solid #e0e0e0;
  position: relative;
  white-space: nowrap;
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
