import AudioCover from "../../assets/PageBanner/LUME-ART-WEB-PAGE-FICTION-COVER.webp";
import BenefitsSection from "../Benefits/benefits";
import { benefitsData } from "../../services/benefits";
import DesignProcess from "../HowWeDesign/design";
import RedesignForm from "../BookCoverRedesign/RedesignForm";
import Reviews from "../reviews/reviews";
// import AudioBookCoverAnimationSection from "./AudioBookCoverAnimationSection";
import Packages from "../ourPackages/packages";
import { Helmet } from "react-helmet-async";
import FictionsCover from "../FictionCover/FictionCoverPage";

const AudioBookCover = () => {
  return (
    <div>
      <Helmet>
        <title>Audiobook Cover Art Design | ACX & Audible Ready</title>
        <meta
          name="description"
          content="Optimized square artwork for Audible and ACX. High-impact audiobook covers designed to stand out in digital storefronts and mobile apps."
        />
        <link
          rel="canonical"
          href="https://lumeartstudio.com/audio-book-cover"
        />
      </Helmet>
      <FictionsCover
        title="Custom Audiobook Cover Design"
        subtitle=""
        // subtitle="Pay Only When You're Satisfied With The Final Result"
        image={AudioCover}
        bookCoversText=""
        textAlignTop
        mobileBannerKey="audiobook"
      />

      {/* <AudioBookCoverAnimationSection /> */}
      {<Packages />}
      <DesignProcess />

      <BenefitsSection
        title={
          <>
            We Create Audiobook Covers <span>That Pop</span>
          </>
        }
        benefits={benefitsData}
      />

      <RedesignForm
        heading={`Don't Have an Idea for Your Cover?`}
        subHeading="We'll help you come up with ideas that work
"
        buttonText="Get a Cover For Free"
      />

      <Reviews />
    </div>
  );
};

export default AudioBookCover;
