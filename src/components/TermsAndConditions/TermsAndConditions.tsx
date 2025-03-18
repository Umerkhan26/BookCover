import React from "react";
import styled from "styled-components";

// Styled components
const PageContent = styled.section`
  padding: 40px 0;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const RowContent = styled.div`
  display: flex;
  gap: 30px;
`;

const ContentTerm = styled.div`
  flex: 3;
  font-size: 16px;
  line-height: 1.6;
  color: #333;

  h4 {
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 15px;
    color: #007bff;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    margin-left: 20px;
    margin-bottom: 15px;
  }

  li {
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
  }
`;

const AnchorWrap = styled.div`
  flex: 1;
  position: sticky;
  top: 20px;
  align-self: flex-start;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Type for AnchorLink
interface AnchorLink {
  href: string;
  label: string;
}

// Terms and Conditions Component
const TermsAndConditions: React.FC = () => {
  // Sample links for the AnchorWrap section (you can add more links based on content)
  const anchorLinks: AnchorLink[] = [
    { href: "#cover-design-services", label: "COVER DESIGN SERVICES" },
    { href: "#interior-formatting-service", label: "INTERIOR FORMATTING SERVICE" },
    { href: "#other-services", label: "OTHER SERVICES" },
    { href: "#license-and-publishing-rights", label: "LICENSE AND PUBLISHING RIGHTS" },
    { href: "#client-responsibilities", label: "CLIENT RESPONSIBILITIES" },
    { href: "#liability", label: "LIABILITY" },
    { href: "#payment", label: "PAYMENT" },
    { href: "#bonus-points-system", label: "BONUS POINTS SYSTEM" },
    { href: "#communication", label: "COMMUNICATION" },
    { href: "#contract", label: "CONTRACT" },
    { href: "#cancelation-policy", label: "CANCELATION POLICY" },
    { href: "#modification-of-agreement", label: "MODIFICATION OF AGREEMENT" },
    { href: "#severability", label: "SEVERABILITY" },
  ];

  return (
    <PageContent className="page-content page-content-terms">
      <Container className="container">
        <RowContent className="row-content">
          <ContentTerm className="content-term">
            <p>
              <span style={{ fontWeight: 400 }}>
                These Terms &amp; Conditions form an agreement between you (the
                Client) and MiblArt (the Company).
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>
                MiblArt is a Company that provides:
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>
                1. Cover design services:&nbsp;
              </span>
            </p>
            <ul>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>
                  Photo-manipulated ebook and print book cover designs
                </span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>Audiobook cover designs</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>
                  Kindle Vella cover designs
                </span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>
                  Illustrated book cover designs
                </span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>
                  Children’s illustrated cover designs&nbsp;
                </span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>
                  Illustrated character designs
                </span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>
                  Vector illustration cover designs
                </span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>Typography designs</span>
              </li>
            </ul>
            <p>
              <span style={{ fontWeight: 400 }}>
                2. Interior book formatting and layouts&nbsp;
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>
                3. Logo design and branding guidelines
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>
                4. Marketing material designs, such as:
              </span>
            </p>
            <ul>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>Cover reveal images</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>Social media covers</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>Book release banners</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>Ad images</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>A+ content</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>Bookmark designs</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>Box set images</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>Business card designs</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>
                  Book cover animations, etc.
                </span>
              </li>
            </ul>
            <p>
              <span style={{ fontWeight: 400 }}>
                The Company reserves the right to modify, alter, or add services
                at any time and without prior notice, except if the Client has
                already submitted the order or the Company has already started
                to execute the Client’s order, in which case no changes will be
                made.
              </span>
            </p>
            <h4 id="cover-design-services">COVER DESIGN SERVICES</h4>
            <p>
              <span style={{ fontWeight: 400 }}>
                1. The Company and the Client must reach a written agreement on
                pricing before proceeding to the design phase. The price for the
                book cover design may vary according to the complexity of the
                ideas presented by the Client. If the Client requests different
                concepts during the design execution that were not initially
                discussed and agreed upon, additional fees may need to be
                negotiated prior to their execution.
              </span>
            </p>
            <p>
              2. <b>No fee</b> is charged if the Client needs to change:
            </p>
            <ul>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>The size of the cover</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>The width of the spine</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>The number of pages</span>
              </li>
              <li style={{ fontWeight: 400 }}  aria-level={1}>
                <span style={{ fontWeight: 400 }}>
                  The text on the back cover
                </span>
              </li>
              {/* Add more content here */}
            </ul>
          </ContentTerm>
          <AnchorWrap className="anchor-wrap">
            <ul>
              {anchorLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </AnchorWrap>
        </RowContent>
      </Container>
    </PageContent>
  );
};

export default TermsAndConditions;
