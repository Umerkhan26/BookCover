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
import { useEffect, useState } from "react";
import {
  Shimmer,
  ShimmerCard,
  ShimmerImage,
  ShimmerText,
} from "../../components/Shimmer/Shimmer";

const LogoBranding = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
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
        {/* Banner Shimmer */}
        <div style={{ width: "100%", height: "500px" }}>
          <ShimmerImage
            src={logoBrand}
            alt="Logo Branding Banner"
            width={1200}
            height={500}
            loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* Packages Shimmer - Matches actual package card structure */}
        <div
          style={{
            padding: "60px 20px",
            maxWidth: "1200px",
            margin: "0 auto",
            backgroundColor: "#f8f8f8",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <ShimmerText lines={1} width="40%" style={{ margin: "0 auto" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  minHeight: "400px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                  }}
                >
                  <Shimmer height="22px" width="40%" rounded />
                  <Shimmer height="26px" width="30%" rounded />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <ShimmerText lines={5} width="100%" />
                  </div>
                  <div
                    style={{
                      flex: 1,
                      background: "#f5f5f5",
                      padding: "15px",
                      borderRadius: "8px",
                    }}
                  >
                    <Shimmer
                      height="16px"
                      width="60%"
                      rounded
                      style={{ marginBottom: "8px" }}
                    />
                    <ShimmerText lines={4} width="100%" />
                  </div>
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <ShimmerText lines={3} width="100%" />
                </div>
                <Shimmer height="48px" width="100%" rounded />
              </div>
            ))}
          </div>
        </div>
        {/* Examples Shimmer - Matches portfolio grid */}
        <div style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <ShimmerText lines={1} width="50%" style={{ margin: "0 auto" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <ShimmerCard
                key={i}
                height="350px"
                style={{
                  borderRadius: "10px",
                  aspectRatio: "2/3",
                }}
              />
            ))}
          </div>
        </div>
        {/* Steps Shimmer - Matches step cards */}
        <div style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <ShimmerText lines={1} width="40%" style={{ margin: "0 auto" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "30px",
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  minHeight: "200px",
                }}
              >
                <Shimmer height="24px" width="60%" rounded style={{ marginBottom: "16px" }} />
                <ShimmerText lines={3} width="100%" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
