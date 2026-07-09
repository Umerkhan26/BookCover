export type BenefitIconKey =
  | "revisions"
  | "genre"
  | "print"
  | "illustration"
  | "turnaround"
  | "direct";

export type BenefitItem = {
  icon: BenefitIconKey;
  title: string;
  subtitle: string;
};

export const fictionBenefitsData: BenefitItem[] = [
  {
    icon: "revisions",
    title: "Unlimited Revisions",
    subtitle:
      "We refine every layout, font, and color until the cover matches the story you set out to tell.",
  },
  {
    icon: "genre",
    title: "Genre-Perfect Design",
    subtitle:
      "Your cover follows the visual language readers expect in your genre — moody thriller or sweeping fantasy epic.",
  },
  {
    icon: "print",
    title: "Print & eBook Ready",
    subtitle:
      "Every file is formatted for KDP, IngramSpark, and every major retailer — print and digital alike.",
  },
  {
    icon: "illustration",
    title: "Original Illustration & Type",
    subtitle:
      "No stock templates. Custom artwork and hand-set typography built around your story.",
  },
  {
    icon: "turnaround",
    title: "Fast Turnaround",
    subtitle:
      "A finished cover in your hands within days, not months, without cutting corners.",
  },
  {
    icon: "direct",
    title: "Direct With Your Designer",
    subtitle:
      "Talk straight to the person designing your cover — no account managers in between.",
  },
];

/** @deprecated Use fictionBenefitsData or page-specific benefits — kept for existing pages */
export const benefitsData: BenefitItem[] = fictionBenefitsData;
