import React from "react";
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

const Home: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate("/book-cover-form"); // Navigate to the form route
  };

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
