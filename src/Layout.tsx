import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer, { FooterProps } from "./components/Footer/footer";

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
          href: "",
          text: "Terms & Conditions",
        },
        { href: "/FAQs", text: "FAQs" },
        { href: "/TermsAndConditions", text: "Testimonials" },
        { href: "", text: "Career" },
        { href: "", text: "Privacy Policy" },
      ],
    },
    {
      name: "Learn",
      links: [
        { href: "", text: "Blog" },
        {
          href: "",
          text: "Lumert Studio Academy",
        },
        {
          href: "",
          text: "Our Community",
        },
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
  copyrightText: "© 2024 Lumeart Studio. All rights Reserved.",
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
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer {...footerData} />,
    </>
  );
};

export default Layout;
