import { Outlet, useLocation } from "react-router-dom";
import CoverPortfolio from "../../components/BookCoverDesign/bookcover";
import styled from "styled-components";
import Tabs from "../../components/Tabs/tabs";
import SubCategoryTabs from "../../components/Tabs/subcatagory";
import { Helmet } from "react-helmet-async";

const PortfolioWrapperWithTabs = () => {
  const location = useLocation();

  const seoData: {
    [key: string]: { title: string; description: string; canonical?: string };
  } = {
    "/portfolio": {
      title: "Book Cover Design Portfolio | Award-Winning Gallery",
      description:
        "Browse our gallery of professional book covers across genres like Fantasy, Romance, and Thrillers. See how we transform stories into visual brands.",
    },
    "/portfolio/fantasy": {
      title: "Fantasy Book Covers | Portfolio",
      description:
        "Explore our stunning collection of Fantasy book cover designs.",
    },
    "/portfolio/romance": {
      title: "Romance Book Covers | Portfolio",
      description: "Discover our creative Romance book cover designs.",
    },
    "/portfolio/urban-fantasy": {
      title: "Urban Fantasy Book Covers | Portfolio",
      description: "Browse unique Urban Fantasy book cover designs.",
    },
    "/portfolio/young-adult": {
      title: "Young Adult Book Covers | Portfolio",
      description: "Explore engaging Young Adult book cover designs.",
    },
    "/portfolio/cozy-mystery": {
      title: "Cozy Mystery Book Covers | Portfolio",
      description: "Check out our Cozy Mystery book cover designs.",
    },
    "/portfolio/paranormal": {
      title: "Paranormal Book Covers | Portfolio",
      description: "Discover our Paranormal book cover designs.",
    },
    "/portfolio/mystery-thriller-suspense": {
      title: "Mystery & Thriller Book Covers | Portfolio",
      description:
        "Explore our collection of Mystery, Thriller, and Suspense covers.",
    },
    "/portfolio/horror": {
      title: "Horror Book Covers | Portfolio",
      description: "Browse our chilling Horror book cover designs.",
    },
    "/portfolio/sci-fi": {
      title: "Sci-Fi Book Covers | Portfolio",
      description: "Discover our futuristic Sci-Fi book cover designs.",
    },
    "/portfolio/non-fiction": {
      title: "Non-Fiction Book Covers | Portfolio",
      description: "Explore professional Non-Fiction book cover designs.",
    },
    "/portfolio/fiction": {
      title: "Fiction Book Covers | Portfolio",
      description: "Browse our creative Fiction book cover designs.",
    },
  };
  const currentSEO = seoData[location.pathname] || seoData["/portfolio"];

  const getCanonicalUrl = () => {
    const baseUrl = "https://lumeartstudio.com";

    const path = location.pathname.replace(/\/$/, "");

    if (currentSEO.canonical) {
      return currentSEO.canonical;
    }

    return `${baseUrl}${path}`;
  };

  const canonicalUrl = getCanonicalUrl();

  const customCoverPaths = [
    "/portfolio",
    "/portfolio/fantasy",
    "/portfolio/romance",
    "/portfolio/urban-fantasy",
    "/portfolio/young-adult",
    "/portfolio/cozy-mystery",
    "/portfolio/paranormal",
    "/portfolio/mystery-thriller-suspense",
    "/portfolio/horror",
    "/portfolio/sci-fi",
    "/portfolio/non-fiction",
    "/portfolio/fiction",
  ];

  const isCustomBookCovers = customCoverPaths.includes(location.pathname);

  return (
    <>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <PortfolioWrapper>
        <CoverPortfolio />
        <Tabs />
        {isCustomBookCovers && <SubCategoryTabs />}
        {/* Show only for Custom Covers */}
        <Outlet />
      </PortfolioWrapper>
    </>
  );
};

// Styled Components
const PortfolioWrapper = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

export default PortfolioWrapperWithTabs;
