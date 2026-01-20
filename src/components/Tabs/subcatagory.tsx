import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Shimmer } from "../Shimmer/Shimmer";

const SubCategoryTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 700);
    return () => clearTimeout(timer);
  }, []);

  const subcategories = [
    { name: "Fantasy", path: "fantasy" },
    { name: "Romance", path: "romance" },
    { name: "Urban Fantasy", path: "urban-fantasy" },
    { name: "Young Adult", path: "young-adult" },
    { name: "Cozy Mystery", path: "cozy-mystery" },
    { name: "Paranormal", path: "paranormal" },
    { name: "Mystery, Thriller & Suspense", path: "mystery-thriller-suspense" },
    { name: "Horror", path: "horror" },
    { name: "Sci-fi", path: "sci-fi" },
    { name: "Non-fiction", path: "non-fiction" },
    { name: "Fiction", path: "fiction" },
  ];

  if (!isLoaded) {
    return (
      <Container>
        <SubCategoryContainer>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "10px",
            }}
          >
            {Array.from({ length: 11 }).map((_, i) => (
              <Shimmer key={i} height="30px" width="100%" rounded />
            ))}
          </div>
          <div
            style={{ height: "2px", background: "#ddd", marginTop: "10px" }}
          />
        </SubCategoryContainer>
      </Container>
    );
  }

  return (
    <Container>
      <SubCategoryContainer>
        {subcategories.map(({ name, path }) => (
          <SubCategory
            key={path}
            active={location.pathname.endsWith(path)}
            onClick={() => navigate(`/portfolio/${path}`)}
          >
            {name}
          </SubCategory>
        ))}
      </SubCategoryContainer>
    </Container>
  );
};

type Active = {
  active: boolean;
};

// Styled Components
const Container = styled.div`
  width: 100%; // Ensure it spans the full width
  padding: 20px 0; // Adjust padding to match the banner
  max-width: 1200px; // Match the max-width of the banner
  margin: 0 auto; // Center the container

  @media (max-width: 768px) {
    padding: 11px 0; // Adjusted padding for smaller screens
  }
`;

const SubCategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 20px;
  // padding-left: 10px;
  width: 100%; // Ensure it spans the full width

  & :hover {
    color: #c4c4c4;
  }

  /* Bottom line with padding */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 12px;
    right: 32px;
    height: 2px;
    background-color: #ddd;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
`;

const SubCategory = styled.button<Active>`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
  text-align: center; // Center the text

  &:hover {
    color: #c4c4c4;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export default SubCategoryTabs;
