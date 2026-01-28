import React from "react";
import styled from "styled-components";
import bannerImg from "../../assets/PageBanner/6.webp";
import FictionsCover from "../../pages/FictionCover/FictionCoverPage";

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
  /* margin-top: 90px; */
  font-family: "Arial", sans-serif;
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
      content: "";
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

const termsContent: ContentBlock[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      "Welcome to Lumeart! These Terms &amp; Conditions (hereinafter referred to as 'Terms') constitute a legally binding agreement between you (the 'Client' or 'User') and Lumeart (the 'Company,' 'we,' 'us,' or 'our'). By accessing or using any of our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. We reserve the right to update, change, or replace any part of these Terms by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.",
      "Lumeart specializes in providing high-quality creative services tailored for authors, publishers, and businesses in the literary and digital content industries. Our commitment is to deliver exceptional design and formatting solutions that meet your publishing and marketing needs.",
    ],
  },
  {
    id: "service-offerings",
    title: "Service Offerings",
    paragraphs: [
      "Lumeart provides a comprehensive range of design and formatting services, including but not limited to:",
      "1. Cover Design Services:",
    ],
    listItems: [
      "Photo-manipulated Ebook and Print Book Cover Designs: Creation of visually stunning covers using advanced photo manipulation techniques, optimized for both digital and physical formats.",
      "Audiobook Cover Designs: Specialized square format cover designs for audiobook platforms, ensuring clarity and impact at various resolutions.",
      "Kindle Vella Cover Designs: Custom designs optimized for Amazon's Kindle Vella serial reading platform.",
      "Illustrated Book Cover Designs: Original illustrations crafted to bring your book's unique narrative to life.",
      "Children’s Illustrated Cover Designs: Whimsical and engaging illustrations designed specifically for children's literature.",
      "Illustrated Character Designs: Development of original character artwork for integration into covers or promotional materials.",
      "Vector Illustration Cover Designs: Scalable, crisp vector-based designs suitable for a wide range of applications.",
      "Typography Designs: Expertise in selecting and custom-crafting typefaces to perfectly complement your book's genre and message.",
    ],
  },
  {
    id: "interior-formatting-service",
    title: "Interior Formatting Service",
    paragraphs: [
      "Our interior formatting service aims to transform your manuscript into a professionally laid-out book, ready for publishing across various platforms.",
    ],
    listItems: [
      "Manuscript Preparation: Clients must provide a final, edited manuscript in a standard document format (e.g., .docx, .rtf). Any significant changes to the manuscript content after formatting has begun may incur additional revision fees.",
      "Formatting Standards: We adhere to industry-standard formatting guidelines for both print and ebook files, ensuring compatibility with major platforms like Amazon KDP, IngramSpark, Smashwords, etc.",
      "Revisions for Formatting: Minor revisions related to formatting errors or aesthetic adjustments are typically included. However, extensive content edits or structural changes to the manuscript once formatting is complete will be subject to additional charges based on the time required.",
      "Deliverables: Final formatted files will be provided in the agreed-upon formats (e.g., print-ready PDF, EPUB, MOBI).",
    ],
  },
  {
    id: "other-design-marketing-services",
    title: "Other Design & Marketing Services",
    paragraphs: [
      "Beyond book covers and interior formatting, Lumeart offers a suite of supplementary design and marketing materials to support your publishing efforts.",
    ],
    listItems: [
      "Scope Definition: For each marketing material design, a clear scope of work, including dimensions, content, and desired style, must be agreed upon prior to project commencement.",
      "Content Provision: Clients are responsible for providing all necessary text, logos, or specific imagery required for these marketing materials.",
      "Revision Policy: A limited number of revisions (typically 1-2 rounds) are included for marketing materials, to be specified in the project agreement. Additional revisions beyond the agreed scope may incur extra fees.",
      "Usage Rights: Unless otherwise specified, design files for marketing materials are provided for the Client's promotional use.",
    ],
  },
  {
    id: "cover-design-services",
    title: "Detailed Cover Design Services & Process",
    paragraphs: [
      "1. Agreement on Pricing and Scope: The Company and the Client must establish a clear written agreement regarding the pricing and scope of the cover design project before any design work commences. The final price for a book cover design is influenced by the complexity of the artistic vision, the number of included revisions, and the specific requirements presented by the Client. Should the Client request significant conceptual changes or entirely new design directions that were not initially discussed and agreed upon, Lumeart reserves the right to negotiate additional fees to cover the increased scope of work. These additional fees will be communicated to the Client and must be approved before execution.",
      "2. Complimentary Revisions and Adjustments: Lumeart understands that minor adjustments are often necessary. Therefore, no additional fee will be charged if the Client needs to modify the following aspects of the cover design:",
    ],
    listItems: [
      "Cover Dimensions: Adjustments to the overall width or height of the cover.",
      "Spine Width: Changes to the spine width to accurately reflect the book's page count, once the final page count is known.",
      "Page Count: Updates to the design to accommodate a revised total page count.",
      "Back Cover Text: Minor edits, additions, or removals of text on the back cover.",
      "Typo Corrections: Correction of any typographical errors introduced by the designer.",
      "Minor Color Adjustments: Subtle tweaks to color tones for better visual balance.",
      "Placement Adjustments: Small shifts in the placement of existing elements (e.g., title, author name, specific imagery).",
      "These complimentary revisions are intended for fine-tuning the existing design concept, not for generating entirely new concepts. Extensive revisions or requests that fundamentally alter the initial agreed-upon concept may incur additional charges.",
    ],
  },
  {
    id: "license-and-publishing-rights",
    title: "License and Publishing Rights",
    paragraphs: [
      "Upon full and final payment for any design or formatting service provided by Lumeart, the Client will receive the following rights:",
    ],
    listItems: [
      "Exclusive, Worldwide, Commercial Use License: For custom book cover designs, the Client receives an exclusive, worldwide, commercial license to use the final cover art for their book(s) across all formats (ebook, print, audiobook, etc.) and for all promotional activities related to the book.",
      "Ownership of Final Deliverables: The Client gains full ownership of the final, delivered design files (e.g., .jpg, .png, .pdf, .epub) corresponding to the completed project.",
      "Company's Right to Portfolio Use: Lumeart retains the right to use the completed work as part of its professional portfolio, for marketing purposes, and in design competitions, unless specifically agreed otherwise in writing.",
      "Source Files: Unless explicitly stated and agreed upon in the initial project scope and pricing, source files (e.g., .psd, .indd) are not included in the standard deliverables. If source files are required, this must be negotiated and will incur an additional fee.",
      "Stock Image Licensing: If stock images are used in the design, Lumeart ensures they are properly licensed for commercial use within the book cover design context. The Client is responsible for understanding any limitations of these licenses for broader use beyond the book cover (e.g., using a specific stock model's image for merchandise not directly related to the book).",
    ],
  },
  {
    id: "client-responsibilities",
    title: "Client Responsibilities",
    paragraphs: [
      "To ensure a smooth and efficient design process, the Client agrees to:",
    ],
    listItems: [
      "Provide Clear Briefs: Furnish Lumeart with comprehensive and clear creative briefs, including all necessary information, inspirations, and specifications for the project.",
      "Timely Feedback: Provide timely and constructive feedback on design concepts and revisions within agreed-upon deadlines. Delays in feedback may extend project timelines.",
      "Accurate Information: Ensure all provided text (e.g., titles, author names, blurbs, back cover copy) is accurate, edited, and free of errors. Lumeart is not responsible for errors in client-provided content.",
      "Necessary Materials: Supply all required materials (e.g., manuscript, author photos, specific logos) in the requested formats.",
      "Adherence to Payment Terms: Honor all payment obligations as outlined in the 'Payment Terms' section.",
      "Communication: Maintain open and consistent communication with Lumeart throughout the project duration.",
    ],
  },
  {
    id: "project-delivery-and-revisions",
    title: "Project Delivery & Revisions",
    paragraphs: [
      "1. Initial Concepts & Timelines: Upon receipt of the complete creative brief and any initial payment, Lumeart will provide an estimated timeline for the delivery of initial design concepts. This timeline is an estimate and can vary based on project complexity and current workload. We strive to meet all deadlines efficiently.",
      "2. Revision Rounds: Each project type (e.g., cover design, interior formatting) includes a specified number of revision rounds. These rounds are designed for refining the chosen concept.",
      "* Minor Revisions: Included within the initial scope (e.g., text edits, color tweaks, small element adjustments).",
      "* Major Revisions / New Concepts: Significant changes to the overall design concept, requiring a substantial rework, will incur additional charges. These will be discussed and approved by the Client before proceeding.",
      "3. Final Delivery: Once the Client approves the final design and all payments are settled, Lumeart will deliver the final high-resolution files in the agreed-upon formats. We typically provide files optimized for various publishing platforms. Clients should carefully review all final files upon receipt.",
      "4. Post-Delivery Adjustments: After final delivery, minor adjustments (e.g., slight text corrections or dimension changes) may be accommodated at no extra charge within a reasonable timeframe (e.g., 7-14 days), provided they do not involve significant design work. Major post-delivery changes will be quoted as new projects.",
    ],
  },
  {
    id: "liability-and-disclaimer",
    title: "Liability and Disclaimer",
    paragraphs: [
      "1. Accuracy of Client-Provided Content: Lumeart is not responsible for any typographical errors, factual inaccuracies, or copyright infringements in materials provided by the Client. The Client is solely responsible for proofreading all content supplied for inclusion in the design and for ensuring they have the necessary rights to use all provided materials (text, images, logos, etc.).",
      "2. Third-Party Platforms: While Lumeart strives to provide files compatible with major publishing platforms (e.g., Amazon KDP, IngramSpark), we cannot guarantee flawless performance or approval on every single platform due to varying and often changing technical requirements. It is the Client's responsibility to review and test the delivered files on their chosen platforms.",
      "3. Limited Liability: In no event shall Lumeart be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to, loss of profits, data, or goodwill, arising from the use or inability to use our services, even if Lumeart has been advised of the possibility of such damages. The Client agrees that Lumeart's total liability for any claim arising out of or relating to this agreement shall not exceed the total fees paid by the Client to Lumeart for the specific services from which the claim arose.",
      "4. Force Majeure: Lumeart shall not be deemed in breach of this agreement if performance of the services is delayed or prevented by acts of God, war, terrorism, natural disasters, strikes, governmental actions, or any other cause beyond our reasonable control.",
    ],
  },
  {
    id: "payment-terms",
    title: "Payment Terms",
    paragraphs: [
      "All services require an upfront payment or a deposit, as specified in the individual project agreement.",
    ],
    listItems: [
      "Deposit: For most projects, a non-refundable deposit (typically 50% of the total project cost) is required before any design work commences. This deposit secures your slot and covers initial creative time.",
      "Final Payment: The remaining balance is due upon final approval of the design and prior to the delivery of the high-resolution, final files.",
      "Payment Methods: Lumeart accepts payments via [list accepted methods, e.g., PayPal, bank transfer, credit card via secure portal].",
      "Late Payments: Invoices not paid within [e.g., 7 days] of the due date may incur a late fee of [e.g., 5%] of the outstanding balance per week. Projects with outstanding balances will not have final files delivered.",
      "Pricing: All prices quoted are in [e.g., USD] unless otherwise specified.",
    ],
  },
  {
    id: "bonus-points-system",
    title: "Bonus Points System",
    paragraphs: [
      "Lumeart values its loyal clients. We operate a Bonus Points System to reward returning customers.",
    ],
    listItems: [
      "Earning Points: For every [e.g., $100] spent on Lumeart services, clients will earn [e.g., 1] bonus point.",
      "Redeeming Points: Accumulated bonus points can be redeemed against future Lumeart services at a rate of [e.g., $1] discount per point. Points cannot be redeemed for cash and are non-transferable.",
      "Point Expiry: Bonus points may have an expiration date, which will be clearly communicated upon accrual.",
      "System Modification: Lumeart reserves the right to modify or discontinue the Bonus Points System at any time, with reasonable notice provided to existing point holders. Points earned before such modifications will retain their value or be subject to new terms as communicated.",
    ],
  },
  {
    id: "communication-protocol",
    title: "Communication Protocol",
    paragraphs: [
      "Effective communication is key to successful project completion.",
    ],
    listItems: [
      "Primary Channel: All primary project-related communication should occur via [e.g., email to support@lumeart.com or through our client portal]. This ensures a clear, documented record of discussions and decisions.",
      "Response Time: Lumeart aims to respond to all client inquiries within [e.g., 24-48 business hours].",
      "Clarity: Clients are encouraged to provide feedback and instructions in a clear, concise, and consolidated manner to avoid misunderstandings and delays.",
    ],
  },
  {
    id: "contract-agreement",
    title: "Contract Agreement",
    paragraphs: [
      "By initiating a project with Lumeart, the Client formally agrees to these Terms and Conditions, which form the basis of our service agreement.",
    ],
    listItems: [
      "Binding Agreement: The acceptance of a quote or the submission of an order form, along with any required deposit payment, signifies the Client's full agreement to these Terms.",
      "Project Scope Document: For complex projects, a separate project scope document may be drafted, detailing specific deliverables, timelines, and payment milestones. This document, once signed by both parties, will serve as an extension of these Terms.",
    ],
  },
  {
    id: "cancellation-and-refund-policy",
    title: "Cancellation & Refund Policy",
    paragraphs: [
      "1. Cancellation by Client: If the Client chooses to cancel a project after work has commenced:",
      "* Before Initial Concepts: If cancellation occurs before any initial design concepts have been presented, the upfront deposit (if applicable) is non-refundable but may be retained as a credit for future services, minus any administrative fees.",
      "* After Initial Concepts / During Revisions: If cancellation occurs after initial concepts have been presented or during the revision phase, the Client will be responsible for a prorated payment for the work completed up to the cancellation date, including the non-refundable deposit. Any excess payment will be refunded.",
      "* After Final Approval/Delivery: No refunds will be issued once the final design has been approved by the Client and/or the final files have been delivered.",
      "* Requests for Refunds: All refund requests must be made in writing.",
      "2. Cancellation by Company: Lumeart reserves the right to cancel a project at any time if:",
      "The Client fails to provide necessary materials or feedback in a timely manner, significantly delaying the project.",
      "There is a breach of these Terms by the Client.",
      "Unforeseen circumstances prevent Lumeart from completing the project to its quality standards.",
      "In such cases, any payments received will be refunded on a prorated basis for work not completed, after deducting costs for work already performed.",
    ],
  },
  {
    id: "modification-of-agreement",
    title: "Modification of Agreement",
    paragraphs: [
      "Lumeart reserves the right to modify these Terms and Conditions at any time without prior individual notice. All modifications will be posted on this page and will be effective immediately upon posting. It is the Client's responsibility to review these Terms periodically for changes. Continued engagement with Lumeart's services after any modifications signifies the Client's acceptance of the revised Terms. For existing, ongoing projects, the terms under which the project was initiated will generally apply, unless explicitly agreed otherwise.",
    ],
  },
  // {
  //   id: "governing-law-and-jurisdiction",
  //   title: "Governing Law and Jurisdiction",
  //   paragraphs: [
  //     "These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Country/State/Province, e.g., the laws of Pakistan], without regard to its conflict of law provisions.",
  //     "Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Your City/Region, e.g., Lahore, Pakistan].",
  //   ],
  // },
  {
    id: "severability",
    title: "Severability",
    paragraphs: [
      "If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole. Such provision shall be deleted without affecting the remaining provisions herein. The remaining provisions of these Terms will continue in full force and effect.",
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    paragraphs: [
      "If you have any questions or concerns regarding these Terms and Conditions, please do not hesitate to contact us at:",
      "Email: studioslumeart@gmail.com",
      "Website: www.lumeart.com",
      "We are committed to providing clarity and transparency in our services.",
    ],
  },
];

const TermsAndConditions: React.FC = () => {
  const anchorLinks = termsContent.map((section) => ({
    href: `#${section.id}`,
    label: section.title,
  }));

  return (
    <>
      <FictionsCover
        title="Terms And Conditions"
        subtitle="CLEAR TERMS. CREATIVE COVERS. TRUSTED PARTNERSHIP."
        image={bannerImg}
        bookCoversText=""
        showCircles={false}
        formatSubtitle={false}
      />
      <PageContainer className="page-content page-content-terms">
        <ContentWrapper className="container">
          <MainContent className="content-term">
            <h1>Terms and Conditions</h1>

            {termsContent.map((section) => (
              <React.Fragment key={section.id}>
                <h4 id={section.id}>{section.title}</h4>
                {section.paragraphs &&
                  section.paragraphs.map((paragraph, pIndex) => (
                    <p key={`p-${section.id}-${pIndex}`}>{paragraph}</p>
                  ))}
                {section.listItems && (
                  <ul>
                    {section.listItems.map((item, liIndex) => (
                      <li key={`li-${section.id}-${liIndex}`}>{item}</li>
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
    </>
  );
};

export default TermsAndConditions;
