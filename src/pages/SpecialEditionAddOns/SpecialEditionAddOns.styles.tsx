import styled from "styled-components";

export const AddOnsContainer = styled.div`
  text-align: center;
  padding: 3rem 1.5rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;

  span {
    display: block;
    font-size: 1.8rem;
    color: #6dc7d1; /* Your theme color */
    font-weight: bold;
  }
`;

export const AddOnsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export const AddOnCard = styled.div`
  background: #fff;
//   border-radius: 8px;
  overflow: hidden;
  text-align: center;
  width: 280px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   border: 2px solid #6dc7d1; /* Theme border */
  padding: 1rem;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  p {
    font-size: 1rem;
    color: #333;
    margin: 0.8rem 0;
  }
`;

export const OrderButton = styled.button`
  background-color: #6dc7d1; /* Theme color */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #5ab3bc;
  }
`;
