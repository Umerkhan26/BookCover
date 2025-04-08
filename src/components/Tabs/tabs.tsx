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
        {/* <StyledTab
          active={location.pathname === "/portfolio/formatting-layout"}
          onClick={() => navigate("/portfolio/formatting-layout")}
        >
          Formatting and Layout
        </StyledTab> */}
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

type Active = {
  active: boolean;
};

const TabContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // Center the tabs
  width: 100%; // Ensure it spans the full width
  max-width: 1200px; // Match the max-width of the banner
  margin: 0 auto; // Center the container
  padding: 36px 0px; // Add padding for spacing
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 35px;
    right: 35px;
    height: 1px;
    background-color: #ddd;
  }

  @media (max-width: 768px) {
    justify-content: space-between; // Adjust for smaller screens
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 15px;
    padding-bottom: 5px;
  }
`;

const StyledTab = styled.button<Active>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ active }) => (active ? "#6dc7d1" : "grey")};
  background: none;
  display: flex;
  border: none;
  padding: 12px 20px;
  margin: 0 10px;
  cursor: pointer;
  text-align: center; // Center the text

  &:hover {
    color: #6dc7d1;
  }

  /* Reduce font size and gap on smaller screens */
  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0 5px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin: 0 3px;
  }
`;

export default Tabs;
