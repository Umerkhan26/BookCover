// import { useNavigate, useLocation } from "react-router-dom";
// import styled from "styled-components";

// const Tabs = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <TabContainer>
//       <StyledTab
//         active={location.pathname === "/portfolio"}
//         onClick={() => navigate("/portfolio")}
//       >
//         Custom Book Covers
//       </StyledTab>
//       <StyledTab
//         active={location.pathname === "/portfolio/premium-covers"}
//         onClick={() => navigate("/portfolio/premium-covers")}
//       >
//         Premium Covers
//       </StyledTab>
//       <StyledTab
//         active={location.pathname === "/portfolio/kindle-vella-covers"}
//         onClick={() => navigate("/portfolio/kindle-vella-covers")}
//       >
//         Kindle Vella Covers
//       </StyledTab>
//       <StyledTab
//         active={location.pathname === "/portfolio/illustrated-covers"}
//         onClick={() => navigate("/portfolio/illustrated-covers")}
//       >
//         Illustrated Covers
//       </StyledTab>
//       <StyledTab
//         active={location.pathname === "/portfolio/formatting-layout"}
//         onClick={() => navigate("/portfolio/formatting-layout")}
//       >
//         Formatting and Layout
//       </StyledTab>
//       <StyledTab
//         active={location.pathname === "/portfolio/logo-design"}
//         onClick={() => navigate("/portfolio/logo-design")}
//       >
//         Logo Design
//       </StyledTab>
//       <StyledTab
//         active={location.pathname === "/portfolio/marketing-materials"}
//         onClick={() => navigate("/portfolio/marketing-materials")}
//       >
//         Marketing Materials
//       </StyledTab>
//     </TabContainer>
//   );
// };

// // Styled Components
// const TabContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin-right: -15px;
//   margin-left: -15px;
//   padding: 0 15px;
//   position: relative;
//   padding-bottom: 10px;
//   margin-top: 36px;

//   &::after {
//     content: "";
//     position: absolute;
//     bottom: 0;
//     left: 35px;
//     right: 35px;
//     height: 1px;
//     background-color: #ddd;
//   }
// `;
// type Active = {
//   active: boolean;
// };
// const StyledTab = styled.button<Active>`
//   font-size: 16px;
//   font-weight: 600;
//   color: ${({ active }) => (active ? "#6dc7d1" : "#333")};
//   background: none;
//   display: flex;
//   flex-wrap: wrap;
//   border: none;
//   padding: 12px 20px;
//   margin: 0 10px;
//   cursor: pointer;
//   border-bottom: 3px solid
//     ${({ active }) => (active ? "#6dc7d1" : "transparent")};
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     color: #6dc7d1;
//     border-bottom: 3px solid #6dc7d1;
//   }
// `;

// export default Tabs;

import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const Tabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isCustomBookCoversActive =
    location.pathname === "/portfolio" ||
    location.pathname.startsWith("/portfolio/custom-book-covers");

  return (
    <>
      <TabContainer>
        <StyledTab
          active={isCustomBookCoversActive}
          onClick={() => navigate("/portfolio")}
        >
          Custom Book Covers
        </StyledTab>
        <StyledTab
          active={location.pathname === "/portfolio/premium-covers"}
          onClick={() => navigate("/portfolio/premium-covers")}
        >
          Premium Covers
        </StyledTab>
        <StyledTab
          active={location.pathname === "/portfolio/kindle-vella-covers"}
          onClick={() => navigate("/portfolio/kindle-vella-covers")}
        >
          Kindle Vella Covers
        </StyledTab>
        <StyledTab
          active={location.pathname === "/portfolio/illustrated-covers"}
          onClick={() => navigate("/portfolio/illustrated-covers")}
        >
          Illustrated Covers
        </StyledTab>
        <StyledTab
          active={location.pathname === "/portfolio/formatting-layout"}
          onClick={() => navigate("/portfolio/formatting-layout")}
        >
          Formatting and Layout
        </StyledTab>
        <StyledTab
          active={location.pathname === "/portfolio/logo-design"}
          onClick={() => navigate("/portfolio/logo-design")}
        >
          Logo Design
        </StyledTab>
        <StyledTab
          active={location.pathname === "/portfolio/marketing-materials"}
          onClick={() => navigate("/portfolio/marketing-materials")}
        >
          Marketing Materials
        </StyledTab>
      </TabContainer>
    </>
  );
};

// Styled Components
const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding: 0 15px;
  position: relative;
  padding-bottom: 10px;
  margin-top: 36px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 35px;
    right: 35px;
    height: 1px;
    background-color: #ddd;
  }
`;

type Active = {
  active: boolean;
};

const StyledTab = styled.button<Active>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ active }) => (active ? "#6dc7d1" : "#333")};
  background: none;
  display: flex;
  flex-wrap: wrap;
  border: none;
  padding: 12px 20px;
  margin: 0 10px;
  cursor: pointer;
  border-bottom: 3px solid
    ${({ active }) => (active ? "#6dc7d1" : "transparent")};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #6dc7d1;
    border-bottom: 3px solid #6dc7d1;
  }
`;

export default Tabs;
