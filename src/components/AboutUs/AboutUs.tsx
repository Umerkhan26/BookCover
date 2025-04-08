import ContactUsCover from "../../pages/ContactUsCover/ContactUsCover";
import TeamSection from "../../pages/AboutTeamCard/AboutTeamSection";
import AboutContent from "../../pages/AboutContent/AboutContent";

const AboutUs = () => {
  return (
    <div>
      <div>
        <ContactUsCover
          title="Meet Our Team"
          subtitle="Meet the minds that drive our vision forward."
          email=""
        />
      </div>
      <AboutContent />
      <TeamSection />
    </div>
  );
};

export default AboutUs;
