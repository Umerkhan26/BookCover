import { Helmet } from "react-helmet-async";
import ContactUsCover from "../../pages/ContactUsCover/ContactUsCover";
import ContactUsForm from "../../pages/ContactUsForm/ContactUsForm";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white-50">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="w-full">
        <ContactUsCover />
      </div>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
