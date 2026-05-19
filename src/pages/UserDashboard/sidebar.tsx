import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faReplyAll,
  faStar,
  faArrowLeft,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import logo from "../../assets/logo/Lumestudio-9.webp";
import fallbackLogo from "../../assets/logoBrand.png";
import { Helmet } from "react-helmet-async";
import { getDefaultRouteForRole, normalizeRole } from "../../utils/role.util";

interface CollapsibleProps {
  collapsed: boolean;
}

const DashboardContainer = styled.div`
  display: flex;
  font-family: "Manrope", sans-serif;
  height: 100vh;
  @media (max-width: 768px) {
    height: 100vh; /* Adjust for mobile screens */
  }
`;

const SidebarContainer = styled.aside<CollapsibleProps>`
  width: ${(props) => (props.collapsed ? "80px" : "210px")};
  background-color: #6dc7d1;
  color: white;
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(50, 180, 33, 0.1);
  transition: width 0.3s ease;
  position: fixed;
  overflow-y: auto;
  z-index: 999;

  @media (max-width: 768px) {
    width: ${(props) =>
      props.collapsed ? "68px" : "100%"}; /* Full width on mobile */
  }
`;

const MainContent = styled.div<CollapsibleProps>`
  flex: 1;
  padding: 14px 16px;
  margin-left: ${(props) =>
    props.collapsed ? "0" : "235px"}; /* Adjust margin based on sidebar width */
  transition: margin-left 0.3s ease;
  padding-left: ${(props) => (props.collapsed ? "10px" : "16px")};

  @media (max-width: 768px) {
    /* Keep content visible next to compact fixed sidebar on mobile */
    margin-left: ${(props) => (props.collapsed ? "68px" : "0")};
    padding: 12px 10px;
    width: ${(props) => (props.collapsed ? "calc(100% - 68px)" : "100%")}; /* Ensure content takes full width */
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center; /* Center logo on mobile */
  }
`;

const Logo = styled.img<CollapsibleProps>`
  width: 44px;
  height: 44px;
  border-radius: 4px;
  background: #ffffff;
  padding: 4px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  margin-right: ${(props) => (props.collapsed ? "0" : "10px")};
  transition: margin-right 0.3s ease;
  object-fit: contain;
  display: block;
`;

const BrandName = styled.span<CollapsibleProps>`
  font-size: 13px;
  font-weight: bold;
  color: #ffffff;
  display: ${(props) => (props.collapsed ? "none" : "block")};
  transition: display 0.3s ease;
  margin-right: 4px;

  @media (max-width: 768px) {
    display: none; /* Hide brand name on mobile */
  }
`;

const CollapseButton = styled.button`
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

  @media (max-width: 768px) {
    display: none; /* Hide collapse button on mobile */
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 10px 0;
`;

const NavLink = styled.a`
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

const Icon = styled(FontAwesomeIcon)<CollapsibleProps>`
  margin-right: ${(props) => (props.collapsed ? "0" : "10px")};
  transition: margin-right 0.3s ease;
`;

const NavTitle = styled.li<CollapsibleProps>`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin: 20px 0 10px;
  text-transform: uppercase;
  display: ${(props) => (props.collapsed ? "none" : "block")};
  transition: display 0.3s ease;

  @media (max-width: 768px) {
    display: none; /* Hide section titles on mobile */
  }
`;

const LinkText = styled.span<CollapsibleProps>`
  display: ${(props) => (props.collapsed ? "none" : "inline")};
  transition: display 0.3s ease;
`;

const UserDashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true); // Collapse the sidebar by default on mobile
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  // Non-client users should be moved to their own dashboard section.
  useEffect(() => {
    if (!user?.role) return;
    const role = normalizeRole(user.role);
    if (role !== "client" && role !== "designer") {
      navigate(getDefaultRouteForRole(role), { replace: true });
    }
  }, [user, navigate]);

  // Update the sidebar state based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  const handleLogoError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    if (event.currentTarget.dataset.fallbackApplied === "true") return;
    event.currentTarget.dataset.fallbackApplied = "true";
    event.currentTarget.src = fallbackLogo;
  };

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("redirectAfterLogin");
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <DashboardContainer>
      <Helmet>
        <title>User Dashboard</title>
        <meta
          name="description"
          content="Welcome to your user dashboard. Manage your profile, orders, and invoices."
        />
      </Helmet>
      <SidebarContainer collapsed={collapsed}>
        <SidebarHeader>
          <Logo
            src={logo}
            alt="Lumeart Studio"
            collapsed={collapsed}
            onError={handleLogoError}
          />
          <BrandName collapsed={collapsed}>Lumeart Studio</BrandName>
          <CollapseButton onClick={toggleCollapse}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </CollapseButton>
        </SidebarHeader>

        <NavList>
          <NavTitle collapsed={collapsed}>Activity</NavTitle>
          <NavItem>
            <NavLink as={Link} to="/portal/orders" aria-label="My Orders">
              <Icon icon={faListAlt} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>My Orders</LinkText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/">
              <Icon icon={faReplyAll} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Back to site</LinkText>
            </NavLink>
          </NavItem>

          <NavTitle collapsed={collapsed}>Reviews and tips</NavTitle>
          <NavItem>
            <NavLink
              href="https://www.facebook.com/share/1EreeG179x/?mibextid=wwXIfr"
              target="_blank"
            >
              <Icon icon={faStar} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Post a review</LinkText>
            </NavLink>
          </NavItem>

          {/* <NavTitle collapsed={collapsed}>Account and billing</NavTitle> */}
          {/* <NavItem>
            <NavLink as={Link} to="/portal/profile" aria-label="My Orders">
              <Icon icon={faUser} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>My profile</LinkText>
            </NavLink>
          </NavItem> */}
          {/* <NavItem>
            <NavLink as={Link} to="/portal/invoices" aria-label="My Invoices">
              <Icon icon={faFileAlt} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Invoices</LinkText>
            </NavLink>
          </NavItem> */}

          <NavItem>
            <NavLink as="button" onClick={handleLogout}>
              <Icon icon={faSignOutAlt} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Sign Out</LinkText>
            </NavLink>
          </NavItem>
        </NavList>
      </SidebarContainer>
      <MainContent collapsed={collapsed}>
        <Outlet />
      </MainContent>
    </DashboardContainer>
  );
};

export default UserDashboard;
