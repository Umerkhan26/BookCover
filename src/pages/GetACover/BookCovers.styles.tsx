import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  margin-left: 180px;
    margin-right: 180px;
      margin-top: 80px;
  margin-bottom: 80px;


  grid-template-columns: repeat(1, 1fr);  // For mobile, 1 column per row
  gap: 40px 30px;  // 40px between columns and 30px between rows

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);  // For small screens, 2 columns per row
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);  // For medium screens, 3 columns per row
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);  // For large screens, 3 columns per row
  }
`;

export const GridItem = styled.div`
  text-align: left;
  cursor: pointer;
`;

export const ItemImage = styled.img`
  width: 70%;
  height: auto;
  border-radius: 10px;
  border: 2px solid #6dc7d1 ;  // Add a black border around each image
`;

export const ItemTitle = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-right:110px;
`;
