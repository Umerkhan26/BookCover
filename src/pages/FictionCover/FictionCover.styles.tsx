import styled from "styled-components";

export const Container = styled.div`
  margin-top: 85px;
  width: 100%;
  height: auto;
  @media (max-width: 1024px) {
    /* padding: 40px 15px;
    margin-top: 60px; */
  }

  @media (max-width: 768px) {
    margin-bottom: -40px;
  }
`;

export const SectionFiction = styled.section`
  position: relative;
  border: 2px solid red;
  overflow: hidden;
  padding: 30px 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 310px;
  padding-bottom: 40px;
  background: unset !important;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 30px;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const TextForFiction = styled.div`
  width: 30%;
  height: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  margin-right: 200px;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    width: 40%;
    margin-right: 100px;
  }

  @media (max-width: 1024px) {
    width: 50%;
    margin-right: 0;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

export const FictionCoverImage = styled.div`
  width: 30%;
  height: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  margin-right: 200px;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 1200px) {
    width: 40%;
    margin-right: 100px;
  }

  @media (max-width: 1024px) {
    width: 50%;
    margin-right: 0;
    justify-content: center;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;

export const Wrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 160px;

  @media (max-width: 1200px) {
    width: 50%;
    padding-left: 80px;
  }

  @media (max-width: 1024px) {
    width: 70%;
    padding-left: 40px;
    text-align: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding-left: 20px;
    text-align: center;
  }
`;

export const BannerSection = styled.section`
  position: relative;
  width: 100%;
  margin-top: 85px;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;

export const BannerImage = styled.div<{ $withMobileBanner?: boolean }>`
  position: relative;
  width: 100%;
  height: auto;
  display: block;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    ${({ $withMobileBanner }) =>
      $withMobileBanner &&
      `
      .desktop-banner-img {
        display: none;
      }
    `}
  }
`;

export const DesktopBannerLayer = styled.div<{ $hideOnMobile?: boolean }>`
  @media (max-width: 768px) {
    ${({ $hideOnMobile }) => $hideOnMobile && "display: none;"}
  }
`;

export const BannerMobileInner = styled.div<{ $bgImage?: string }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-image: url(${({ $bgImage }) => $bgImage || "none"});
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    padding: 20px 20px 24px;
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    padding: 16px 16px 20px;
  }
`;

export const BannerMobileTitle = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  text-align: left;
  margin-bottom: 14px;
`;

export const BannerMobileVisual = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 12px;

  img {
    width: min(88%, 340px);
    height: auto;
    display: block;
    margin-left: 0;
    object-fit: contain;
    object-position: left top;
  }
`;

export const BannerMobileForm = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const BannerContent = styled.div<{
  alignCenter?: boolean;
  alignTop?: boolean;
}>`
  position: absolute;
  top: ${({ alignTop }) => (alignTop ? "32px" : "50%")};
  left: ${({ alignCenter }) => (alignCenter ? "50%" : "0")};
  transform: ${({ alignCenter, alignTop }) => {
    if (alignTop) {
      return alignCenter ? "translateX(-50%)" : "none";
    }
    return alignCenter ? "translate(-50%, -50%)" : "translateY(-50%)";
  }};
  padding-left: ${({ alignCenter }) =>
    alignCenter
      ? "0"
      : "40px"}; /* Match header Nav padding on desktop when left-aligned */
  z-index: 2;
  max-width: ${({ alignCenter }) => (alignCenter ? "90%" : "50%")};
  width: ${({ alignCenter }) => (alignCenter ? "auto" : "auto")};
  display: flex;
  flex-direction: column;
  align-items: ${({ alignCenter }) => (alignCenter ? "center" : "flex-start")};
  text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};

  /* On very large screens, match the centered header container (max-width: 1200px) */
  @media (min-width: 1280px) {
    padding-left: ${({ alignCenter }) =>
      alignCenter ? "0" : "max(40px, calc((100% - 1200px) / 2))"};
  }

  @media (max-width: 1024px) {
    top: ${({ alignTop }) => (alignTop ? "24px" : "50%")};
    max-width: ${({ alignCenter }) => (alignCenter ? "100%" : "55%")};
    padding-left: ${({ alignCenter }) =>
      alignCenter ? "0" : "20px"}; /* Match header Nav padding on tablet */
  }

  @media (max-width: 768px) {
    top: ${({ alignTop }) => (alignTop ? "20px" : "50%")};
    max-width: ${({ alignCenter }) => (alignCenter ? "100%" : "50%")};
    padding-left: ${({ alignCenter }) =>
      alignCenter ? "0" : "20px"}; /* Match header Nav padding on mobile */
    text-align: ${({ alignCenter }) => (alignCenter ? "center" : "left")};
  }

  @media (max-width: 480px) {
    top: ${({ alignTop }) => (alignTop ? "16px" : "50%")};
    max-width: ${({ alignCenter }) => (alignCenter ? "100%" : "45%")};
    padding-left: ${({ alignCenter }) =>
      alignCenter
        ? "0"
        : "16px"}; /* Match header Nav padding on small mobile - moved right to align with logo */
  }

  @media (max-width: 390px) {
    padding-left: ${({ alignCenter }) =>
      alignCenter
        ? "0"
        : "16px"}; /* Match header Nav padding on very small mobile */
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 90%;
  }
`;

export const BannerFormWrapper = styled.div`
  position: absolute;
  top: 32px;
  right: 100px;
  z-index: 3;
  width: min(400px, 36%);

  @media (min-width: 1280px) {
    right: max(100px, calc((100% - 1200px) / 2 + 80px));
  }

  @media (max-width: 1024px) {
    top: 24px;
    right: 60px;
    width: min(360px, 44%);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: auto;
    right: auto;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    margin-top: 0;
  }
`;

export const CirclesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    gap: 4px;
    margin-bottom: 8px;
  }
`;

export const TitleLine = styled.span`
  display: block;
  white-space: nowrap;

  @media (max-width: 768px) {
    white-space: normal;
  }
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  background: transparent;

  @media (max-width: 768px) {
    width: 6px;
    height: 6px;
    border-width: 1.5px;
  }

  @media (max-width: 480px) {
    width: 5px;
    height: 5px;
    border-width: 1px;
  }
`;

export const Title = styled.h1<{ singleLine?: boolean }>`
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  color: #ffffff;
  text-align: inherit;
  line-height: 1.2;
  margin: 0;
  margin-bottom: 16px;
  font-family: "Manrope", sans-serif;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  white-space: ${({ singleLine }) => (singleLine ? "nowrap" : "normal")};

  @media (max-width: 768px) {
    white-space: normal;
  }

  @media (max-width: 1200px) {
    font-size: clamp(28px, 4.5vw, 42px);
  }

  @media (max-width: 1024px) {
    font-size: clamp(24px, 4vw, 36px);
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    font-size: clamp(18px, 4vw, 24px);
    margin-bottom: 8px;
    line-height: 1.15;
  }

  @media (max-width: 480px) {
    font-size: clamp(14px, 3.5vw, 20px);
    margin-bottom: 6px;
    line-height: 1.1;
  }
`;

export const MobileBannerTitle = styled.h1<{ singleLine?: boolean }>`
  font-size: clamp(24px, 6.2vw, 32px);
  font-weight: 700;
  color: #ffffff;
  text-align: left;
  line-height: 1.2;
  margin: 0;
  font-family: "Manrope", sans-serif;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  white-space: normal;

  @media (max-width: 480px) {
    font-size: clamp(22px, 5.8vw, 28px);
  }
`;

export const Subtitle = styled.p<{ singleLine?: boolean; expanded?: boolean }>`
  font-size: ${({ expanded }) =>
    expanded ? "clamp(13px, 1.4vw, 16px)" : "clamp(14px, 1.5vw, 18px)"};
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  text-align: inherit;
  margin: 0;
  line-height: ${({ expanded }) => (expanded ? "1.55" : "1.5")};
  font-family: "Manrope", sans-serif;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  white-space: ${({ singleLine }) => (singleLine ? "nowrap" : "normal")};
  overflow: ${({ singleLine }) => (singleLine ? "hidden" : "visible")};
  text-overflow: ${({ singleLine }) => (singleLine ? "ellipsis" : "clip")};
  /* Keep long subtitles (like Contact Us) readable + centered, without overflowing */
  max-width: ${({ expanded }) => (expanded ? "720px" : "1120px")};
  padding: 0 8px;
  overflow-wrap: anywhere;
  text-wrap: balance;

  margin-left: 0;
  margin-right: 0;
  width: ${({ expanded }) => (expanded ? "100%" : "max-content")};
  max-width: ${({ expanded }) => (expanded ? "720px" : "100%")};

  @media (min-width: 1024px) and (max-width: 1279px) {
    ${({ singleLine, expanded }) =>
      singleLine &&
      !expanded &&
      `
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  }

  @media (max-width: 768px) {
    white-space: ${({ singleLine }) => (singleLine ? "nowrap" : "normal")};
    overflow: ${({ singleLine }) => (singleLine ? "hidden" : "visible")};
    text-overflow: ${({ singleLine }) => (singleLine ? "ellipsis" : "clip")};
  }

  @media (max-width: 1024px) {
    font-size: ${({ expanded }) =>
      expanded ? "clamp(12px, 1.6vw, 15px)" : "clamp(13px, 1.8vw, 16px)"};
  }

  @media (max-width: 768px) {
    font-size: ${({ expanded }) =>
      expanded ? "clamp(11px, 2.2vw, 13px)" : "clamp(10px, 1.8vw, 12px)"};
    line-height: 1.4;
    white-space: ${({ singleLine }) => (singleLine ? "nowrap" : "normal")};
  }

  @media (max-width: 480px) {
    font-size: ${({ expanded }) =>
      expanded ? "clamp(10px, 2.4vw, 12px)" : "clamp(8px, 1.5vw, 10px)"};
    line-height: 1.35;
    white-space: ${({ singleLine }) => (singleLine ? "nowrap" : "normal")};
  }
`;

export const BookCoversText = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 200;
  font-size: 57px;
  line-height: 1.2;
  color: #25293f;
  opacity: 0.1;
  text-align: right;
  margin-left: 320px;
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1200px) {
    font-size: 50px;
    margin-left: 250px;
  }

  @media (max-width: 1024px) {
    font-size: 45px;
    margin-left: 150px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
    margin-left: 50px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-left: 20px;
  }
`;

export const BenifitsComponent = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 200;
  font-size: 57px;
  width: 100%;
  /* margin-top: 70px;  */
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 50px;
    margin-left: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 45px;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    font-size: 35px;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;
