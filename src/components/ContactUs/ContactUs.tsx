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
          // Temporary: CEO personal note on hero (original subtitle below)
          subtitle={
            <>
              <span
                style={{
                  display: "block",
                  fontWeight: 700,
                  fontSize: "1.05em",
                  marginBottom: "6px",
                }}
              >
                A Personal Note from the CEO
              </span>
              Thank you for visiting our website. Building this company has
              always been about helping authors present their work with
              confidence through high-quality, custom eBook cover designs. We
              appreciate every client who chooses to work with us and remain
              committed to delivering outstanding service and creative
              excellence.
              <br />
              <span style={{ fontStyle: "italic", display: "block", marginTop: "6px" }}>
                — Wasim Akram, Chief Executive Officer (Lume Art Studios)
              </span>
            </>
          }
          /*
          subtitle={
            <>
              If you have any questions or simply want to say 'Hi', just do it!
              You may fill out the form below or mail us at lumeart.com
              <br />
              Drop us a line and we will contact you within 24 hours
            </>
          }
          */
          image={bannerImg}
          bookCoversText=""
          showCircles={false}
          formatSubtitle={false}
          expandedSubtitle
        />
      </div>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 md:mt-14">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUs;
