import styled from "styled-components";

// Animation for fading images


// Container for the entire component
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 20px;
  background-color: #f8f8f8;
  height: 100vh;
`;

// Left section containing the image slider
export const LeftSection = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

export const ImageSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the slider */
  }
`;

// Right section for text and button
export const RightSection = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const BorderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: -30px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
color:#6dc7d1;`;

// Feature list and its items
export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  width: 100%;
`;

export const FeatureItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin: 5px 0;

  &:before {
    content: "✔";
  color:#6dc7d1;    margin-right: 8px;
  }
`;

// Button for ordering
export const Button = styled.button`
  font-size: 1rem;
  color: white;
  background-color:#6dc7d1;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #6dc7d1;;
  }
`;
