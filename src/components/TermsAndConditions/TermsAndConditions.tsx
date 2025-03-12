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

// Terms and Conditions Component
const TermsAndConditions: React.FC = () => {
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
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  Photo-manipulated ebook and print book cover designs
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>Audiobook cover designs</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  Kindle Vella cover designs
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  Illustrated book cover designs
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  Children’s illustrated cover designs&nbsp;
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  Illustrated character designs
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  Vector illustration cover designs
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
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
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>Cover reveal images</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>Social media covers</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>Book release banners</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>Ad images</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>A+ content</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>Bookmark designs</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>Box set images</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>Business card designs</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
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
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>The size of the cover</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>The width of the spine</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>The number of pages</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  The text on the back cover
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  The title or the subtitle
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>The author’s name</span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  The author’s photo on the back cover
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>The barcode</span>
              </li>
            </ul>
            {/* Add the rest of the content here */}
          </ContentTerm>
          <AnchorWrap className="anchor-wrap">
            <ul>
              <li>
                <a href="#cover-design-services">COVER DESIGN SERVICES</a>
              </li>
              <li>
                <a href="#interior-formatting-service">
                  INTERIOR FORMATTING SERVICE
                </a>
              </li>
              <li>
                <a href="#other-services">OTHER SERVICES</a>
              </li>
              <li>
                <a href="#license-and-publishing-rights">
                  LICENSE AND PUBLISHING RIGHTS
                </a>
              </li>
              <li>
                <a href="#client-responsibilities">CLIENT RESPONSIBILITIES</a>
              </li>
              <li>
                <a href="#liability">LIABILITY</a>
              </li>
              <li>
                <a href="#payment">PAYMENT</a>
              </li>
              <li>
                <a href="#bonus-points-system">BONUS POINTS SYSTEM</a>
              </li>
              <li>
                <a href="#communication">COMMUNICATION</a>
              </li>
              <li>
                <a href="#contract">CONTRACT</a>
              </li>
              <li>
                <a href="#cancelation-policy">CANCELATION POLICY</a>
              </li>
              <li>
                <a href="#modification-of-agreement">
                  MODIFICATION OF AGREEMENT
                </a>
              </li>
              <li>
                <a href="#severability">SEVERABILITY</a>
              </li>
            </ul>
          </AnchorWrap>
        </RowContent>
      </Container>
    </PageContent>
  );
};

export default TermsAndConditions;
