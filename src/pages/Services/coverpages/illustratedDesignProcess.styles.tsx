import styled from "styled-components";

export const ProcessSection = styled.section`
  width: 100%;
  background: linear-gradient(180deg, #e8f3f5 0%, #eef5f6 100%);
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
  padding: 24px 40px 48px;

  @media (max-width: 1024px) {
    padding: 20px 24px 40px;
  }

  @media (max-width: 768px) {
    padding: 14px 16px 36px;
  }
`;

export const Header = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto 28px;
`;

export const Title = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.35rem);
  font-weight: 800;
  color: #25293f;
  margin: 0 0 10px;
  line-height: 1.25;

  span {
    color: #6dc7d1;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  color: #667085;
  font-size: 1rem;
  line-height: 1.6;
`;

export const ContentCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(16, 24, 40, 0.08);
  border: 1px solid rgba(109, 199, 209, 0.18);

  @media (min-width: 1440px) {
    max-width: 1520px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ImagePanel = styled.div`
  position: relative;
  background: linear-gradient(160deg, #1a2a30 0%, #243b42 55%, #2f4f57 100%);
  min-height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px;
  gap: 16px;

  @media (max-width: 900px) {
    min-height: auto;
    padding: 22px 18px;
  }
`;

export const MainImageFrame = styled.div`
  width: 100%;
  border-radius: 14px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);

  img {
    width: 100%;
    height: auto;
    display: block;
    vertical-align: middle;
  }
`;

export const SketchImageFrame = styled.div`
  width: 78%;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const ImageCaption = styled.p`
  margin: 4px 0 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.62);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

export const StepsPanel = styled.div`
  padding: 36px 36px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 24px 18px 22px;
  }
`;

export const StepsIntro = styled.p`
  margin: 0 0 20px;
  font-size: 0.92rem;
  color: #667085;
  line-height: 1.5;
`;

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 17px;
    top: 18px;
    bottom: 18px;
    width: 2px;
    background: linear-gradient(180deg, #6dc7d1 0%, #d7e8eb 100%);
  }

  @media (max-width: 900px) {
    &::before {
      left: 15px;
    }
  }
`;

export const Step = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 14px;
  align-items: start;
  padding: 12px 0;
  position: relative;
`;

export const StepNumber = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #6dc7d1;
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 14px rgba(109, 199, 209, 0.35);
  position: relative;
  z-index: 1;
`;

export const StepBody = styled.div`
  padding-top: 4px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eef2f4;

  ${Step}:last-child & {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const StepLabel = styled.span`
  display: block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6dc7d1;
  margin-bottom: 4px;
`;

export const StepTitle = styled.h4`
  font-size: 1.12rem;
  font-weight: 800;
  color: #25293f;
  margin: 0 0 6px;
  line-height: 1.3;
`;

export const StepText = styled.p`
  font-size: 0.93rem;
  line-height: 1.6;
  color: #667085;
  margin: 0;

  strong {
    font-weight: 700;
    color: #475467;
  }
`;
