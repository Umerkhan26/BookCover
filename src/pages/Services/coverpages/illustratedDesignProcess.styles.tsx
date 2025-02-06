import styled from "styled-components";
interface LargeImageWrapperProps {
    expanded: boolean;
  }
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 60px 10%;
      color: #666;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 560px;
        color: #666;

`;

export const SmallImage = styled.img`
  width: 280px;
  height: 180px;
  border: 3px solid green;
  position: absolute;
  top: 5px;
  left: 0;
        color: #666;

`;
export const LargeImageWrapper = styled.div<LargeImageWrapperProps>`
  width: 120%;
  height: ${({ expanded }) => (expanded ? 'auto' : '520px')};
  overflow: hidden;
  position: relative;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
        color: #666;

`;

export const LargeImage = styled.img`
  width: 120%;
  height: 420px;
  object-fit: cover;
        color: #666;

`;

export const StepsContainer = styled.div`
  flex: 1;
  max-width: 600px;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
          color: #666;


    span {
      color: #6dc7d1;
    }
  }
`;

export const Step = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 20px;
    color: #6dc7d1;
    margin-bottom: 5px;
    
    span {
      font-size: 14px;
      color: #6dc7d1;
      margin-left: 5px;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
          color: #666;

  }

  p {
    font-size: 14px;
    line-height: 1.5;
      color: #666;

  }

  strong {
    font-weight: bold;
          color: #666;

  }
`;
