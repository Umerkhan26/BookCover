import styled from "styled-components";
import { Link } from "react-router-dom";

const glow = "#4ec3d1";
const glowSoft = "rgba(78, 195, 209, 0.45)";

export const PortfolioSection = styled.section`
  width: 100%;
  padding: 56px 40px 72px;
  background: linear-gradient(180deg, #0b1c22 0%, #061015 100%);
  font-family: "Manrope", sans-serif;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 44px 20px 56px;
  }
`;

export const PortfolioInner = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const PortfolioHeader = styled.div`
  text-align: center;
  margin-bottom: 36px;
`;

export const PortfolioTitle = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 10px;

  span {
    color: ${glow};
  }
`;

export const PortfolioSubtitle = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.62);
  font-size: 1rem;
  line-height: 1.6;
`;

export const CoverflowStage = styled.div`
  position: relative;
  height: clamp(340px, 42vw, 430px);
  perspective: 1400px;
  perspective-origin: center center;
  margin: 0 auto;
  max-width: 1100px;

  @media (min-width: 1440px) {
    height: 520px;
    max-width: 1400px;
    perspective: 1600px;
  }
`;

export const CoverflowTrack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;

export const CoverCard = styled.button<{ $offset: number }>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: clamp(150px, 16vw, 220px);
  aspect-ratio: 2 / 3;
  margin: 0;
  padding: 0;
  border: 1px solid
    ${({ $offset }) =>
      Math.abs($offset) === 0 ? glow : "rgba(78, 195, 209, 0.35)"};
  border-radius: 10px;
  background: #0a1519;
  overflow: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%)
    translateX(${({ $offset }) => `${$offset * 195}px`})
    translateZ(${({ $offset }) => `${-Math.abs($offset) * 70}px`})
    scale(${({ $offset }) => {
      const distance = Math.abs($offset);
      if (distance === 0) return 1;
      if (distance === 1) return 0.86;
      return 0.74;
    }})
    rotateY(${({ $offset }) => `${$offset * -24}deg`});
  z-index: ${({ $offset }) => 20 - Math.abs($offset)};
  opacity: ${({ $offset }) => (Math.abs($offset) > 2 ? 0 : 1 - Math.abs($offset) * 0.14)};
  pointer-events: ${({ $offset }) => (Math.abs($offset) > 2 ? "none" : "auto")};
  box-shadow: ${({ $offset }) =>
    Math.abs($offset) === 0
      ? `0 0 35px ${glowSoft}, 0 0 70px rgba(78, 195, 209, 0.18), inset 0 0 24px rgba(78, 195, 209, 0.08)`
      : `0 0 18px rgba(78, 195, 209, 0.12)`};
  transition:
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.55s ease,
    box-shadow 0.55s ease,
    border-color 0.55s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover {
    border-color: ${glow};
  }

  @media (min-width: 1440px) {
    width: 280px;
    transform: translate(-50%, -50%)
      translateX(${({ $offset }) => `${$offset * 250}px`})
      translateZ(${({ $offset }) => `${-Math.abs($offset) * 90}px`})
      scale(${({ $offset }) => {
        const distance = Math.abs($offset);
        if (distance === 0) return 1;
        if (distance === 1) return 0.86;
        return 0.74;
      }})
      rotateY(${({ $offset }) => `${$offset * -24}deg`});
  }

  @media (max-width: 768px) {
    width: clamp(130px, 38vw, 180px);
    transform: translate(-50%, -50%)
      translateX(${({ $offset }) => `${$offset * 120}px`})
      translateZ(${({ $offset }) => `${-Math.abs($offset) * 50}px`})
      scale(${({ $offset }) => {
        const distance = Math.abs($offset);
        if (distance === 0) return 1;
        if (distance === 1) return 0.84;
        return 0.72;
      }})
      rotateY(${({ $offset }) => `${$offset * -18}deg`});
  }
`;

export const PortfolioActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 28px;
  flex-wrap: wrap;
`;

export const NavBtn = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(78, 195, 209, 0.45);
  background: rgba(78, 195, 209, 0.08);
  color: ${glow};
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: rgba(78, 195, 209, 0.18);
    border-color: ${glow};
  }
`;

export const ViewAllLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 11px 24px;
  border-radius: 8px;
  border: 2px solid ${glow};
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.92rem;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${glow};
    color: #061015;
  }
`;
