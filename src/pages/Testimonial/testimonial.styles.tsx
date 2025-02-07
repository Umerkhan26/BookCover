import styled from "styled-components";

export const SectionTestimonials = styled.section`
  background-color: #f9f9f9;
`;

export const WrapTestimonials = styled.div`
  background: #d5e7fc;
  padding-top: 114px;
  padding-bottom: 204px;
  position: relative;
`;

export const SvgContainer = styled.div`
  position: absolute;
  z-index: 1;
`;

export const SvgLeftTop = styled(SvgContainer)`
  top: 0;
  left: 0;
`;

export const SvgLeftBottom = styled(SvgContainer)`
  bottom: 0;
  left: 0;
`;

export const SvgRightTop = styled(SvgContainer)`
  top: 0;
  right: 0;
`;

export const SvgRightBottom = styled(SvgContainer)`
  bottom: 0;
  right: 0;
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
`;

export const MainScreen = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #25293f;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #25293f;
`;

export const ListTestimonials = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

export const ColTestimonials = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  text-align: center;
  margin-top: -165px;
`;

export const TestimonialImage = styled.img`
  width: 100%;
  height: auto;
`;

export const BoxDescription = styled.div`
  padding: 1rem;
`;

export const TestimonialTitle = styled.h3`
  font-size: 1.6rem;
  padding-top: 0px;
  margin-top: -30px;
  color: #25293f;
  margin-bottom: 0.5rem;
`;

export const TestimonialDescription = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
`;

export const SocialNetwork = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const IconSocNet = styled.a`
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  height: 32px;
  width: 32px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  svg {
    height: 20px;
    width: 20px;
    fill: ${(props) => props.color || "#5476be"};
    transition: fill 0.3s ease;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically if needed */
  margin-top: 2rem;
`;

export const ButtonGreen = styled.a`
  display: inline-block;
  padding: 12px 50px;
  background-color: #6dc7d1;
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 120px;
  text-decoration: none;
  margin-top: 2rem;
  &:hover {
    background-color: #4fa3a2;
  }
`;

export const YoutubeIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -180px;

  svg path.ytp-large-play-button-bg {
    fill: gray;
    transition: fill 0.3s ease;
  }

  &:hover svg path.ytp-large-play-button-bg {
    fill: red; /* Change color on hover */
  }
`;
