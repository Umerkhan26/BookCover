import FictionCover from "../../FictionCover/FictionCover";
import illustratedCover from "../../../assets/PageBanners/illustrateLUMEARTWEBPAGEFICTIONCOVER-02.webp";
import IllusratedDesignProcess from "./illustratedDesignProcess";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import {
  Shimmer,
  ShimmerCard,
  ShimmerImage,
  ShimmerText,
} from "../../../components/Shimmer/Shimmer";
// import Reviews from '../../reviews/reviews'
// import Packages from '../../ourPackages/packages'
const Illustrated = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
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
        {/* Banner Shimmer */}
        <div style={{ width: "100%", height: "500px" }}>
          <ShimmerImage
            src={illustratedCover}
            alt="Illustrated Cover Banner"
            width={1200}
            height={500}
            loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
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
      </div>
    );
  }

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
      <FictionCover
        title="Illustrated book cover design from scratch"
        subtitle="Immerse readers into your world"
        image={illustratedCover} // Can be dynamic as well
        bookCoversText=""
        // packagesComponent={<Packages />}
        // reviewsComponent={<Reviews />}
      />
      <IllusratedDesignProcess />
    </div>
  );
};

export default Illustrated;
