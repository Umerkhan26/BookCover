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
import { useEffect, useState } from "react";
import {
  Shimmer,
  ShimmerImage,
  ShimmerText,
} from "../../components/Shimmer/Shimmer";

const AudioBookCover = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
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
        {/* Banner Shimmer */}
        <div style={{ width: "100%", height: "500px" }}>
          <ShimmerImage
            src={AudioCover}
            alt="Audiobook Cover Banner"
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
        {/* Benefits Shimmer - Matches actual structure */}
        <div
          style={{
            padding: "60px 0",
            backgroundColor: "#f8f8f8",
            fontFamily: "Manrope, sans-serif",
          }}
        >
          <div
            style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <div
                style={{
                  flex: 1,
                  maxWidth: "40%",
                  padding: "54px 8px",
                }}
              >
                <ShimmerText lines={2} width="80%" />
              </div>
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    maxWidth: "50%",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      background: "#fff",
                      padding: "40px 25px",
                      borderRadius: "10px",
                      border: "2px solid #6dc7d1",
                      minHeight: "190px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <Shimmer
                        width="50px"
                        height="50px"
                        rounded
                        style={{ marginRight: "15px" }}
                      />
                      <Shimmer height="20px" width="60%" rounded />
                    </div>
                    <ShimmerText
                      lines={2}
                      width="90%"
                      style={{ marginTop: "10px" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                marginTop: "20px",
              }}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    maxWidth: "50%",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      background: "#fff",
                      padding: "40px 25px",
                      borderRadius: "10px",
                      border: "2px solid #6dc7d1",
                      minHeight: "190px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <Shimmer
                        width="50px"
                        height="50px"
                        rounded
                        style={{ marginRight: "15px" }}
                      />
                      <Shimmer height="20px" width="60%" rounded />
                    </div>
                    <ShimmerText
                      lines={2}
                      width="90%"
                      style={{ marginTop: "10px" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

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
