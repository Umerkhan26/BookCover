import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { TableSkeleton } from "../../components/DashboardLoading/DashboardLoading";
import AdminListPagination from "../../components/AdminDashboard/AdminListPagination";
import { fetchAllContacts } from "../../apis/apis";
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

  return (
    <Container>
      <Helmet>
        <title>Contact Submissions</title>
      </Helmet>
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
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <TableSkeleton rows={8} cols={5} />
            ) : error ? (
              <TableRow>
                <TableData
                  colSpan={5}
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
                </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableData
                  colSpan={5}
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
