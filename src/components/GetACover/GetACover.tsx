import { Helmet } from "react-helmet-async";
import Carousel from "../../pages/Carousal/carousal";
import BookCoverDesigns from "../../pages/GetACover/BookCovers";
import PartnerCover from "../../pages/Partner/partnerCover";
import Reviews from "../../pages/reviews/reviews";
import SpecialEditionAddOns from "../../pages/SpecialEditionAddOns/SpecialEditionAddOns";
import bannerImg from "../../assets/PageBanners/LUMEARTPORTFOLIOWEBCOVERS-03.webp";

const GetACover = () => {
  return (
    <div>
      <Helmet>
        <title>Order Custom Book Cover Design | Start Your Project</title>
        <meta
          name="description"
          content="Kickstart your self-publishing journey. Submit your creative brief to receive a market-ready book cover with a 100% satisfaction guarantee."
        />

        <link rel="canonical" href="https://lumeartstudio.com/get-a-cover" />
      </Helmet>
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

export default GetACover;
