import { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/Lumestudio-1.png";
import { useAuth } from "../../context/authContext";

interface NavNBtnProps {
  isMenuOpen: boolean;
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollable-menu::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollable-menu {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Manrope", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 75px;
`;

const Logo = styled.img`
  height: 35px;
  width: auto;
  display: block;
`;

const NavLinkButton = styled(NavLink)`
  display: inline-block;
  color: #6d6d6d;
  font-size: 15px;
  font-weight: 200;
  text-transform: capitalize;
  padding: 5px 20px;
  text-align: left;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 15px;
  background: rgba(255, 255, 255, 0.4);

  &:hover {
    color: #14b8b8;
    background: rgba(255, 255, 255, 0.6);
  }
`;

const NavButton = styled(NavLink)`
  display: inline-block;
  color: white;
  background-color: #6dc7d1;
  font-weight: 600;
  font-size: 14px;
  padding: 9px 25px;
  border-radius: 4px;
  text-align: left;
  text-decoration: none;
  margin-right: 15px;

  &:hover {
    color: #ffffff;
    background-color: #4fa3a2;
  }
`;

const NavText = styled(NavLink)`
  display: inline-block;
  color: #6dc7d1;
  font-weight: bold;
  font-size: 14px;
  padding: 6px 25px;
  text-align: left;
  text-decoration: none;
  margin-right: 15px;

  &:hover {
    color: #4fa3a2;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  height: auto;
  max-height: 200px; /* Set max height for dropdown */
  overflow-y: auto; /* Enable vertical scroll */
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  z-index: 1000;
  border-radius: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  margin-left: -13vw;
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;
  gap: 6px;

  &.active {
    display: flex;
    opacity: 1;
    pointer-events: auto;
  }
`;

const DropdownItem = styled(NavLink)`
  color: #6d6d6d;
  text-decoration: none;
  padding: 18px 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(30% - 10px);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 5px;

  &:hover {
    color: #14b8b8;
    background: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  color: black;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1100;
  }
`;

const ContactUsWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
  }
`;

const NavNBtn = styled.nav<NavNBtnProps>`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0;
  justify-content: flex-start;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    overflow-y: auto;
    background-color: white;
    z-index: 1000;
    padding: 20px;
    align-items: flex-start;
    gap: 15px;
  }
`;

const MobileContactButton = styled(NavButton)`
  display: none;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

const ServicesLink = styled(NavLinkButton)`
  position: relative;
  padding-right: 30px;

  &::after {
    content: "▼";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    transition: transform 0.3s ease;

    @media (min-width: 769px) {
      display: none;
    }
  }

  &.active::after {
    transform: translateY(-50%) rotate(180deg);
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownMenu} {
    display: flex;
    opacity: 1;
    pointer-events: auto;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (!isAuthenticated) {
      localStorage.setItem("redirectAfterLogin", "/portal");
      navigate("/login");
    } else {
      navigate("/portal/orders");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Nav>
        <HeaderContainer>
          <NavLink to="/">
            <Logo src={logo} alt="Logo" />
          </NavLink>
          <ContactUsWrapper>
            <MobileContactButton to="/contactUs">
              Contact Us
            </MobileContactButton>
          </ContactUsWrapper>

          <div ref={menuRef}>
            <HamburgerMenu onClick={toggleMenu}>
              {isMenuOpen ? (
                <span style={{ color: "black" }}>✖</span>
              ) : (
                <span style={{ color: "black" }}>☰</span>
              )}
            </HamburgerMenu>
          </div>
          <NavNBtn
            isMenuOpen={isMenuOpen}
            className="scrollable-menu"
            ref={menuRef}
          >
            <DropdownContainer>
              <ServicesLink
                to="/services"
                onClick={toggleServices}
                className={isServicesOpen ? "active" : ""}
              >
                Services
              </ServicesLink>
              <DropdownMenu className={isServicesOpen ? "active" : ""}>
                <DropdownItem to="/fictionCover">
                  Fiction Cover Design
                </DropdownItem>
                <DropdownItem to="/illustrated">
                  Illustrated Cover Design
                </DropdownItem>
                <DropdownItem to="/bookCoverRedesign">
                  Book Covers Redesign
                </DropdownItem>
                <DropdownItem to="/nonFiction">
                  Non-Fiction Cover Design
                </DropdownItem>
                {/* <DropdownItem to="/portfolio-2">
                    Premium Cover Design
                  </DropdownItem> */}
                <DropdownItem to="/audioBookCover">
                  Audiobook Cover Design
                </DropdownItem>
                <DropdownItem to="/logoBrand">Logo & Branding</DropdownItem>
              </DropdownMenu>
            </DropdownContainer>

            <NavLinkButton to="/portfolio">Portfolio</NavLinkButton>
            <NavLinkButton to="/aboutUs">About Us</NavLinkButton>
            <NavLinkButton to="/FAQs">FAQ</NavLinkButton>
            <NavLinkButton to="/contactUs">Contact Us</NavLinkButton>
            <NavLinkButton to="/partner">Partner With Us</NavLinkButton>

            {/* Conditionally render "Client Portal" and "Get a Cover" based on screen size */}
            {!isMenuOpen && (
              <>
                <NavText to="/portal/orders" onClick={handleNavigation}>
                  Client Portal
                </NavText>
                <NavButton to="/GetACover">Get a Cover</NavButton>
              </>
            )}
          </NavNBtn>
        </HeaderContainer>
      </Nav>
    </>
  );
}

export default Header;
