import React from "react";
import styled from "styled-components";

const colors = {
  primary: "#6dc7d1",
  secondary: "#4a90e2",
  text: "#333333",
  lightText: "#555555",
  background: "#f9f9f9",
  sidebarBackground: "#ffffff",
  border: "#e0e0e0",
  hover: "#59b5be",
};

const PageContainer = styled.section`
  padding: 40px 0;
  background-color: ${colors.background};
  margin-top: 90px;
  font-family: 'Arial', sans-serif;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 25px;
  display: flex;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const MainContent = styled.div`
  flex: 3;
  font-size: 16px;
  line-height: 1.7;
  color: ${colors.text};
  padding: 25px;
  background-color: ${colors.sidebarBackground};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: ${colors.text};
    margin-bottom: 30px;
    border-bottom: 2px solid ${colors.primary};
    padding-bottom: 10px;
  }

  h4 {
    font-size: 22px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 20px;
    color: ${colors.primary};
    position: relative;
    padding-left: 15px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 70%;
      background-color: ${colors.secondary};
      border-radius: 2px;
    }
  }

  p {
    margin-bottom: 18px;
  }

  ul {
    margin-left: 25px;
    margin-bottom: 18px;
    list-style-type: disc;
    padding-left: 0;
  }

  li {
    margin-bottom: 12px;
    line-height: 1.5;
  }

  li::marker {
    color: ${colors.primary};
    font-size: 1.1em;
  }

  strong {
    font-weight: 700;
    color: ${colors.lightText};
  }
`;

const SidebarNav = styled.aside`
  flex: 1;
  position: sticky;
  top: 120px;
  align-self: flex-start;
  padding: 25px;
  background-color: ${colors.sidebarBackground};
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  max-height: calc(100vh - 140px);
  overflow-y: auto;

  h5 {
    font-size: 18px;
    color: ${colors.text};
    margin-bottom: 20px;
    border-bottom: 1px solid ${colors.border};
    padding-bottom: 10px;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 12px;
  }

  a {
    color: ${colors.lightText};
    text-decoration: none;
    font-size: 15px;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${colors.primary};
      text-decoration: underline;
    }
  }

  @media (max-width: 992px) {
    position: static;
    max-height: none;
    overflow-y: visible;
    margin-bottom: 20px;
  }
`;

interface ContentBlock {
  id: string;
  title: string;
  paragraphs?: string[];
  listItems?: string[];
}

const privacyContent: ContentBlock[] = [
  {
    id: "introduction",
    title: "Privacy Policy",
    paragraphs: [
      "This privacy statement describes how Lumeart collects and uses the personal information you provide on this website: www.lumeart.com. It also describes the choices available to you regarding the use of your personal information and how you can access and update this information."
    ],
  },
  {
    id: "collection-use",
    title: "Collection and Use of Personal Information",
    paragraphs: [
      "This website collects the following personal information from you:",
    ],
    listItems: [
      "Contact Information such as name, email address, or phone number when you submit the forms on our website.",
      "Lumeart automatically gathers information about your computer such as your IP address, browser type, referring/exit pages, and operating system via Google Analytics.",
    ],
  },
  {
    id: "information-use",
    title: "This information is used to:",
    listItems: [
      "Send you requested product or service information.",
      "Respond to customer service requests.",
      "Send you a newsletter.",
      "Send you marketing communications.",
      "Respond to your questions and concerns.",
      "Improve the website and marketing efforts.",
      "Conduct research and analysis.",
    ],
  },
  {
    id: "protecting-info",
    title: "How do we protect your information?",
    paragraphs: [
      "Our website is scanned on a regular basis for security holes and known vulnerabilities in order to make your visit to our site as safe as possible.",
      "Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.",
      "We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information."
    ],
  },
  {
    id: "cookies",
    title: "Do we use ‘cookies’?",
    paragraphs: [
      "Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the site’s or service provider’s systems to recognize your browser and capture and remember certain information. We use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future."
    ],
  },
  {
    id: "third-party-disclosure",
    title: "Third-party disclosure",
    paragraphs: [
      "We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice."
    ],
  },
  {
    id: "data-removal",
    title: "Data removal",
    paragraphs: [
      "We are a GDPR-friendly company, so you have the right to request what you allow us to collect as well as ask to delete all your personal data."
    ],
  },
];

const PrivacyPolicy: React.FC = () => {
  const anchorLinks = privacyContent.map(section => ({
    href: `#${section.id}`,
    label: section.title,
  }));

  return (
    <PageContainer className="page-content page-content-privacy">
      <ContentWrapper className="container">
        <MainContent className="content-privacy">
          <h1>Privacy Policy</h1>

          {privacyContent.map((section) => (
            <React.Fragment key={section.id}>
              <h4 id={section.id}>{section.title}</h4>
              {section.paragraphs && section.paragraphs.map((paragraph, pIndex) => (
                <p key={`p-${section.id}-${pIndex}`}>
                  {paragraph}
                </p>
              ))}
              {section.listItems && (
                <ul>
                  {section.listItems.map((item, liIndex) => (
                    <li key={`li-${section.id}-${liIndex}`}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </MainContent>

        <SidebarNav className="anchor-wrap">
          <h5>Table of Contents</h5>
          <ul>
            {anchorLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </SidebarNav>
      </ContentWrapper>
    </PageContainer>
  );
};

export default PrivacyPolicy;