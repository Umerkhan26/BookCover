import React, { useState, useEffect } from "react";

import { deleteOrderById, fetchAllOrders } from "../../../apis/apis";
import {
  Container,
  Table,
  TableData,
  TableHeader,
  TableRow,
} from "../user.styles";
import { Helmet } from "react-helmet-async";
import {
  TableSkeleton,
  ErrorMessage,
  EmptyState,
} from "../../DashboardLoading/DashboardLoading";
import AdminListPagination from "../AdminListPagination";
import styled from "styled-components";
import ConfirmModal from "../../ConfirmModal/ConfirmModal";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUser, faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const ORDERS_PAGE_SIZE = 50;

const SERIES_LABELS: Record<string, string> = {
  yes: "Yes",
  no: "No",
  unknown: "I don't know",
};

const COVER_STYLE_LABELS: Record<string, string> = {
  detailed: "With detailed characters",
  silhouettes: "Only with silhouettes",
  object: "Object-based covers",
  typographic: "Typographic covers",
  unknown: "I don't know",
};

const SHARE_CONSENT_LABELS: Record<string, string> = {
  yes: "Yes",
  no: "No",
  after_publication: "Yes, but only after the book",
};

function formatSeriesContinuation(raw?: string): string {
  if (raw == null || raw === "") return "—";
  return SERIES_LABELS[raw] ?? raw;
}

function formatCoverStyle(raw?: string): string {
  if (raw == null || raw === "") return "—";
  return COVER_STYLE_LABELS[raw] ?? raw;
}

function formatSharePortfolio(
  consent?: string,
  allowed?: boolean,
): { line: string; detail?: string } {
  if (consent && SHARE_CONSENT_LABELS[consent]) {
    return { line: SHARE_CONSENT_LABELS[consent] };
  }
  if (consent) return { line: consent };
  if (allowed === true) return { line: "Yes" };
  if (allowed === false) return { line: "No" };
  return { line: "—" };
}

function formatUserContacts(raw: unknown): string {
  if (raw == null) return "—";
  if (Array.isArray(raw)) {
    const parts = raw
      .map((x) => (x == null ? "" : String(x).trim()))
      .filter(Boolean);
    return parts.length ? parts.join("\n") : "—";
  }
  return String(raw).trim() || "—";
}

function formatYesNoUnknown(
  value: boolean | undefined,
  unknownMeans?: string,
): string {
  if (value === true) return "Yes";
  if (value === false) return "No";
  return unknownMeans ?? "—";
}

interface IOrder {
  _id: string;
  user: any;
  package: any;
  addOns: any[];
  totalPrice: number;
  status: "Pending" | "Completed" | "Cancelled" | "Submitted";
  paymentStatus?: "Unpaid" | "Paid";
  bookTitle: string;
  bookSubtitle?: string;
  /** Portal: "Your name" */
  name?: string;
  authorName?: string;
  narratorName?: string;
  genre: string;
  seriesContinuation?: string;
  summary?: string;
  coverStyle?: string;
  prefferedCoverStyle?: string;
  likeToSeeOnCover?: string;
  coverMood?: string;
  colorPalette?: string;
  examples?: string;
  file?: string;
  firstOrder?: boolean;
  shareOnPortfolio?: boolean;
  shareOnPortfolioConsent?: string;
  userContacts?: string[];
  paymentMethod?: string;
  createdAt?: string;
}

const Order: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeLabel, setPageSizeLabel] = useState(ORDERS_PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);
  const [selectedOtherInfo, setSelectedOtherInfo] = useState<any | null>(null);
  const [orderToDelete, setOrderToDelete] = useState<IOrder | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchAllOrders({ page, limit: ORDERS_PAGE_SIZE });
        setOrders((res.orders as IOrder[]) || []);
        setTotal(res.total);
        setTotalPages(res.totalPages);
        setPageSizeLabel(res.limit || ORDERS_PAGE_SIZE);
        if (res.orders.length === 0 && page > 1) {
          setPage((p) => Math.max(1, p - 1));
        }
      } catch (err) {
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    void loadOrders();
  }, [page]);

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };

  const handlePackageClick = (pkg: any, addOns: any[]) => {
    setSelectedPackage({ ...pkg, addOns });
  };

  const handleOtherInfoClick = (order: any) => {
    setSelectedOtherInfo(order);
  };

  // Close modals
  const closeUserModal = () => setSelectedUser(null);
  const closePackageModal = () => setSelectedPackage(null);
  const closeOtherInfoModal = () => setSelectedOtherInfo(null);

  const handleDeleteConfirm = async () => {
    if (!orderToDelete?._id) return;
    const id = String(orderToDelete._id);
    try {
      setDeleteLoading(true);
      await deleteOrderById(id);
      const next = orders.filter((o) => o._id !== id);
      setOrders(next);
      setTotal((t) => Math.max(0, t - 1));
      if (selectedOtherInfo?._id === id) {
        setSelectedOtherInfo(null);
      }
      setOrderToDelete(null);
      toast.success("Order deleted successfully");
      if (next.length === 0 && page > 1) {
        setPage((p) => Math.max(1, p - 1));
      }
    } catch (err: any) {
      const msg =
        typeof err === "string"
          ? err
          : err?.message || "Failed to delete order";
      toast.error(msg);
    } finally {
      setDeleteLoading(false);
    }
  };

  const getUserDisplayName = (user: any) => {
    if (!user) return "No User";
    const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim();
    return fullName || user.email || user.userId || "No User";
  };

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
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableSkeleton rows={8} cols={6} />
          </tbody>
        </Table>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage>Error: {error}</ErrorMessage>
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
      <ConfirmModal
        open={!!orderToDelete}
        title="Delete order"
        message={
          orderToDelete
            ? `Delete order ${orderToDelete._id.slice(-8)} (${orderToDelete.package?.name || "package"})? This cannot be undone.`
            : ""
        }
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={handleDeleteConfirm}
        onCancel={() => {
          if (!deleteLoading) setOrderToDelete(null);
        }}
      />
      <HeaderSection>
        <Title>Orders</Title>
        <OrderCount>
          ({total} total
          {totalPages > 1 ? ` · page ${page} of ${totalPages}` : ""})
        </OrderCount>
      </HeaderSection>

      {orders.length === 0 ? (
        <EmptyState>
          <h3>No orders found</h3>
          <p>There are no orders in the system yet.</p>
        </EmptyState>
      ) : (
        <Table>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>User</TableHeader>
              <TableHeader>Package</TableHeader>
              <TableHeader>Total Price</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableData>
                  <OrderIdRow>
                    <OrderIdSub>{order._id.slice(-8)}</OrderIdSub>
                  </OrderIdRow>
                </TableData>
                <TableData>
                  <ClickableLink onClick={() => handleUserClick(order.user)}>
                    <InlineIcon icon={faUser} />
                    {getUserDisplayName(order.user)}
                  </ClickableLink>
                </TableData>
                <TableData>
                  <ClickableLink
                    onClick={() =>
                      handlePackageClick(order.package, order.addOns)
                    }
                  >
                    <InlineIcon icon={faBoxOpen} />
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
                  <OrderActionCell>
                    <ViewInfoButton
                      type="button"
                      onClick={() => handleOtherInfoClick(order)}
                    >
                      <InlineIcon icon={faEye} />
                      View Info
                    </ViewInfoButton>
                    <DeleteOrderButton
                      type="button"
                      disabled={deleteLoading}
                      onClick={() => setOrderToDelete(order)}
                    >
                      Delete
                    </DeleteOrderButton>
                  </OrderActionCell>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}

      {!error && total > 0 && (
        <AdminListPagination
          page={page}
          totalPages={totalPages}
          pageSizeLabel={pageSizeLabel}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
        />
      )}
      <ToastContainer />

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
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "600px" }}
          >
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
              {selectedPackage.features &&
                selectedPackage.features.length > 0 && (
                  <InfoSection>
                    <SectionLabel>Features:</SectionLabel>
                    <FeatureList>
                      {selectedPackage.features.map(
                        (feature: string, idx: number) => (
                          <FeatureItem key={idx}>✓ {feature}</FeatureItem>
                        ),
                      )}
                    </FeatureList>
                  </InfoSection>
                )}
              {selectedPackage.freeFeatures &&
                selectedPackage.freeFeatures.length > 0 && (
                  <InfoSection>
                    <SectionLabel>Free Features:</SectionLabel>
                    <FeatureList>
                      {selectedPackage.freeFeatures.map(
                        (freeFeature: string, idx: number) => (
                          <FeatureItem key={idx}>✓ {freeFeature}</FeatureItem>
                        ),
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
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "700px" }}
          >
            <ModalHeader>
              <ModalTitle>Form Data</ModalTitle>
              <CloseButton onClick={closeOtherInfoModal}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <InfoRow>
                <InfoLabel>Your name (form)</InfoLabel>
                <InfoValue>
                  {selectedOtherInfo.name ||
                    selectedOtherInfo.authorName ||
                    "—"}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Book title</InfoLabel>
                <InfoValue>
                  {selectedOtherInfo.bookTitle || "—"}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Book subtitle</InfoLabel>
                <InfoValue>
                  {selectedOtherInfo.bookSubtitle || "—"}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Narrator&apos;s name</InfoLabel>
                <InfoValue>
                  {selectedOtherInfo.narratorName || "—"}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Preferred contact information</InfoLabel>
                <InfoValue style={{ whiteSpace: "pre-wrap" }}>
                  {formatUserContacts(selectedOtherInfo.userContacts)}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Genre</InfoLabel>
                <InfoValue>{selectedOtherInfo.genre || "—"}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Will this book continue as a series?</InfoLabel>
                <InfoValue>
                  {formatSeriesContinuation(
                    selectedOtherInfo.seriesContinuation,
                  )}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Book summary</InfoLabel>
                <InfoValue style={{ whiteSpace: "pre-wrap" }}>
                  {selectedOtherInfo.summary || "—"}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Preferred cover style</InfoLabel>
                <InfoValue>
                  {formatCoverStyle(
                    selectedOtherInfo.prefferedCoverStyle ||
                      selectedOtherInfo.coverStyle,
                  )}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>What to see on the cover / references</InfoLabel>
                <InfoValue style={{ whiteSpace: "pre-wrap" }}>
                  {selectedOtherInfo.likeToSeeOnCover || "—"}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>
                  Share cover on social media &amp; website?
                </InfoLabel>
                <InfoValue>
                  {(() => {
                    const { line } = formatSharePortfolio(
                      selectedOtherInfo.shareOnPortfolioConsent,
                      selectedOtherInfo.shareOnPortfolio,
                    );
                    const ok =
                      selectedOtherInfo.shareOnPortfolio === true ||
                      selectedOtherInfo.shareOnPortfolioConsent === "yes" ||
                      selectedOtherInfo.shareOnPortfolioConsent ===
                        "after_publication";
                    return line === "—" ? (
                      line
                    ) : ok ? (
                      <Badge success>{line}</Badge>
                    ) : (
                      <Badge>{line}</Badge>
                    );
                  })()}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>First order with Lumeart Studio?</InfoLabel>
                <InfoValue>
                  {formatYesNoUnknown(selectedOtherInfo.firstOrder)}
                </InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Order status</InfoLabel>
                <InfoValue>{selectedOtherInfo.status || "—"}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Payment status</InfoLabel>
                <InfoValue>
                  {selectedOtherInfo.paymentStatus || "—"}
                </InfoValue>
              </InfoRow>
              {selectedOtherInfo.paymentMethod ? (
                <InfoRow>
                  <InfoLabel>Payment method</InfoLabel>
                  <InfoValue>{selectedOtherInfo.paymentMethod}</InfoValue>
                </InfoRow>
              ) : null}
              {selectedOtherInfo.coverMood ? (
                <InfoRow>
                  <InfoLabel>Cover mood (legacy)</InfoLabel>
                  <InfoValue>{selectedOtherInfo.coverMood}</InfoValue>
                </InfoRow>
              ) : null}
              {selectedOtherInfo.examples ? (
                <InfoRow>
                  <InfoLabel>Examples (legacy)</InfoLabel>
                  <InfoValue style={{ whiteSpace: "pre-wrap" }}>
                    {selectedOtherInfo.examples}
                  </InfoValue>
                </InfoRow>
              ) : null}
              {selectedOtherInfo.createdAt ? (
                <InfoRow>
                  <InfoLabel>Submitted</InfoLabel>
                  <InfoValue>
                    {new Date(selectedOtherInfo.createdAt).toLocaleString()}
                  </InfoValue>
                </InfoRow>
              ) : null}
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Order;

const TitleSkeleton = styled.div`
  height: 22px;
  width: 120px;
  background: linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px);
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite linear;
  border-radius: 6px;
  margin-bottom: 12px;

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
  gap: 10px;
  margin-bottom: 12px;
`;

const Title = styled.h1`
  font-size: 1.125rem;
  color: #0f172a;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const OrderCount = styled.span`
  color: #64748b;
  font-size: 12px;
  font-weight: 600;
`;

const OrderIdRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 700;
  color: #0f172a;
  font-size: 13px;
`;

const OrderIdSub = styled.span`
  font-family: monospace;
  color: #6dc7d1;
  font-weight: 600;
  font-size: 11px;
`;

const ClickableLink = styled.span`
  color: #334155;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  text-decoration: underline;
  text-decoration-color: transparent;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    color: #0e7490;
    text-decoration-color: #0e7490;
  }
`;

const InlineIcon = styled(FontAwesomeIcon)`
  font-size: 12px;
  opacity: 0.9;
`;

const OrderActionCell = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
`;

const ViewInfoButton = styled.button`
  padding: 6px 12px;
  background-color: #6dc7d1;
  border: none;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.1;
  transition: background-color 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: #5ab8c2;
  }
`;

const DeleteOrderButton = styled.button`
  padding: 6px 12px;
  background-color: #dc2626;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  flex-shrink: 0;
  transition:
    background-color 0.15s ease,
    opacity 0.15s ease;

  &:hover:not(:disabled) {
    background-color: #b91c1c;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const Price = styled.span`
  font-weight: 700;
  color: #10b981;
  font-size: 13px;
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 10px;
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
      case "submitted":
        return "#e0f2fe";
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
      case "submitted":
        return "#0c4a6e";
      default:
        return "#374151";
    }
  }};
`;

const RoleBadge = styled.span<{ role: string }>`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  background-color: ${(props) => {
    switch (props.role?.toLowerCase()) {
      case "admin":
        return "#e0f2fe";
      case "user":
        return "#ecfeff";
      case "manager":
        return "#fef3c7";
      default:
        return "#e5e7eb";
    }
  }};

  color: ${(props) => {
    switch (props.role?.toLowerCase()) {
      case "admin":
        return "#075985";
      case "user":
        return "#155e75";
      case "manager":
        return "#92400e";
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
