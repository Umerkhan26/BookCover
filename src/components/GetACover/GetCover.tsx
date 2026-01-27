import Carousel from "../../pages/Carousal/carousal";
import BookCoverDesigns from "../../pages/GetACover/BookCovers";
import PartnerCover from "../../pages/Partner/partnerCover";
import Reviews from "../../pages/reviews/reviews";
import SpecialEditionAddOns from "../../pages/SpecialEditionAddOns/SpecialEditionAddOns";
import bannerImg from "../../assets/PageBanners/LUMEARTPORTFOLIOWEBCOVERS-03.webp";

const GetCover = () => {
  return (
    <div>
      <PartnerCover
        bookCoversText=""
        title2=""
        title={
          <>
            We Help Authors Make Book Cover Design <br />
            Their Best Marketing Tool
          </>
        }
        image={bannerImg}
      />

      <BookCoverDesigns />
      <SpecialEditionAddOns />
      <Carousel />
      <Reviews />
    </div>
  );
};

export default GetCover;
