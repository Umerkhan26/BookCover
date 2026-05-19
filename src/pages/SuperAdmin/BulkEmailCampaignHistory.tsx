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
    if (!selectedCampaign) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCampaign(null);
    };
    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedCampaign]);

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
        <ModalBackdrop
          role="presentation"
          onClick={() => setSelectedCampaign(null)}
        >
          <ModalPanel
            role="dialog"
            aria-modal="true"
            aria-labelledby="campaign-detail-title"
            onClick={(e) => e.stopPropagation()}
          >
            <DetailHeader>
              <HeaderTextBlock>
                <ModalTitle id="campaign-detail-title">
                  {selectedCampaign.subject || "Campaign detail"}
                </ModalTitle>
                <ModalMeta>
                  ID <code>{selectedCampaign.id}</code>
                  <MetaSep>·</MetaSep>
                  <StatusBadge>{selectedCampaign.status}</StatusBadge>
                </ModalMeta>
              </HeaderTextBlock>
              <CloseDetailBtn type="button" onClick={() => setSelectedCampaign(null)}>
                Close
              </CloseDetailBtn>
            </DetailHeader>
            {detailStats ? (
              <StatsGrid>
                <StatChip>Total {detailStats.totalRecipients}</StatChip>
                <StatChip>Sent {detailStats.sentCount}</StatChip>
                <StatChip>Failed {detailStats.failedCount}</StatChip>
                <StatChip>Opened {detailStats.openedCount}</StatChip>
                <StatChip>Not opened {detailStats.notOpenedCount}</StatChip>
              </StatsGrid>
            ) : null}
            <SelectField>
              <SelectLabel htmlFor="campaign-recipient-filter">
                Recipients
              </SelectLabel>
              <ModalDetailSelect
                id="campaign-recipient-filter"
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
              </ModalDetailSelect>
            </SelectField>
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
          </ModalPanel>
        </ModalBackdrop>
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
  border-radius: 8px;
  padding: 6px 12px;
  min-width: 160px;
  font-size: 13px;
  height: 36px;
  color: #334155 !important;
  -webkit-text-fill-color: #334155;
  background-color: #fff;
  caret-color: #334155;

  &::placeholder {
    color: #64748b;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: #6dc7d1;
    box-shadow: 0 0 0 3px rgba(109, 199, 209, 0.25);
  }
`;

const selectChevronSvg = encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2.25' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>",
);

const FilterSelect = styled.select`
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 6px 36px 6px 12px;
  min-width: 120px;
  font-size: 13px;
  background-color: #fff;
  color: #334155 !important;
  -webkit-text-fill-color: #334155;
  height: 36px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,${selectChevronSvg}");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:hover {
    border-color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #6dc7d1;
    box-shadow: 0 0 0 3px rgba(109, 199, 209, 0.25);
  }

  option {
    color: #334155 !important;
    background: #fff;
  }
`;

const ModalDetailSelect = styled(FilterSelect)`
  width: 100%;
  max-width: 320px;
  min-width: 200px;
`;

const SelectField = styled.div`
  margin-bottom: 4px;
`;

const SelectLabel = styled.label`
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 6px;
`;

const ApplyBtn = styled.button`
  border: 1px solid #6dc7d1;
  background: #6dc7d1;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  padding: 5px 12px;
  border-radius: 8px;
  cursor: pointer;
  height: 36px;
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

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.52);
  backdrop-filter: blur(3px);
  display: grid;
  place-items: center;
  z-index: 1200;
  padding: 16px;
`;

const ModalPanel = styled.div`
  width: min(720px, 100%);
  max-height: min(88vh, 900px);
  overflow: auto;
  background: linear-gradient(180deg, #f8fffe 0%, #ffffff 48px);
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  padding: 0 18px 18px;
  padding-top: 14px;
  box-shadow:
    0 4px 6px -1px rgba(15, 23, 42, 0.08),
    0 24px 48px -12px rgba(15, 23, 42, 0.22);
  border-top: 4px solid #6dc7d1;
`;

const ModalTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.3;
  padding-right: 8px;
`;

const ModalMeta = styled.p`
  margin: 0;
  font-size: 12px;
  color: #64748b;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;

  code {
    font-size: 11px;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    background: #f1f5f9;
    color: #475569;
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid #e2e8f0;
    word-break: break-all;
  }
`;

const MetaSep = styled.span`
  color: #cbd5e1;
  user-select: none;
`;

const StatusBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
  padding: 3px 10px;
  border-radius: 999px;
  background: #f1f5f9;
  color: #334155;
  border: 1px solid #e2e8f0;
`;

const HeaderTextBlock = styled.div`
  flex: 1;
  min-width: 0;
`;

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid #e2e8f0;
`;

const CloseDetailBtn = styled.button`
  flex-shrink: 0;
  border: 1px solid #6dc7d1;
  background: #fff;
  color: #0f766e;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &:hover {
    background: #6dc7d1;
    color: #fff;
  }
`;

const StatsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const StatChip = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 999px;
  background: #f0fdfa;
  color: #0f766e;
  border: 1px solid #99f6e4;
`;

const MiniTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  overflow: hidden;

  th,
  td {
    border-bottom: 1px solid #e5e7eb;
    padding: 10px 12px;
    text-align: left;
    font-size: 13px;
    color: #334155;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  th {
    background: linear-gradient(180deg, #eefcfd 0%, #e6f7f9 100%);
    font-weight: 700;
    font-size: 11px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: #0c4a6e;
  }
`;
