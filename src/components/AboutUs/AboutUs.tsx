import ContactUsCover from "../../pages/ContactUsCover/ContactUsCover";
import TeamSection from "../../pages/AboutTeamCard/AboutTeamSection";
import AboutContent from "../../pages/AboutContent/AboutContent";
import { Helmet } from "react-helmet-async";
import bannerImg from "../../assets/PageBanners/LUME ART PORTFOLIO WEB COVERS-02.jpg"

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
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
