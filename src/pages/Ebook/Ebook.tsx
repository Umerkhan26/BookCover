import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {
  EbookContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  ServicesSection,
  SectionTitle,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceName,
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
  Price,
  AddOns,
  OrderButton,
} from "./Ebook.styles";

const Ebook: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Concept Development",
      icon: "💡",
      description: "Transform your ideas into a structured book concept",
    },
    {
      name: "Ghostwriting",
      icon: "✍️",
      description: "Professional writing in your voice and style",
    },
    {
      name: "Editing & Proofreading",
      icon: "📝",
      description: "Comprehensive editing to perfect your manuscript",
    },
    {
      name: "Formatting & Layout",
      icon: "📐",
      description: "Professional formatting for eBook and print",
    },
    {
      name: "Cover Design",
      icon: "🎨",
      description: "Custom book cover that captures your story",
    },
    {
      name: "Publishing",
      icon: "📚",
      description: "Distribution across major platforms",
    },
    {
      name: "Marketing & Promotion",
      icon: "📢",
      description: "Strategic marketing to reach your audience",
    },
    {
      name: "Author Website",
      icon: "🌐",
      description: "Professional author website and branding",
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
      price: 4995,
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
      price: 9995,
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
      price: 19995,
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
        <HeroSection>
          <HeroContent>
            <HeroTitle>
              Turn Your Ideas Into a{" "}
              <span>Professionally Published eBook</span>
            </HeroTitle>
            <HeroSubtitle>
              Complete eBook publishing services from concept development to
              marketing. We handle every step of the process so you can focus on
              sharing your message with the world.
            </HeroSubtitle>
            <HeroButton onClick={() => navigate("/contact-us")}>
              Get Started Today
            </HeroButton>
          </HeroContent>
        </HeroSection>

        {/* Services Brochure Section */}
        <ServicesSection>
          <SectionWrapper>
            <SectionTitle>
              Your All-in-One <span>eBook Publishing Solution</span>
            </SectionTitle>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard key={index}>
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceName>{service.name}</ServiceName>
                  <p>{service.description}</p>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </SectionWrapper>
        </ServicesSection>

        {/* Publishing Process Section */}
        <ProcessWrapper>
          <ProcessSection>
            <ProcessTitle>
              Your Complete eBook <span>Publishing Journey</span>
            </ProcessTitle>
            <ProcessSteps>
              {processSteps.map((step) => (
                <ProcessStep key={step.number}>
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
              <GhostwritingTitle>
                Professional <span>Ghostwriting Services</span>
              </GhostwritingTitle>
              <GhostwritingText>
                Our ghostwriting service transforms your ideas, experiences, and
                expertise into a professionally written book that sounds
                authentically like you. We work closely with you throughout the
                process to ensure your voice, style, and message shine through
                every page.
              </GhostwritingText>
              <GhostwritingFeatures>
                <FeatureItem>
                  <strong>Collaborative Process:</strong> Regular interviews and
                  feedback sessions ensure your vision is captured accurately
                </FeatureItem>
                <FeatureItem>
                  <strong>Your Voice, Our Expertise:</strong> We write in your
                  style and voice, making the book authentically yours
                </FeatureItem>
                <FeatureItem>
                  <strong>Complete Confidentiality:</strong> Your privacy is
                  protected. The book is yours, and only you decide who knows
                  about the collaboration
                </FeatureItem>
                <FeatureItem>
                  <strong>Professional Quality:</strong> Experienced writers
                  ensure your book meets the highest publishing standards
                </FeatureItem>
                <FeatureItem>
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
          <PackageTitle>
            Our <span>Packages</span>
          </PackageTitle>
          <div className="packages-wrapper">
            {pricingPackages.map((pkg, index) => (
              <PricingCard className={pkg.popular ? "popular" : ""} key={index}>
                <div className="title-price">
                  <h3>{pkg.name}</h3>
                  <Price>${pkg.price}</Price>
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
                          {addon.price > 0 && ` (+$${addon.price})`}
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
      </EbookContainer>
    </>
  );
};

export default Ebook;
