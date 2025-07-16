import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

interface NavNBtnProps {
  isMenuOpen: boolean;
}

export const GlobalStyle = createGlobalStyle`
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
    -ms-overflow-style: none;  
    scrollbar-width: none; 
  }
`;

export const Nav = styled.nav`
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
  /* border: 2px solid red; */

  @media (max-width: 1024px) {
    padding: 15px 20px;
  }
`;

export const Logo = styled.img`
  height: 47px;
  width: auto;
  display: block;
  vertical-align: middle;
  max-width: 100%;
  /* border: 2px solid red; */

  @media (max-width: 768px) {
    height: 47px;
  }

  @media (max-width: 480px) {
    width: 180px;
  }

  @media (max-width: 385px) {
    width: 140px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export const NavLinkButton = styled(NavLink)`
  display: inline-block;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  padding: 8px 20px;
  white-space: nowrap;
  text-align: left;
  text-decoration: none;
  border-radius: 5px;
  margin: 0 8px;
  background: rgba(255, 255, 255, 0.4);
  /* border: 2px solid red; */

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

export const NavButton = styled(NavLink)`
  display: inline-block;
  color: white;
  background-color: #6dc7d1;
  font-weight: 600;
  font-size: 14px;
  padding: 9px 25px;
  white-space: nowrap;
  border-radius: 4px;
  text-align: left;
  text-decoration: none;
  margin: 0 8px;
  /* border: 2px solid red; */

  &:hover {
    color: #ffffff;
    background-color: #4fa3a2;
  }

  @media (max-width: 1024px) {
    padding: 15px 50px;
    margin-left: 56px;
  }

  @media (max-width: 768px) {
    padding: 15px 42px;
    margin-left: 50px;
  }
`;

export const NavText = styled.div`
  display: inline-block;
  color: #6dc7d1;
  font-weight: bold;
  font-size: 15px;
  padding: 8px 30px;
  text-align: left;
  text-decoration: none;
  margin: 0;
  /* border: 2px solid blue; */

  &:hover {
    color: #4fa3a2;
  }

  @media (max-width: 1024px) {
    padding: 15px 47px;
    font-size: 28px;

    img {
      max-width: 200px;
      height: 80px;
      padding-right: 20px;
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 15px 42px;
    font-size: 22px;

    img {
      max-width: 200px;
      height: 70px;
      padding-right: 15px;
      margin-top: 10px;
    }
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 16px;
    margin-right: 5px;

    img {
      max-width: 200px;
      height: 60px;
      padding-right: 20px;
      margin-top: 10px;
    }
  }
`;

export const HeaderContainer = styled.div`
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

export const DropdownItem = styled(NavLink)`
  color: #000000;
  /* font-family: Arial, Helvetica, sans-serif; */
  text-decoration: none;
  padding: 8px 8px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: calc(25% - 10px); */
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  /* border: 2px solid yellow;  */

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

export const HamburgerMenu = styled.div`
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

export const MenuIcon = styled.span`
  font-size: 44px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 12px;

  @media (max-width: 1024px) {
    font-size: 32px;
    font-weight: 50;
    margin-top: 23px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    font-weight: 50;
    margin-top: 23px;
  }
  @media (max-width: 390px) {
    margin-left: 20px;
  }
`;

export const ContactUsWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 8px;
  }
`;

export const NavNBtn = styled.nav<NavNBtnProps>`
  display: flex;
  /* border: 2px solid pink; */
  align-items: start;
  /* flex-grow: 1; */
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
    overflow-y: auto;
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

export const MobileContactButton = styled(NavButton)`
  display: none;
  padding: 6px 16px;

  @media (max-width: 768px) {
    display: inline-block;
  }
`;

export const ServicesLink = styled(NavLinkButton)`
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

export const DropdownMenu = styled.div`
  /* border: 1px solid silver; */
  /* text-align: left; */
  display: flex;
  position: absolute;
  /* border: 2px solid red; */
  /* transform: translate(0 , 0); */
  /* border: 1px solid gray; */
  top: 100%;
  left: 220px;
  height: auto;
  max-height: 200px;
  /* align-items: center; */
  /* justify-content: space-around; */
  /* gap:200px; */
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

export const DropdownGroup = styled.div`
  /* border: 2px solid blue; */
  /* margin-right: 20px; */
`;
export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  /* border: 2px solid green; */

  @media (max-width: 768px) {
    width: 100%;
  }

  /* Hover styles for desktop */
  @media (min-width: 1025px) {
    &:hover > ${DropdownMenu} {
      display: flex;
      padding: 10 40px;
      /* align-items: center; */
      justify-content: space-between;
      opacity: 1;
      pointer-events: auto;
      /* gap: 20px; */
      /* border: 2px solid red; */
      width: 60vw;
    }
  }
`;

export const UserLogo = styled.img`
  height: 60px;
  cursor: pointer;
  margin-top: 4px;
  white-space: nowrap;

  /* Media queries */
  @media (max-width: 768px) {
    height: 50px;
    padding-right: 15px;
  }

  @media (max-width: 480px) {
    height: 50px;
    padding-right: 30px;
  }
`;
