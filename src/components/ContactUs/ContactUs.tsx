import { Helmet } from "react-helmet-async";
import ContactUsCover from "../../pages/ContactUsCover/ContactUsCover";
import ContactUsForm from "../../pages/ContactUsForm/ContactUsForm";
import bannerImg from "../../assets/PageBanners/LUMEARTPORTFOLIOWEBCOVERS-05.webp";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white-50">
      <Helmet>
        <title>
          Contact Lumeart Studio | Hire a Professional Book Designer
        </title>
        <meta
          name="description"
          content="Ready to launch your book? Contact our design team for custom cover art inquiries, branding consultations, and project quotes."
        />
        <link rel="canonical" href="https://lumeartstudio.com/contact-us" />
      </Helmet>
      <div className="w-full">
        <ContactUsCover image={bannerImg} />
      </div>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
