import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListAlt,
  faEnvelopeOpen,
  faGift,
  faTags,
  faReplyAll,
  faStar,
  faUserFriends,
  faUser,
  faFileAlt,
  faMoneyCheck,
  faCreditCard,
  faHandshake,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

interface CollapsibleProps {
  collapsed: boolean;
}

const DashboardContainer = styled.div`
  display: flex;
  font-family: Arial, sans-serif;
`;

const SidebarContainer = styled.aside<CollapsibleProps>`
  width: ${(props) => (props.collapsed ? "80px" : "250px")};
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  position: fixed;
  overflow-y: auto;

  /* Hide scrollbar for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`;

const Logo = styled.img<CollapsibleProps>`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  margin-right: ${(props) => (props.collapsed ? "0" : "10px")};
  transition: margin-right 0.3s ease;
`;

const BrandName = styled.span<CollapsibleProps>`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  display: ${(props) => (props.collapsed ? "none" : "block")};
  transition: display 0.3s ease;
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
  color: #bdc3c7;
  margin: 20px 0 10px;
  text-transform: uppercase;
  display: ${(props) => (props.collapsed ? "none" : "block")};
  transition: display 0.3s ease;
`;

const LinkText = styled.span<CollapsibleProps>`
  display: ${(props) => (props.collapsed ? "none" : "inline")};
  transition: display 0.3s ease;
`;

const MainContent = styled.div<CollapsibleProps>`
  flex: 1;
  padding: 20px;
  background-color: #f4f6f8;
  margin-left: ${(props) =>
    props.collapsed
      ? "80px"
      : "250px"}; /* Adjust margin based on sidebar width */
  transition: margin-left 0.3s ease;
`;

const WelcomeMessage = styled.h1`
  font-size: 24px;
  color: black;
  margin-bottom: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const StatBox = styled.div`
  background-color: #34495e;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  flex: 1;
  margin: 0 10px;
  color: white;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  background-color: #34495e;
  color: white;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const UserDashboard: React.FC = () => {
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
            alt="Mibl"
            collapsed={collapsed}
          />
          <BrandName collapsed={collapsed}>Mibl</BrandName>
          <CollapseButton onClick={toggleCollapse}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </CollapseButton>
        </SidebarHeader>

        <NavList>
          <NavTitle collapsed={collapsed}>Activity</NavTitle>
          <NavItem>
            <NavLink href="https://client.miblart.com/portal/orders">
              <Icon icon={faListAlt} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>My orders</LinkText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://client.miblart.com/portal/tickets?status=1">
              <Icon icon={faEnvelopeOpen} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>My tickets</LinkText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://client.miblart.com/portal/services?folder=13">
              <Icon icon={faGift} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>My points</LinkText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://client.miblart.com/portal/page/special-offers">
              <Icon icon={faTags} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Special offers</LinkText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://miblart.com/" target="_blank">
              <Icon icon={faReplyAll} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Back to site</LinkText>
            </NavLink>
          </NavItem>

          <NavTitle collapsed={collapsed}>Reviews and tips</NavTitle>
          <NavItem>
            <NavLink href="https://www.facebook.com/miblart" target="_blank">
              <Icon icon={faStar} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Post a review</LinkText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://client.miblart.com/portal/services?folder=2">
              <Icon icon={faUserFriends} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Tips for designer</LinkText>
            </NavLink>
          </NavItem>

          <NavTitle collapsed={collapsed}>Account and billing</NavTitle>
          <NavItem>
            <NavLink href="https://client.miblart.com/portal/profile">
              <Icon icon={faUser} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>My profile</LinkText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://client.miblart.com/portal/invoices">
              <Icon icon={faFileAlt} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Invoices</LinkText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://client.miblart.com/portal/subscriptions">
              <Icon icon={faMoneyCheck} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Installment payments</LinkText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://client.miblart.com/stripe/manage">
              <Icon icon={faCreditCard} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Payment method</LinkText>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://client.miblart.com/affiliate">
              <Icon icon={faHandshake} collapsed={collapsed} />
              <LinkText collapsed={collapsed}>Commissions</LinkText>
            </NavLink>
          </NavItem>
        </NavList>
      </SidebarContainer>
      <MainContent collapsed={collapsed}>
        <WelcomeMessage>Welcome, Umar!</WelcomeMessage>
        <StatsContainer>
          <StatBox>
            <div>Open Orders</div>
            <div>1</div>
          </StatBox>
          <StatBox>
            <div>Completed Orders</div>
            <div>0</div>
          </StatBox>
          <StatBox>
            <div>Active Subscriptions</div>
            <div>0</div>
          </StatBox>
        </StatsContainer>

        <h2>Open Tickets</h2>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Subject</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell colSpan={3}>No tickets...</TableCell>
            </TableRow>
          </tbody>
        </Table>

        <h2>Recent Orders</h2>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>ID</TableHeader>
              <TableHeader>Title</TableHeader>
              <TableHeader>Created</TableHeader>
              <TableHeader>Completed</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell colSpan={5}>No recent orders...</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </MainContent>
    </DashboardContainer>
  );
};

export default UserDashboard;
