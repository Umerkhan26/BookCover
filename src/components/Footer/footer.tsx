import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaLinkedin, FaThreads } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/Lumestudio-1.webp";

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

const FooterShell = styled.footer`
  background: #f7f9fa;
  border-top: 1px solid #e8eef0;
  font-family: "Manrope", sans-serif;
`;

const FooterInner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 48px 0;
  box-sizing: border-box;

  @media (max-width: 1439px) and (min-width: 993px) {
    padding: 44px 56px 0;
  }

  @media (max-width: 992px) {
    padding: 40px 32px 0;
  }

  @media (max-width: 640px) {
    padding: 36px 20px 0;
  }
`;

const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 36px;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    gap: 32px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 28px;
  }
`;

const BrandBlock = styled.div`
  flex: 0 1 260px;
  max-width: 280px;

  @media (max-width: 992px) {
    flex: 1 1 100%;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Logo = styled.img`
  display: block;
  height: 52px;
  width: auto;
  margin-bottom: 14px;
`;

const BrandText = styled.p`
  margin: 0 0 16px;
  font-size: 0.92rem;
  line-height: 1.55;
  color: #667085;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #e4ebed;
  background: #fff;
  color: #344054;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: #6dc7d1;
    border-color: #6dc7d1;
    color: #fff;
  }
`;

const LinksBlock = styled.div`
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  min-width: 0;

  @media (max-width: 992px) {
    flex: 1 1 100%;
    gap: 24px;
  }

  @media (max-width: 640px) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const LinkCol = styled.div`
  min-width: 0;

  @media (max-width: 640px) {
    text-align: center;
  }
`;

const ColTitle = styled.h3`
  margin: 0 0 14px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #101828;
`;

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 11px;

  @media (max-width: 640px) {
    align-items: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #667085;
  text-decoration: none;
  font-size: 0.92rem;
  line-height: 1.4;

  &:hover {
    color: #6dc7d1;
  }
`;

const StyledAnchor = styled.a`
  color: #667085;
  text-decoration: none;
  font-size: 0.92rem;
  line-height: 1.4;

  &:hover {
    color: #6dc7d1;
  }
`;

const ContactBlock = styled.div`
  flex: 0 1 250px;
  max-width: 280px;

  @media (max-width: 992px) {
    flex: 1 1 100%;
    max-width: 100%;
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ContactList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  line-height: 1.45;
  color: #667085;

  .icon {
    color: #6dc7d1;
    flex-shrink: 0;
    margin-top: 2px;
  }

  a {
    color: #667085;
    text-decoration: none;
    word-break: break-word;

    &:hover {
      color: #6dc7d1;
    }
  }

  @media (max-width: 640px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #e8eef0;
  padding: 14px 0;
  text-align: center;
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.84rem;
  color: #98a2b3;
  line-height: 1.4;
`;

const Footer: React.FC<FooterProps> = ({ categories, copyrightText }) => {
  return (
    <FooterShell>
      <FooterInner>
        <FooterTop>
          <BrandBlock>
            <NavLink to="/">
              <Logo src={logo} alt="Lumeart Studio" />
            </NavLink>
            <BrandText>
              Lumeart Studio is a creative hub for book lovers, authors, and
              publishers.
            </BrandText>
            <SocialRow>
              <SocialLink
                href="https://www.facebook.com/share/1EreeG179x/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={15} />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/lumeart-studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={15} />
              </SocialLink>
              <SocialLink
                href="https://www.threads.com/@lumeart_studio?igshid=NTc4MTIwNjQ2YQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
              >
                <FaThreads size={15} />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/lumeart_studios/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={15} />
              </SocialLink>
            </SocialRow>
          </BrandBlock>

          <LinksBlock>
            {categories.map((category) => (
              <LinkCol key={category.name}>
                <ColTitle>{category.name}</ColTitle>
                <LinkList>
                  {category.links.map((link) => (
                    <li key={`${category.name}-${link.text}`}>
                      {link.href.startsWith("/") || link.href === "" ? (
                        <StyledNavLink to={link.href || "#"}>
                          {link.text}
                        </StyledNavLink>
                      ) : (
                        <StyledAnchor
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.text}
                        </StyledAnchor>
                      )}
                    </li>
                  ))}
                </LinkList>
              </LinkCol>
            ))}
          </LinksBlock>

          <ContactBlock>
            <ColTitle>Contact</ColTitle>
            <ContactList>
              <ContactItem>
                <FaMapMarkerAlt className="icon" size={14} />
                <span>30 N Gould Ste R, Sheridan, WY 82801</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope className="icon" size={14} />
                <a href="mailto:studioslumeart@gmail.com">
                  studioslumeart@gmail.com
                </a>
              </ContactItem>
              <ContactItem>
                <FaPhone className="icon" size={14} />
                <a href="tel:+13153332077">+1 (315) 333-2077</a>
              </ContactItem>
            </ContactList>
          </ContactBlock>
        </FooterTop>

        <FooterBottom>
          <Copyright>{copyrightText}</Copyright>
        </FooterBottom>
      </FooterInner>
    </FooterShell>
  );
};

export default Footer;
