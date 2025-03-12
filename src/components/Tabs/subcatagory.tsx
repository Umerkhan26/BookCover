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
`;

const SubCategory = styled.button<Active>`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  color: #000000;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  & :hover {
    color: #c4c4c4;
  }
`;

export default SubCategoryTabs;
