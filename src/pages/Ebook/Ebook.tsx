import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhone, FaEnvelope, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerImg from "../../assets/PageBanner/6.webp";
import cover1 from "../../assets/banner/TheLastDefenderCover.webp";
import cover2 from "../../assets/banner/Stormborn.webp";
import cover3 from "../../assets/banner/TheButterflySpell.webp";
import {
  EbookContainer,
  ServicesSection,
  SectionTitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceName,
  ServiceCategory,
  ServiceDescription,
  ProcessSection,
  ProcessTitle,
  ProcessSteps,
  ProcessStep,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  GhostwritingSection,
  GhostwritingContent,
  GhostwritingTitle,
  GhostwritingText,
  GhostwritingFeatures,
  FeatureItem,
  PricingSection,
  PricingTitle,
  PricingGrid,
  PricingCard,
  PricingHeader,
  PricingName,
  PricingPrice,
  PricingFeatures,
  PricingFeature,
  PricingButton,
  SectionWrapper,
  GhostwritingWrapper,
  ProcessWrapper,
  PackageContainer,
  PackageTitle,
  AddOns,
  OrderButton,
  WhyChooseUsSection,
  WhyChooseUsGrid,
  WhyChooseUsItem,
  WhyChooseUsIcon,
  WhyChooseUsTitle,
  WhyChooseUsText,
  ContactSection,
  ContactContent,
  ContactTitle,
  ContactText,
  ContactInfo,
  ContactPhone,
  ContactEmail,
  ContactButton,
  ContactTeamGrid,
  ContactTeamItem,
  ContactTeamIcon,
  ContactTeamText,
  EbookBannerSection,
  EbookBannerImage,
  EbookBannerContent,
  EbookBannerTitle,
  EbookBannerSubtitle,
  EbookBannerButton,
  EbookCoversContainer,
  EbookCoverCard,
} from "./Ebook.styles";
import {
  SectionTestimonials,
  WrapTestimonials,
  Container as TestimonialContainer,
  MainScreen,
  Title as TestimonialTitle,
  Subtitle as TestimonialSubtitle,
  TestimonialCard,
  BoxDescription,
  TestimonialTitle as TestimonialName,
  TestimonialDescription,
  CarouselContainer,
  CarouselTrack,
  CarouselButton,
  CarouselDots,
  Dot,
  SvgLeftTop,
  SvgLeftBottom,
  SvgRightTop,
  SvgRightBottom,
  ButtonWrapper,
  ButtonGreen,
} from "../Testimonial/testimonial.styles";

const Ebook: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
      offset: 100,
    });
    AOS.refresh();
  }, []);

  // Handle window resize to adjust number of cards shown
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else if (window.innerWidth < 1280) {
        setCardsToShow(3);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= ebookTestimonials.length ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? ebookTestimonials.length - cardsToShow : prevIndex - 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const ebookTestimonials = [
    {
      name: "Emma Lawrence",
      description:
        "I had a concept but no direction. Lumeart turned my scattered ideas into something profound. Their dedication, patience, and creative energy made me feel truly understood. My book now shines globally—unforgettable experience!",
    },
    {
      name: "Jonathan Reeves",
      description:
        "Working with Lumeart was pure magic! Their team didn't just transform my project—they believed in it. Every step felt personal, every detail intentional. I finally saw my vision brought to vibrant life.",
    },
    {
      name: "Sophie Hartman",
      description:
        "I was nervous about publishing, but Lumeart made it effortless. Their professionalism, constant updates, and creativity left me amazed. My story finally feels heard in ways I couldn't have imagined.",
    },
    {
      name: "Daniel Cruz",
      description:
        "From design to marketing, Lumeart exceeded every expectation. They treated my story like art, not a project. I'm still overwhelmed by how beautifully they captured my essence and message.",
    },
    {
      name: "Olivia Bennett",
      description:
        "The team at Lumeart restored my faith in creativity. They handled everything with heart, integrity, and precision. My book now connects with readers worldwide—it's the dream I always hoped for.",
    },
    {
      name: "Michael Chen",
      description:
        "Lumeart's ghostwriting service transformed my rough ideas into a polished manuscript. The collaborative process was seamless, and the final book exceeded all my expectations. Highly recommended!",
    },
  ];

  const services = [
    {
      name: "Ghostwriting",
      icon: "✍️",
      description: "Our professional ghostwriters collaborate with you to bring your ideas to life, writing in your voice and style while ensuring engaging, polished content. Whether it's fiction, non-fiction, memoirs, or business books, we transform your concepts into compelling narratives.",
      category: "Writing Services",
    },
    {
      name: "Concept Development",
      icon: "💡",
      description: "We work with you to refine your book idea, develop the core concept, and create a comprehensive outline that serves as the foundation for your book. Our team helps structure your thoughts into a cohesive narrative framework.",
      category: "Writing Services",
    },
    {
      name: "Editing & Proofreading",
      icon: "📝",
      description: "Expert editors review your manuscript for clarity, consistency, grammar, and style to ensure your book meets professional publishing standards. We provide comprehensive editing services including developmental editing, copy editing, and proofreading.",
      category: "Editing Services",
    },
    {
      name: "Book Formatting & Layout",
      icon: "📐",
      description: "We format your book for both eBook and print formats, ensuring proper typography, spacing, and layout that enhances readability. Our formatting services include interior design, page layout, and file preparation for all major publishing platforms.",
      category: "Design Services",
    },
    {
      name: "Book Cover Design",
      icon: "🎨",
      description: "Our designers create a custom book cover that captures the essence of your story and attracts your target audience. We design covers for eBook, print, and audiobook formats, ensuring your book stands out in the marketplace.",
      category: "Design Services",
    },
    {
      name: "Book Publishing",
      icon: "📚",
      description: "We handle the technical aspects of publishing, distributing your book across major platforms including Amazon, Barnes & Noble, Apple Books, Kobo, and more. Our publishing services include ISBN registration, metadata optimization, and platform-specific formatting.",
      category: "Publishing Services",
    },
    {
      name: "Book Marketing & Promotion",
      icon: "📢",
      description: "Strategic marketing campaigns help you reach your audience through social media, book reviews, author interviews, and promotional materials. We develop comprehensive marketing strategies to maximize your book's visibility and sales potential.",
      category: "Marketing Services",
    },
    {
      name: "Author Website & Branding",
      icon: "🌐",
      description: "Professional author website and branding services to establish your online presence. We create custom websites, author bios, social media assets, and branding materials that reflect your unique author identity.",
      category: "Marketing Services",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Concept Development",
      description:
        "We work with you to refine your book idea, develop the core concept, and create a comprehensive outline that serves as the foundation for your book.",
    },
    {
      number: 2,
      title: "Ghostwriting",
      description:
        "Our professional ghostwriters collaborate with you to bring your ideas to life, writing in your voice and style while ensuring engaging, polished content.",
    },
    {
      number: 3,
      title: "Editing & Proofreading",
      description:
        "Expert editors review your manuscript for clarity, consistency, grammar, and style to ensure your book meets professional publishing standards.",
    },
    {
      number: 4,
      title: "Formatting & Layout",
      description:
        "We format your book for both eBook and print formats, ensuring proper typography, spacing, and layout that enhances readability.",
    },
    {
      number: 5,
      title: "Cover Design",
      description:
        "Our designers create a custom book cover that captures the essence of your story and attracts your target audience.",
    },
    {
      number: 6,
      title: "Publishing",
      description:
        "We handle the technical aspects of publishing, distributing your book across major platforms including Amazon, Barnes & Noble, and more.",
    },
    {
      number: 7,
      title: "Marketing & Promotion",
      description:
        "Strategic marketing campaigns help you reach your audience through social media, book reviews, author interviews, and promotional materials.",
    },
  ];

  const pricingPackages = [
    {
      name: "Essential",
      features: [
        "Concept Development",
        "Basic Ghostwriting (up to 30,000 words)",
        "Editing & Proofreading",
        "Basic Formatting",
        "Standard Cover Design",
        "Publishing Setup",
      ],
      freeFeatures: [
        "3D book image",
        "Title page",
        "Bonus image for marketing",
      ],
      addOns: [
        { name: "1 concept", price: 0 },
        { name: "2 concepts", price: 100 },
      ],
      popular: false,
    },
    {
      name: "Professional",
      features: [
        "Full Concept Development",
        "Professional Ghostwriting (up to 60,000 words)",
        "Comprehensive Editing & Proofreading",
        "Professional Formatting & Layout",
        "Premium Cover Design",
        "Publishing & Distribution",
        "Basic Marketing Package",
        "Author Website Setup",
      ],
      freeFeatures: [
        "3D book image",
        "Title page",
        "Bonus image for marketing",
      ],
      addOns: [
        { name: "1 concept", price: 0 },
        { name: "2 concepts", price: 100 },
      ],
      popular: true,
    },
    {
      name: "Premium",
      features: [
        "Complete Concept Development",
        "Premium Ghostwriting (unlimited words)",
        "Multi-round Editing & Proofreading",
        "Advanced Formatting & Layout",
        "Custom Premium Cover Design",
        "Full Publishing & Distribution",
        "Comprehensive Marketing Campaign",
        "Professional Author Website",
        "Ongoing Support & Consultation",
      ],
      freeFeatures: [
        "3D book image",
        "Title page",
        "Bonus image for marketing",
      ],
      addOns: [
        { name: "1 concept", price: 0 },
        { name: "2 concepts", price: 100 },
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Complete eBook Publishing Services | Lumeart Studio</title>
        <meta
          name="description"
          content="Full-service eBook publishing from concept to marketing. Professional ghostwriting, editing, formatting, cover design, and publishing services."
        />
        <link rel="canonical" href="https://lumeartstudio.com/ebook" />
      </Helmet>
      <EbookContainer>
        {/* Hero Section */}
        <EbookBannerSection>
          <EbookBannerImage>
            <img
              src={bannerImg}
              alt="eBook Publishing Services Banner"
              width={1200}
              height={500}
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
            <EbookBannerContent>
              <EbookBannerTitle
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="0"
              >
                eBook Publishing Services
              </EbookBannerTitle>
              <EbookBannerSubtitle
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="100"
              >
                From Idea to Published eBook - We Handle Everything
              </EbookBannerSubtitle>
              <EbookBannerButton
                onClick={() => navigate("/contact-us")}
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                Get Started Today
              </EbookBannerButton>
            </EbookBannerContent>
            {/* Book cover images - commented out for now, will use different images later */}
            {/* <EbookCoversContainer>
              <EbookCoverCard
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="150"
              >
                <img src={cover1} alt="Book Cover" />
              </EbookCoverCard>
              <EbookCoverCard
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <img src={cover2} alt="Book Cover" />
              </EbookCoverCard>
              <EbookCoverCard
                data-aos="fade-left"
                data-aos-duration="600"
                data-aos-delay="250"
              >
                <img src={cover3} alt="Book Cover" />
              </EbookCoverCard>
            </EbookCoversContainer> */}
          </EbookBannerImage>
        </EbookBannerSection>

        {/* Services Brochure Section */}
        <ServicesSection>
          <SectionWrapper>
            <SectionTitle
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="0"
            >
              Our One-Stop <span>eBook Publishing Services</span>
            </SectionTitle>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay={50 + index * 50}
                >
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceName>{service.name}</ServiceName>
                  <ServiceCategory>{service.category}</ServiceCategory>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </SectionWrapper>
        </ServicesSection>

        {/* Why Choose Us Section */}
        <WhyChooseUsSection>
          <SectionWrapper>
            <SectionTitle
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="0"
            >
              Why Choose <span>Us</span>
            </SectionTitle>
            <WhyChooseUsGrid>
              <WhyChooseUsItem
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <WhyChooseUsIcon>⚡</WhyChooseUsIcon>
                <WhyChooseUsTitle>Fast Delivery</WhyChooseUsTitle>
                <WhyChooseUsText>
                  We understand deadlines matter. Our team works efficiently to deliver your project on time without compromising quality.
                </WhyChooseUsText>
              </WhyChooseUsItem>
              <WhyChooseUsItem
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <WhyChooseUsIcon>✓</WhyChooseUsIcon>
                <WhyChooseUsTitle>100% Satisfaction</WhyChooseUsTitle>
                <WhyChooseUsText>
                  Your satisfaction is our priority. We work closely with you to ensure the final product exceeds your expectations.
                </WhyChooseUsText>
              </WhyChooseUsItem>
              <WhyChooseUsItem
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="150"
              >
                <WhyChooseUsIcon>✍️</WhyChooseUsIcon>
                <WhyChooseUsTitle>Experienced Writers</WhyChooseUsTitle>
                <WhyChooseUsText>
                  Our team consists of professional ghostwriters, editors, and designers with years of experience in the publishing industry.
                </WhyChooseUsText>
              </WhyChooseUsItem>
              <WhyChooseUsItem
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                <WhyChooseUsIcon>🔒</WhyChooseUsIcon>
                <WhyChooseUsTitle>Complete Confidentiality</WhyChooseUsTitle>
                <WhyChooseUsText>
                  Your privacy is protected. All work is confidential, and your book is yours - we never claim authorship.
                </WhyChooseUsText>
              </WhyChooseUsItem>
              <WhyChooseUsItem
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="250"
              >
                <WhyChooseUsIcon>💰</WhyChooseUsIcon>
                <WhyChooseUsTitle>Pocket-Friendly Services</WhyChooseUsTitle>
                <WhyChooseUsText>
                  Competitive pricing with flexible payment options. We offer packages that fit various budgets and project needs.
                </WhyChooseUsText>
              </WhyChooseUsItem>
              <WhyChooseUsItem
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <WhyChooseUsIcon>🕐</WhyChooseUsIcon>
                <WhyChooseUsTitle>24/7 Customer Support</WhyChooseUsTitle>
                <WhyChooseUsText>
                  Our support team is always available to answer your questions and assist you throughout your publishing journey.
                </WhyChooseUsText>
              </WhyChooseUsItem>
              <WhyChooseUsItem
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="350"
              >
                <WhyChooseUsIcon>⭐</WhyChooseUsIcon>
                <WhyChooseUsTitle>Positive Reviews</WhyChooseUsTitle>
                <WhyChooseUsText>
                  We have a track record of satisfied clients who have successfully published their books with our help.
                </WhyChooseUsText>
              </WhyChooseUsItem>
              <WhyChooseUsItem
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
              >
                <WhyChooseUsIcon>🛡️</WhyChooseUsIcon>
                <WhyChooseUsTitle>Money-back Guarantee</WhyChooseUsTitle>
                <WhyChooseUsText>
                  We stand behind our work. If you're not satisfied with the quality, we offer a money-back guarantee.
                </WhyChooseUsText>
              </WhyChooseUsItem>
            </WhyChooseUsGrid>
          </SectionWrapper>
        </WhyChooseUsSection>

        {/* Publishing Process Section */}
        <ProcessWrapper>
          <ProcessSection>
            <ProcessTitle
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="0"
            >
              Your Complete eBook <span>Publishing Journey</span>
            </ProcessTitle>
            <ProcessSteps>
              {processSteps.map((step) => (
                <ProcessStep
                  key={step.number}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay={50 + step.number * 50}
                >
                  <StepNumber>{step.number}</StepNumber>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepContent>
                </ProcessStep>
              ))}
            </ProcessSteps>
          </ProcessSection>
        </ProcessWrapper>

        {/* Ghostwriting Section */}
        <GhostwritingWrapper>
          <GhostwritingSection>
            <GhostwritingContent>
              <GhostwritingTitle
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="0"
              >
                Professional <span>Ghostwriting Services</span>
              </GhostwritingTitle>
              <GhostwritingText
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="50"
              >
                Our ghostwriting service transforms your ideas, experiences, and
                expertise into a professionally written book that sounds
                authentically like you. We work closely with you throughout the
                process to ensure your voice, style, and message shine through
                every page.
              </GhostwritingText>
              <GhostwritingFeatures>
                <FeatureItem
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <strong>Collaborative Process:</strong> Regular interviews and
                  feedback sessions ensure your vision is captured accurately
                </FeatureItem>
                <FeatureItem
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="150"
                >
                  <strong>Your Voice, Our Expertise:</strong> We write in your
                  style and voice, making the book authentically yours
                </FeatureItem>
                <FeatureItem
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <strong>Complete Confidentiality:</strong> Your privacy is
                  protected. The book is yours, and only you decide who knows
                  about the collaboration
                </FeatureItem>
                <FeatureItem
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="250"
                >
                  <strong>Professional Quality:</strong> Experienced writers
                  ensure your book meets the highest publishing standards
                </FeatureItem>
                <FeatureItem
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                >
                  <strong>Flexible Timeline:</strong> We work at your pace,
                  typically completing books within 6-12 weeks depending on
                  length and complexity
                </FeatureItem>
              </GhostwritingFeatures>
            </GhostwritingContent>
          </GhostwritingSection>
        </GhostwritingWrapper>

        {/* Pricing Section */}
        <PackageContainer>
          <PackageTitle
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="0"
          >
            Our <span>Packages</span>
          </PackageTitle>
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="50"
            style={{ 
              textAlign: "center", 
              color: "#4b5563", 
              fontSize: "16px", 
              marginTop: "20px",
              maxWidth: "800px",
              margin: "20px auto 0",
              padding: "0 20px",
              lineHeight: "1.6"
            }}
          >
            Pricing varies based on book length, complexity, and specific requirements. 
            Contact us for a customized quote tailored to your project.
          </p>
          <div className="packages-wrapper">
            {pricingPackages.map((pkg, index) => (
              <PricingCard
                className={pkg.popular ? "popular" : ""}
                key={index}
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay={100 + index * 75}
              >
                <div className="title-price">
                  <h3>{pkg.name}</h3>
                </div>

                <div className="content-wrapper">
                  <ul className="features-list">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>

                  <div className="free-addons">
                    <p className="free-title">FREE OF CHARGE</p>
                    <ul>
                      {pkg.freeFeatures.map((addon, idx) => (
                        <li key={idx}>{addon}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <AddOns>
                  <div className="addons-options">
                    {pkg.addOns.map((addon, addonIdx) => (
                      <div key={addonIdx}>
                        <input
                          type="checkbox"
                          id={`addon-${index}-${addonIdx}`}
                        />
                        <label htmlFor={`addon-${index}-${addonIdx}`}>
                          {addon.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </AddOns>

                <OrderButton onClick={() => navigate("/contact-us")}>
                  Order Now
                </OrderButton>
              </PricingCard>
            ))}
          </div>
        </PackageContainer>

        {/* Testimonials Section */}
        <SectionTestimonials>
          <WrapTestimonials>
            {/* SVG Left Top */}
            <SvgLeftTop>
              <svg
                width="90"
                height="90"
                viewBox="0 0 105 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_59_2010"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="0"
                  width="102"
                  height="108"
                >
                  <rect
                    x="3.0293"
                    y="107.06"
                    width="107.06"
                    height="101"
                    rx="10"
                    transform="rotate(-90 3.0293 107.06)"
                    fill="#FDFFFD"
                  />
                </mask>
                <g mask="url(#mask0_59_2010)">
                  <circle
                    cx="59.2434"
                    cy="1.40289"
                    r="31.8231"
                    transform="rotate(90 59.2434 1.40289)"
                    stroke="#38555F"
                  />
                  <circle
                    cx="59.2434"
                    cy="66.0447"
                    r="31.8231"
                    transform="rotate(90 59.2434 66.0447)"
                    stroke="#38555F"
                  />
                  <circle
                    cx="-5.40313"
                    cy="66.0447"
                    r="31.8231"
                    transform="rotate(90 -5.40313 66.0447)"
                    stroke="#38555F"
                  />
                </g>
              </svg>
            </SvgLeftTop>

            {/* SVG Left Bottom */}
            <SvgLeftBottom>
              <svg
                width="91"
                height="245"
                viewBox="0 0 91 257"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 1C12.5037 0.997274 3.59512 2.86953 -4.71685 6.50981C-13.0288 10.1501 -20.5812 15.4871 -26.9425 22.2157C-33.3039 28.9444 -38.3495 36.933 -41.791 45.725C-45.2325 54.517 -47.0026 63.94 -47 73.4559L-47 359H90L90 73.4559C90 54.2394 82.7831 35.8099 69.9368 22.2218C57.0906 8.63373 39.6673 1 21.5 1V1Z"
                  stroke="#38555F"
                  strokeMiterlimit="10"
                />
              </svg>
            </SvgLeftBottom>

            {/* SVG Right Top */}
            <SvgRightTop>
              <svg
                width="190"
                height="33"
                viewBox="0 0 210 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="175"
                  cy="-1.99984"
                  r="34.4999"
                  transform="rotate(90 175 -1.99984)"
                  stroke="#38555F"
                />
                <circle
                  cx="105"
                  cy="-1.99984"
                  r="34.4999"
                  transform="rotate(90 105 -1.99984)"
                  stroke="#38555F"
                />
                <circle
                  cx="35.0001"
                  cy="-1.99984"
                  r="34.4999"
                  transform="rotate(90 35.0001 -1.99984)"
                  stroke="#38555F"
                />
              </svg>
            </SvgRightTop>

            {/* SVG Right Bottom */}
            <SvgRightBottom>
              <svg
                width="69"
                height="245"
                viewBox="0 0 69 257"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M69 0.999997C77.9306 0.997268 86.7742 2.86953 95.0255 6.50981C103.277 10.1501 110.774 15.4871 117.089 22.2157C123.404 28.9444 128.413 36.933 131.829 45.725C135.245 54.517 137.003 63.94 137 73.4559L137 359L0.999996 359L1.00002 73.4558C1.00002 54.2394 8.16431 35.8099 20.9168 22.2218C33.6692 8.63372 50.9653 0.999995 69 0.999997V0.999997Z"
                  stroke="#38555F"
                  strokeMiterlimit="10"
                />
              </svg>
            </SvgRightBottom>

            <TestimonialContainer>
              <MainScreen>
                <svg
                  width="48"
                  height="12"
                  viewBox="0 0 48 12"
                  fill="none"
                  style={{ display: "block", margin: "auto", marginBottom: "30px" }}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5.82952" cy="5.82659" r="5.32659" stroke="#25293F" />
                  <path
                    d="M29.4648 5.82659C29.4648 8.75736 27.0291 11.1532 23.9995 11.1532C20.9699 11.1532 18.5342 8.75736 18.5342 5.82659C18.5342 2.89582 20.9699 0.5 23.9995 0.5C27.0291 0.5 29.4648 2.89582 29.4648 5.82659Z"
                    stroke="#25293F"
                  />
                  <circle cx="42.1733" cy="5.82659" r="5.32659" stroke="#25293F" />
                </svg>

                <TestimonialTitle
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="0"
                >
                  Real Stories, Real Transformations
                </TestimonialTitle>
                <TestimonialSubtitle
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="50"
                >
                  At Lumeart, every review tells a journey of trust, creativity, and fulfillment—authentic experiences from authors who saw their dreams beautifully come alive through our expertise and heartfelt collaboration.
                </TestimonialSubtitle>
              </MainScreen>

              <CarouselContainer>
                <CarouselButton direction="left" onClick={prevSlide}>
                  <FaChevronLeft />
                </CarouselButton>

                <CarouselTrack>
                  {ebookTestimonials
                    .slice(currentIndex, currentIndex + cardsToShow)
                    .map((testimonial, index) => (
                      <TestimonialCard
                        key={index}
                        cardsToShow={cardsToShow}
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-delay={100 + index * 50}
                      >
                        <BoxDescription>
                          <TestimonialName>{testimonial.name}</TestimonialName>
                          <TestimonialDescription>
                            {testimonial.description}
                          </TestimonialDescription>
                        </BoxDescription>
                      </TestimonialCard>
                    ))}
                </CarouselTrack>

                <CarouselButton direction="right" onClick={nextSlide}>
                  <FaChevronRight />
                </CarouselButton>
              </CarouselContainer>

              <CarouselDots>
                {Array.from({ length: ebookTestimonials.length - cardsToShow + 1 }).map(
                  (_, index) => (
                    <Dot
                      key={index}
                      active={index === currentIndex}
                      onClick={() => goToSlide(index)}
                    />
                  ),
                )}
              </CarouselDots>
            </TestimonialContainer>
          </WrapTestimonials>
        </SectionTestimonials>

        {/* Contact Section */}
        <ContactSection>
          <SectionWrapper>
            <ContactContent>
              <ContactTitle
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="0"
              >
                Transform Your Ideas Into a Published eBook
              </ContactTitle>
              <ContactText
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="50"
              >
                Our innovative team is capable of producing creative, insightful, and professional eBooks to make you a successful published author. Our comprehensive eBook publishing services include:
              </ContactText>
              <ContactTeamGrid>
                <ContactTeamItem
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <ContactTeamIcon>✍️</ContactTeamIcon>
                  <ContactTeamText>Professional Ghostwriters</ContactTeamText>
                </ContactTeamItem>
                <ContactTeamItem
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="125"
                >
                  <ContactTeamIcon>📝</ContactTeamIcon>
                  <ContactTeamText>Expert Editors & Proofreaders</ContactTeamText>
                </ContactTeamItem>
                <ContactTeamItem
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="150"
                >
                  <ContactTeamIcon>📐</ContactTeamIcon>
                  <ContactTeamText>eBook Formatting Specialists</ContactTeamText>
                </ContactTeamItem>
                <ContactTeamItem
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="175"
                >
                  <ContactTeamIcon>🎨</ContactTeamIcon>
                  <ContactTeamText>Book Cover Designers</ContactTeamText>
                </ContactTeamItem>
                <ContactTeamItem
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <ContactTeamIcon>📚</ContactTeamIcon>
                  <ContactTeamText>Publishing Experts</ContactTeamText>
                </ContactTeamItem>
                <ContactTeamItem
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="225"
                >
                  <ContactTeamIcon>📢</ContactTeamIcon>
                  <ContactTeamText>Marketing Consultants</ContactTeamText>
                </ContactTeamItem>
              </ContactTeamGrid>
              <ContactInfo>
                <ContactPhone
                  href="tel:+13153332077"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="250"
                >
                  <FaPhone className="contact-icon" />
                  +1 (315) 333-2077
                </ContactPhone>
                <ContactEmail
                  href="mailto:studioslumeart@gmail.com"
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="275"
                >
                  <FaEnvelope className="contact-icon" />
                  studioslumeart@gmail.com
                </ContactEmail>
              </ContactInfo>
              <ContactButton
                onClick={() => navigate("/contact-us")}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                Get Started
              </ContactButton>
            </ContactContent>
          </SectionWrapper>
        </ContactSection>
      </EbookContainer>
    </>
  );
};

export default Ebook;
