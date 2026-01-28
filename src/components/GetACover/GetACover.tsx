import { Helmet } from "react-helmet-async";
import Carousel from "../../pages/Carousal/carousal";
import BookCoverDesigns from "../../pages/GetACover/BookCovers";
import Reviews from "../../pages/reviews/reviews";
import SpecialEditionAddOns from "../../pages/SpecialEditionAddOns/SpecialEditionAddOns";
import bannerImg from "../../assets/PageBanner/6.webp";
import FictionsCover from "../../pages/FictionCover/FictionCoverPage";

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

export default GetACover;
