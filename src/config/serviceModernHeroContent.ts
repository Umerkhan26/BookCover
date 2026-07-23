import heroCoversPng from "../assets/PageBanner/Services Banner Pngs/png.png";
import heroIllustratedPng from "../assets/PageBanner/Services Banner Pngs/Untitled-1 (2).png";

type ServiceModernHeroContentItem = {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  visualPlaceholder: string;
  visualImage?: string;
};

export const serviceModernHeroContent: Record<
  string,
  ServiceModernHeroContentItem
> & {
  fiction: ServiceModernHeroContentItem;
  audiobook: ServiceModernHeroContentItem;
  redesign: ServiceModernHeroContentItem;
  illustrated: ServiceModernHeroContentItem;
  logoBranding: ServiceModernHeroContentItem;
  nonFiction: ServiceModernHeroContentItem;
} = {
  fiction: {
    badge: "Premium Book Cover Design Studio",
    titlePrefix: "Professional ",
    titleHighlight: "Fiction Book Cover Design",
    titleSuffix: " That Makes Your Story Stand Out",
    description:
      "Lumeart Studio creates custom fiction book covers that capture your story, attract your ideal readers, and build a strong visual identity for your book.",
    visualPlaceholder: "Fiction Book Cover Design Samples",
    visualImage: heroCoversPng,
  },
  audiobook: {
    badge: "Premium Audiobook Cover Design Studio",
    titlePrefix: "Professional ",
    titleHighlight: "Audiobook Cover Design",
    titleSuffix: " That Makes Your Story Stand Out",
    description:
      "Lumeart Studio creates custom audiobook covers that capture your story, attract your ideal listeners, and build a strong visual identity across every platform.",
    visualPlaceholder: "Audiobook Cover Design Samples",
    visualImage: heroCoversPng,
  },
  redesign: {
    badge: "Premium Book Cover Redesign Studio",
    titlePrefix: "Professional ",
    titleHighlight: "Book Cover Redesign",
    titleSuffix: " That Gives Your Book A Second Life",
    description:
      "Lumeart Studio refreshes outdated or underperforming book covers with a modern design that better captures your story, attracts your ideal readers, and boosts your book sales.",
    visualPlaceholder: "Book Cover Redesign Before And After Samples",
    visualImage: heroCoversPng,
  },
  illustrated: {
    badge: "Premium Illustrated Cover Design Studio",
    titlePrefix: "Professional ",
    titleHighlight: "Illustrated Cover Design",
    titleSuffix: " That Makes Your Story Stand Out",
    description:
      "Lumeart Studio creates custom illustrated book covers with original hand drawn artwork that captures your story, attracts your ideal readers, and builds a strong visual identity for your book.",
    visualPlaceholder: "Illustrated Book Cover Design Samples",
    visualImage: heroIllustratedPng,
  },
  logoBranding: {
    badge: "Premium Logo & Branding Studio",
    titlePrefix: "Professional ",
    titleHighlight: "Logo & Branding Design",
    titleSuffix: " That Makes Your Business Stand Out",
    description:
      "Lumeart Studio creates custom logos and complete brand identities that capture your vision, connect with your ideal customers, and build a strong, consistent presence across every platform.",
    visualPlaceholder: "Logo And Branding Design Samples",
    visualImage: heroCoversPng,
  },
  nonFiction: {
    badge: "Premium Non-Fiction Book Cover Design Studio",
    titlePrefix: "Professional ",
    titleHighlight: "Non-Fiction Book Cover Design",
    titleSuffix: " That Makes Your Book Stand Out",
    description:
      "Lumeart Studio creates custom non-fiction book covers that capture your message, attract your ideal readers, and build a strong visual identity for your book.",
    visualPlaceholder: "Non-Fiction Book Cover Design Samples",
    visualImage: heroCoversPng,
  },
};

export type ServiceModernHeroKey = keyof typeof serviceModernHeroContent;
