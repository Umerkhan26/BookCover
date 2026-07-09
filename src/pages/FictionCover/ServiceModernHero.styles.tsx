import styled from "styled-components";
import { Link } from "react-router-dom";

const teal = "#0ebccb";
const tealLight = "rgba(14, 188, 203, 0.12)";

export const ModernHeroSection = styled.section`
  width: 100%;
  margin-top: 85px;
  background: #ffffff;
  font-family: "Manrope", sans-serif;
  box-sizing: border-box;
  /* Match header Nav horizontal padding so content aligns with logo */
  padding-left: 40px;
  padding-right: 40px;

  @media (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 70px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const ModernHeroInner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0 56px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 32px 0 40px;
  }
`;

export const ModernHeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 40px;
  align-items: start;
  margin-bottom: 40px;

  @media (min-width: 1440px) {
    gap: 48px;
    margin-bottom: 44px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const ModernHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  align-self: start;
  padding-top: 0;
`;

export const HeroBadge = styled.span`
  display: inline-block;
  background: ${tealLight};
  color: ${teal};
  font-size: 0.8rem;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 999px;
  margin: 0 0 20px;
`;

export const ModernHeroTitle = styled.h1`
  font-size: clamp(1.85rem, 2.8vw, 2.45rem);
  font-weight: 800;
  line-height: 1.2;
  color: #1a1a1a;
  margin: 0 0 18px;

  span {
    color: ${teal};
  }

  @media (min-width: 1440px) {
    font-size: 2.35rem;
  }
`;

export const ModernHeroDescription = styled.p`
  font-size: 1rem;
  line-height: 1.65;
  color: #5a5f6a;
  margin: 0 0 28px;
  max-width: 520px;

  @media (min-width: 1440px) {
    max-width: 620px;
    font-size: 1.05rem;
  }
`;

export const ModernCtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const SecondaryCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #1a1a1a;
  border: 2px solid ${teal};
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: inherit;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:hover {
    background: ${tealLight};
    transform: translateY(-1px);
  }
`;

export const ModernHeroVisual = styled.div`
  width: 100%;
  min-height: 320px;
  background: #f3f5f7;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px 24px;
  box-sizing: border-box;
  align-self: start;
  margin-top: 0;

  @media (min-width: 993px) and (max-width: 1439px) {
    min-height: 300px;
  }

  @media (min-width: 1440px) {
    min-height: 380px;
  }

  @media (max-width: 992px) {
    min-height: 260px;
  }

  @media (max-width: 768px) {
    min-height: 220px;
  }
`;

export const VisualPlaceholderLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #8b919a;
`;

export const ConsultationFormSection = styled.div`
  width: 100%;
`;
