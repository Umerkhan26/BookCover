import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/Lumestudio-1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import userlogo from "../../assets//userlogo.webp";
import LoginModal from "../Login/LoginModel";
import RegisterModal from "../register/RegisterModal";

import {
  Nav,
  Logo,
  LogoContainer,
  NavLinkButton,
  NavButton,
  NavText,
  HeaderContainer,
  DropdownItem,
  HamburgerMenu,
  MenuIcon,
  ContactUsWrapper,
  NavNBtn,
  MobileContactButton,
  ServicesLink,
  DropdownMenu,
  DropdownGroup,
  GlobalStyle,
  DropdownContainer,
  UserLogo,
} from "./Header.styles";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navNBtnRef = useRef<HTMLDivElement>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

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
        navigate("/admin/users");
      } else {
        navigate("/portal/orders");
      }
    }
  };
  const handleLoginSuccess = () => {
    setShowLoginModal(false);
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

  useEffect(() => {
    const handleShowLoginModal = () => {
      setShowLoginModal(true);
    };

    window.addEventListener("showLoginModal", handleShowLoginModal);

    return () => {
      window.removeEventListener("showLoginModal", handleShowLoginModal);
    };
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
            <MobileContactButton to="/contact-us">
              Contact Us
            </MobileContactButton>
          </ContactUsWrapper>

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
                onClick={closeServicesMenu}
              >
                <DropdownGroup>
                  <DropdownItem
                    to="/fiction-cover"
                    onClick={() => {
                      navigate("/fiction-cover");
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
                </DropdownGroup>

                <DropdownGroup>
                  <DropdownItem
                    to="/book-cover-redesign"
                    onClick={() => {
                      navigate("/book-cover-redesign");
                      closeServicesMenu();
                    }}
                  >
                    Book Covers Redesign
                  </DropdownItem>
                  <DropdownItem
                    to="/non-fiction-cover"
                    onClick={() => {
                      navigate("/non-fiction-cover");
                      closeServicesMenu();
                    }}
                  >
                    Non-Fiction Cover Design
                  </DropdownItem>
                </DropdownGroup>

                <DropdownGroup>
                  <DropdownItem
                    to="/audio-book-cover"
                    onClick={() => {
                      navigate("/audio-book-cover");
                      closeServicesMenu();
                    }}
                  >
                    Audiobook Cover Design
                  </DropdownItem>
                  <DropdownItem
                    to="/logo-branding"
                    onClick={() => {
                      navigate("/logo-branding");
                      closeServicesMenu();
                    }}
                  >
                    Logo & Branding
                  </DropdownItem>
                </DropdownGroup>
              </DropdownMenu>
            </DropdownContainer>

            <NavLinkButton
              to="/portfolio"
              onClick={() => navigate("/portfolio")}
            >
              Portfolio
            </NavLinkButton>
            <NavLinkButton
              to="/about-us"
              onClick={() => navigate("/about-us  ")}
            >
              About Us
            </NavLinkButton>
            <NavLinkButton to="/faqs" onClick={() => navigate("/faqs")}>
              FAQ
            </NavLinkButton>
            <NavLinkButton
              to="/contact-us"
              onClick={() => navigate("/contact-us")}
            >
              Contact Us
            </NavLinkButton>
            <NavLinkButton to="/partner" onClick={() => navigate("/partner")}>
              Partner With Us
            </NavLinkButton>

            {/* <NavText to="/portal/orders" onClick={handleNavigation}>
              Client Portal
            </NavText> */}

            <NavButton to="/get-a-cover">Get a Cover</NavButton>
          </NavNBtn>
          
          <NavText onClick={handleNavigation}>
            <UserLogo src={userlogo} alt="User Logo" />
          </NavText>

          <div ref={menuRef}>
            <HamburgerMenu onClick={toggleMenu}>
              {isMenuOpen ? <MenuIcon>✖</MenuIcon> : <MenuIcon>☰</MenuIcon>}
            </HamburgerMenu>
          </div>

          {/* Conditional Rendering of Login Modal */}
          {showLoginModal && (
            <LoginModal
              show={showLoginModal}
              onClose={() => setShowLoginModal(false)}
              onLoginSuccess={handleLoginSuccess}
              onRegisterClick={() => {
                setShowLoginModal(false);
                setShowRegisterModal(true);
              }}
            />
          )}

          {showRegisterModal && (
            <RegisterModal
              show={showRegisterModal}
              onClose={() => setShowRegisterModal(false)}
              onLoginClick={() => {
                setShowRegisterModal(false);
                setShowLoginModal(true);
              }}
            />
          )}
        </HeaderContainer>
      </Nav>
    </>
  );
}

export default Header;
