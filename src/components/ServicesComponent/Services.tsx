import { Helmet } from "react-helmet-async";
import GetCover from "../GetACover/GetCover";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Author Branding & Book Design Services | Lumeart Studio</title>
        <meta
          name="description"
          content="Explore our creative solutions: from premium book cover design to audio book art and professional logo branding for self-published authors."
        />
        <link rel="canonical" href="https://lumeartstudio.com/services" />
      </Helmet>
      <GetCover />
    </div>
  );
};

export default Services;
