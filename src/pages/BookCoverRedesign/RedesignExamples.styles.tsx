import styled from "styled-components";

export const ExampleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

interface ExampleProps {
  reverse: boolean;
}

export const PointsList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;

  @media (max-width: 767px) {
    list-style: none;
    padding-left: 0;
  }
`;

export const ListItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "✓";
    color: #6dc7d1;
    font-weight: bold;
    margin-right: 8px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ImageLabel = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  background: #f9f9f9;
  color: #333;
  font-size: 0.8rem;
  padding: 2px 8px;
  border-radius: 4px;
`;

// export const StyledImage = styled.img`
//   width: 380px;
//   height: auto;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

export const Container = styled.div`
  max-width: 1400px; /* Increased for larger screens */
  margin: 0 auto;
  padding: 50px 20px;
  font-family: "Manrope", sans-serif;
  background-color: #f9f9f9;
`;

export const Example = styled.div<ExampleProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    align-items: center;
  }

  @media (min-width: 1200px) {
    gap: 50px; /* Increased spacing for larger screens */
  }
`;

export const TextSection = styled.div`
  flex: 1;
  max-width: 600px; /* Limit text width */

  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap; /* Ensure images wrap properly on large screens */
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 400px; /* Allow images to grow but not too much */
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 1200px) {
    max-width: 500px; /* Increase image size on larger screens */
  }
`;
