import { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchOrdersByUserId } from "../../apis/apis";
import {
  StatCardsSkeleton,
  TableSkeleton,
  EmptyState,
  ErrorMessage,
} from "../../components/DashboardLoading/DashboardLoading";

const DashboardContent = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    openOrders: 0,
    completedOrders: 0,
    activeSubscriptions: 0,
  });
  const [recentOrders, setRecentOrders] = useState<any[]>([]);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);
        const user = localStorage.getItem("user");
        if (user) {
          const userData = JSON.parse(user);
          setUserName(userData.firstName || "User");
        }

        const orders = await fetchOrdersByUserId();
        const openOrders = orders.filter(
          (order: any) =>
            order.status === "Pending" || order.status === "In Progress",
        ).length;
        const completedOrders = orders.filter(
          (order: any) => order.status === "Completed",
        ).length;

        setStats({
          openOrders,
          completedOrders,
          activeSubscriptions: 0,
        });

        // Get recent 5 orders
        const sortedOrders = orders
          .sort(
            (a: any, b: any) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )
          .slice(0, 5);
        setRecentOrders(sortedOrders);
      } catch (err: any) {
        setError(err.message || "Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <DashboardContainer>
        <WelcomeMessageSkeleton />
        <StatCardsSkeleton count={3} />
        <SectionTitleSkeleton />
        <TableSkeleton rows={3} cols={3} />
        <SectionTitleSkeleton />
        <TableSkeleton rows={5} cols={5} />
      </DashboardContainer>
    );
  }

  if (error) {
    return (
      <DashboardContainer>
        <ErrorMessage>{error}</ErrorMessage>
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <WelcomeMessage>
        Welcome back, <span>{userName}</span>! 👋
      </WelcomeMessage>

      <StatsContainer>
        <StatBox>
          <StatIcon>📦</StatIcon>
          <StatContent>
            <StatLabel>Open Orders</StatLabel>
            <StatValue>{stats.openOrders}</StatValue>
          </StatContent>
        </StatBox>
        <StatBox variant="success">
          <StatIcon>✅</StatIcon>
          <StatContent>
            <StatLabel>Completed Orders</StatLabel>
            <StatValue>{stats.completedOrders}</StatValue>
          </StatContent>
        </StatBox>
        <StatBox variant="info">
          <StatIcon>⭐</StatIcon>
          <StatContent>
            <StatLabel>Active Subscriptions</StatLabel>
            <StatValue>{stats.activeSubscriptions}</StatValue>
          </StatContent>
        </StatBox>
      </StatsContainer>

      <Section>
        <SectionTitle>Open Tickets</SectionTitle>
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
              <TableCell colSpan={3}>
                <EmptyState>
                  <p>No open tickets at the moment</p>
                </EmptyState>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </Section>

      <Section>
        <SectionTitle>Recent Orders</SectionTitle>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>ID</TableHeader>
              <TableHeader>Title</TableHeader>
              <TableHeader>Created</TableHeader>
              <TableHeader>Status</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {recentOrders.length > 0 ? (
              recentOrders.map((order: any) => (
                <TableRow key={order._id}>
                  <TableCell className="id-cell">
                    {order._id.slice(-8)}
                  </TableCell>
                  <TableCell>{order.package?.name || "N/A"}</TableCell>
                  <TableCell>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={order.status}>
                      {order.status}
                    </StatusBadge>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>
                  <EmptyState>
                    <p>No recent orders found</p>
                  </EmptyState>
                </TableCell>
              </TableRow>
            )}
          </tbody>
        </Table>
      </Section>
    </DashboardContainer>
  );
};

export default DashboardContent;

const DashboardContainer = styled.div`
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
  font-family: "Manrope", sans-serif;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const WelcomeMessage = styled.h1`
  font-size: clamp(24px, 4vw, 32px);
  color: #212121;
  margin-bottom: 30px;
  font-weight: 600;

  span {
    color: #6dc7d1;
    font-weight: 700;
  }
`;

const WelcomeMessageSkeleton = styled.div`
  height: 40px;
  width: 300px;
  background: linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px);
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 8px;
  margin-bottom: 30px;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

const SectionTitleSkeleton = styled.div`
  height: 28px;
  width: 200px;
  background: linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px);
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 6px;
  margin: 30px 0 20px 0;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const StatBox = styled.div<{ variant?: "success" | "info" }>`
  background: ${(props) =>
    props.variant === "success"
      ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
      : props.variant === "info"
        ? "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
        : "linear-gradient(135deg, #6dc7d1 0%, #5ab8c2 100%)"};
  padding: 24px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const StatIcon = styled.div`
  font-size: 40px;
  line-height: 1;
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatLabel = styled.div`
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 8px;
  font-weight: 500;
`;

const StatValue = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(20px, 3vw, 24px);
  color: #212121;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

const TableHeader = styled.th`
  background: linear-gradient(135deg, #6dc7d1 0%, #5ab8c2 100%);
  color: white;
  padding: 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

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
  padding: 16px;
  border-bottom: 1px solid #e5e7eb;
  color: #374151;
  font-size: 14px;

  &.id-cell {
    font-family: monospace;
    color: #6dc7d1;
    font-weight: 500;
  }
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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
