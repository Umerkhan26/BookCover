import styled from "styled-components";

export const AddOnsContainer = styled.div`
  text-align: center;
  padding: 24px 1.5rem 48px;
  background-color: #f4f7f8;
  font-family: "Manrope", sans-serif;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 20px 1.5rem 40px;
  }

  @media (max-width: 768px) {
    padding: 14px 1rem 36px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #25293f;
  margin: 0 0 8px;
  line-height: 1.3;

  span {
    display: block;
    font-size: clamp(1.25rem, 2.5vw, 1.6rem);
    color: #6dc7d1;
    font-weight: 700;
    margin-top: 4px;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const AddOnsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
  margin: 28px auto 0;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 720px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    max-width: 360px;
    gap: 18px;
  }
`;

export const AddOnCard = styled.div`
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #e8eef0;
  box-shadow: 0 8px 24px rgba(16, 24, 40, 0.06);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 32px rgba(16, 24, 40, 0.1);
    border-color: rgba(109, 199, 209, 0.45);
  }
`;

export const ImageFrame = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  background: linear-gradient(180deg, #1a1f2e 0%, #2a3142 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;

export const CardBody = styled.div`
  padding: 16px 16px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

export const CardTitle = styled.p`
  font-size: 0.98rem;
  font-weight: 700;
  color: #25293f;
  margin: 0;
  line-height: 1.35;
  min-height: 2.7em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderButton = styled.button`
  background-color: #6dc7d1;
  color: #ffffff;
  border: none;
  padding: 10px 22px;
  font-size: 0.92rem;
  font-weight: 700;
  font-family: "Manrope", sans-serif;
  cursor: pointer;
  border-radius: 8px;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
  width: 100%;
  max-width: 160px;

  &:hover {
    background-color: #5ab3bc;
  }

  &:active {
    transform: scale(0.98);
  }
`;
