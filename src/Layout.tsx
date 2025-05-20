import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer, { FooterProps } from "./components/Footer/footer";
import { Helmet } from "react-helmet-async";
// import TopBar from "./components/TopBar/TopBar";

// import Footer from "./components/Footer/Footer2";

const footerData: FooterProps = {
  partnerLogo: {
    href: "https://selfpublishingadvice.org/best-self-publishing-services",
    src: "",
    alt: "Partner Logo",
  },
  categories: [
    {
      name: "Company",
      links: [
        {
          href: "/TermsAndConditions",
          text: "Terms & Conditions",
        },
        { href: "/FAQs", text: "FAQs" },
        { href: "/testimonial", text: "Testimonials" },
        { href: "/contactUs", text: "Contact Us" },
      ],
    },
    {
      name: "Learn",
      links: [
        { href: "", text: "Blog" },
        { href: "", text: "Career" },
        { href: "", text: "Privacy Policy" },
      ],
    },
    {
      name: "Partners",
      links: [
        { href: "", text: "Useful Resources" },
        { href: "/partner", text: "Partner with Us" },
      ],
    },
  ],
  socialLinks: [
    { href: "", text: "Instagram" },
    { href: "", text: "Behance" },
    { href: "", text: "Facebook" },
    { href: "", text: "Twitter" },
    { href: "", text: "Pinterest" },
  ],
  copyrightText: "© 2025 Lumeart Studio. All rights Reserved.",
  brandLogos: [
    {
      src: "",
      alt: "Get Covers",
      href: "https://getcovers.com/",
    },
    {
      src: "",
      alt: "Get Premades",
      href: "https://getpremades.com/",
    },
  ],
};

const Layout: React.FC = () => {
  return (
    <>
      <Helmet>
        {" "}
        <title> Lumeart Studio</title>
      </Helmet>
      {/* <TopBar/> */}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer {...footerData} />,
    </>
  );
};

export default Layout;
