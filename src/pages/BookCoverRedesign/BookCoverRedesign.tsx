import FictionCover from "../FictionCover/FictionCover";
import BookCoverRedesaign from "../../assets/PageBanners/redesignLUMEARTWEBPAGEFICTIONCOVER-03-mNMnK2is.webp";
import Packages from "../ourPackages/packages";
// import { myPackagesData } from "../ourPackages/packagesData";
import SpecialEditionAddOns from "../SpecialEditionAddOns/SpecialEditionAddOns";
import RedesignExamples from "./RedesignExamples";
import RedesignForm from "./RedesignForm";
import { examples } from "./RedesignExampleData";
import { Helmet } from "react-helmet-async"; // Correct import for async version
import { useEffect, useState } from "react";
import {
  Shimmer,
  ShimmerCard,
  ShimmerImage,
  ShimmerText,
} from "../../components/Shimmer/Shimmer";

const BookCoverRedesign = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="text-black">
        <Helmet>
          <title>Book Cover Redesign Services | Refresh Your Brand</title>
          <meta
            name="description"
            content="Revitalize your backlist with a professional cover redesign. Modernize your book's aesthetic to meet current market trends and improve CTR."
          />
          <meta
            name="keywords"
            content="book cover redesign, book cover design, custom book covers, graphic design, professional book covers"
          />
          <link
            rel="canonical"
            href="https://lumeartstudio.com/book-cover-redesign"
          />
        </Helmet>
        {/* Banner Shimmer */}
        <div style={{ width: "100%", height: "500px" }}>
          <ShimmerImage
            src={BookCoverRedesaign}
            alt="Book Cover Redesign Banner"
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
        {/* Form Shimmer - Matches form structure */}
        <div
          style={{
            padding: "40px 20px",
            maxWidth: "800px",
            margin: "0 auto",
            background: "linear-gradient(90deg, #e6eef1, #e1f4f0)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <ShimmerText lines={1} width="60%" style={{ margin: "0 auto 1rem" }} />
            <Shimmer height="10px" width="40px" rounded style={{ margin: "0 auto 1rem" }} />
            <ShimmerText lines={1} width="80%" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Shimmer key={i} height="50px" width="100%" rounded />
            ))}
            <Shimmer height="120px" width="100%" rounded />
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Shimmer
                height="48px"
                width="200px"
                rounded
                style={{
                  backgroundColor: "#6dc7d1",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-black">
      <Helmet>
        <title>Book Cover Redesign Services | Refresh Your Brand</title>
        <meta
          name="description"
          content="Revitalize your backlist with a professional cover redesign. Modernize your book's aesthetic to meet current market trends and improve CTR."
        />
        <meta
          name="keywords"
          content="book cover redesign, book cover design, custom book covers, graphic design, professional book covers"
        />
        <link
          rel="canonical"
          href="https://lumeartstudio.com/book-cover-redesign"
        />
      </Helmet>
      <FictionCover
        title="Book Cover Redesign"
        subtitle=""
        image={BookCoverRedesaign} // Can be dynamic as well
        bookCoversText=""
      />
      <Packages />
      <SpecialEditionAddOns />
      <RedesignExamples
        heading="Our Book Cover Redesign Examples"
        examples={examples}
      />
      <RedesignForm />
    </div>
  );
};

export default BookCoverRedesign;
