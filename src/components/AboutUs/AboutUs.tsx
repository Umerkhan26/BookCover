// import TeamSection from "../../pages/AboutTeamCard/AboutTeamSection";
import AboutContent from "../../pages/AboutContent/AboutContent";
import { Helmet } from "react-helmet-async";
import bannerImg from "../../assets/PageBanner/6.webp";
import FictionsCover from "../../pages/FictionCover/FictionCoverPage";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Lumeart Studio</title>
        <meta
          name="description"
          content="Learn about Lumeart Studio, a creative book cover design and illustration studio helping authors stand out with custom fiction and non-fiction covers, branding, and visual storytelling."
        />
        <link rel="canonical" href="https://lumeartstudio.com/about-us" />
      </Helmet>
      <FictionsCover
        title="Meet Our Team"
        subtitle="THE FACES BEHIND THE PIXELS - MEET THE LUMEART CREATORS"
        image={bannerImg}
        bookCoversText=""
        showCircles={false}
        formatSubtitle={false}
      />
      <AboutContent />
      {/* <TeamSection /> */}
    </div>
  );
};

export default AboutUs;
