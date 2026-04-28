import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TableSkeleton } from "../../components/DashboardLoading/DashboardLoading";
import AdminListPagination from "../../components/AdminDashboard/AdminListPagination";
import { formatSubmittedAt } from "../../utils/formatSubmittedAt";
import {
  createEmailCampaign,
  fetchCampaignRecipients,
  fetchCampaignStats,
  fetchCampaigns,
  type CampaignRecipient,
  type CampaignStats,
  type CampaignSummary,
} from "../../services/marketingCampaignHistory.service";
import {
  Container,
  HeaderSection,
  RequestCount,
  Table,
  TableContainer,
  TableData,
  TableHeader,
  TableRow,
  Title,
} from "../adminCoverIdeas/AdminCoverIdea.styles";

const EmailCampaignsModule: React.FC = () => {
  const [rows, setRows] = useState<CampaignSummary[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeLabel, setPageSizeLabel] = useState(20);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openComposer, setOpenComposer] = useState(false);
  const [subject, setSubject] = useState("");
  const [html, setHtml] = useState("");
  const [text, setText] = useState("");
  const [contactIds, setContactIds] = useState("");
  const [coverIdeaIds, setCoverIdeaIds] = useState("");
  const [orderIds, setOrderIds] = useState("");
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignSummary | null>(
    null,
  );
  const [stats, setStats] = useState<CampaignStats | null>(null);
  const [recipients, setRecipients] = useState<CampaignRecipient[]>([]);
  const [bucket, setBucket] = useState<
    "all" | "sent" | "failed" | "skipped" | "opened" | "not-opened"
  >("all");

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchCampaigns({ page, limit: 20 });
      setRows(res.campaigns);
      setTotal(res.total);
      setTotalPages(res.totalPages);
      setPageSizeLabel(res.limit || 20);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load campaigns");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    void load();
  }, [load]);

  const loadDetails = useCallback(async () => {
    if (!selectedCampaign) return;
    try {
      const [s, r] = await Promise.all([
        fetchCampaignStats(selectedCampaign.id),
        fetchCampaignRecipients(selectedCampaign.id, { bucket, page: 1, limit: 30 }),
      ]);
      setStats(s);
      setRecipients(r.recipients);
    } catch {
      // ignore
    }
  }, [selectedCampaign, bucket]);

  useEffect(() => {
    void loadDetails();
  }, [loadDetails]);

  const canSend = useMemo(() => subject.trim().length > 0, [subject]);

  const parseIds = (raw: string): string[] =>
    raw
      .split(/[,\n;]/)
      .map((s) => s.trim())
      .filter(Boolean);

  const onSendCampaign = async () => {
    try {
      await createEmailCampaign({
        subject: subject.trim(),
        html: html.trim() || undefined,
        text: text.trim() || undefined,
        contactIds: parseIds(contactIds),
        coverIdeaIds: parseIds(coverIdeaIds),
        orderIds: parseIds(orderIds),
      });
      toast.success("Campaign queued");
      setOpenComposer(false);
      setSubject("");
      setHtml("");
      setText("");
      setContactIds("");
      setCoverIdeaIds("");
      setOrderIds("");
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to queue campaign");
    }
  };

  return (
    <Container>
      <Helmet>
        <title>Email Campaigns</title>
      </Helmet>
      <HeaderSection>
        <Title>Email Campaigns</Title>
        <SendBtn type="button" onClick={() => setOpenComposer(true)}>
          + Add Campaign
        </SendBtn>
        <RequestCount>
          ({total} total{totalPages > 1 ? ` · page ${page} of ${totalPages}` : ""})
        </RequestCount>
      </HeaderSection>

      <TableContainer>
        <Table style={{ minWidth: 980 }}>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Subject</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Recipients</TableHeader>
              <TableHeader>Created</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <TableSkeleton rows={8} cols={6} />
            ) : error ? (
              <TableRow>
                <TableData colSpan={6}>{error}</TableData>
              </TableRow>
            ) : rows.length ? (
              rows.map((r) => (
                <TableRow key={r.id}>
                  <TableData>{r.id.slice(-8)}</TableData>
                  <TableData>{r.subject || "—"}</TableData>
                  <TableData>{r.status}</TableData>
                  <TableData>{r.recipientCount}</TableData>
                  <TableData>{formatSubmittedAt(r.createdAt, { dateOnly: true })}</TableData>
                  <TableData>
                    <ViewBtn type="button" onClick={() => setSelectedCampaign(r)}>
                      View
                    </ViewBtn>
                  </TableData>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableData colSpan={6}>No campaigns found.</TableData>
              </TableRow>
            )}
          </tbody>
        </Table>
      </TableContainer>
      {!loading && !error && total > 0 ? (
        <AdminListPagination
          page={page}
          totalPages={totalPages}
          pageSizeLabel={pageSizeLabel}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
        />
      ) : null}

      {selectedCampaign ? (
        <DetailCard>
          <h3>Campaign Detail: {selectedCampaign.subject}</h3>
          <BucketRow>
            <select
              value={bucket}
              onChange={(e) =>
                setBucket(
                  e.target.value as
                    | "all"
                    | "sent"
                    | "failed"
                    | "skipped"
                    | "opened"
                    | "not-opened",
                )
              }
            >
              <option value="all">all</option>
              <option value="sent">sent</option>
              <option value="failed">failed</option>
              <option value="skipped">skipped</option>
              <option value="opened">opened</option>
              <option value="not-opened">not-opened</option>
            </select>
          </BucketRow>
          {stats ? (
            <p>
              Sent: {stats.sentCount} | Failed: {stats.failedCount} | Opened:{" "}
              {stats.openedCount}
            </p>
          ) : null}
          <MiniTable>
            <thead>
              <tr>
                <th>Email</th>
                <th>Status</th>
                <th>Opens</th>
              </tr>
            </thead>
            <tbody>
              {recipients.map((r) => (
                <tr key={r._id}>
                  <td>{r.email}</td>
                  <td>{r.status}</td>
                  <td>{r.openCount ?? 0}</td>
                </tr>
              ))}
            </tbody>
          </MiniTable>
        </DetailCard>
      ) : null}
      <ToastContainer />

      {openComposer ? (
        <Backdrop onClick={() => setOpenComposer(false)}>
          <Composer onClick={(e) => e.stopPropagation()}>
            <h3>New Email Campaign</h3>
            <label>Subject</label>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} />
            <Dual>
              <div>
                <label>HTML</label>
                <textarea value={html} onChange={(e) => setHtml(e.target.value)} />
              </div>
              <div>
                <label>Text</label>
                <textarea value={text} onChange={(e) => setText(e.target.value)} />
              </div>
            </Dual>
            <label>Contact IDs (comma separated)</label>
            <input value={contactIds} onChange={(e) => setContactIds(e.target.value)} />
            <label>Cover Idea IDs (comma separated)</label>
            <input value={coverIdeaIds} onChange={(e) => setCoverIdeaIds(e.target.value)} />
            <label>Order IDs (comma separated)</label>
            <input value={orderIds} onChange={(e) => setOrderIds(e.target.value)} />
            <Actions>
              <SendBtn type="button" disabled={!canSend} onClick={() => void onSendCampaign()}>
                Queue Campaign
              </SendBtn>
              <CancelBtn type="button" onClick={() => setOpenComposer(false)}>
                Cancel
              </CancelBtn>
            </Actions>
          </Composer>
        </Backdrop>
      ) : null}
    </Container>
  );
};

const SendBtn = styled.button`
  border: 1px solid #0b7f98;
  background: #0b7f98;
  color: #fff;
  border-radius: 8px;
  padding: 8px 12px;
  font-weight: 700;
  cursor: pointer;
`;
const ViewBtn = styled.button`
  border: none;
  background: #64748b;
  color: #fff;
  border-radius: 6px;
  padding: 6px 10px;
  font-weight: 700;
`;
const DetailCard = styled.div`
  margin-top: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px;
`;
const BucketRow = styled.div`
  margin-bottom: 8px;
`;
const MiniTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    text-align: left;
    background: #0b7f98;
    color: #fff;
    padding: 8px;
  }
  td {
    border-bottom: 1px solid #e5e7eb;
    padding: 8px;
  }
`;
const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.42);
  display: grid;
  place-items: center;
  z-index: 1200;
`;
const Composer = styled.div`
  width: min(1200px, 94vw);
  max-height: 92vh;
  overflow: auto;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  input,
  textarea {
    width: 100%;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 10px;
    margin: 4px 0 8px;
  }
  textarea {
    min-height: 180px;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  }
`;
const Dual = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;
const Actions = styled.div`
  display: flex;
  gap: 10px;
`;
const CancelBtn = styled.button`
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #334155;
  border-radius: 8px;
  padding: 8px 12px;
  font-weight: 700;
`;

export default EmailCampaignsModule;
