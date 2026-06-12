import { Helmet } from "react-helmet-async";
import FictionsCover from "./FictionCoverPage";

interface FictionCoverProps {
  title: string;
  subtitle: React.ReactNode;
  bookCoversText: string;
  image?: string;
  showCircles?: boolean;
  formatSubtitle?: boolean;
  textAlignTop?: boolean;
  showBannerForm?: boolean;

  benefitsComponent?: JSX.Element;
  designProcessComponent?: JSX.Element;
  packagesComponent?: JSX.Element;
  reviewsComponent?: JSX.Element;
  specialEditionAddOnsComponent?: JSX.Element;
}

const FictionCover = (props: FictionCoverProps) => {
  return (
    <>
      <Helmet>
        <title>Fiction Book Cover Design | Genre-Specific Art</title>
        <meta
          name="description"
          content="Capture readers with professional fiction covers. Specialized design for Fantasy, Sci-Fi, Mystery, and Romance novels to boost Amazon sales."
        />
        <link rel="canonical" href="https://lumeartstudio.com/fiction-cover" />
      </Helmet>
      <FictionsCover {...props} />
    </>
  );
};

export default FictionCover;
