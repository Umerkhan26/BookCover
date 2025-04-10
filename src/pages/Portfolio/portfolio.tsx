import { Outlet, useLocation } from "react-router-dom";
import CoverPortfolio from "../../components/BookCoverDesign/bookcover";
import styled from "styled-components";
import Tabs from "../../components/Tabs/tabs";
import SubCategoryTabs from "../../components/Tabs/subcatagory";
import { Helmet } from "react-helmet-async";

const PortfolioWrapperWithTabs = () => {
  const location = useLocation();

  // Check if the current path is "/portfolio" or any subcategory under it
  const isCustomBookCovers =
    location.pathname === "/portfolio" ||
    location.pathname.startsWith("/portfolio/custom-book-covers") ||
    location.pathname.startsWith("/portfolio/fantasy") ||
    location.pathname.startsWith("/portfolio/romance") ||
    location.pathname.startsWith("/portfolio/urban-fantasy") ||
    location.pathname.startsWith("/portfolio/young-adult") ||
    location.pathname.startsWith("/portfolio/cozy-mystery") ||
    location.pathname.startsWith("/portfolio/paranormal") ||
    location.pathname.startsWith("/portfolio/mystery-thriller-suspense") ||
    location.pathname.startsWith("/portfolio/horror") ||
    location.pathname.startsWith("/portfolio/sci-fi") ||
    location.pathname.startsWith("/portfolio/non-fiction") ||
    location.pathname.startsWith("/portfolio/fiction");

  return (
    <>
      {" "}
      <Helmet>
        <title> Portfolio</title>
        <meta
          name="description"
          content="Explore our diverse collection of book cover designs."
        />
      </Helmet>
      <PortfolioWrapper>
        <CoverPortfolio />
        <Tabs />
        {isCustomBookCovers && <SubCategoryTabs />}{" "}
        {/* Show only for Custom Covers */}
        <Outlet />
      </PortfolioWrapper>
    </>
  );
};

// Styled Components
const PortfolioWrapper = styled.div`
  background-color: #f9f9f9;
`;

export default PortfolioWrapperWithTabs;
