import styled from "styled-components";

const accent = "#4ec3d1";
const accentLight = "#e8fafd";
const heading = "#101828";
const body = "#667085";
const border = "#e5e7eb";

export const BenefitsWrap = styled.section`
  --accent: ${accent};
  --accent-light: ${accentLight};
  --heading: ${heading};
  --body: ${body};
  --border: ${border};

  padding: 48px 40px 64px;
  font-family: "Manrope", sans-serif;
  background-color: #f4f7f8;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 40px 20px 56px;
  }

  @media (max-width: 768px) {
    padding: 36px 20px 48px;
    margin-bottom: -30px;
  }

  @media (max-width: 480px) {
    padding: 32px 16px 40px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export const BenefitsHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 36px;
`;

export const Eyebrow = styled.span`
  display: block;
  color: var(--accent);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin: 0 0 10px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.75rem, 3.2vw, 2.5rem);
  font-weight: 800;
  line-height: 1.25;
  color: var(--heading);
  margin: 10px 0;

  span {
    color: var(--accent);
  }
`;

export const SectionDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--body);
  margin: 12px 0 0;
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 30px;
  align-items: stretch;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 22px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const BenefitCard = styled.article`
  position: relative;
  background: #ffffff;
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: left;
  transition:
    border-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(78, 195, 209, 0.15);
  }
`;

export const CardSpine = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--accent);
  opacity: 0.5;
  transition:
    width 0.3s ease,
    opacity 0.3s ease;

  ${BenefitCard}:hover & {
    width: 5px;
    opacity: 1;
  }
`;

export const CardFold = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 28px 28px 0;
  border-color: transparent var(--accent-light) transparent transparent;
  transition: border-width 0.3s ease;
  pointer-events: none;

  ${BenefitCard}:hover & {
    border-width: 0 36px 36px 0;
  }
`;

export const CardInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 30px 30px 30px 32px;
`;

export const BenefitIconWrap = styled.div`
  width: 50px;
  height: 50px;
  background: var(--accent-light);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-shrink: 0;
  align-self: flex-start;

  svg {
    width: 24px;
    height: 24px;
    stroke: var(--accent);
    fill: none;
  }
`;

export const BenefitTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: var(--heading);
  margin: 0 0 10px;
  line-height: 1.35;
  text-align: left;
  width: 100%;
  align-self: stretch;
`;

export const BenefitSubtitle = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: var(--body);
  margin: 0;
  text-align: left;
  width: 100%;
  align-self: stretch;
`;
