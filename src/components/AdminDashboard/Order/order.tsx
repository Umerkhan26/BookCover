import React, { useState, useEffect } from "react";
import { fetchAllOrders } from "../../../apis/apis"; // Ensure you have the correct path to fetchAllOrders function
import {
  Container,
  Table,
  TableData,
  TableHeader,
  TableRow,
} from "../user.styles"; // Adjust your imports accordingly
import { Helmet } from "react-helmet-async";
import {
  TableSkeleton,
  LoadingSpinner,
  ErrorMessage,
  EmptyState,
} from "../../DashboardLoading/DashboardLoading";
import styled from "styled-components";

// Define the IOrder interface
interface IOrder {
  _id: string;
  user: any; // Full user object from API
  package: any; // Full package object from API
  addOns: any[]; // Full addOns array from API
  totalPrice: number;
  status: "Pending" | "Completed" | "Cancelled";
  paymentStatus: "Unpaid" | "Paid";
  bookTitle: string;
  bookSubtitle?: string;
  authorName?: string;
  genre: string;
  seriesContinuation?: string;
  summary?: string;
  coverStyle?: string;
  coverMood?: string;
  colorPalette?: string;
  examples?: string;
  file?: string;
  firstOrder?: boolean;
  shareOnPortfolio?: boolean;
  paymentMethod: string;
}

const Order: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Modal states
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);
  const [selectedOtherInfo, setSelectedOtherInfo] = useState<any | null>(null);

  // Fetch orders on component mount
  useEffect(() => {
    const loadOrders = async () => {
      try {
        const fetchedOrders = await fetchAllOrders(); // Using the existing fetchAllOrders function
        setOrders(fetchedOrders || []); // Ensure we always set an array
      } catch (err) {
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  // Handle opening modals for user, package, and other info
  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };

  const handlePackageClick = (pkg: any, addOns: any[]) => {
    setSelectedPackage({ ...pkg, addOns }); // Pass both the package and addOns to the modal
  };

  const handleOtherInfoClick = (order: any) => {
    setSelectedOtherInfo(order); // Pass the order to display remaining details in the modal
  };

  // Close modals
  const closeUserModal = () => setSelectedUser(null);
  const closePackageModal = () => setSelectedPackage(null);
  const closeOtherInfoModal = () => setSelectedOtherInfo(null);

  if (loading) {
    return (
      <Container>
        <Helmet>
          <title>Manage Orders</title>
          <meta
            name="description"
            content="Admin panel for managing orders and their statuses."
          />
        </Helmet>
        <TitleSkeleton />
        <Table>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>User</TableHeader>
              <TableHeader>Package</TableHeader>
              <TableHeader>Total Price</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Form Data</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableSkeleton rows={8} cols={6} />
          </tbody>
        </Table>
      </Container>
    );
  }

  return (
    <Container>
      <Helmet>
        <title>Manage Orders</title>
        <meta
          name="description"
          content="Admin panel for managing orders and their statuses."
        />
      </Helmet>
      <HeaderSection>
        <Title>Orders</Title>
        {!error && <OrderCount>({orders.length} total)</OrderCount>}
      </HeaderSection>

      <Table>
        <thead>
          <tr>
            <TableHeader>ID</TableHeader>
            <TableHeader>User</TableHeader>
            <TableHeader>Package</TableHeader>
            <TableHeader>Total Price</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Form Data</TableHeader>
          </tr>
        </thead>
        <tbody>
          {error ? (
            <TableRow>
              <TableData colSpan={6} style={{ textAlign: "center", padding: "40px" }}>
                <ErrorMessageText>Error: {error}</ErrorMessageText>
              </TableData>
            </TableRow>
          ) : orders.length > 0 ? (
            orders.map((order) => (
              <TableRow key={order._id}>
                <TableData>
                  <OrderId>{order._id.slice(-8)}</OrderId>
                </TableData>
                <TableData>
                  <ClickableLink onClick={() => handleUserClick(order.user)}>
                    {order.user
                      ? `${order.user.firstName} ${order.user.lastName}`
                      : "No User"}
                  </ClickableLink>
                </TableData>
                <TableData>
                  <ClickableLink
                    onClick={() =>
                      handlePackageClick(order.package, order.addOns)
                    }
                  >
                    {order.package ? order.package.name : "No Package"}
                  </ClickableLink>
                </TableData>
                <TableData>
                  <Price>${order.totalPrice}</Price>
                </TableData>
                <TableData>
                  <StatusBadge status={order.status}>
                    {order.status}
                  </StatusBadge>
                </TableData>
                <TableData>
                  <ClickableLink onClick={() => handleOtherInfoClick(order)}>
                    View Info
                  </ClickableLink>
                </TableData>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableData colSpan={6} style={{ textAlign: "center", padding: "40px" }}>
                <EmptyMessage>No orders found</EmptyMessage>
              </TableData>
            </TableRow>
          )}
        </tbody>
      </Table>

      {/* User Modal */}
      {selectedUser && (
        <ModalOverlay onClick={closeUserModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>User Details</ModalTitle>
              <CloseButton onClick={closeUserModal}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <InfoRow>
                <InfoLabel>User ID:</InfoLabel>
                <InfoValue>{selectedUser.userId}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Name:</InfoLabel>
                <InfoValue>
                  {selectedUser.firstName} {selectedUser.lastName}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Email:</InfoLabel>
                <InfoValue>{selectedUser.email}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Role:</InfoLabel>
                <RoleBadge role={selectedUser.role}>
                  {selectedUser.role}
                </RoleBadge>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Status:</InfoLabel>
                <StatusBadge
                  status={selectedUser.status || "active"}
                  style={{ display: "inline-block" }}
                >
                  {selectedUser.status || "active"}
                </StatusBadge>
              </InfoRow>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Package Modal */}
      {selectedPackage && (
        <ModalOverlay onClick={closePackageModal}>
          <ModalContent onClick={(e) => e.stopPropagation()} style={{ maxWidth: "600px" }}>
            <ModalHeader>
              <ModalTitle>Package Details</ModalTitle>
              <CloseButton onClick={closePackageModal}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <InfoRow>
                <InfoLabel>Package Name:</InfoLabel>
                <InfoValue>{selectedPackage.name}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Price:</InfoLabel>
                <Price>${selectedPackage.price}</Price>
              </InfoRow>
              {selectedPackage.features && selectedPackage.features.length > 0 && (
                <InfoSection>
                  <SectionLabel>Features:</SectionLabel>
                  <FeatureList>
                    {selectedPackage.features.map((feature: string, idx: number) => (
                      <FeatureItem key={idx}>✓ {feature}</FeatureItem>
                    ))}
                  </FeatureList>
                </InfoSection>
              )}
              {selectedPackage.freeFeatures && selectedPackage.freeFeatures.length > 0 && (
                <InfoSection>
                  <SectionLabel>Free Features:</SectionLabel>
                  <FeatureList>
                    {selectedPackage.freeFeatures.map(
                      (freeFeature: string, idx: number) => (
                        <FeatureItem key={idx}>✓ {freeFeature}</FeatureItem>
                      )
                    )}
                  </FeatureList>
                </InfoSection>
              )}
              {selectedPackage.addOns && selectedPackage.addOns.length > 0 && (
                <InfoSection>
                  <SectionLabel>AddOns:</SectionLabel>
                  <FeatureList>
                    {selectedPackage.addOns.map((addon: any, idx: number) => (
                      <FeatureItem key={idx}>+ {addon.name}</FeatureItem>
                    ))}
                  </FeatureList>
                </InfoSection>
              )}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* OtherInfo Modal */}
      {selectedOtherInfo && (
        <ModalOverlay onClick={closeOtherInfoModal}>
          <ModalContent onClick={(e) => e.stopPropagation()} style={{ maxWidth: "700px" }}>
            <ModalHeader>
              <ModalTitle>Form Data</ModalTitle>
              <CloseButton onClick={closeOtherInfoModal}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <InfoRow>
                <InfoLabel>Book Title:</InfoLabel>
                <InfoValue>{selectedOtherInfo.bookTitle || "N/A"}</InfoValue>
              </InfoRow>
              {selectedOtherInfo.bookSubtitle && (
                <InfoRow>
                  <InfoLabel>Book Subtitle:</InfoLabel>
                  <InfoValue>{selectedOtherInfo.bookSubtitle}</InfoValue>
                </InfoRow>
              )}
              {selectedOtherInfo.narratorName && (
                <InfoRow>
                  <InfoLabel>Narrator Name:</InfoLabel>
                  <InfoValue>{selectedOtherInfo.narratorName}</InfoValue>
                </InfoRow>
              )}
              <InfoRow>
                <InfoLabel>Genre:</InfoLabel>
                <InfoValue>{selectedOtherInfo.genre || "N/A"}</InfoValue>
              </InfoRow>
              {selectedOtherInfo.summary && (
                <InfoRow>
                  <InfoLabel>Summary:</InfoLabel>
                  <InfoValue style={{ whiteSpace: "pre-wrap" }}>
                    {selectedOtherInfo.summary}
                  </InfoValue>
                </InfoRow>
              )}
              {selectedOtherInfo.prefferedCoverStyle && (
                <InfoRow>
                  <InfoLabel>Cover Style:</InfoLabel>
                  <InfoValue>{selectedOtherInfo.prefferedCoverStyle}</InfoValue>
                </InfoRow>
              )}
              {selectedOtherInfo.likeToSeeOnCover && (
                <InfoRow>
                  <InfoLabel>Like to see on cover:</InfoLabel>
                  <InfoValue>{selectedOtherInfo.likeToSeeOnCover}</InfoValue>
                </InfoRow>
              )}
              <InfoRow>
                <InfoLabel>First Order:</InfoLabel>
                <InfoValue>
                  {selectedOtherInfo.firstOrder ? (
                    <Badge success>Yes</Badge>
                  ) : (
                    <Badge>No</Badge>
                  )}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Share on Portfolio:</InfoLabel>
                <InfoValue>
                  {selectedOtherInfo.shareOnPortfolio ? (
                    <Badge success>Yes</Badge>
                  ) : (
                    <Badge>No</Badge>
                  )}
                </InfoValue>
              </InfoRow>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Order;

const TitleSkeleton = styled.div`
  height: 32px;
  width: 150px;
  background: linear-gradient(
    90deg,
    #f0f0f0 0px,
    #e0e0e0 40px,
    #f0f0f0 80px
  );
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 6px;
  margin-bottom: 20px;

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: clamp(24px, 4vw, 32px);
  color: #212121;
  margin: 0;
  font-weight: 700;
`;

const OrderCount = styled.span`
  color: #6dc7d1;
  font-size: 18px;
  font-weight: 600;
`;

const OrderId = styled.span`
  font-family: monospace;
  color: #6dc7d1;
  font-weight: 600;
  font-size: 13px;
`;

const ClickableLink = styled.span`
  color: #6dc7d1;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: underline;
  text-decoration-color: transparent;

  &:hover {
    color: #5ab8c2;
    text-decoration-color: #5ab8c2;
  }
`;

const Price = styled.span`
  font-weight: 700;
  color: #10b981;
  font-size: 16px;
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 6px 14px;
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
      case "cancelled":
        return "#fee2e2";
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
      case "cancelled":
        return "#991b1b";
      default:
        return "#374151";
    }
  }};
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 0;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 10000;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6dc7d1;
    border-radius: 8px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
  background: linear-gradient(135deg, #6dc7d1 0%, #5ab8c2 100%);
  border-radius: 16px 16px 0 0;
`;

const ModalTitle = styled.h2`
  margin: 0;
  color: white;
  font-size: 24px;
  font-weight: 700;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 28px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
`;

const ModalBody = styled.div`
  padding: 24px;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
`;

const InfoValue = styled.span`
  font-size: 16px;
  color: #212121;
  font-weight: 500;
`;

const InfoSection = styled.div`
  margin-bottom: 24px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 8px;
`;

const SectionLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 12px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  padding: 8px 0;
  color: #374151;
  font-size: 14px;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
  }
`;

const Badge = styled.span<{ success?: boolean }>`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) => (props.success ? "#d1fae5" : "#e5e7eb")};
  color: ${(props) => (props.success ? "#065f46" : "#374151")};
`;

const RoleBadge = styled.span<{ role: string }>`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${(props) =>
    props.role === "admin" ? "#dbeafe" : "#e0e7ff"};
  color: ${(props) => (props.role === "admin" ? "#1e40af" : "#4338ca")};
`;

const EmptyMessage = styled.div`
  color: #6b7280;
  font-size: 16px;
  font-weight: 500;
`;

const ErrorMessageText = styled.div`
  color: #dc2626;
  font-size: 16px;
  font-weight: 500;
`;
