import React from "react";
import { Helmet } from "react-helmet-async";
import FictionCover from "../FictionCover/FictionCover";
import BenefitsSection from "../Benefits/benefits";
import { benefitsData } from "../../services/benefits";
import DesignProcess from "../DesignProcess/designProcess";
import Reviews from "../reviews/reviews";
import Packages from "../ourPackages/packages";
import SpecialEditionAddOns from "../SpecialEditionAddOns/SpecialEditionAddOns";
import LogoAuthorBranding from "./LogoAuthorBranding";
import LogoBrandingFeatures from "./LogoBrandingFeatures";
import UseOfLogoBranding from "./UseOfLogoBranding";
import DesignLogoBrandingSteps from "./DesignLogoBrandingSteps";
import LogoBrandingQA from "./LogoBrandingQA";

const LogoBranding: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Logo & Branding Design | Author Branding Services</title>
        <meta
          name="description"
          content="Professional logo and branding design for authors. Create a memorable brand identity that stands out across all platforms."
        />
        <link rel="canonical" href="https://lumeartstudio.com/logo-branding" />
      </Helmet>
      <FictionCover
        title="Custom Logo Design and Branding"
        subtitle=""
        bookCoversText=""
        showCircles={false}
        formatSubtitle={false}
        layoutVariant="modern"
        modernHeroKey="logoBranding"
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
      <LogoBrandingFeatures />
      <LogoAuthorBranding />
      <UseOfLogoBranding />
      <DesignLogoBrandingSteps />
      <LogoBrandingQA />
    </>
  );
};

export default LogoBranding;
