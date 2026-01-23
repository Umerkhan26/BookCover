import ContactUsCover from "../../pages/ContactUsCover/ContactUsCover";
import TeamSection from "../../pages/AboutTeamCard/AboutTeamSection";
import AboutContent from "../../pages/AboutContent/AboutContent";
import { Helmet } from "react-helmet-async";
import bannerImg from "../../assets/PageBanners/LUMEARTPORTFOLIOWEBCOVERS-02.webp";
import { useEffect, useState } from "react";
import { ShimmerCard, ShimmerImage, ShimmerText } from "../Shimmer/Shimmer";

const AboutUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div>
        <Helmet>
          <title>About Us</title>
        </Helmet>
        <div
          style={{
            marginTop: "50px",
            width: "100%",
            height: "auto",
            overflow: "hidden",
          }}
        >
          <ShimmerImage
            src={bannerImg}
            alt="About Us Banner"
            width={1200}
            height={500}
            loading="eager"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "500px",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: "90%",
              margin: "0 auto",
              marginBottom: "40px",
            }}
          >
            <ShimmerText
              lines={2}
              width="70%"
              style={{ marginBottom: "20px" }}
            />
            <ShimmerText lines={4} width="80%" />
          </div>

          <div>
            <ShimmerText
              lines={1}
              width="200px"
              style={{ marginBottom: "20px", textAlign: "center" }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <ShimmerCard key={i} height="300px" />
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
        <title>
          About Lumeart Studio | Creative Book Cover Designers & Illustrators
        </title>
        <meta
          name="description"
          content="Learn about Lumeart Studio, a creative book cover design and illustration studio helping authors stand out with custom fiction and non-fiction covers, branding, and visual storytelling."
        />
        <link rel="canonical" href="https://lumeartstudio.com/about-us" />
      </Helmet>
      <div>
        <ContactUsCover
          title="Meet Our Team"
          subtitle="Meet the minds that drive our vision forward."
          email=""
          image={bannerImg}
        />
      </div>
      <AboutContent />
      <TeamSection />
    </div>
  );
};

export default AboutUs;
