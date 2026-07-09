import styled from "styled-components";

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Manrope", sans-serif;
  align-items: center;
  gap: 120px;
  padding: 24px 20px 48px;

  @media (max-width: 1024px) {
    padding: 20px 20px 40px;
    gap: 60px;
  }

  @media (max-width: 768px) {
    padding: 14px 16px 36px;
    flex-direction: column;
    gap: 24px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 15px;
  transition: all 0.3s ease;
  min-width: 200px;
  text-align: center;
  border: 1px solid #6dc7d1;

  &:hover {
    border: 1px solid #2ecc71;
  }
`;

export const FeatureIcon = styled.img`
  width: 130px;
  height: 130px;
  margin-bottom: 10px;
`;

export const FeatureText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #212121;
`;
