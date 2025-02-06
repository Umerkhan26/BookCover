import styled from "styled-components";

export  const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const ExampleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

interface ExampleProps {
  reverse: boolean;
}

export const Example = styled.div<ExampleProps>`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
    align-items: center;
  }
`;

export const TextSection = styled.div`
  flex: 1;
`;

export const PointsList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin: 0;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;

export const ImageSection = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
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

export const StyledImage = styled.img`
  width: 380px;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

