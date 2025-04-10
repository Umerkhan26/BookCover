import { Helmet } from "react-helmet-async";
import GetACover from "../GetACover/GetACover";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Our Services</title>
      </Helmet>
      <GetACover />
    </div>
  );
};

export default Services;
