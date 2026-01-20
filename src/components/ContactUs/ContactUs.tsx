import { Helmet } from "react-helmet-async";
import ContactUsCover from "../../pages/ContactUsCover/ContactUsCover";
import ContactUsForm from "../../pages/ContactUsForm/ContactUsForm";
import bannerImg from "../../assets/PageBanners/LUMEARTPORTFOLIOWEBCOVERS-05.webp";
import { Shimmer, ShimmerImage, ShimmerText } from "../Shimmer/Shimmer";
import { useEffect, useState } from "react";

const ContactUs = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for the page (replace with actual data fetch if needed)
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
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
          {/* Shimmer for ContactUsCover banner */}
          <div
            style={{
              marginTop: "85px",
              width: "100%",
              height: "400px",
              overflow: "hidden",
            }}
          >
            <ShimmerImage
              src={bannerImg}
              alt="Contact Us Banner Shimmer"
              width={1200}
              height={400}
              loading="eager"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
          {/* Shimmer placeholders for ContactUsForm */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* Placeholder for InfoWrapper */}
            <div style={{ flex: 1 }}>
              <ShimmerText
                lines={1}
                width="200px"
                style={{ marginBottom: "16px" }}
              />
              <ShimmerText
                lines={2}
                width="80%"
                style={{ marginBottom: "24px" }}
              />
              <Shimmer
                height="20px"
                width="200px"
                rounded
                style={{ marginBottom: "16px" }}
              />{" "}
              {/* Email line */}
              <div style={{ display: "flex", gap: "16px" }}>
                {Array.from({ length: 4 }).map(
                  (
                    _,
                    i, // 4 social icons
                  ) => (
                    <Shimmer key={i} height="40px" width="40px" rounded />
                  ),
                )}
              </div>
            </div>

            {/* Placeholder for ContactFormWrapper */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Name inputs row */}
                <div style={{ display: "flex", gap: "16px" }}>
                  {Array.from({ length: 2 }).map((_, i) => (
                    <Shimmer
                      key={i}
                      height="48px"
                      width="100%"
                      rounded
                      style={{ flex: 1 }}
                    />
                  ))}
                </div>
                {/* Email and Referral inputs */}
                {Array.from({ length: 2 }).map((_, i) => (
                  <Shimmer key={i} height="48px" width="100%" rounded />
                ))}
                {/* Textarea */}
                <Shimmer height="120px" width="100%" rounded />
                {/* Checkbox and Button */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <Shimmer height="20px" width="20px" rounded />
                  <ShimmerText lines={1} width="60%" />
                </div>
                <Shimmer
                  height="48px"
                  width="200px"
                  rounded
                  style={{ alignSelf: "flex-start" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
