import React from "react";
import styled from "styled-components";
import {
  IconSocNet,
  SocialNetwork,
} from "../../pages/Testimonial/testimonial.styles";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/Lumestudio-1.png";

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
`;

const FooterName = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 17px;
  text-transform: uppercase;
  color: black;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FooterContainer = styled.footer`
  background-color: #fafafa;
  padding: 90px 0px 0px;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;

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
  gap: 80px;

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
  color: #8c8c8c;
  text-decoration: none;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FooterNote = styled.p`
  text-align: center;
  margin-top: 0.6rem;
  font-size: 14px;
  color: #455a64;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BotFooter = styled.div`
  padding: 0.2rem 0;
  text-align: center;
`;

// const RowLogo = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   margin-top: 20px;
//   gap: 60px;
//   align-items: center;

//   @media (max-width: 768px) {
//     gap: 30px;
//   }
// `;

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
  height: 55px;
  width: auto;
  display: block;

  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 480px) {
    height: 35px;
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
            {/* Partner Logo */}
            <FooterPartnerLogo>
              <LogoContainer>
                <NavLink to="/">
                  <Logo src={logo} alt="Logo" />
                </NavLink>
              </LogoContainer>
              <Row>
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
                      href="https://www.facebook.com/AuthorDavidBLyons"
                      target="_blank"
                      color="#3b5998"
                    >
                      <FaFacebook size={20} />
                    </IconSocNet>
                    <IconSocNet
                      href="https://www.facebook.com/AuthorDavidBLyons"
                      target="_blank"
                      color="#3b5998"
                    >
                      <FaLinkedin size={20} />
                    </IconSocNet>
                    <IconSocNet
                      href="https://twitter.com/theopenauthor"
                      target="_blank"
                      color="#1da1f3"
                    >
                      <FaTwitter size={20} />
                    </IconSocNet>
                    <IconSocNet
                      href="https://www.instagram.com/theopenauthor/"
                      target="_blank"
                      color="#E4405F"
                    >
                      <FaInstagram size={20} />
                    </IconSocNet>
                  </div>
                  {/* Copyright Text */}
                </SocialNetwork>
              </Row>
            </FooterPartnerLogo>

            {/* Footer Navigation */}
            <FooterNav>
              {categories.map((category, index) => (
                <FooterCategoryWrapper key={index}>
                  <FooterName>{category.name}</FooterName>
                  <FooterList>
                    {category.links.map((link, idx) => (
                      <FooterItem key={idx}>
                        <FooterAnchor href={link.href}>
                          {link.text}
                        </FooterAnchor>
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
        <Container>
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
        </Container>
      </BotFooter>
    </>
  );
};

export default Footer;
