import React, { useEffect, useState } from "react";
import {
  Container,
  CoverIdeasTable,
  TableContainer,
  TableData,
  TableHeader,
  TableRow,
  HeaderSection,
  Title,
  RequestCount,
  InfoButton,
  SeriesBadge,
} from "./AdminCoverIdea.styles";
import { deleteBookRequestById, fetchAllBookRequests } from "../../apis/apis";
import { formatSubmittedAt } from "../../utils/formatSubmittedAt";
import { Helmet } from "react-helmet-async";
import { TableSkeleton } from "../../components/DashboardLoading/DashboardLoading";
import AdminListPagination from "../../components/AdminDashboard/AdminListPagination";
import ConfirmModal from "../../components/ConfirmModal/ConfirmModal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const COVER_IDEAS_PAGE_SIZE = 50;

/** Stable column widths: fixed ID + Actions, % for the rest (table-layout: fixed). */
const CoverIdeasColGroup = () => (
  <colgroup>
    <col style={{ width: "88px" }} />
    <col style={{ width: "10%" }} />
    <col style={{ width: "24%" }} />
    <col style={{ width: "14%" }} />
    <col style={{ width: "7%" }} />
    <col style={{ width: "7%" }} />
    <col style={{ width: "11%" }} />
    <col style={{ width: "9%" }} />
    <col style={{ width: "220px" }} />
  </colgroup>
);

const PREVIEW_MAX_CHARS = 44;

const HoverPreviewSpan = styled.span<{ $truncated: boolean }>`
  display: inline;
  white-space: normal;
  word-break: break-word;
  overflow-wrap: anywhere;
  cursor: ${(p) => (p.$truncated ? "pointer" : "default")};
`;

type HoverPreviewProps = {
  text: string;
  /** When text has more words than this, show first N words + "..."; default 2. */
  wordLimit?: number;
};

/**
 * More than `wordLimit` words → first N whole words + "...".
 * Long single chunk (e.g. one long token) → end "..." after PREVIEW_MAX_CHARS.
 * Full value on hover via `title` when shortened.
 */
const HoverPreview: React.FC<HoverPreviewProps> = ({
  text,
  wordLimit = 2,
}) => {
  const raw = String(text ?? "").trim() || "N/A";
  const words = raw.split(/\s+/).filter(Boolean);
  let shown: string;
  let truncated: boolean;

  if (words.length > wordLimit) {
    shown = `${words.slice(0, wordLimit).join(" ")}...`;
    truncated = true;
  } else if (raw.length > PREVIEW_MAX_CHARS) {
    shown = `${raw.slice(0, PREVIEW_MAX_CHARS - 3).trimEnd()}...`;
    truncated = true;
  } else {
    shown = raw;
    truncated = false;
  }

  return (
    <HoverPreviewSpan title={truncated ? raw : undefined} $truncated={truncated}>
      {shown}
    </HoverPreviewSpan>
  );
};

const AdminCoverIdea: React.FC = () => {
  const navigate = useNavigate();
  const [bookRequests, setBookRequests] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeLabel, setPageSizeLabel] = useState(COVER_IDEAS_PAGE_SIZE);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
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
          <CoverIdeasTable>
            <CoverIdeasColGroup />
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
                <TableHeader className="header-date">Submitted</TableHeader>
                <TableHeader className="header-actions">Actions</TableHeader>
              </tr>
            </thead>
            <tbody>
              <TableSkeleton rows={8} cols={9} />
            </tbody>
          </CoverIdeasTable>
        </TableContainer>
      </Container>
    );
  }

  const handleInfoClick = (id: string) => {
    navigate(`/admin/coverIdeas/${id}`);
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
        <CoverIdeasTable>
          <CoverIdeasColGroup />
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
              <TableHeader className="header-date">Submitted</TableHeader>
              <TableHeader className="header-actions">Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {error ? (
              <TableRow>
                <TableData
                  colSpan={9}
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
                    <UserName as="span">
                      <HoverPreview text={bookRequest.name || "N/A"} />
                    </UserName>
                  </TableData>
                  <TableData className="book-email">
                    <HoverPreview
                      text={bookRequest.email || "N/A"}
                      wordLimit={3}
                    />
                  </TableData>
                  <TableData className="book-title">
                    <BookTitle as="span">
                      <HoverPreview text={bookRequest.title || "N/A"} />
                    </BookTitle>
                  </TableData>
                  <TableData className="book-genre">
                    <HoverPreview text={bookRequest.genre || "N/A"} />
                  </TableData>
                  <TableData className="book-series">
                    <SeriesBadge isSeries={bookRequest.isSeries}>
                      {bookRequest.isSeries ? "Yes" : "No"}
                    </SeriesBadge>
                  </TableData>
                  <TableData className="book-cover">
                    <HoverPreview
                      text={
                        bookRequest.coverPreference?.join(", ") || "N/A"
                      }
                    />
                  </TableData>
                  <TableData className="book-date">
                    <DateText>
                      {formatSubmittedAt(bookRequest.createdAt, {
                        dateOnly: true,
                      })}
                    </DateText>
                  </TableData>
                  <TableData className="cell-actions">
                    <ActionCell>
                      <CompactInfoButton
                        type="button"
                        onClick={() => handleInfoClick(bookRequest._id)}
                      >
                        View Info
                      </CompactInfoButton>
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
                  colSpan={9}
                  style={{ textAlign: "center", padding: "40px" }}
                >
                  <EmptyMessage>No cover ideas found</EmptyMessage>
                </TableData>
              </TableRow>
            )}
          </tbody>
        </CoverIdeasTable>
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
  display: block;
  font-family: monospace;
  color: #6dc7d1;
  font-weight: 600;
  font-size: 11px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserName = styled.span`
  font-weight: 600;
  color: #212121;
`;

const BookTitle = styled.span`
  font-weight: 600;
  color: #212121;
`;

const DateText = styled.span`
  font-size: 12px;
  color: #475569;
  font-weight: 500;
  white-space: nowrap;
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
  gap: 6px;
  align-items: center;
  justify-content: center;

  & > button {
    flex-shrink: 0;
  }
`;

const CompactInfoButton = styled(InfoButton)`
  padding: 6px 12px;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 600;
  min-width: 92px;
  line-height: 1.1;
`;

const DeleteButton = styled.button`
  padding: 6px 12px;
  background-color: #dc2626;
  border: none;
  border-radius: 7px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  min-width: 78px;
  line-height: 1.1;
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

