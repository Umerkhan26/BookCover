import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  background: #f3f4f6;
  padding: 24px 0 48px;
  font-family: "Manrope", sans-serif;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 20px 0 40px;
  }

  @media (max-width: 768px) {
    padding: 14px 0 36px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    max-width: 1400px;
  }
`;

export const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
  padding-bottom: 16px;
  box-sizing: border-box;
  margin-top: 0;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: clamp(22px, 5vw, 40px);
  font-weight: 700;
  color: #000000;
  margin: 0 0 4px;
  line-height: 1.3;
  padding: 0;

  span {
    color: #6dc7d1;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const ReviewButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #ffffff;
  background: #6dc7d1;
  border: 2px solid #6dc7d1;
  border-radius: 5px;
  text-decoration: none;
  font-family: "Manrope", sans-serif;
  transition: all 0.3s ease;

  &:hover {
    background: #5ab8c2;
    border-color: #5ab8c2;
  }
`;

export const CarouselOuter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NavButton = styled.button`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border: none;
  background: transparent;
  color: #cccccc;
  font-size: 1.75rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: color 0.2s ease;

  &:hover {
    color: #999999;
  }

  @media (max-width: 640px) {
    width: 28px;
    font-size: 1.5rem;
  }
`;

export const CarouselViewport = styled.div`
  flex: 1;
  overflow: hidden;
  min-width: 0;
`;

export const CarouselTrack = styled.div<{
  $offset: number;
  $cardWidth: number;
  $gap: number;
}>`
  display: flex;
  gap: ${({ $gap }) => `${$gap}px`};
  transition: transform 0.35s ease;
  transform: translateX(
    ${({ $offset, $cardWidth, $gap }) =>
      `-${$offset * ($cardWidth + $gap)}px`}
  );
`;

export const ReviewCard = styled.article<{ $cardWidth: number }>`
  flex: 0 0 ${({ $cardWidth }) => `${$cardWidth}px`};
  width: ${({ $cardWidth }) => `${$cardWidth}px`};
  max-width: ${({ $cardWidth }) => `${$cardWidth}px`};
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 18px 16px 14px;
  min-height: 210px;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ReviewerName = styled.h3`
  font-size: 0.95rem;
  font-weight: 700;
  color: #111111;
  margin: 0;
  line-height: 1.3;
`;

export const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: #f5b301;
  font-size: 0.85rem;
  margin-bottom: 10px;
`;

export const ReviewText = styled.p`
  font-size: 0.88rem;
  line-height: 1.55;
  color: #444444;
  margin: 0 0 auto;
  flex: 1;

  a {
    color: #6dc7d1;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CardFooter = styled.div`
  margin-top: 14px;
  font-size: 0.78rem;
  color: #999999;
`;
