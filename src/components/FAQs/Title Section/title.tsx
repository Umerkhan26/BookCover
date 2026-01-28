import bannerImg from "../../../assets/PageBanner/6.webp";
import FictionsCover from "../../../pages/FictionCover/FictionCoverPage";

const FAQTitle = () => {
  return (
    <FictionsCover
      title="Frequently Asked Questions"
      subtitle="EXPLORE OUR FAQS TO LEARN MORE ABOUT HOW WE BRING YOUR IDEAS TO LIFE"
      image={bannerImg}
      bookCoversText=""
      showCircles={false}
      formatSubtitle={false}
    />
  );
};

export default FAQTitle;
