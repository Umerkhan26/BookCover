import React from "react";
import styled from "styled-components";
import {
  IconSocNet,
  SocialNetwork,
} from "../../pages/Testimonial/testimonial.styles";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaThreads } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/Lumestudio-1.webp";

// Interfaces
interface IFooterLink {
  href: string;
  text: string;
}

interface IFooterCategory {
  name: string;
  links: IFooterLink[];
}

export interface FooterProps {
  partnerLogo: {
    href: string;
    src: string;
    alt: string;
  };
  categories: IFooterCategory[];
  socialLinks: IFooterLink[];
  copyrightText: string;
  brandLogos: {
    src: string;
    alt: string;
    href: string;
  }[];
}

// Styled Components

const FooterPartnerLogo = styled.div`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  position: relative;
  -webkit-font-smoothing: antialiased;
  padding-right: 3.5rem;

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

const FooterName = styled.div`
  font-weight: 800;
  font-size: 15px;
  line-height: 17px;
  text-transform: uppercase;
  color: black;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: -5px;
  }
`;

const FooterContainer = styled.footer`
  background-color: #fafafa;
  padding: 35px 60px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  margin-bottom: -20px;

  @media (max-width: 768) {
    margin-bottom: -30px;
  }

  @media (max-width: 480) {
    margin-bottom: -40px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  // margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterNav = styled.div`
  display: flex;
  color: #212529;
  justify-content: flex-start;
  justify-content: space-between;
  // width: 100%;
  gap: 50px;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const FooterCategoryWrapper = styled.div`
  margin: 0 1rem;
  text-align: left;
  padding-right: 3.5rem;

  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
`;

const FooterItem = styled.li`
  list-style-type: none;
`;

const FooterAnchor = styled.a`
  color: #000000;
  text-decoration: none;
  font-size: 15px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FooterNavLink = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  font-size: 15px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const FooterNote = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 14px;
  color: #455a64;
  margin-bottom: -1rem;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BotFooter = styled.div`
  // padding: 0.2rem 0;
  text-align: center;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px; /* Add some spacing below */

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const Logo = styled.img`
  max-height: 65px;
  width: auto;
  object-fit: contain;
  display: block;

  @media (max-width: 768px) {
    max-height: 84px;
  }

  @media (max-width: 480px) {
    max-height: 74px;
  }
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: 15px;
  color: #000000;
  max-width: 500px;
  margin: 10px auto;
  line-height: 1.5em;
  max-height: 3em;
  overflow: visible;
  white-space: normal;
  word-break: break-word;

  @media (max-width: 600px) {
    font-size: 15px;
    max-width: 90%;
    margin: 10px 5%;
  }

  @media (max-width: 400px) {
    font-size: 15px;
    margin-bottom: 26px;
    text-align: center;
  }
`;

// Footer Component
const Footer: React.FC<FooterProps> = ({
  // partnerLogo,
  categories,
  copyrightText,
}) => {
  return (
    <>
      <FooterContainer>
        <Container>
          <Row>
            {/* Footer Navigation */}
            <FooterNav>
              {/* Partner Logo */}
              <FooterPartnerLogo>
                <LogoContainer>
                  <NavLink to="/">
                    <Logo src={logo} alt="Logo" />
                  </NavLink>
                </LogoContainer>

                <Paragraph>
                  Lumeart Studio is a creative hub for book lovers, authors, and
                  publishers.
                </Paragraph>

                <SocialNetwork
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <IconSocNet
                      href="https://www.facebook.com/share/1EreeG179x/?mibextid=wwXIfr"
                      target="_blank"
                      color="#3b5998"
                    >
                      <FaFacebook size={20} />
                    </IconSocNet>
                    <IconSocNet
                      href="https://www.linkedin.com/company/lumeart-studio/"
                      target="_blank"
                      color="#3b5998"
                    >
                      <FaLinkedin size={20} />
                    </IconSocNet>
                    <IconSocNet
                      href="https://www.threads.com/@lumeart_studio?igshid=NTc4MTIwNjQ2YQ=="
                      target="_blank"
                      color="#1da1f3"
                    >
                      <FaThreads size={20} />
                    </IconSocNet>
                    <IconSocNet
                      href="https://www.instagram.com/lumeart_studios/"
                      target="_blank"
                      color="#E4405F"
                    >
                      <FaInstagram size={20} />
                    </IconSocNet>
                  </div>
                  {/* Copyright Text */}
                </SocialNetwork>
              </FooterPartnerLogo>
              {categories.map((category, index) => (
                <FooterCategoryWrapper key={index}>
                  <FooterName>{category.name}</FooterName>
                  <FooterList>
                    {category.links.map((link, idx) => (
                      <FooterItem key={idx}>
                        {link.href.startsWith("/") || link.href === "" ? (
                          <FooterNavLink to={link.href || "#"}>
                            {link.text}
                          </FooterNavLink>
                        ) : (
                          <FooterAnchor
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.text}
                          </FooterAnchor>
                        )}
                      </FooterItem>
                    ))}
                  </FooterList>
                </FooterCategoryWrapper>
              ))}
            </FooterNav>
          </Row>
          {/* Social Links and Copyright Text */}
        </Container>
      </FooterContainer>

      {/* Bottom Footer */}
      <BotFooter>
        <span
          style={{
            display: "block",
            textAlign: "center",
            fontWeight: 300,
            fontSize: "13px",
            lineHeight: "15px",
            color: "#212121",
          }}
        >
          <FooterNote>{copyrightText}</FooterNote>
        </span>
      </BotFooter>
    </>
  );
};

export default Footer;
