import FictionCover from "../FictionCover/FictionCover";
import logoBrand from "../../assets/PageBanners/LogosLUMEARTWEBPAGEFICTIONCOVER-04.webp";
import Packages from "../ourPackages/packages";
// import { myPackagesData } from "../ourPackages/packagesData"
import RedesignExamples from "../BookCoverRedesign/RedesignExamples";
import { examples } from "../BookCoverRedesign/RedesignExampleData";
import DesignLogoBrandingSteps from "./DesignLogoBrandingSteps";
import LogoBrandingFeatures from "./LogoBrandingFeatures";
import LogoAuthorBranding from "./LogoAuthorBranding";
import UseOfLogoBranding from "./UseOfLogoBranding";
import LogoBrandingQA from "./LogoBrandingQA";
import Reviews from "../reviews/reviews";
import RedesignForm from "../BookCoverRedesign/RedesignForm";
import { Helmet } from "react-helmet-async";

const LogoBranding = () => {
  return (
    <div>
      <Helmet>
        <title>Author Branding & Logo Design | Visual Identity</title>
        <meta
          name="description"
          content="Build a recognizable author brand. Custom logo design and visual identity kits tailored for writers, novelists, and creative entrepreneurs."
        />
        <link rel="canonical" href="https://lumeartstudio.com/logo-branding" />
      </Helmet>
      <FictionCover
        title="Custom Logo Design and Branding"
        subtitle="Build and maintain a consistent author brand"
        image={logoBrand}
        bookCoversText=""
        // packagesComponent={<Packages />}
        // reviewsComponent={<Reviews />}
      />
      <Packages />
      <RedesignExamples
        heading="Custom Logo Design and Branding"
        examples={examples}
      />
      <DesignLogoBrandingSteps />
      <LogoBrandingFeatures />
      <LogoAuthorBranding />
      <UseOfLogoBranding />
      <LogoBrandingQA />
      <Reviews />
      <RedesignForm
        heading={`Order My Custom <span className='text-[#6dc7d1]'>Logo and Branding Design</span>`}
        subHeading="Let's get your cover designed in a few steps"
        buttonText="Order Design"
      />
    </div>
  );
};

export default LogoBranding;
