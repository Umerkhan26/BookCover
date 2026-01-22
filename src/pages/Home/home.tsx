import React, { useEffect, useState } from "react";
import TopBanner from "../Banner/banner";
import BenefitsSection from "../Benefits/benefits";
import { benefitsData } from "../../services/benefits";
import Carousal from "../Carousal/carousal";
import DesignProcess from "../HowWeDesign/design";
import Testimonials from "../Testimonial/testimonial";
import CounterSection from "../CounterSection/counter";
import { counterData } from "../../services/counter";
import FeaturedSection from "../FeaturedSection/featured";
import { featuredItems } from "../../services/featured";
// import AwardsCarousel from "../AwardsCarousel/awardscarousel";
// import { awardsData } from "../../services/awardcarousel";
import ShareIdeasSection from "../IdeaSection/ideaSection";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Shimmer,
  ShimmerCard,
  ShimmerImage,
  ShimmerText,
} from "../../components/Shimmer/Shimmer";

const Home: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    navigate("/book-cover-form"); // Navigate to the form route
  };

  if (!isLoaded) {
    return (
      <>
        <Helmet>
          <title>Professional Book Cover Design Services | Lumeart Studio</title>
          <meta
            name="description"
            content="Elevate your manuscript with Lumeart Studio. Custom book cover design for indie authors, specializing in fiction, non-fiction, and bespoke illustrations."
          />
          <link rel="canonical" href="https://lumeartstudio.com/" />
        </Helmet>
        {/* Banner Shimmer */}
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <ShimmerImage
            src=""
            alt="Banner Shimmer"
            width={1263}
            height={651}
            loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        {/* Benefits Section Shimmer - Matches actual structure */}
        <div
          style={{
            padding: "60px 0",
            backgroundColor: "#f8f8f8",
            fontFamily: "Manrope, sans-serif",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
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
                    <ShimmerText lines={2} width="90%" style={{ marginTop: "10px" }} />
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
                    <ShimmerText lines={2} width="90%" style={{ marginTop: "10px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Carousel Shimmer - Already handled by Carousal component */}
        
        {/* Design Process Shimmer - Matches actual structure */}
        <div
          style={{
            padding: "60px 0px",
            backgroundColor: "#f2f2f2",
            fontFamily: "Manrope, sans-serif",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                flex: 1,
                maxWidth: "40%",
                padding: "0 8px",
              }}
            >
              <ShimmerText lines={2} width="70%" />
              <ShimmerText lines={1} width="80%" style={{ marginTop: "7px" }} />
            </div>
            <div
              style={{
                flex: 1,
                maxWidth: "60%",
                padding: "0 60px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginBottom: "20px",
                      position: "relative",
                    }}
                  >
                    <Shimmer
                      width="33px"
                      height="33px"
                      rounded
                      style={{ marginRight: "40px", position: "absolute", left: "-60px" }}
                    />
                    <div style={{ flex: 1 }}>
                      <Shimmer height="20px" width="80%" rounded style={{ marginBottom: "5px" }} />
                      <ShimmerText lines={2} width="90%" />
                    </div>
                  </div>
                ))}
                <Shimmer
                  height="40px"
                  width="150px"
                  rounded
                  style={{
                    backgroundColor: "#6dc7d1",
                    marginTop: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Professional Book Cover Design Services | Lumeart Studio</title>
        <meta
          name="description"
          content="Elevate your manuscript with Lumeart Studio. Custom book cover design for indie authors, specializing in fiction, non-fiction, and bespoke illustrations."
        />
        <link rel="canonical" href="https://lumeartstudio.com/" />
      </Helmet>
      <TopBanner />
      <BenefitsSection
        title={
          <>
            Self-Publishing Authors Love Working <span>with Us</span>
          </>
        }
        benefits={benefitsData}
      />
      <Carousal />
      <DesignProcess />
      <Testimonials />
      <CounterSection data={counterData} />
      <FeaturedSection title="As featured in" featuredItems={featuredItems} />
      {/* <AwardsCarousel
        title="Our Awards"
        subtitle="Proud to be connected with and recognized by the best in business."
        awards={awardsData}
      /> */}
      <div>
        <ShareIdeasSection
          title="Get a free cover <span>design idea</span>"
          subtitle="We'll help you come up with ideas that work"
          buttonText="Get a free cover design idea"
          onButtonClick={handleButtonClick}
        />
        {/* Conditionally render the form */}
      </div>
    </>
  );
};

export default Home;
