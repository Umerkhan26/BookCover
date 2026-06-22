import {
  BannerSection,
  BannerImage,
  BannerContent,
  BannerFormWrapper,
  BannerMobileForm,
  BannerMobileInner,
  BannerMobileTitle,
  BannerMobileVisual,
  DesktopBannerLayer,
  MobileBannerTitle,
  Title,
  TitleLine,
  Subtitle,
  BenifitsComponent,
  CirclesContainer,
  Circle,
} from "./FictionCover.styles";
import ServiceBannerForm from "../../components/ServiceBannerForm/ServiceBannerForm";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import {
  serviceMobileBanners,
  ServiceMobileBannerKey,
} from "../../config/serviceMobileBanners";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FictionCoverProps {
  title: string;
  subtitle: React.ReactNode;
  bookCoversText: string;
  image?: string;
  showCircles?: boolean;
  formatSubtitle?: boolean;
  textAlignTop?: boolean;
  showBannerForm?: boolean;
  mobileBannerKey?: ServiceMobileBannerKey;

  benefitsComponent?: JSX.Element;
  designProcessComponent?: JSX.Element;
  packagesComponent?: JSX.Element;
  reviewsComponent?: JSX.Element;
  specialEditionAddOnsComponent?: JSX.Element;
}

const FictionsCover = ({
  title,
  subtitle,
  image,
  bookCoversText: _bookCoversText,
  showCircles = false,
  formatSubtitle = true,
  textAlignTop = false,
  showBannerForm,
  mobileBannerKey,
  benefitsComponent,
  designProcessComponent,
  packagesComponent,
  reviewsComponent,
  specialEditionAddOnsComponent,
}: FictionCoverProps) => {
  const getTitleParts = () => {
    if (!title) return { firstPart: "", secondPart: "" };

    if (title.includes("Partner With Lume Art Studio")) {
      return {
        firstPart: "Partner With Lume Art Studio",
        secondPart: "",
      };
    }

    if (title.includes("Welcome to Lume Art Studio")) {
      return {
        firstPart: "Welcome to Lume Art Studio",
        secondPart: "",
      };
    }

    if (title.includes("Custom Book Cover Design Portfolio")) {
      return {
        firstPart: "Custom Book",
        secondPart: "Cover Design Portfolio",
      };
    }

    if (title.includes("Terms And Conditions")) {
      return { firstPart: "Terms And Conditions", secondPart: "" };
    }

    if (title.includes("Privacy And Policy")) {
      return { firstPart: "Privacy And Policy", secondPart: "" };
    }

    if (title.includes("Custom Book Cover Design Portfolio")) {
      return {
        firstPart: "Custom Book Cover Design Portfolio",
        secondPart: "",
      };
    }

    if (title.includes("Meet Our Team")) {
      return {
        firstPart: "Meet Our Team",
        secondPart: "",
      };
    }

    if (title.includes("Frequently Asked Questions")) {
      return {
        firstPart: "Frequently Asked Questions",
        secondPart: "",
      };
    }

    if (title.includes("Contact Us")) {
      return {
        firstPart: "Contact Us",
        secondPart: "",
      };
    }

    if (
      title.includes(
        "We Help Authors Make Book Cover Design Their Best Marketing Tool",
      )
    ) {
      return {
        firstPart:
          "We Help Authors Make Book Cover Design Their Best Marketing Tool",
        secondPart: "",
      };
    }

    if (title.includes("Book Cover Redesign")) {
      return {
        firstPart: "Book Cover",
        secondPart: "Redesign",
      };
    }
    if (title.includes("Indie Authors")) {
      const parts = title.split(" Indie Authors");
      return {
        firstPart: parts[0] || "Book Cover Design For",
        secondPart: "Indie Authors",
      };
    }

    if (title.includes("Custom Audiobook Cover Design")) {
      return {
        firstPart: "Custom Audiobook",
        secondPart: "Cover Design",
      };
    }
    if (title.includes("Illustrated Book Cover Design From Scratch")) {
      return {
        firstPart: "Illustrated Book Cover",
        secondPart: "Design From Scratch",
      };
    }

    if (title.includes("Non-Fiction Book Cover Design")) {
      return {
        firstPart: "Non-Fiction Book",
        secondPart: "Cover Design",
      };
    }

    if (title.includes("Custom Logo Design and Branding")) {
      return {
        firstPart: "Custom Logo Design",
        secondPart: "and Branding",
      };
    }

    if (title.includes("Logo & Branding Design")) {
      return {
        firstPart: "Logo & Branding",
        secondPart: "Design",
      };
    }

    const words = title.split(" ");
    if (words.length > 3) {
      const splitIndex = words.length - 1;
      return {
        firstPart: words.slice(0, splitIndex).join(" "),
        secondPart: words.slice(splitIndex).join(" "),
      };
    }

    return { firstPart: title, secondPart: "" };
  };

  const { firstPart, secondPart } = getTitleParts();
  const displayBannerForm = showBannerForm ?? textAlignTop;
  const isMobileViewport = useMediaQuery("(max-width: 768px)");
  const mobileBanner =
    mobileBannerKey != null ? serviceMobileBanners[mobileBannerKey] : null;
  const useMobileBanner = displayBannerForm && mobileBanner != null;
  const showDesktopBanner = !useMobileBanner || !isMobileViewport;
  const showMobileBanner = useMobileBanner && isMobileViewport && mobileBanner;

  const isCenterAligned =
    title.includes("Partner With Lume Art Studio") ||
    title.includes("Welcome to Lume Art Studio") ||
    title.includes("Custom Book Cover Design Portfolio") ||
    title.includes("Meet Our Team") ||
    title.includes("Frequently Asked Questions") ||
    title.includes("Contact Us") ||
    title.includes("Terms And Conditions") ||
    title.includes("Privacy And Policy") ||
    title.includes(
      "We Help Authors Make Book Cover Design Their Best Marketing Tool",
    );

  const isSingleLineTitle =
    (title.includes("Partner With Lume Art Studio") ||
      title.includes("Welcome to Lume Art Studio") ||
      title.includes("Custom Book Cover Design Portfolio") ||
      title.includes("Meet Our Team") ||
      title.includes("Frequently Asked Questions") ||
      title.includes("Contact Us") ||
      title.includes("Terms And Conditions") ||
      title.includes("Privacy And Policy") ||
      title.includes(
        "We Help Authors Make Book Cover Design Their Best Marketing Tool",
      )) &&
    !secondPart;

  const isSingleLineSubtitle =
    title.includes("Custom Book Cover Design Portfolio") ||
    ((title.includes("Partner With Lume Art Studio") ||
      title.includes("Welcome to Lume Art Studio") ||
      title.includes("Meet Our Team") ||
      title.includes("Frequently Asked Questions") ||
      title.includes("Terms And Conditions") ||
      title.includes("Privacy And Policy") ||
      title.includes(
        "We Help Authors Make Book Cover Design Their Best Marketing Tool",
      )) &&
      !secondPart);

  const renderBannerText = (
    TitleComponent: typeof Title | typeof MobileBannerTitle = Title,
  ) => (
    <>
      {showCircles && (
        <CirclesContainer>
          <Circle />
          <Circle />
          <Circle />
        </CirclesContainer>
      )}
      <TitleComponent singleLine={isSingleLineTitle}>
        {textAlignTop && secondPart ? (
          <>
            <TitleLine>{firstPart}</TitleLine>
            <TitleLine>{secondPart}</TitleLine>
          </>
        ) : (
          <>
            {firstPart}
            {secondPart && (
              <>
                <br />
                {secondPart}
              </>
            )}
          </>
        )}
      </TitleComponent>
      {subtitle && (
        <Subtitle singleLine={isSingleLineSubtitle}>
          {typeof subtitle === "string"
            ? formatSubtitle
              ? `>> ${subtitle.toUpperCase()}`
              : subtitle
            : subtitle}
        </Subtitle>
      )}
    </>
  );

  const bannerTextContent = renderBannerText(Title);
  const mobileBannerTextContent = renderBannerText(MobileBannerTitle);

  return (
    <div>
      <BannerSection>
        {image && (
          <BannerImage $withMobileBanner={useMobileBanner}>
            <img
              className="desktop-banner-img"
              src={image}
              alt="Book Cover Banner"
              width={1200}
              height={500}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />

            <DesktopBannerLayer $hideOnMobile={false}>
              {showDesktopBanner && (
                <>
                  <BannerContent
                    alignCenter={isCenterAligned}
                    alignTop={textAlignTop}
                  >
                    {bannerTextContent}
                  </BannerContent>
                  {displayBannerForm && (
                    <BannerFormWrapper>
                      <ServiceBannerForm serviceName={title} />
                    </BannerFormWrapper>
                  )}
                </>
              )}
            </DesktopBannerLayer>

            {showMobileBanner && (
              <BannerMobileInner $bgImage={mobileBanner.background}>
                <BannerMobileTitle>{mobileBannerTextContent}</BannerMobileTitle>
                <BannerMobileVisual>
                  <img src={mobileBanner.visual} alt="" loading="lazy" />
                </BannerMobileVisual>
                <BannerMobileForm>
                  <ServiceBannerForm serviceName={title} />
                </BannerMobileForm>
              </BannerMobileInner>
            )}
          </BannerImage>
        )}
      </BannerSection>

      {displayBannerForm && (
        <ToastContainer position="bottom-right" autoClose={5000} />
      )}

      {benefitsComponent && (
        <BenifitsComponent>{benefitsComponent}</BenifitsComponent>
      )}
      {reviewsComponent}
      {designProcessComponent}
      {packagesComponent}
      {specialEditionAddOnsComponent}
    </div>
  );
};

export default FictionsCover;
