import Carousel from "../../pages/Carousal/carousal";
import BookCoverDesigns from "../../pages/GetACover/BookCovers";
import PartnerCover from "../../pages/Partner/partnerCover";
import Reviews from "../../pages/reviews/reviews";
import SpecialEditionAddOns from "../../pages/SpecialEditionAddOns/SpecialEditionAddOns";

const GetACover = () => {
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
      />

      <BookCoverDesigns />
      <SpecialEditionAddOns />
      <Carousel />
      <Reviews />
    </div>
  );
};

export default GetACover;
