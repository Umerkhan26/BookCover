import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  TableContainer,
  TableData,
  TableHeader,
  TableRow,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalTitle,
  ModalBody,
  HeaderSection,
  Title,
  RequestCount,
  InfoButton,
  SeriesBadge,
} from "./AdminCoverIdea.styles";
import { deleteBookRequestById, fetchAllBookRequests } from "../../apis/apis";
import { Helmet } from "react-helmet-async";
import { TableSkeleton } from "../../components/DashboardLoading/DashboardLoading";
import AdminListPagination from "../../components/AdminDashboard/AdminListPagination";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const COVER_IDEAS_PAGE_SIZE = 10;

const AdminCoverIdea: React.FC = () => {
  const [bookRequests, setBookRequests] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeLabel, setPageSizeLabel] = useState(COVER_IDEAS_PAGE_SIZE);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBookRequest, setSelectedBookRequest] = useState<any | null>(
    null,
  );
  const [requestToDelete, setRequestToDelete] = useState<any | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    const loadBookRequests = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetchAllBookRequests({
          page,
          limit: COVER_IDEAS_PAGE_SIZE,
        });
        setBookRequests(res.bookRequests || []);
        setTotal(res.total);
        setTotalPages(res.totalPages);
        setPageSizeLabel(res.limit || COVER_IDEAS_PAGE_SIZE);
        if (res.bookRequests.length === 0 && page > 1) {
          setPage((p) => Math.max(1, p - 1));
        }
      } catch (err: any) {
        setError(err.message || "Failed to load book requests");
      } finally {
        setLoading(false);
      }
    };

    void loadBookRequests();
  }, [page]);

  if (loading) {
    return (
      <Container>
        <Helmet>
          <title>Cover Ideas</title>
          <meta
            name="description"
            content="Manage and view cover ideas submitted by users."
          />
        </Helmet>
        <HeaderSection>
          <TitleSkeleton />
        </HeaderSection>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <TableHeader className="header-id">ID</TableHeader>
                <TableHeader className="header-username">User Name</TableHeader>
                <TableHeader className="header-email">Email</TableHeader>
                <TableHeader className="header-booktitle">
                  Book Title
                </TableHeader>
                <TableHeader className="header-genre">Genre</TableHeader>
                <TableHeader className="header-series">Is Series?</TableHeader>
                <TableHeader className="header-cover">
                  Cover Preference
                </TableHeader>
                <TableHeader className="header-moreinfo">Actions</TableHeader>
              </tr>
            </thead>
            <tbody>
              <TableSkeleton rows={8} cols={8} />
            </tbody>
          </Table>
        </TableContainer>
      </Container>
    );
  }

  // Function to show the modal with the full details of a book request
  const handleInfoClick = (bookRequest: any) => {
    setSelectedBookRequest(bookRequest); // Set selected book request data
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedBookRequest(null); // Clear the selected book request
  };

  const handleDeleteConfirm = async () => {
    if (!requestToDelete?._id) return;
    const id = String(requestToDelete._id);
    try {
      setDeleteLoading(true);
      await deleteBookRequestById(id);
      const next = bookRequests.filter((r) => r._id !== id);
      setBookRequests(next);
      setTotal((t) => Math.max(0, t - 1));
      if (selectedBookRequest?._id === id) {
        setSelectedBookRequest(null);
      }
      setRequestToDelete(null);
      toast.success("Cover idea deleted successfully");
      if (next.length === 0 && page > 1) {
        setPage((p) => Math.max(1, p - 1));
      }
    } catch (err: any) {
      const msg =
        typeof err === "string" ? err : err?.message || "Failed to delete";
      toast.error(msg);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Cover Ideas</title>
        <meta
          name="description"
          content="Manage and view cover ideas submitted by users."
        />
      </Helmet>
      <ConfirmModal
        open={!!requestToDelete}
        title="Delete cover idea"
        message={
          requestToDelete
            ? `Delete the request from ${requestToDelete.name || "this user"} (${requestToDelete.title || "untitled"})? This cannot be undone.`
            : ""
        }
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={handleDeleteConfirm}
        onCancel={() => {
          if (!deleteLoading) setRequestToDelete(null);
        }}
      />
      <HeaderSection>
        <Title>Book Cover Ideas</Title>
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
              <TableHeader className="header-username">User Name</TableHeader>
              <TableHeader className="header-email">Email</TableHeader>
              <TableHeader className="header-booktitle">Book Title</TableHeader>
              <TableHeader className="header-genre">Genre</TableHeader>
              <TableHeader className="header-series">Is Series?</TableHeader>
              <TableHeader className="header-cover">
                Cover Preference
              </TableHeader>
              <TableHeader className="header-moreinfo">Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <TableRow>
                <TableData
                  colSpan={8}
                  style={{ textAlign: "center", padding: "40px" }}
                >
                  <ErrorMessageText>Error: {error}</ErrorMessageText>
                </TableData>
              </TableRow>
            ) : bookRequests.length > 0 ? (
              bookRequests.map((bookRequest) => (
                <TableRow key={bookRequest._id}>
                  <TableData className="book-id">
                    <RequestIdRow>
                      <RequestIdSub>{bookRequest._id.slice(-8)}</RequestIdSub>
                    </RequestIdRow>
                  </TableData>
                  <TableData className="user-name">
                    <UserName>{bookRequest.name || "N/A"}</UserName>
                  </TableData>
                  <TableData className="book-email">
                    {bookRequest.email || "N/A"}
                  </TableData>
                  <TableData className="book-title">
                    <BookTitle>{bookRequest.title || "N/A"}</BookTitle>
                  </TableData>
                  <TableData className="book-genre">
                    {bookRequest.genre || "N/A"}
                  </TableData>
                  <TableData className="book-series">
                    <SeriesBadge isSeries={bookRequest.isSeries}>
                      {bookRequest.isSeries ? "Yes" : "No"}
                    </SeriesBadge>
                  </TableData>
                  <TableData className="book-cover">
                    {bookRequest.coverPreference?.join(", ") || "N/A"}
                  </TableData>
                  <TableData className="book-button">
                    <ActionCell>
                      <InfoButton
                        type="button"
                        onClick={() => handleInfoClick(bookRequest)}
                      >
                        View Info
                      </InfoButton>
                      <DeleteButton
                        type="button"
                        disabled={deleteLoading}
                        onClick={() => setRequestToDelete(bookRequest)}
                      >
                        Delete
                      </DeleteButton>
                    </ActionCell>
                  </TableData>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableData
                  colSpan={8}
                  style={{ textAlign: "center", padding: "40px" }}
                >
                  <EmptyMessage>No cover ideas found</EmptyMessage>
                </TableData>
              </TableRow>
            )}
          </tbody>
        </Table>
      </TableContainer>

      {!error && total > 0 && (
        <AdminListPagination
          page={page}
          totalPages={totalPages}
          pageSizeLabel={pageSizeLabel}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
        />
      )}

      {/* Enhanced Modal */}
      {selectedBookRequest && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Book Request Details</ModalTitle>
              <CloseButton onClick={closeModal}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <InfoRow>
                <InfoLabel>User Name:</InfoLabel>
                <InfoValue>{selectedBookRequest.name || "N/A"}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Email:</InfoLabel>
                <InfoValue>{selectedBookRequest.email || "N/A"}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Book Title:</InfoLabel>
                <InfoValue>{selectedBookRequest.title || "N/A"}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Genre:</InfoLabel>
                <InfoValue>{selectedBookRequest.genre || "N/A"}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Is Series:</InfoLabel>
                <InfoValue>
                  <SeriesBadge isSeries={selectedBookRequest.isSeries}>
                    {selectedBookRequest.isSeries ? "Yes" : "No"}
                  </SeriesBadge>
                </InfoValue>
              </InfoRow>
              {selectedBookRequest.description && (
                <InfoRow>
                  <InfoLabel>Description:</InfoLabel>
                  <InfoValue style={{ whiteSpace: "pre-wrap" }}>
                    {selectedBookRequest.description}
                  </InfoValue>
                </InfoRow>
              )}
              {selectedBookRequest.mainCharacters && (
                <InfoRow>
                  <InfoLabel>Main Characters:</InfoLabel>
                  <InfoValue>{selectedBookRequest.mainCharacters}</InfoValue>
                </InfoRow>
              )}
              {selectedBookRequest.setting && (
                <InfoRow>
                  <InfoLabel>Book Cover Setting:</InfoLabel>
                  <InfoValue>{selectedBookRequest.setting}</InfoValue>
                </InfoRow>
              )}
              {selectedBookRequest.coverPreference &&
                selectedBookRequest.coverPreference.length > 0 && (
                  <InfoRow>
                    <InfoLabel>Cover Preferences:</InfoLabel>
                    <InfoValue>
                      {selectedBookRequest.coverPreference.join(", ")}
                    </InfoValue>
                  </InfoRow>
                )}
              {selectedBookRequest.comparableCovers &&
                selectedBookRequest.comparableCovers.length > 0 && (
                  <InfoSection>
                    <SectionLabel>Comparable Covers:</SectionLabel>
                    <CoverImages>
                      {selectedBookRequest.comparableCovers.map(
                        (cover: string, index: number) => (
                          <CoverImage
                            key={index}
                            src={cover}
                            alt={`Comparable Cover ${index + 1}`}
                            loading="lazy"
                          />
                        ),
                      )}
                    </CoverImages>
                  </InfoSection>
                )}
              <ModalActions>
                <DeleteButton
                  type="button"
                  disabled={deleteLoading}
                  onClick={() => setRequestToDelete(selectedBookRequest)}
                >
                  Delete
                </DeleteButton>
              </ModalActions>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
      <ToastContainer />
    </Container>
  );
};

export default AdminCoverIdea;

const TitleSkeleton = styled.div`
  height: 26px;
  width: 200px;
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

const RequestIdRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 700;
  color: #0f172a;
  font-size: 13px;
`;

const RequestIdSub = styled.span`
  font-family: monospace;
  color: #6dc7d1;
  font-weight: 600;
  font-size: 11px;
`;

const UserName = styled.span`
  font-weight: 600;
  color: #212121;
`;

const BookTitle = styled.span`
  font-weight: 600;
  color: #212121;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
  background: linear-gradient(135deg, #6dc7d1 0%, #5ab8c2 100%);
  border-radius: 16px 16px 0 0;
  position: relative;
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

const CoverImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 12px;
`;

const CoverImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
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

const ActionCell = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;

  & > button {
    flex-shrink: 0;
  }
`;

const DeleteButton = styled.button`
  padding: 8px 16px;
  background-color: #dc2626;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
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

const ModalActions = styled.div`
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
`;
