import React from "react";
import bannerImg from "../../assets/PageBanner/6.webp";
import FictionsCover from "../../pages/FictionCover/FictionCoverPage";

const CoverPortfolio: React.FC = () => {
  return (
    <FictionsCover
      title="Custom Book Cover Design Portfolio"
      subtitle="CHECK OUT OUR EXAMPLES OF BOOK COVERS FOR DIFFERENT GENRES."
      image={bannerImg}
      bookCoversText=""
      showCircles={false}
      formatSubtitle={false}
    />
  );
};

export default CoverPortfolio;
