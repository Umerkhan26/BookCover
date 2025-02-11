import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

interface NavNBtnProps {
  isMenuOpen: boolean;
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: 75px;
`;

const Logo = styled.img`
  height: 22px;
  width: auto;
  display: block;
`;

const NavLinkButton = styled(NavLink)`
  display: inline-block;
  color: #212121;
  font-size: 16px;
  font-weight: 300;
  text-transform: capitalize;
  padding: 5px 12px;
  text-align: left;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 15px;

  &:hover {
    color: #1a8797;
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
  max-width: 1200px; /* Adjust based on your design */
  margin: 0 auto; /* Center the header content */
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
    top: 65px;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1000;
    padding: 10px;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  height: 170px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 7px 5rem;
  z-index: 1000;
  border-radius: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  margin-left: -13vw;
  transition: opacity 0.3s ease;
  opacity: 0;
  pointer-events: none;

  &.active {
    display: flex;
    // flex-wrap: wrap;
    opacity: 1;
    pointer-events: auto;
    gap: 12px;
  }
`;

const DropdownItem = styled(NavLink)`
  color: #212121;
  text-decoration: none;
  padding: 13px 20px;
  font-size: 15px;
  display: flex;
  align-item: center;
  justify-content: center;

  width: calc(25% - 10px);
  box-sizing: border-box;

  &:hover {
    color: #6dc7d1;
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

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <GlobalStyle />
      <Nav>
        <HeaderContainer>
          <NavLink to="/">
            <Logo
              src="https://miblart.com/wp-content/uploads/2023/11/Group-3673.png"
              alt="Logo"
            />
          </NavLink>
          <HamburgerMenu onClick={toggleMenu}>☰</HamburgerMenu>
          <NavNBtn isMenuOpen={isMenuOpen}>
            <DropdownContainer>
              <NavLinkButton to="/find-obituary">Services</NavLinkButton>
              <DropdownMenu>
                <DropdownItem to="/fictionCover">
                  Fiction Cover Design
                </DropdownItem>
                <DropdownItem to="/illustrated">
                  Illustrated Cover Design
                </DropdownItem>
                <DropdownItem to="/bookCoverRedesign">
                  Book Covers Redesign
                </DropdownItem>
                {/* <DropdownItem to="/portfolio-2">
                  Kindle Vella Cover Design
                </DropdownItem> */}
                {/* <DropdownItem to="/portfolio-2">
                  Formatting and Layout
                </DropdownItem> */}
                <DropdownItem to="/nonFiction">
                  Non-Fiction Cover Design
                </DropdownItem>
                <DropdownItem to="/portfolio-2">
                  Premium Cover Design
                </DropdownItem>
                <DropdownItem to="/audioBookCover">
                  Audiobook Cover Design
                </DropdownItem>
                <DropdownItem to="/logoBrand">Logo & Branding</DropdownItem>
                {/* <DropdownItem to="/portfolio-2">
                  Author Swag Design
                </DropdownItem> */}
                {/* <DropdownItem to="/portfolio-2">
                  Marketing Materials
                </DropdownItem> */}
              </DropdownMenu>
            </DropdownContainer>

            <DropdownContainer>
              <NavLinkButton to="/portfolio">Portfolio</NavLinkButton>
            </DropdownContainer>

            <NavLinkButton to="/aboutUs">About Us</NavLinkButton>
            {/* <NavLinkButton to="/pricing">Blog</NavLinkButton> */}
            <NavLinkButton to="/pricing">FAQ</NavLinkButton>
            <NavLinkButton to="/contactUs">Contact Us</NavLinkButton>
            <NavLinkButton to="/pricing">Partner With Us</NavLinkButton>

            <NavText to="/pricing">Client Portal</NavText>
            <NavButton to="/services">Get a Cover</NavButton>
          </NavNBtn>
        </HeaderContainer>
      </Nav>
    </>
  );
}

export default Header;
