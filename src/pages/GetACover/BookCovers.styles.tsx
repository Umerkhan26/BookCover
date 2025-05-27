import styled from "styled-components";

export const GridContainer = styled.div`
/* border: 2px solid #6dc7d1; */
  display: grid;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  margin-bottom: 80px;
  justify-items: center; // Center items in the grid
  text-decoration: none;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px 10px;

  @media (max-width: 768px){
    margin-top: 35px;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const GridItem = styled.div`
  text-align: center;
  cursor: pointer;
  width: 100%;
  max-width: 350px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  border: 2px solid #6dc7d1;
`;

export const ItemTitle = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: #333;
`;
