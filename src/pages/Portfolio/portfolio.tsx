// // PortfolioWrapperWithTabs.js
// import { Outlet } from "react-router-dom";
// import CoverPortfolio from "../../components/BookCoverDesign/bookcover";
// import styled from "styled-components";
// import Tabs from "../../components/Tabs/tabs";

// const PortfolioWrapperWithTabs = () => {
//   return (
//     <PortfolioWrapper>
//       <CoverPortfolio />
//       <Tabs />
//       <Outlet /> {/* This will render the nested route content */}
//     </PortfolioWrapper>
//   );
// };

// // Styled Components
// const PortfolioWrapper = styled.div`
//   padding: 40px 20px;
//   background-color: #f9f9f9;
// `;

// export default PortfolioWrapperWithTabs;

import { Outlet, useLocation } from "react-router-dom";
import CoverPortfolio from "../../components/BookCoverDesign/bookcover";
import styled from "styled-components";
import Tabs from "../../components/Tabs/tabs";
import SubCategoryTabs from "../../components/Tabs/subcatagory";

const PortfolioWrapperWithTabs = () => {
  const location = useLocation();

  return (
    <PortfolioWrapper>
      <CoverPortfolio />
      <Tabs />
      {location.pathname.startsWith("/portfolio/custom-book-covers") && (
        <SubCategoryTabs />
      )}

      {location.pathname === "/portfolio" && <Outlet />}
      <Outlet />
    </PortfolioWrapper>
  );
};

// Styled Components
const PortfolioWrapper = styled.div`
  padding: 40px 20px;
  background-color: #f9f9f9;
`;

export default PortfolioWrapperWithTabs;
