import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { TableSkeleton } from "../../components/DashboardLoading/DashboardLoading";
import AdminListPagination from "../../components/AdminDashboard/AdminListPagination";
import { deleteContactById, fetchAllContacts } from "../../apis/apis";
import { formatSubmittedAt } from "../../utils/formatSubmittedAt";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CloseButton,
  Container,
  HeaderSection,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalTitle,
  RequestCount,
  Table,
  TableContainer,
  TableData,
  TableHeader,
  TableRow,
  Title,
} from "../adminCoverIdeas/AdminCoverIdea.styles";

const CONTACTS_PAGE_SIZE = 50;
const PREVIEW_WORD_LIMIT = 4;

type ContactItem = {
  _id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  referral?: string;
  message?: string;
  createdAt?: string;
  updatedAt?: string;
};

const AdminContacts: React.FC = () => {
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeLabel, setPageSizeLabel] = useState(CONTACTS_PAGE_SIZE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactItem | null>(
    null,
  );
  const [contactToDelete, setContactToDelete] = useState<ContactItem | null>(
    null,
  );
  const [deleteLoading, setDeleteLoading] = useState(false);

  const getPreviewData = (text: string, maxWords: number) => {
    const normalized = text.trim();
    if (!normalized) return { preview: "N/A", isTruncated: false };
    const words = normalized.split(/\s+/);
    if (words.length <= maxWords) {
      return { preview: normalized, isTruncated: false };
    }
    return {
      preview: `${words.slice(0, maxWords).join(" ")}... more`,
      isTruncated: true,
    };
  };

  useEffect(() => {
    const loadContacts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchAllContacts({
          page,
          limit: CONTACTS_PAGE_SIZE,
        });
        const items = (res.contacts || []) as ContactItem[];
        setContacts(items);
        setTotal(res.total);
        setTotalPages(res.totalPages);
        setPageSizeLabel(res.limit || CONTACTS_PAGE_SIZE);
        if (items.length === 0 && page > 1) {
          setPage((p) => Math.max(1, p - 1));
        }
      } catch (err: any) {
        setError(err?.message || "Failed to load contacts");
      } finally {
        setLoading(false);
      }
    };

    void loadContacts();
  }, [page]);

  const handleDeleteConfirm = async () => {
    if (!contactToDelete?._id) return;
    const id = String(contactToDelete._id);
    try {
      setDeleteLoading(true);
      await deleteContactById(id);
      const next = contacts.filter((c) => c._id !== id);
      setContacts(next);
      setTotal((t) => Math.max(0, t - 1));
      if (selectedContact?._id === id) setSelectedContact(null);
      setContactToDelete(null);
      toast.success("Contact deleted successfully");
      if (next.length === 0 && page > 1) {
        setPage((p) => Math.max(1, p - 1));
      }
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Failed to delete contact";
      toast.error(msg);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Contact Submissions</title>
      </Helmet>
      <ConfirmModal
        open={!!contactToDelete}
        title="Delete contact submission"
        message={
          contactToDelete
            ? `Delete submission from ${`${contactToDelete.firstName || ""} ${contactToDelete.lastName || ""}`.trim() || contactToDelete.email || "this contact"}? This cannot be undone.`
            : ""
        }
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={handleDeleteConfirm}
        onCancel={() => {
          if (!deleteLoading) setContactToDelete(null);
        }}
      />
      <HeaderSection>
        <Title>Contact Submissions</Title>
        {!error && (
          <RequestCount>
            ({total} total
            {totalPages > 1 ? ` · page ${page} of ${totalPages}` : ""})
          </RequestCount>
        )}
      </HeaderSection>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <TableHeader className="header-id">ID</TableHeader>
              <TableHeader className="header-username">Name</TableHeader>
              <TableHeader className="header-email">Email</TableHeader>
              <TableHeader className="header-cover">Referral</TableHeader>
              <TableHeader className="header-moreinfo">Message</TableHeader>
              <TableHeader className="header-date">Submitted</TableHeader>
              <TableHeader className="header-actions">Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <TableSkeleton rows={8} cols={7} />
            ) : error ? (
              <TableRow>
                <TableData
                  colSpan={7}
                  style={{ textAlign: "center", padding: "40px" }}
                >
                  <ErrorText>Error: {error}</ErrorText>
                </TableData>
              </TableRow>
            ) : contacts.length > 0 ? (
              contacts.map((contact) => {
                const referralPreview = getPreviewData(
                  contact.referral || "N/A",
                  PREVIEW_WORD_LIMIT,
                );
                const messagePreview = getPreviewData(
                  contact.message || "N/A",
                  PREVIEW_WORD_LIMIT,
                );
                const openDetails = () => setSelectedContact(contact);

                return (
                <TableRow key={contact._id}>
                  <TableData className="book-id">
                    <IdText>{contact._id?.slice(-8) || "N/A"}</IdText>
                  </TableData>
                  <TableData className="user-name">
                    {`${contact.firstName || ""} ${contact.lastName || ""}`.trim() ||
                      "N/A"}
                  </TableData>
                  <TableData className="book-email">
                    {contact.email || "N/A"}
                  </TableData>
                  <TableData className="book-cover">
                    <PreviewText
                      role={referralPreview.isTruncated ? "button" : undefined}
                      tabIndex={referralPreview.isTruncated ? 0 : -1}
                      $isClickable={referralPreview.isTruncated}
                      onClick={
                        referralPreview.isTruncated ? openDetails : undefined
                      }
                      onKeyDown={(e) => {
                        if (
                          referralPreview.isTruncated &&
                          (e.key === "Enter" || e.key === " ")
                        ) {
                          e.preventDefault();
                          openDetails();
                        }
                      }}
                      title={contact.referral || "N/A"}
                    >
                      {referralPreview.preview}
                    </PreviewText>
                  </TableData>
                  <TableData className="book-message">
                    <PreviewText
                      role={messagePreview.isTruncated ? "button" : undefined}
                      tabIndex={messagePreview.isTruncated ? 0 : -1}
                      $isClickable={messagePreview.isTruncated}
                      onClick={messagePreview.isTruncated ? openDetails : undefined}
                      onKeyDown={(e) => {
                        if (
                          messagePreview.isTruncated &&
                          (e.key === "Enter" || e.key === " ")
                        ) {
                          e.preventDefault();
                          openDetails();
                        }
                      }}
                      title={contact.message || "N/A"}
                    >
                      {messagePreview.preview}
                    </PreviewText>
                  </TableData>
                  <TableData className="cell-date">
                    <DateText>{formatSubmittedAt(contact.createdAt)}</DateText>
                  </TableData>
                  <TableData className="cell-actions">
                    <DeleteBtn
                      type="button"
                      disabled={deleteLoading}
                      onClick={() => setContactToDelete(contact)}
                    >
                      Delete
                    </DeleteBtn>
                  </TableData>
                </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableData
                  colSpan={7}
                  style={{ textAlign: "center", padding: "40px" }}
                >
                  <EmptyText>No contact submissions found</EmptyText>
                </TableData>
              </TableRow>
            )}
          </tbody>
        </Table>
      </TableContainer>

      {!loading && !error && total > 0 && (
        <AdminListPagination
          page={page}
          totalPages={totalPages}
          pageSizeLabel={pageSizeLabel}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
        />
      )}
      <ToastContainer />

      {selectedContact && (
        <ModalOverlay onClick={() => setSelectedContact(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Contact Details</ModalTitle>
              <CloseButton onClick={() => setSelectedContact(null)}>
                ×
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <Label>Submitted</Label>
              <Value>{formatSubmittedAt(selectedContact.createdAt)}</Value>
              <Label>Referral</Label>
              <Value>{selectedContact.referral || "N/A"}</Value>
              <Label>Message</Label>
              <Message>{selectedContact.message || "N/A"}</Message>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default AdminContacts;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
  background: linear-gradient(135deg, #6dc7d1 0%, #5ab8c2 100%);
  border-radius: 16px 16px 0 0;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  margin-top: 10px;
`;

const Value = styled.div`
  font-size: 15px;
  color: #111827;
  margin-top: 4px;
`;

const Message = styled.p`
  margin-top: 6px;
  white-space: pre-wrap;
  color: #111827;
`;

const IdText = styled.span`
  font-family: monospace;
  color: #6dc7d1;
  font-weight: 600;
`;

const ErrorText = styled.div`
  color: #dc2626;
  font-size: 16px;
  font-weight: 500;
`;

const EmptyText = styled.div`
  color: #6b7280;
  font-size: 16px;
  font-weight: 500;
`;

const DateText = styled.span`
  font-size: 12px;
  color: #475569;
  font-weight: 500;
  white-space: nowrap;
`;

const DeleteBtn = styled.button`
  padding: 6px 12px;
  background-color: #dc2626;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
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

const PreviewText = styled.span<{ $isClickable?: boolean }>`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #0f172a;
  cursor: ${(props) => (props.$isClickable ? "pointer" : "default")};
  font-weight: 500;
  text-decoration: ${(props) => (props.$isClickable ? "underline" : "none")};
  text-decoration-color: ${(props) =>
    props.$isClickable ? "transparent" : "initial"};
  transition: color 0.2s ease, text-decoration-color 0.2s ease;

  &:hover {
    color: ${(props) => (props.$isClickable ? "#5ab8c2" : "#0f172a")};
    text-decoration-color: ${(props) =>
      props.$isClickable ? "#5ab8c2" : "initial"};
  }
`;
