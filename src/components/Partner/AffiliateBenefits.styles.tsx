import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 120px 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 1100px;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 430px;
`;

export const TextWrapper = styled.div`
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #000;

  span {
    color: #6dc7d1;
  }
`;

export const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  
  &::before {
    content: "✔";
    color: #6dc7d1;
    margin-right: 10px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  background: #6dc7d1;
  color: white;
  border: none;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  outline: none;
  
  &:hover {
    background:#6dc7d1;
  }
`;
