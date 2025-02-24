import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <NavContainer>
      {/* Mobile Toggle Button */}
      <MobileToggleButton>
        <FontAwesomeIcon icon={faBars} />
      </MobileToggleButton>

      {/* Placeholder for Brand/Logo */}
      <BrandPlaceholder />

      {/* Right Side Actions */}
      <RightActions>
        {/* Points Display */}
        <PointsDisplay>36 points</PointsDisplay>

        {/* Search Icon */}
        <SearchLink href="https://client.miblart.com/portal/search">
          <FontAwesomeIcon icon={faSearch} />
        </SearchLink>

        {/* Notifications Dropdown */}
        <NotificationDropdown>
          <NotificationLink href="https://client.miblart.com/notifications">
            <FontAwesomeIcon icon={faBell} />
            <NotificationBadge>1</NotificationBadge>
          </NotificationLink>

          <DropdownMenu>
            <DropdownItem href="https://client.miblart.com/notifications/2882433">
              Support Team posted a message in Box set (existing design) $40
              <DropdownItemTime>2 weeks ago</DropdownItemTime>
            </DropdownItem>

            <DropdownFooter>
              <DropdownLink href="https://client.miblart.com/notifications">
                Show all
              </DropdownLink>
              <DropdownButton>Mark all as read</DropdownButton>
            </DropdownFooter>
          </DropdownMenu>
        </NotificationDropdown>

        {/* User Profile Dropdown */}
        <ProfileDropdown>
          <ProfileLink href="#">
            <ProfileImage
              src="https://www.gravatar.com/avatar/9095632f1181c0f40a37d853f66cfc40?s=100&d=404&r=g"
              alt="Umar Faiz"
              onError={(e) => {
                e.currentTarget.hidden = true;
                e.currentTarget.nextElementSibling?.removeAttribute("hidden");
              }}
            />
            <ProfileFallback>
              <span>UF</span>
            </ProfileFallback>
          </ProfileLink>

          <DropdownMenu>
            <DropdownItem href="https://client.miblart.com/portal/profile">
              Profile
            </DropdownItem>
            <DropdownItem href="https://client.miblart.com/portal/team">
              Team
            </DropdownItem>
            <DropdownItem as="button" type="submit">
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </ProfileDropdown>
      </RightActions>
    </NavContainer>
  );
};

export default Navbar;

// Styled Components
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
  //   height: 4rem;
`;

const MobileToggleButton = styled.button`
  margin-right: 0.5rem;
  display: block;
  @media (min-width: 1024px) {
    display: none;
  }
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
`;

const BrandPlaceholder = styled.div`
  width: 12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RightActions = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PointsDisplay = styled.div`
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
`;

const SearchLink = styled.a`
  padding: 0.5rem;
  color: #6b7280;
  text-decoration: none;
  &:hover {
    color: #1e40af;
  }
`;

const NotificationDropdown = styled.div`
  position: relative;
`;

const NotificationLink = styled.a`
  position: relative;
  padding: 0.5rem;
  color: #6b7280;
  text-decoration: none;
  &:hover {
    color: #1e40af;
  }
`;

const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ef4444;
  color: #ffffff;
  font-size: 0.75rem;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 16rem;
  z-index: 10;
  display: none;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: #374151;
  text-decoration: none;
  &:hover {
    background-color: #f3f4f6;
  }
`;

const DropdownItemTime = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;

const DropdownFooter = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e5e7eb;
`;

const DropdownLink = styled.a`
  font-size: 0.875rem;
  color: #3b82f6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const DropdownButton = styled.button`
  font-size: 0.875rem;
  color: #3b82f6;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ProfileDropdown = styled.div`
  position: relative;
  margin-left: 1rem;
`;

const ProfileLink = styled.a`
  display: block;
`;

const ProfileImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  object-fit: cover;
`;

const ProfileFallback = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  background-color: #a3e635;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
`;
