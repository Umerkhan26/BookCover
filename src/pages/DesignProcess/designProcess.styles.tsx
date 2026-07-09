import styled from "styled-components";

interface StepCircleProps {
  isActive: boolean;
}

export const ProcessContainer = styled.div`
  margin: 0 auto;
  padding: 24px 40px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef5f6;
  box-sizing: border-box;
  width: 100%;
  font-family: "Manrope", sans-serif;

  @media (max-width: 1024px) {
    padding: 20px 24px 40px;
  }

  @media (max-width: 768px) {
    padding: 14px 20px 36px;
  }
`;

export const Header = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto 28px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  font-weight: 800;
  color: #25293f;
  margin: 0 0 10px;
  line-height: 1.25;

  span {
    color: #6dc7d1;
  }

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const HeaderSubtitle = styled.p`
  margin: 0;
  color: #667085;
  font-size: 1rem;
  line-height: 1.6;
`;

export const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 28px;
  gap: 0;
  width: 100%;
  max-width: 520px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 22px;
    left: 12%;
    right: 12%;
    height: 2px;
    background: #d5e3e6;
    z-index: 0;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    margin-bottom: 22px;

    &::before {
      top: 18px;
      left: 10%;
      right: 10%;
    }
  }
`;

export const StepItem = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 1;
  font-family: "Manrope", sans-serif;
`;

export const StepCircle = styled.div<StepCircleProps>`
  background-color: ${({ isActive }) => (isActive ? "#6dc7d1" : "#ffffff")};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#98a2b3")};
  font-size: 1rem;
  font-weight: 800;
  border: 2px solid ${({ isActive }) => (isActive ? "#6dc7d1" : "#d0d5dd")};
  box-shadow: ${({ isActive }) =>
    isActive ? "0 6px 16px rgba(109, 199, 209, 0.35)" : "none"};
  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  ${StepItem}:hover & {
    border-color: #6dc7d1;
    color: ${({ isActive }) => (isActive ? "#ffffff" : "#6dc7d1")};
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
    font-size: 0.9rem;
  }
`;

export const StepLabel = styled.span<{ $active: boolean }>`
  font-size: 0.78rem;
  font-weight: 700;
  color: ${({ $active }) => ($active ? "#25293f" : "#98a2b3")};
  text-align: center;
  line-height: 1.2;
  max-width: 90px;
  transition: color 0.25s ease;

  @media (max-width: 600px) {
    font-size: 0.68rem;
    max-width: 70px;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 28px;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  background: #ffffff;
  border: 1px solid #e4ebed;
  border-radius: 16px;
  padding: 28px 32px;
  box-shadow: 0 10px 28px rgba(16, 24, 40, 0.05);
  box-sizing: border-box;

  @media (min-width: 1440px) {
    max-width: 1400px;
    padding: 36px 48px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 22px 20px;
    gap: 20px;
  }
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  max-width: 520px;

  @media (max-width: 900px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const StepBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(109, 199, 209, 0.14);
  color: #2a9aa8;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const StepTitle = styled.h3`
  font-size: clamp(1.45rem, 2.4vw, 1.85rem);
  font-weight: 800;
  color: #25293f;
  margin: 0 0 12px;
  line-height: 1.25;
`;

export const StepDescription = styled.p`
  font-size: 1.02rem;
  color: #667085;
  margin: 0;
  line-height: 1.7;
  max-width: 420px;

  @media (max-width: 900px) {
    max-width: 100%;
    font-size: 0.98rem;
  }
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 420px;
    height: auto;
    border-radius: 12px;
    display: block;

    @media (max-width: 768px) {
      max-width: 280px;
    }
  }
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 170px;
  padding: 12px 28px;
  font-size: 0.92rem;
  font-weight: 800;
  margin-top: 28px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #ffffff;
  background: #6dc7d1;
  text-align: center;
  border-radius: 8px;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  font-family: "Manrope", sans-serif;

  &:hover {
    background: #5ab3bc;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    margin-top: 22px;
    width: 100%;
    max-width: 220px;
  }
`;
