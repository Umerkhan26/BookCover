import React from "react";
import { Helmet } from "react-helmet-async";
import BenefitsSection from "../Benefits/benefits";
import { benefitsData } from "../../services/benefits";
import DesignProcess from "../DesignProcess/designProcess";
import Reviews from "../reviews/reviews";
import Packages from "../ourPackages/packages";
import SpecialEditionAddOns from "../SpecialEditionAddOns/SpecialEditionAddOns";
import FictionsCover from "../FictionCover/FictionCoverPage";

const NonFictonalCover: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          Non-Fiction Book Cover Design | Professional Non-Fiction Covers
        </title>
        <meta
          name="description"
          content="Professional non-fiction book cover design services. Create compelling covers for memoirs, self-help, business, and educational books."
        />
        <link
          rel="canonical"
          href="https://lumeartstudio.com/non-fiction-cover"
        />
      </Helmet>
      <FictionsCover
        title="Non-Fiction Book Cover Design"
        subtitle=""
        bookCoversText=""
        layoutVariant="modern"
        modernHeroKey="nonFiction"
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
        designProcessComponent={<DesignProcess />}
        packagesComponent={<Packages />}
        reviewsComponent={<Reviews />}
        specialEditionAddOnsComponent={<SpecialEditionAddOns />}
      />
    </>
  );
};

export default NonFictonalCover;
