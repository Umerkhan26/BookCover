// import React, { useState } from "react";
// import { Outlet, Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faDashboard,
//   faUsers,
//   faArrowLeft,
//   faHSquare,
//   faSignOutAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import {
//   DashboardContainer,
//   SidebarContainer,
//   SidebarHeader,
//   Logo,
//   BrandName,
//   CollapseButton,
//   NavList,
//   NavItem,
//   NavLink,
//   Icon,
//   NavTitle,
//   LinkText,
//   MainContent,
// } from "./admin.styles";
// import Navbar from "../UserDashboard/Navbar/navabar";

// const Admin: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleCollapse = () => {
//     setCollapsed(!collapsed);
//   };

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//     window.location.reload();
//   };

//   return (
//     <DashboardContainer>
//       <SidebarContainer collapsed={collapsed}>
//         <SidebarHeader>
//           <Logo
//             src="https://spp-clients.s3-accelerate.amazonaws.com/7c5bdcb3-724f-4fe1-8895-fd9f5226138c/ZnPki4Bg-4.jpg"
//             alt="Admin"
//             collapsed={collapsed}
//           />
//           <BrandName collapsed={collapsed}>Admin</BrandName>
//           <CollapseButton onClick={toggleCollapse}>
//             <FontAwesomeIcon icon={collapsed ? faArrowLeft : faArrowLeft} />
//           </CollapseButton>
//         </SidebarHeader>

//         <NavList>
//           <NavTitle collapsed={collapsed}>Main</NavTitle>
//           <NavItem>
//             <NavLink as={Link} to="/admin/dashboard">
//               <Icon icon={faDashboard} collapsed={collapsed} />
//               <LinkText collapsed={collapsed}>Dashboard</LinkText>
//             </NavLink>
//           </NavItem>

//           <NavTitle collapsed={collapsed}>Management</NavTitle>
//           <NavItem>
//             <NavLink as={Link} to="/admin/users">
//               <Icon icon={faUsers} collapsed={collapsed} />
//               <LinkText collapsed={collapsed}>Users</LinkText>
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink as={Link} to="/admin/orders">
//               <Icon icon={faHSquare} collapsed={collapsed} />
//               <LinkText collapsed={collapsed}>Orders</LinkText>
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink as={Link} to="/admin/coverIdeas">
//               <Icon icon={faHSquare} collapsed={collapsed} />
//               <LinkText collapsed={collapsed}>Cover Ideas</LinkText>
//             </NavLink>
//           </NavItem>

//           <NavItem>
//             <NavLink as="button" onClick={handleLogout}>
//               <Icon icon={faSignOutAlt} collapsed={collapsed} />
//               <LinkText collapsed={collapsed}>Sign Out</LinkText>
//             </NavLink>
//           </NavItem>
//         </NavList>
//       </SidebarContainer>

//       <MainContent collapsed={collapsed}>
//         <div style={{ marginBottom: "30px" }}>
//           <Navbar />
//         </div>
//         <Outlet />
//       </MainContent>
//     </DashboardContainer>
//   );
// };

// export default Admin;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faMessage,
  faReplyAll,
  faStar,
  faUser,
  faFileAlt,
  faNewspaper,
  faFilter,
  faEnvelope,
  faChartLine,
  faTableList,
  faClockRotateLeft,
  faArrowLeft,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import logo from "../../assets/logo/Lumestudio-10.webp";
import {
  getDefaultRouteForRole,
  normalizeRole,
} from "../../utils/role.util";

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
  min-width: 0; /* let nested tables use overflow-x: auto instead of expanding past viewport */
  padding: 14px 16px;
  margin-left: ${(props) =>
    props.collapsed
      ? "80px"
      : "235px"}; /* Adjust margin based on sidebar width */
  transition: margin-left 0.3s ease;
  padding-left: ${(props) => (props.collapsed ? "10px" : "16px")};

  @media (max-width: 768px) {
    /* Keep content visible next to compact fixed sidebar on mobile */
    margin-left: ${(props) => (props.collapsed ? "68px" : "0")};
    padding: 12px 10px;
    width: ${(props) => (props.collapsed ? "calc(100% - 68px)" : "100%")};
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
  width: 32px;
  height: 32px;
  border-radius: 4px;
  margin-right: ${(props) => (props.collapsed ? "0" : "10px")};
  transition: margin-right 0.3s ease;

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
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  const normalizedRole = normalizeRole(user?.role);
  const isSuperadmin = normalizedRole === "superadmin";
  const isSeo = normalizedRole === "seo";
  const isMarketing = normalizedRole === "marketing";
  const isAdmin = normalizedRole === "admin";
  const isAdminLike = isAdmin || isSuperadmin;

  // No user (e.g. signing out): redirect to home immediately so we don't flash other dashboard
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
      return;
    }
    const role = normalizeRole(user.role);
    if (
      role !== "admin" &&
      role !== "superadmin" &&
      role !== "seo" &&
      role !== "marketing"
    ) {
      navigate("/portal/orders", { replace: true });
    }
  }, [user, navigate]);

  // Limited admin roles: lock SEO/Marketing to their allowed sections.
  useEffect(() => {
    if (!user) return;
    const role = normalizeRole(user.role);
    const path = location.pathname;
    if (role === "seo") {
      const seoAllowed = path === "/admin/blog" || path.startsWith("/admin/blog/");
      if (!seoAllowed) navigate("/admin/blog", { replace: true });
      return;
    }

    if (role === "marketing") {
      const marketingAllowed =
        path === "/admin/funnel" ||
        path === "/admin/email-templates" ||
        path === "/admin/templates" ||
        path === "/admin/analytics" ||
        path === "/admin/categories" ||
        path === "/admin/campaign-history";
      if (!marketingAllowed) navigate("/admin/funnel", { replace: true });
    }
  }, [user, location.pathname, navigate]);

  // Index redirect: /admin -> role-specific default section.
  useEffect(() => {
    if (!user) return;
    if (location.pathname === "/admin" || location.pathname === "/admin/") {
      navigate(getDefaultRouteForRole(user.role), { replace: true });
    }
  }, [user, location.pathname, navigate]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setCollapsed(false);
      } else {
        setCollapsed(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapse = () => setCollapsed(!collapsed);

  const handleLogout = () => {
    logout(); // clear auth state and navigate to / ; avoids flashing other dashboard
  };

  // Don't render admin UI when no user (signing out or session expired) – prevents flash of wrong dashboard
  if (!user) {
    return null;
  }

  return (
    <DashboardContainer>
      <SidebarContainer collapsed={collapsed}>
        <SidebarHeader>
          <Logo src={logo} alt="Lumeart Studio" collapsed={collapsed} />
          <BrandName collapsed={collapsed}>Lumeart Studio</BrandName>
          <CollapseButton onClick={toggleCollapse}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </CollapseButton>
        </SidebarHeader>

        <NavList>
          {(isAdminLike || isSeo) && (
            <>
              <NavTitle collapsed={collapsed}>Activity</NavTitle>
              {isAdminLike ? (
                <>
                  <NavItem>
                    <NavLink as={Link} to="/admin/users" aria-label="All Users">
                      <Icon icon={faListAlt} collapsed={collapsed} />
                      <LinkText collapsed={collapsed}>All Users</LinkText>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink as={Link} to="/admin/orders" aria-label="Orders">
                      <Icon icon={faUser} collapsed={collapsed} />
                      <LinkText collapsed={collapsed}>Orders</LinkText>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink as={Link} to="/admin/coverIdeas" aria-label="Cover Ideas">
                      <Icon icon={faFileAlt} collapsed={collapsed} />
                      <LinkText collapsed={collapsed}>Cover Ideas</LinkText>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink as={Link} to="/admin/contacts" aria-label="Contacts">
                      <Icon icon={faMessage} collapsed={collapsed} />
                      <LinkText collapsed={collapsed}>Contacts</LinkText>
                    </NavLink>
                  </NavItem>
                </>
              ) : null}
              {!isMarketing && (isAdminLike || isSeo) ? (
                <NavItem>
                  <NavLink as={Link} to="/admin/blog" aria-label="Blog Management">
                    <Icon icon={faNewspaper} collapsed={collapsed} />
                    <LinkText collapsed={collapsed}>Blog</LinkText>
                  </NavLink>
                </NavItem>
              ) : null}
            </>
          )}

          {(isSuperadmin || isMarketing) && (
            <>
              <NavTitle collapsed={collapsed}>Marketing Modules</NavTitle>
              <NavItem>
                <NavLink as={Link} to="/admin/funnel" aria-label="Funnel Module">
                  <Icon icon={faFilter} collapsed={collapsed} />
                  <LinkText collapsed={collapsed}>Funnel</LinkText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  as={Link}
                  to="/admin/templates"
                  aria-label="Templates Module"
                >
                  <Icon icon={faEnvelope} collapsed={collapsed} />
                  <LinkText collapsed={collapsed}>Templates</LinkText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink as={Link} to="/admin/categories" aria-label="Categories Module">
                  <Icon icon={faTableList} collapsed={collapsed} />
                  <LinkText collapsed={collapsed}>Categories</LinkText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink as={Link} to="/admin/analytics" aria-label="Analytics Module">
                  <Icon icon={faChartLine} collapsed={collapsed} />
                  <LinkText collapsed={collapsed}>Analytics</LinkText>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  as={Link}
                  to="/admin/campaign-history"
                  aria-label="Campaign History"
                >
                  <Icon icon={faClockRotateLeft} collapsed={collapsed} />
                  <LinkText collapsed={collapsed}>Campaign History</LinkText>
                </NavLink>
              </NavItem>
            </>
          )}

          <NavItem>
            <NavLink as={Link} to="/">
              <Icon icon={faReplyAll} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Back to site</LinkText>
            </NavLink>
          </NavItem>

          {isAdminLike && (
            <NavTitle collapsed={collapsed}>Reviews and tips</NavTitle>
          )}
          {isAdminLike && (
            <NavItem>
              <NavLink
                href="https://www.facebook.com/share/1EreeG179x/?mibextid=wwXIfr"
                target="_blank"
              >
                <Icon icon={faStar} collapsed={collapsed} />
                <LinkText collapsed={collapsed}>Post a review</LinkText>
              </NavLink>
            </NavItem>
          )}
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
