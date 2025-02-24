import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Import the search icon
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/navabar";

const OrdersTable: React.FC = () => {
  const navigate = useNavigate();
  const handleStartOrder = () => {
    navigate(`/portal/orders/form`);
  };
  return (
    <Container>
      <Navbar />
      <HeaderContainer>
        <h1 className="text-black font-bold text-3xl pb-8 pt-6">Orders</h1>
        <SearchContainer>
          <SearchInput type="text" placeholder="Find something..." />
          <SearchIcon>
            <FontAwesomeIcon icon={faSearch} />
          </SearchIcon>
        </SearchContainer>
      </HeaderContainer>
      <Table>
        <thead>
          <TableHeaderRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Created</TableHeader>
            <TableHeader>Completed</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableHeaderRow>
        </thead>
        <tbody>
          <TableRow>
            <TableLink>3ADBICIE_4</TableLink>
            <TableCell>Website banner or ad $40</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>
              <StatusButton onClick={() => handleStartOrder()}>
                Start order
              </StatusButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableLink>3ADBICIE_3</TableLink>
            <TableCell>Bookmark $40</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>
              <StatusButton onClick={() => handleStartOrder()}>
                Start order
              </StatusButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableLink>3ADBICIE_2</TableLink>
            <TableCell>Social media banner or cover $35</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>
              <StatusButton onClick={() => handleStartOrder()}>
                Start order
              </StatusButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableLink>3ADBICIE_1</TableLink>
            <TableCell>Cover formatting for an audiobook $30</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>
              <StatusButton onClick={() => handleStartOrder()}>
                Start order
              </StatusButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableLink>B4344D22_4</TableLink>
            <TableCell>Website banner or ad $40</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>
              <StatusButton onClick={() => handleStartOrder()}>
                Start order
              </StatusButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableLink>B4344D22_3</TableLink>
            <TableCell>Bookmark $40</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>
              <StatusButton onClick={() => handleStartOrder()}>
                Start order
              </StatusButton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableLink>B4344D22_2</TableLink>
            <TableCell>Social media banner or cover $35</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>Feb 18</TableCell>
            <TableCell>
              <StatusButton onClick={() => handleStartOrder()}>
                Start order
              </StatusButton>
            </TableCell>
          </TableRow>
        </tbody>
      </Table>
    </Container>
  );
};

export default OrdersTable;

// Styled Components
const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  padding-right: 40px; /* Add padding for the icon */
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  outline: none;
  color: black;
  &:focus {
    border-color: #00254d;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 10px;
  color: #666;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

const TableHeaderRow = styled.tr`
  // background-color: #f8f9fa;
`;

const TableHeader = styled.th`
  padding: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #00254d;
  border-bottom: 1px solid #dee2e6;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 12px;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #dee2e6;
`;

const TableLink = styled.td`
  padding: 12px;
  font-size: 14px;
  color: #007bff;
  border-bottom: 1px solid #dee2e6;
  cursor: Pointer;
  text-decoration: none;
`;

const StatusButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background-color: green;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #004080;
  }
`;
