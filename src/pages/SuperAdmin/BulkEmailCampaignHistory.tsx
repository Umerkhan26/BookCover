import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { TableSkeleton } from "../../components/DashboardLoading/DashboardLoading";
import AdminListPagination from "../../components/AdminDashboard/AdminListPagination";
import { formatSubmittedAt } from "../../utils/formatSubmittedAt";
import {
  fetchCampaigns,
  fetchCampaignRecipients,
  fetchCampaignStats,
  type CampaignRecipient,
  type CampaignStats,
  type CampaignSummary,
} from "../../services/marketingCampaignHistory.service";
import type { DatePreset } from "../../utils/adminDateRange";
import { presetToDateStrings } from "../../utils/adminDateRange";
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

const BulkEmailCampaignHistory: React.FC = () => {
  const [rows, setRows] = useState<CampaignSummary[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeLabel, setPageSizeLabel] = useState(20);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignSummary | null>(
    null,
  );
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailStats, setDetailStats] = useState<CampaignStats | null>(null);
  const [detailRecipients, setDetailRecipients] = useState<CampaignRecipient[]>([]);
  const [detailBucket, setDetailBucket] = useState<
    "all" | "sent" | "failed" | "skipped" | "opened" | "not-opened"
  >("all");
  const [detailPage, setDetailPage] = useState(1);
  const [detailTotalPages, setDetailTotalPages] = useState(1);
  const [detailPageSize, setDetailPageSize] = useState(20);
  const [searchInput, setSearchInput] = useState("");
  const [searchApplied, setSearchApplied] = useState("");
  const [datePreset, setDatePreset] = useState<DatePreset>("all");
  const [customDateFrom, setCustomDateFrom] = useState("");
  const [customDateTo, setCustomDateTo] = useState("");
  const [customDateFromApplied, setCustomDateFromApplied] = useState("");
  const [customDateToApplied, setCustomDateToApplied] = useState("");

  const { dateFrom: apiDateFrom, dateTo: apiDateTo } = useMemo(
    () =>
      presetToDateStrings(datePreset, customDateFromApplied, customDateToApplied),
    [datePreset, customDateFromApplied, customDateToApplied],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSearchApplied(searchInput.trim());
    }, 350);
    return () => window.clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    setPage(1);
  }, [searchApplied, datePreset, apiDateFrom, apiDateTo]);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetchCampaigns({
        page,
        limit: 20,
        search: searchApplied || undefined,
        dateFrom: apiDateFrom || undefined,
        dateTo: apiDateTo || undefined,
      });
      setRows(res.campaigns);
      setTotal(res.total);
      setTotalPages(res.totalPages);
      setPageSizeLabel(res.limit || 20);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to load history");
    } finally {
      setLoading(false);
    }
  }, [page, searchApplied, apiDateFrom, apiDateTo]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    const loadDetail = async () => {
      if (!selectedCampaign?.id) {
        setDetailStats(null);
        setDetailRecipients([]);
        setDetailPage(1);
        setDetailTotalPages(1);
        return;
      }
      try {
        setDetailLoading(true);
        const [statsRes, recRes] = await Promise.all([
          fetchCampaignStats(selectedCampaign.id),
          fetchCampaignRecipients(selectedCampaign.id, {
            bucket: detailBucket,
            page: detailPage,
            limit: 20,
          }),
        ]);
        setDetailStats(statsRes);
        setDetailRecipients(recRes.recipients);
        setDetailTotalPages(recRes.totalPages);
        setDetailPageSize(recRes.limit || 20);
      } finally {
        setDetailLoading(false);
      }
    };
    void loadDetail();
  }, [selectedCampaign, detailBucket, detailPage]);

  const totals = useMemo(() => {
    return rows.reduce(
      (acc, r) => {
        acc.sent += r.sentCount;
        acc.failed += r.failedCount;
        return acc;
      },
      { sent: 0, failed: 0 },
    );
  }, [rows]);

  return (
    <Container>
      <Helmet>
        <title>Campaign History</title>
      </Helmet>
      <HeaderSection>
        <Title>Campaign History</Title>
        <RequestCount>
          ({total} total · sent {totals.sent} · failed {totals.failed})
        </RequestCount>
      </HeaderSection>
      <FilterRow>
        <FilterInput
          placeholder="Search campaigns..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <FilterSelect
          value={datePreset}
          onChange={(e) => {
            const nextPreset = e.target.value as DatePreset;
            setDatePreset(nextPreset);
            if (nextPreset !== "custom") {
              setCustomDateFromApplied("");
              setCustomDateToApplied("");
            }
          }}
        >
          <option value="all">All dates</option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="weekly">This week</option>
          <option value="monthly">This month</option>
          <option value="custom">Custom</option>
        </FilterSelect>
        {datePreset === "custom" ? (
          <>
            <FilterInput
              type="date"
              value={customDateFrom}
              onChange={(e) => setCustomDateFrom(e.target.value)}
            />
            <FilterInput
              type="date"
              value={customDateTo}
              onChange={(e) => setCustomDateTo(e.target.value)}
            />
            <ApplyBtn
              type="button"
              onClick={() => {
                setCustomDateFromApplied(customDateFrom.trim());
                setCustomDateToApplied(customDateTo.trim());
              }}
            >
              Apply
            </ApplyBtn>
          </>
        ) : null}
      </FilterRow>
      <TableContainer>
        <Table style={{ minWidth: 980 }}>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Subject</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Sent</TableHeader>
              <TableHeader>Failed</TableHeader>
              <TableHeader>Created</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <TableSkeleton rows={8} cols={7} />
            ) : error ? (
              <TableRow>
                <TableData colSpan={7}>{error}</TableData>
              </TableRow>
            ) : rows.length ? (
              rows.map((r) => (
                <TableRow key={r.id}>
                  <TableData>{r.id.slice(-8)}</TableData>
                  <TableData>{r.subject || "—"}</TableData>
                  <TableData>{r.status}</TableData>
                  <TableData>{r.sentCount}</TableData>
                  <TableData>{r.failedCount}</TableData>
                  <TableData>{formatSubmittedAt(r.createdAt, { dateOnly: true })}</TableData>
                  <TableData>
                    <ViewBtn
                      type="button"
                      onClick={() => {
                        setSelectedCampaign(r);
                        setDetailBucket("all");
                        setDetailPage(1);
                      }}
                    >
                      View
                    </ViewBtn>
                  </TableData>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableData colSpan={7}>No campaign history found.</TableData>
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
          <DetailHeader>
            <strong>{selectedCampaign.subject || "Campaign detail"}</strong>
            <CloseDetailBtn type="button" onClick={() => setSelectedCampaign(null)}>
              Close
            </CloseDetailBtn>
          </DetailHeader>
          {detailStats ? (
            <StatsLine>
              Total {detailStats.totalRecipients} · Sent {detailStats.sentCount} ·
              Failed {detailStats.failedCount} · Opened {detailStats.openedCount} · Not
              opened {detailStats.notOpenedCount}
            </StatsLine>
          ) : null}
          <FilterSelect
            value={detailBucket}
            onChange={(e) => {
              setDetailBucket(
                e.target.value as
                  | "all"
                  | "sent"
                  | "failed"
                  | "skipped"
                  | "opened"
                  | "not-opened",
              );
              setDetailPage(1);
            }}
          >
            <option value="all">All recipients</option>
            <option value="sent">Sent</option>
            <option value="failed">Failed</option>
            <option value="skipped">Skipped</option>
            <option value="opened">Opened</option>
            <option value="not-opened">Not opened</option>
          </FilterSelect>
          <MiniTable>
            <thead>
              <tr>
                <th>Email</th>
                <th>Status</th>
                <th>Open count</th>
              </tr>
            </thead>
            <tbody>
              {detailLoading ? (
                <tr>
                  <td colSpan={3}>Loading recipients...</td>
                </tr>
              ) : detailRecipients.length ? (
                detailRecipients.map((r) => (
                  <tr key={r.id ?? r._id ?? r.email}>
                    <td>{r.email || "—"}</td>
                    <td>{r.status || "—"}</td>
                    <td>{r.openCount ?? 0}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3}>No recipients found.</td>
                </tr>
              )}
            </tbody>
          </MiniTable>
          {detailTotalPages > 1 ? (
            <AdminListPagination
              page={detailPage}
              totalPages={detailTotalPages}
              pageSizeLabel={detailPageSize}
              onPrev={() => setDetailPage((p) => Math.max(1, p - 1))}
              onNext={() => setDetailPage((p) => Math.min(detailTotalPages, p + 1))}
            />
          ) : null}
        </DetailCard>
      ) : null}
    </Container>
  );
};

export default BulkEmailCampaignHistory;

const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  margin: 2px 0 12px;
  flex-wrap: wrap;
  align-items: center;
`;

const FilterInput = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 5px 10px;
  min-width: 160px;
  font-size: 13px;
  height: 32px;
  color: #334155 !important;
  -webkit-text-fill-color: #334155;
  background: #fff !important;
  caret-color: #334155;

  &::placeholder {
    color: #64748b;
    opacity: 1;
  }
`;

const FilterSelect = styled.select`
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 5px 30px 5px 10px;
  min-width: 120px;
  font-size: 13px;
  background: #fff !important;
  color: #334155 !important;
  -webkit-text-fill-color: #334155;
  height: 32px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2364758b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 14px 14px;

  option {
    color: #334155 !important;
    background: #fff;
  }
`;

const ApplyBtn = styled.button`
  border: 1px solid #6dc7d1;
  background: #6dc7d1;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  height: 32px;
`;

const ViewBtn = styled.button`
  border: none;
  background: #6b7280;
  color: #fff;
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

const DetailCard = styled.section`
  margin-top: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px;
  background: #fff;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const CloseDetailBtn = styled.button`
  border: 1px solid #cbd5e1;
  background: #fff;
  color: #334155;
  border-radius: 6px;
  padding: 4px 8px;
  font-size: 12px;
  cursor: pointer;
`;

const StatsLine = styled.p`
  margin: 0 0 10px;
  color: #334155;
  font-size: 12px;
`;

const MiniTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;

  th,
  td {
    border-bottom: 1px solid #e5e7eb;
    padding: 8px;
    text-align: left;
    font-size: 12px;
    color: #334155;
  }

  th {
    background: #f8fafc;
    font-weight: 700;
  }
`;
