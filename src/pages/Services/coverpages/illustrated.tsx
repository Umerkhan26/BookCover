import IllusratedDesignProcess from "./illustratedDesignProcess";
import { Helmet } from "react-helmet-async";
import FictionsCover from "../../FictionCover/FictionCoverPage";
import BenefitsSection from "../../Benefits/benefits";
import { benefitsData } from "../../../services/benefits";
import Reviews from "../../reviews/reviews";
import Packages from "../../ourPackages/packages";

const Illustrated = () => {
  return (
    <div className="text-black ">
      <Helmet>
        <title>Custom Illustrated Book Covers | Bespoke Digital Art</title>
        <meta
          name="description"
          content="Stand out with unique, hand-drawn digital illustrations. 100% custom artwork tailored to your characters, world-building, and story arc."
        />
        <link rel="canonical" href="https://lumeartstudio.com/illustrated" />
      </Helmet>
      <FictionsCover
        title="Illustrated Book Cover Design From Scratch"
        subtitle=""
        bookCoversText=""
        layoutVariant="modern"
        modernHeroKey="illustrated"
        benefitsComponent={
          <BenefitsSection
            title={
              <>
                Here's What Benefits <span>You Get</span>
              </>
            }
            benefits={benefitsData}
          />
        }
        reviewsComponent={<Reviews />}
        packagesComponent={<Packages />}
      />
      <IllusratedDesignProcess />
    </div>
  );
};

export default Illustrated;
