import styled from "styled-components";

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;
  padding: 20px;
  margin-bottom:80px;
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
