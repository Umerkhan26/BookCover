import React from "react";
import { Helmet } from "react-helmet-async";
import FictionCover from "../FictionCover/FictionCover";
import nonFictionImg from "../../assets/PageBanners/indieLUMEARTWEBPAGEFICTIONCOVER-01.webp";
import BenefitsSection from "../Benefits/benefits";
import { benefitsData } from "../../services/benefits";
import DesignProcess from "../DesignProcess/designProcess";
import Reviews from "../reviews/reviews";
import Packages from "../ourPackages/packages";
import SpecialEditionAddOns from "../SpecialEditionAddOns/SpecialEditionAddOns";

const NonFictonalCover: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Non-Fiction Book Cover Design | Professional Non-Fiction Covers</title>
        <meta
          name="description"
          content="Professional non-fiction book cover design services. Create compelling covers for memoirs, self-help, business, and educational books."
        />
        <link rel="canonical" href="https://lumeartstudio.com/non-fiction-cover" />
      </Helmet>
      <FictionCover
        title="Non-Fiction Book Cover Design"
        subtitle="Professional covers for non-fiction books"
        image={nonFictionImg}
        bookCoversText=""
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
