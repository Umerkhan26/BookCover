import React, { useEffect, useState } from "react";
import { fetchOrdersByUserId } from "../../apis/apis";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { TableSkeleton } from "../../components/DashboardLoading/DashboardLoading";

const OrdersTable: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getOrders = async () => {
      try {
        setLoading(true);
        setError(null); // Clear any previous errors
        const fetchedOrders = await fetchOrdersByUserId();
        setOrders(fetchedOrders || []);
        setSearchQuery("");
      } catch (err: any) {
        setError(err.message || "Failed to fetch orders");
        setOrders([]); // Clear orders on error
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  const filteredOrders = orders.filter((order) =>
    order.package?.name?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return (
      <OrdersContainer>
        <Helmet>
          <title>Order Management</title>
          <meta
            name="description"
            content="View and manage all your orders from this section."
          />
        </Helmet>
        <HeaderSection>
          <TitleSkeleton />
        </HeaderSection>
        <Table>
          <thead>
            <tr>
              <TableHeader className="hidden md:table-cell">ID</TableHeader>
              <TableHeader>Title</TableHeader>
              <TableHeader className="hidden md:table-cell">
                Created
              </TableHeader>
              <TableHeader>Status</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableSkeleton rows={6} cols={4} />
          </tbody>
        </Table>
      </OrdersContainer>
    );
  }

  return (
    <OrdersContainer>
      <Helmet>
        <title>Order Management</title>
        <meta
          name="description"
          content="View and manage all your orders from this section."
        />
      </Helmet>
      <HeaderSection>
        <Title>Orders</Title>
        {!error && <OrderCount>({filteredOrders.length} total)</OrderCount>}
      </HeaderSection>

      <Table>
        <thead>
          <tr>
            <TableHeader className="hidden md:table-cell">ID</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader className="hidden md:table-cell">Created</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={4}>
                <TableSkeleton rows={6} cols={4} />
              </TableCell>
            </TableRow>
          ) : error ? (
            <TableRow>
              <TableCell
                colSpan={4}
                style={{ textAlign: "center", padding: "24px 16px" }}
              >
                <ErrorMessageText>{error}</ErrorMessageText>
              </TableCell>
            </TableRow>
          ) : filteredOrders.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={4}
                style={{ textAlign: "center", padding: "24px 16px" }}
              >
                <EmptyMessage>No orders found</EmptyMessage>
              </TableCell>
            </TableRow>
          ) : (
            filteredOrders.map((order) => (
              <TableRow key={order._id}>
                <TableCell className="hidden md:table-cell">
                  <OrderId>{order._id.slice(-8)}</OrderId>
                </TableCell>
                <TableCell>
                  <OrderTitle>{order.package?.name || "N/A"}</OrderTitle>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(order.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <StatusBadge status={order.status}>
                    {order.status}
                  </StatusBadge>
                </TableCell>
              </TableRow>
            ))
          )}
        </tbody>
      </Table>
    </OrdersContainer>
  );
};

export default OrdersTable;

const OrdersContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 18px 20px;
  font-family: "Manrope", sans-serif;

  @media (max-width: 768px) {
    padding: 14px 12px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: clamp(20px, 3vw, 26px);
  color: #212121;
  margin: 0;
  font-weight: 700;
`;

const TitleSkeleton = styled.div`
  height: 26px;
  width: 120px;
  background: linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px);
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 6px;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

const OrderCount = styled.span`
  color: #6dc7d1;
  font-size: 14px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.06);
`;

const TableHeader = styled.th`
  background-color: #f9f8fa;
  color: #212121;
  padding: 8px 12px;
  text-align: left;
  font-weight: 600;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
  }
`;

const TableRow = styled.tr`
  transition: background-color 0.2s ease;

  &:nth-child(even) {
    background-color: #f9fafb;
  }

  &:hover {
    background-color: #f3f4f6;
  }
`;

const TableCell = styled.td`
  padding: 10px 12px;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
  font-size: 13px;
`;

const OrderId = styled.span`
  font-family: monospace;
  color: #6dc7d1;
  font-weight: 600;
  font-size: 12px;
`;

const OrderTitle = styled.span`
  font-weight: 600;
  color: #212121;
  font-size: 13px;
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background-color: ${(props) => {
    switch (props.status?.toLowerCase()) {
      case "completed":
        return "#d1fae5";
      case "pending":
        return "#fef3c7";
      case "in progress":
        return "#dbeafe";
      default:
        return "#e5e7eb";
    }
  }};
  color: ${(props) => {
    switch (props.status?.toLowerCase()) {
      case "completed":
        return "#065f46";
      case "pending":
        return "#92400e";
      case "in progress":
        return "#1e40af";
      default:
        return "#374151";
    }
  }};
`;

const EmptyMessage = styled.div`
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
`;

const ErrorMessageText = styled.div`
  color: #dc2626;
  font-size: 14px;
  font-weight: 500;
`;
