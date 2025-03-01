import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer, { FooterProps } from "./components/Footer/footer";

// import Footer from "./components/Footer/Footer2";

const footerData: FooterProps = {
  partnerLogo: {
    href: "https://selfpublishingadvice.org/best-self-publishing-services",
    src: "https://miblart.com/wp-content/uploads/2023/05/partner.svg",
    alt: "Partner Logo",
  },
  categories: [
    {
      name: "Company",
      links: [
        {
          href: "https://miblart.com/terms-and-conditions/",
          text: "Terms & Conditions",
        },
        { href: "https://miblart.com/faq/", text: "FAQs" },
        { href: "https://miblart.com/testimonials/", text: "Testimonials" },
        { href: "https://miblart.com/career/", text: "Career" },
        { href: "https://miblart.com/privacy-policy/", text: "Privacy Policy" },
      ],
    },
    {
      name: "Learn",
      links: [
        { href: "https://miblart.com/blog/", text: "Blog" },
        { href: "https://miblart.com/miblacademy/", text: "Mibl Academy" },
        {
          href: "https://miblart.com/subscribe-to-updates/",
          text: "Our Community",
        },
      ],
    },
    {
      name: "Partners",
      links: [
        { href: "https://miblart.com/resources/", text: "Useful Resources" },
        { href: "https://miblart.com/for-partners/", text: "Partner with Us" },
      ],
    },
  ],
  socialLinks: [
    { href: "https://www.instagram.com/miblart", text: "Instagram" },
    { href: "https://www.behance.net/Miblart", text: "Behance" },
    { href: "https://www.facebook.com/Miblart", text: "Facebook" },
    { href: "https://twitter.com/MIBLart", text: "Twitter" },
    { href: "https://www.pinterest.com/miblart", text: "Pinterest" },
  ],
  copyrightText: "© 2024 Lumeart Studio. All rights Reserved.",
  brandLogos: [
    {
      src: "https://miblart.com/wp-content/uploads/2022/09/image_2022-09-07_13-17-50.png",
      alt: "Get Covers",
      href: "https://getcovers.com/",
    },
    {
      src: "https://miblart.com/wp-content/uploads/2024/05/Group-2705.svg",
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
