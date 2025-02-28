import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Import the search icon
import Navbar from "./Navbar/navabar";
import { fetchOrdersByUserId } from "../../apis/apis"; // Assuming you have the function

const OrdersTable: React.FC = () => {
  // State to store orders
  const [orders, setOrders] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch orders using useEffect
  useEffect(() => {
    const getOrders = async () => {
      try {
        const fetchedOrders = await fetchOrdersByUserId();
        setOrders(fetchedOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    getOrders();
  }, []);

  // Filter orders based on search query
  const filteredOrders = orders.filter((order) =>
    order.package.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Navbar />
      <HeaderContainer>
        <h1 className="text-black font-bold text-3xl pb-8 pt-6">Orders</h1>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Find something..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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
            {/* <TableHeader>Completed</TableHeader> */}
            <TableHeader>Status</TableHeader>
          </TableHeaderRow>
        </thead>
        <tbody>
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <TableRow key={order._id}>
                <TableLink>{order._id}</TableLink>
                <TableCell>{order.package.name}</TableCell>
                <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                {/* <TableCell>{order.status === "Completed" ? new Date(order.completedAt).toLocaleDateString() : "N/A"}</TableCell> */}
                <TableCell>{order.status} </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5}>No orders found</TableCell>
            </TableRow>
          )}
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

