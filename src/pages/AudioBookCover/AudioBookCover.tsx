import FictionCover from "../FictionCover/FictionCover";
import AudioCover from "../../assets/PageBanners/audiobookLUMEARTWEBPAGEFICTIONCOVER-06.webp";
import BenefitsSection from "../Benefits/benefits";
import { benefitsData } from "../../services/benefits";
import DesignProcess from "../HowWeDesign/design";
import RedesignForm from "../BookCoverRedesign/RedesignForm";
import Reviews from "../reviews/reviews";
// import AudioBookCoverAnimationSection from "./AudioBookCoverAnimationSection";
import Packages from "../ourPackages/packages";
import { Helmet } from "react-helmet-async";

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
      <FictionCover
        title="Custom Audiobook Cover Design"
        subtitle="Pay only when you're satisfied with the final result"
        image={AudioCover}
        bookCoversText=""
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
