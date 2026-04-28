import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { TableSkeleton } from "../../components/DashboardLoading/DashboardLoading";
import AdminListPagination from "../../components/AdminDashboard/AdminListPagination";
import { formatSubmittedAt } from "../../utils/formatSubmittedAt";
import {
  fetchCampaigns,
  fetchCampaignStats,
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

const AnalyticsModule: React.FC = () => {
  const [rows, setRows] = useState<CampaignSummary[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeLabel, setPageSizeLabel] = useState(20);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statsByCampaignId, setStatsByCampaignId] = useState<
    Record<string, CampaignStats>
  >({});
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
      setError(err instanceof Error ? err.message : "Failed to load campaigns");
    } finally {
      setLoading(false);
    }
  }, [page, searchApplied, apiDateFrom, apiDateTo]);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    let alive = true;
    const loadStats = async () => {
      if (!rows.length) {
        setStatsByCampaignId({});
        return;
      }
      const pairs = await Promise.all(
        rows.map(async (campaign) => {
          try {
            const stats = await fetchCampaignStats(campaign.id);
            return [campaign.id, stats] as const;
          } catch {
            return [campaign.id, null] as const;
          }
        }),
      );
      if (!alive) return;
      const next: Record<string, CampaignStats> = {};
      for (const [campaignId, stats] of pairs) {
        if (stats) next[campaignId] = stats;
      }
      setStatsByCampaignId(next);
    };
    void loadStats();
    return () => {
      alive = false;
    };
  }, [rows]);

  const totals = useMemo(() => {
    return rows.reduce(
      (acc, c) => {
        acc.recipients += c.recipientCount;
        acc.sent += c.sentCount;
        acc.failed += c.failedCount;
        acc.skipped += c.skippedCount;
        const stats = statsByCampaignId[c.id];
        if (stats) {
          acc.opened += stats.openedCount;
          acc.notOpened += stats.notOpenedCount;
        }
        return acc;
      },
      { recipients: 0, sent: 0, failed: 0, skipped: 0, opened: 0, notOpened: 0 },
    );
  }, [rows, statsByCampaignId]);

  return (
    <Container>
      <Helmet>
        <title>Analytics Module</title>
      </Helmet>
      <HeaderSection>
        <Title>Analytics Module</Title>
        <RequestCount>
          ({total} campaigns{totalPages > 1 ? ` · page ${page} of ${totalPages}` : ""} · current page totals)
        </RequestCount>
      </HeaderSection>

      <Cards>
        <StatCard>
          <StatLabel>Total Recipients</StatLabel>
          <StatValue>{totals.recipients}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Sent</StatLabel>
          <StatValue>{totals.sent}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Failed</StatLabel>
          <StatValue>{totals.failed}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Skipped</StatLabel>
          <StatValue>{totals.skipped}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Opened</StatLabel>
          <StatValue>{totals.opened}</StatValue>
        </StatCard>
        <StatCard>
          <StatLabel>Not Opened</StatLabel>
          <StatValue>{totals.notOpened}</StatValue>
        </StatCard>
      </Cards>

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
        <Table style={{ minWidth: 900 }}>
          <thead>
            <tr>
              <TableHeader>ID</TableHeader>
              <TableHeader>Subject</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Recipients</TableHeader>
              <TableHeader>Sent</TableHeader>
              <TableHeader>Failed</TableHeader>
              <TableHeader>Created</TableHeader>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <TableSkeleton rows={8} cols={7} />
            ) : error ? (
              <TableRow>
                <TableData colSpan={7}>
                  <ErrorText>{error}</ErrorText>
                </TableData>
              </TableRow>
            ) : rows.length ? (
              rows.map((r) => (
                <TableRow key={r.id}>
                  <TableData>{r.id.slice(-8)}</TableData>
                  <TableData>{r.subject || "—"}</TableData>
                  <TableData>{r.status}</TableData>
                  <TableData>{r.recipientCount}</TableData>
                  <TableData>{r.sentCount}</TableData>
                  <TableData>{r.failedCount}</TableData>
                  <TableData>{formatSubmittedAt(r.createdAt, { dateOnly: true })}</TableData>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableData colSpan={7}>No campaigns found.</TableData>
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
    </Container>
  );
};

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 12px;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.section`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 12px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #64748b;
  font-weight: 700;
  text-transform: uppercase;
`;

const StatValue = styled.div`
  margin-top: 4px;
  font-size: 22px;
  color: #0f172a;
  font-weight: 800;
`;

const ErrorText = styled.div`
  margin: 0;
  color: #dc2626;
  text-align: center;
  padding: 16px;
`;

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

export default AnalyticsModule;
