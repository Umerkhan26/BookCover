import { Helmet } from "react-helmet-async";
import ContactUsForm from "../../pages/ContactUsForm/ContactUsForm";
import bannerImg from "../../assets/PageBanner/6.webp";
import FictionsCover from "../../pages/FictionCover/FictionCoverPage";

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
        <FictionsCover
          title="Contact Us"
          subtitle={
            <>
              If you have any questions or simply want to say 'Hi', just do it!
              You may fill out the form below or mail us at lumeart.com
              <br />
              Drop us a line and we will contact you within 24 hours
            </>
          }
          image={bannerImg}
          bookCoversText=""
          showCircles={false}
          formatSubtitle={false}
        />
      </div>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
