import { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/Lumestudio-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import userlogo from '../../assets//userlogo.png';
import LoginModal from "../Login/LoginModel";
interface NavNBtnProps {
  isMenuOpen: boolean;
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Manrope", sans-serif;
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
  padding: 20px 40px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 85px;

  @media (max-width: 1024px) {
    padding: 15px 20px;
  }
`;

const Logo = styled.img`
  height: 47px;
  width: auto;
  display: block;
  vertical-align: middle;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinkButton = styled(NavLink)`
  display: inline-block;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 8px 20px;
  text-align: left;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 15px;
  background: rgba(255, 255, 255, 0.4);

  &:hover {
    color: #14b8b8;
    background: rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 1024px) {
    font-size: 28px;
    padding: 20px 50px;
    margin-right: 50px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    padding: 15px 42px;
    margin-right: 30px;
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

  @media (max-width: 1024px) {
    padding: 15px 50px;
    margin-left: 40px;
  }

  @media (max-width: 768px) {
    padding: 15px 42px;
    margin-left: 38px;
  }
`;

const NavText = styled.div`
  display: inline-block;
  color: #6dc7d1;
  font-weight: bold;
  font-size: 15px;
  padding: 8px 25px;
  text-align: left;
  text-decoration: none;
  margin-right: 15px;

  &:hover {
    color: #4fa3a2;
  }

  @media (max-width: 1024px) {
    padding: 15px 47px;
    font-size: 28px;
  }

  @media (max-width: 768px) {
    padding: 15px 42px;
    font-size: 22px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    justify-content: space-between;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DropdownItem = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  padding: 10px 10px;
  font-size: 16px;
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
    font-size: 20px;
    padding: 6px 26px;
    justify-content: flex-start;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  @media (max-width: 1024px) {
    display: flex;
    position: absolute;
    top: 18px;
    right: 18px;
    z-index: 1100;
  }

  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 18px;
    right: 18px;
    z-index: 1100;
  }
`;

const MenuIcon = styled.span`
  font-size: 44px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 12px;

  @media (max-width: 768px) {
    font-size: 32px;
    font-weight: 50;
  }
  @media (max-width: 390px) {
    margin-left: 20px;
  }
`;

const ContactUsWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
`;

const NavNBtn = styled.nav<NavNBtnProps>`
  display: flex;
  align-items: start;
  flex-grow: 1;
  justify-content: flex-start;
  background-color: white;
  transition: opacity 0.3s ease, transform 0.3s ease;

  @media (max-width: 1024px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    position: absolute;
    top: 75px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 75px);
    flex-direction: column;
    gap: 15px;
    font-size: 22px;
    padding: 15px 0px;
  }

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    position: absolute;
    top: 75px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 75px);
    flex-direction: column;
    gap: 15px;
    font-size: 22px;
    padding: 15px 0px;
  }
`;

const MobileContactButton = styled(NavButton)`
  display: none;
  padding: 6px 16px;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

const ServicesLink = styled(NavLinkButton)`
  position: relative;
  padding-right: 30px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 1028px) {
    .chevron-icon {
      display: none;
    }
  }

  @media (max-width: 768px) {
    font-size: 22px;
    padding: 15px 42px;
  }

  .mobile-menu & {
    font-size: 22px;
    padding: 15px 42px;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  height: auto;
  max-height: 200px;
  overflow-y: auto;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  z-index: 1000;
  border-radius: 0;
  flex-wrap: wrap;
  width: 100vw;
  margin-left: -15vw;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  pointer-events: none;
  gap: 6px;

  &.active {
    display: flex; // Show when active
    opacity: 1;
    pointer-events: auto;
  }

  @media (max-width: 1024px) {
    position: static;
    width: 100%;
    margin-left: 0;
    box-shadow: none;
    background-color: transparent;
    display: none; // Ensure it's hidden by default on mobile

    &.active {
      display: flex; // Show when active on mobile
    }
  }
`;
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    width: 100%;
  }

  /* Hover styles for desktop */
  @media (min-width: 1025px) {
    &:hover > ${DropdownMenu} {
      display: flex;
      opacity: 1;
      pointer-events: auto;
    }
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navNBtnRef = useRef<HTMLDivElement>(null);
  const [showLoginModal, setShowLoginModal] = useState(false); // State to show/hide modal

  const servicesRef = useRef<HTMLDivElement>(null);
  const servicesToggleRef = useRef<HTMLAnchorElement>(null);

  const navigate = useNavigate();

  const handleNavigation = () => {
    const userDataString = localStorage.getItem("user");

    if (!userDataString) {
      localStorage.setItem("redirectAfterLogin", "/portal");
      setShowLoginModal(true); // Show the login modal
      return;
    }

    const userData = JSON.parse(userDataString);
    const isAuthenticated = userData && userData.userId;

    if (!isAuthenticated) {
      localStorage.setItem("redirectAfterLogin", "/portal");
      setShowLoginModal(true); // Show the login modal
    } else {
      const userRole = userData.role;
      if (userRole === "admin") {
        navigate("/Admin/users");
      } else {
        navigate("/portal/orders");
      }
    }
  };
  const handleLoginSuccess = () => {
    setShowLoginModal(false); // Close modal on successful login
    navigate("/portal/orders");
  };
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleServices = (e: React.MouseEvent) => {
    e.stopPropagation();
    // On mobile, toggle the dropdown
    if (window.innerWidth <= 1024) {
      setIsServicesOpen((prev) => !prev);
    }
    // On desktop, we don't need to handle click as hover will handle it
  };

  const closeServicesMenu = () => {
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        navNBtnRef.current &&
        !navNBtnRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Nav>
        <HeaderContainer>
          <NavLink to="/">
            <LogoContainer>
              <Logo src={logo} alt="Logo" />
            </LogoContainer>
          </NavLink>
          <ContactUsWrapper>
            <MobileContactButton to="/contactUs">
              Contact Us
            </MobileContactButton>
          </ContactUsWrapper>

          <div ref={menuRef}>
            <HamburgerMenu onClick={toggleMenu}>
              {isMenuOpen ? <MenuIcon>✖</MenuIcon> : <MenuIcon>☰</MenuIcon>}
            </HamburgerMenu>
          </div>

          {/* Main Menu */}
          <NavNBtn
            ref={navNBtnRef}
            isMenuOpen={isMenuOpen}
            onClick={toggleMenu}
          >
            {/* Services Dropdown */}
            <DropdownContainer ref={servicesRef}>
              <ServicesLink
                to="/services"
                onClick={toggleServices}
                className={isServicesOpen ? "active" : ""}
                ref={servicesToggleRef}
              >
                Services
                <FontAwesomeIcon
                  className="chevron-icon"
                  icon={isServicesOpen ? faChevronUp : faChevronDown}
                  style={{ fontSize: "12px" }}
                />
              </ServicesLink>
              <DropdownMenu
                className={isServicesOpen ? "active" : ""}
                onClick={closeServicesMenu} // Close menu when an item is clicked
              >
                <DropdownItem
                  to="/fictionCover"
                  onClick={() => {
                    navigate("/fictionCover");
                    closeServicesMenu();
                  }}
                >
                  Fiction Cover Design
                </DropdownItem>
                <DropdownItem
                  to="/illustrated"
                  onClick={() => {
                    navigate("/illustrated");
                    closeServicesMenu();
                  }}
                >
                  Illustrated Cover Design
                </DropdownItem>
                <DropdownItem
                  to="/bookCoverRedesign"
                  onClick={() => {
                    navigate("/bookCoverRedesign");
                    closeServicesMenu();
                  }}
                >
                  Book Covers Redesign
                </DropdownItem>
                <DropdownItem
                  to="/nonFiction"
                  onClick={() => {
                    navigate("/nonFiction");
                    closeServicesMenu();
                  }}
                >
                  Non-Fiction Cover Design
                </DropdownItem>
                <DropdownItem
                  to="/audioBookCover"
                  onClick={() => {
                    navigate("/audioBookCover");
                    closeServicesMenu();
                  }}
                >
                  Audiobook Cover Design
                </DropdownItem>
                <DropdownItem
                  to="/logoBrand"
                  onClick={() => {
                    navigate("/logoBrand");
                    closeServicesMenu();
                  }}
                >
                  Logo & Branding
                </DropdownItem>
              </DropdownMenu>
            </DropdownContainer>

            <NavLinkButton
              to="/portfolio"
              onClick={() => navigate("/portfolio")}
            >
              Portfolio
            </NavLinkButton>
            <NavLinkButton to="/aboutUs" onClick={() => navigate("/aboutUs")}>
              About Us
            </NavLinkButton>
            <NavLinkButton to="/FAQs" onClick={() => navigate("/FAQs")}>
              FAQ
            </NavLinkButton>
            <NavLinkButton
              to="/contactUs"
              onClick={() => navigate("/contactUs")}
            >
              Contact Us
            </NavLinkButton>
            <NavLinkButton to="/partner" onClick={() => navigate("/partner")}>
              Partner With Us
            </NavLinkButton>

            {/* <NavText to="/portal/orders" onClick={handleNavigation}>
              Client Portal
            </NavText> */}
       

            <NavButton to="/GetACover">Get a Cover</NavButton>
          </NavNBtn>
          <NavText onClick={handleNavigation}>
        <img
          src={userlogo}
          alt="User Logo"
          style={{ width: "32px", height: "32px", cursor: "pointer" }}
        />
      </NavText>

      {/* Conditional Rendering of Login Modal */}
      {showLoginModal && (
        <LoginModal
          show={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLoginSuccess={handleLoginSuccess} // Pass success handler
        />
      )}
        </HeaderContainer>
     
      </Nav>
    </>
  );
}

export default Header;
