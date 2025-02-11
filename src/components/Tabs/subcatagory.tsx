import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const SubCategoryTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <Container>
      <SubCategoryContainer>
        {subcategories.map(({ name, path }) => (
          <SubCategory
            key={path}
            active={location.pathname.includes(path)}
            onClick={() => navigate(`/portfolio/custom-book-covers/${path}`)}
          >
            {name}
          </SubCategory>
        ))}
      </SubCategoryContainer>

      {/* Outlet ensures content changes without a full-page reload */}
      <ContentContainer>{/* <Outlet /> */}</ContentContainer>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding: 20px;
`;

const SubCategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 20px;
  padding-left: 10px;

  & :hover {
    color: #6dc7d1;
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
`;

type Active = {
  active: boolean;
};

const SubCategory = styled.button<Active>`
  padding: 8px 12px;
  //   background-color: ${({ active }) => (active ? "#ff9800" : "#eee")};
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
`;

const ContentContainer = styled.div`
  margin-top: 20px;
`;

export default SubCategoryTabs;
