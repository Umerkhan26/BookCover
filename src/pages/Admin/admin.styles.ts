import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS Variables for reusable values

// Styled Components
export const DashboardContainer = styled.div`
  display: flex;
  font-family: Arial, sans-serif;
`;

export const SidebarContainer = styled.aside<{ collapsed: boolean }>`
  width: ${(props) => (props.collapsed ? "80px" : "210px")};
  background-color: green;
  color: white;
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(50, 180, 33, 0.1);
  transition: width 0.3s ease;
  position: fixed;
  overflow-y: auto;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Logo = styled.img<{ collapsed: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  margin-right: ${(props) => (props.collapsed ? "0" : "10px")};
  transition: margin-right 0.3s ease;
`;

export const BrandName = styled.span<{ collapsed: boolean }>`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  display: ${(props) => (props.collapsed ? "none" : "block")};
  transition: display 0.3s ease;
`;

export const CollapseButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  margin-left: auto;
  opacity: 0.5;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 10px 0;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #34495e;
  }
`;

export const Icon = styled(FontAwesomeIcon)<{ collapsed: boolean }>`
  margin-right: ${(props) => (props.collapsed ? "0" : "10px")};
  transition: margin-right 0.3s ease;
`;

export const NavTitle = styled.li<{ collapsed: boolean }>`
  font-size: 14px;
  font-weight: bold;
  color: #bdc3c7;
  margin: 20px 0 10px;
  text-transform: uppercase;
  display: ${(props) => (props.collapsed ? "none" : "block")};
  transition: display 0.3s ease;
`;

export const LinkText = styled.span<{ collapsed: boolean }>`
  display: ${(props) => (props.collapsed ? "none" : "inline")};
  transition: display 0.3s ease;
`;

export const MainContent = styled.div<{ collapsed: boolean }>`
  flex: 1;
  padding: 20px;
  margin-left: ${(props) => (props.collapsed ? "80px" : "235px")};
  transition: margin-left 0.3s ease;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px 20px;
  color: #0c313f;
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ProfilePic = styled.img`
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const AdminName = styled.span`
  margin-left: 10px;
  color: #0c313f;
  font-weight: light;
  cursor: pointer;
`;

export const DropdownIcon = styled.span`
  margin-left: 5px;
  cursor: pointer;
  font-size: 24px;
`;

export const Dropdown = styled.div<{ show: boolean }>`
  position: absolute;
  top: 50px;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 100;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;
