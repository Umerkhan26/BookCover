import Carousel from "../../pages/Carousal/carousal";
import BookCoverDesigns from "../../pages/GetACover/BookCovers";
import Reviews from "../../pages/reviews/reviews";
import SpecialEditionAddOns from "../../pages/SpecialEditionAddOns/SpecialEditionAddOns";
import bannerImg from "../../assets/PageBanner/6.webp";
import FictionsCover from "../../pages/FictionCover/FictionCoverPage";

const GetCover = () => {
  return (
    <div>
      <FictionsCover
        title="Welcome to Lume Art Studio"
        subtitle="A place full of free learning materials for indie authors"
        image={bannerImg}
        bookCoversText=""
        showCircles={false}
        formatSubtitle={false}
      />

      <BookCoverDesigns />
      <SpecialEditionAddOns />
      <Carousel />
      <Reviews />
    </div>
  );
};

export default GetCover;
