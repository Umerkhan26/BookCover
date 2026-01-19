import FictionCover from "../FictionCover/FictionCover";
import NonFictional from "../../assets/PageBanners/non-ficLUMEARTWEBPAGEFICTIONCOVER-05.webp";
import BenefitsSection from "../Benefits/benefits";
import { benefitsData } from "../../services/benefits";
import Packages from "../ourPackages/packages";
// import { myPackagesData } from "../ourPackages/packagesData"
import SpecialEditionAddOns from "../SpecialEditionAddOns/SpecialEditionAddOns";
import DesignProcess from "../HowWeDesign/design";
import Carousel from "../Carousal/carousal";
import RedesignForm from "../BookCoverRedesign/RedesignForm";
import Reviews from "../reviews/reviews";
import { Helmet } from "react-helmet-async";
const NonFictonalCover = () => {
  return (
    <div>
      <Helmet>
        <title>Non-Fiction Book Cover Design | Authority & Impact</title>
        <meta
          name="description"
          content="Establish credibility with professional non-fiction design. Expert layouts for memoirs, business books, self-help, and academic titles."
        />

        <link
          rel="canonical"
          href="https://lumeartstudio.com/non-fiction-cover"
        />
      </Helmet>
      <FictionCover
        title="Non-Fiction Ebook and Print Cover Design"
        subtitle="Pay only when you're satisfied with the final result"
        image={NonFictional}
        bookCoversText=""
      />
      <BenefitsSection
        title={
          <>
            Here’s What Benefits <span>You Get</span>
          </>
        }
        benefits={benefitsData}
      />

      <Packages />

      <SpecialEditionAddOns />
      <DesignProcess />
      <Carousel />
      <RedesignForm
        heading={`Don’t Have an Idea for Your Cover?`}
        subHeading="We’ll help you come up with ideas that work
"
        buttonText="Get a Cover For Free"
      />
      <Reviews />
    </div>
  );
};

export default NonFictonalCover;
