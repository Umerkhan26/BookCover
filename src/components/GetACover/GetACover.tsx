import { Helmet } from "react-helmet-async";
import Carousel from "../../pages/Carousal/carousal";
import BookCoverDesigns from "../../pages/GetACover/BookCovers";
import PartnerCover from "../../pages/Partner/partnerCover";
import Reviews from "../../pages/reviews/reviews";
import SpecialEditionAddOns from "../../pages/SpecialEditionAddOns/SpecialEditionAddOns";
import bannerImg from "../../assets/PageBanners/LUMEARTPORTFOLIOWEBCOVERS-03.webp";
import { useEffect, useState } from "react";
import {
  Shimmer,
  ShimmerCard,
  ShimmerImage,
  ShimmerText,
} from "../Shimmer/Shimmer";

const GetACover = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for the entire page (replace with actual data fetch if needed)
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div>
        <Helmet>
          <title>Order Custom Book Cover Design | Start Your Project</title>
          <meta
            name="description"
            content="Kickstart your self-publishing journey. Submit your creative brief to receive a market-ready book cover with a 100% satisfaction guarantee."
          />
          <link rel="canonical" href="https://lumeartstudio.com/get-a-cover" />
        </Helmet>
        <div
          style={{
            position: "relative",
            height: "500px",
            background: "#f0f0f0",
          }}
        >
          <ShimmerImage
            src={bannerImg}
            alt="Banner Image"
            width={1200}
            height={500}
            loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <ShimmerText
              lines={2}
              width="60%"
              style={{ color: "#fff", background: "rgba(255,255,255,0.2)" }}
            />
          </div>
        </div>

        <div
          style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}
        >
          <div style={{ marginBottom: "40px" }}>
            <ShimmerText
              lines={1}
              width="300px"
              style={{ marginBottom: "20px" }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <ShimmerCard key={i} height="300px" width="200px" />
              ))}
            </div>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <ShimmerText
              lines={1}
              width="250px"
              style={{ marginBottom: "20px" }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <ShimmerCard key={i} height="250px" />
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <ShimmerText
              lines={1}
              width="200px"
              style={{ marginBottom: "20px" }}
            />
            <Shimmer height="300px" width="100%" rounded />
          </div>

          <div>
            <ShimmerText
              lines={1}
              width="250px"
              style={{ marginBottom: "20px" }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {Array.from({ length: 3 }).map((_, i) => (
                <ShimmerCard key={i} height="200px" width="300px" />
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
        <title>Order Custom Book Cover Design | Start Your Project</title>
        <meta
          name="description"
          content="Kickstart your self-publishing journey. Submit your creative brief to receive a market-ready book cover with a 100% satisfaction guarantee."
        />

        <link rel="canonical" href="https://lumeartstudio.com/get-a-cover" />
      </Helmet>
      <PartnerCover
        bookCoversText=""
        title2=""
        title={
          <>
            We Help Authors Make Book Cover Design <br />
            Their Best Marketing Tool
          </>
        }
        image={bannerImg}
      />

      <BookCoverDesigns />
      <SpecialEditionAddOns />
      <Carousel />
      <Reviews />
    </div>
  );
};

export default GetACover;
