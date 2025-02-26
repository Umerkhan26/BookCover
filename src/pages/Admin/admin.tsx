import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faUsers,
  faArrowLeft,
  faHSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  DashboardContainer,
  SidebarContainer,
  SidebarHeader,
  Logo,
  BrandName,
  CollapseButton,
  NavList,
  NavItem,
  NavLink,
  Icon,
  NavTitle,
  LinkText,
  MainContent,
} from "./admin.styles";
import Navbar from "../UserDashboard/Navbar/navabar";

const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <DashboardContainer>
      <SidebarContainer collapsed={collapsed}>
        <SidebarHeader>
          <Logo
            src="https://spp-clients.s3-accelerate.amazonaws.com/7c5bdcb3-724f-4fe1-8895-fd9f5226138c/ZnPki4Bg-4.jpg"
            alt="Admin"
            collapsed={collapsed}
          />
          <BrandName collapsed={collapsed}>Admin</BrandName>
          <CollapseButton onClick={toggleCollapse}>
            <FontAwesomeIcon icon={collapsed ? faArrowLeft : faArrowLeft} />
          </CollapseButton>
        </SidebarHeader>

        <NavList>
          <NavTitle collapsed={collapsed}>Main</NavTitle>
          <NavItem>
            <NavLink as={Link} to="/admin/dashboard">
              <Icon icon={faDashboard} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Dashboard</LinkText>
            </NavLink>
          </NavItem>

          <NavTitle collapsed={collapsed}>Management</NavTitle>
          <NavItem>
            <NavLink as={Link} to="/admin/users">
              <Icon icon={faUsers} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Users</LinkText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/admin/orders">
              <Icon icon={faHSquare} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Orders</LinkText>
            </NavLink>
          </NavItem>
        </NavList>
      </SidebarContainer>

      <MainContent collapsed={collapsed}>
        <div style={{ marginBottom: "30px" }}>
          <Navbar />
        </div>
        <Outlet />
      </MainContent>
    </DashboardContainer>
  );
};

export default Admin;
