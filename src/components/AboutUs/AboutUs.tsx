import ContactUsCover from "../../pages/ContactUsCover/ContactUsCover";
import TeamSection from "../../pages/AboutTeamCard/AboutTeamSection";
import AboutContent from "../../pages/AboutContent/AboutContent";

const AboutUs = () => {
  return (
    <div>
      <ContactUsCover title="Meet Our Team" subtitle="" email="" />
      <AboutContent />
      <TeamSection />
    </div>
  );
};

export default AboutUs;
