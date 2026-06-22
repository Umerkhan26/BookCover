import fictionBg from "../assets/PageBannersMobile/Backgrounds/LUME ART WEB PAGE FICTION COVER 1 BG PNG.png";
import fictionVisual from "../assets/PageBannersMobile/images/LUME ART WEB PAGE FICTION COVER 1 VISUAL PNG.png";
import illustratedBg from "../assets/PageBannersMobile/Backgrounds/LUME ART WEB PAGE ILLUSTRATED COVER 2 BG PNG.png";
import illustratedVisual from "../assets/PageBannersMobile/images/LUME ART WEB PAGE ILLUSTRATED COVER 2 VISUAL PNG.png";
import nonFictionBg from "../assets/PageBannersMobile/Backgrounds/LUME ART WEB PAGE NON FICTION 5 BG PNG.png";
import nonFictionVisual from "../assets/PageBannersMobile/images/LUME ART WEB PAGE NON FICTION 5 VISUAL PNG.png";
import redesignBg from "../assets/PageBannersMobile/Backgrounds/LUME ART BOOK COVER RE DESIGN 3 BG PNG.png";
import redesignVisual from "../assets/PageBannersMobile/images/LUME ART BOOK COVER RE DESIGN 3 VISUAL PNG.png";
import audiobookBg from "../assets/PageBannersMobile/Backgrounds/LUME ART WEB PAGE ADUIO BOOKS 6 BG PNG.png";
import audiobookVisual from "../assets/PageBannersMobile/images/LUME ART WEB PAGE ADUIO BOOKS 6 VISUAL PNG.png";
import logoBrandingBg from "../assets/PageBannersMobile/Backgrounds/LUME ART LOGO BRANDING 4 BG PNG.png";
import logoBrandingVisual from "../assets/PageBannersMobile/images/LUME ART LOGO BRANDING 4 VISUAL PNG.png";

export const serviceMobileBanners = {
  fiction: {
    background: fictionBg,
    visual: fictionVisual,
  },
  illustrated: {
    background: illustratedBg,
    visual: illustratedVisual,
  },
  nonFiction: {
    background: nonFictionBg,
    visual: nonFictionVisual,
  },
  redesign: {
    background: redesignBg,
    visual: redesignVisual,
  },
  audiobook: {
    background: audiobookBg,
    visual: audiobookVisual,
  },
  logoBranding: {
    background: logoBrandingBg,
    visual: logoBrandingVisual,
  },
} as const;

export type ServiceMobileBannerKey = keyof typeof serviceMobileBanners;
