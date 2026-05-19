import axios from "axios";
import { getAuthHeaders, marketingGet } from "./marketingShared.service";

import { getApiBaseUrl } from "../config/apiBaseUrl";

const API_BASE_URL = getApiBaseUrl();

export type CampaignSummary = {
  id: string;
  subject: string;
  templateId?: string;
  status: string;
  recipientCount: number;
  sentCount: number;
  failedCount: number;
  skippedCount: number;
  createdAt?: string;
};

export type CampaignRecipient = {
  _id?: string;
  id?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  status: string;
  openCount?: number;
  openedAt?: string;
  lastOpenedAt?: string;
};

export type CampaignStats = {
  totalRecipients: number;
  sentCount: number;
  successfullyReceivedCount: number;
  failedCount: number;
  skippedCount: number;
  openedCount: number;
  notOpenedCount: number;
};

type RawCampaignListResponse = {
  campaigns?: Array<Record<string, unknown>>;
  total?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
};

const toCampaign = (row: Record<string, unknown>): CampaignSummary => ({
  id: String(row.id ?? row._id ?? ""),
  subject: String(row.subject ?? ""),
  templateId: row.templateId ? String(row.templateId) : undefined,
  status: String(row.status ?? "queued"),
  recipientCount: Number(row.recipientCount ?? 0),
  sentCount: Number(row.sentCount ?? 0),
  failedCount: Number(row.failedCount ?? 0),
  skippedCount: Number(row.skippedCount ?? 0),
  createdAt: row.createdAt ? String(row.createdAt) : undefined,
});

export const fetchCampaigns = async (params?: {
  page?: number;
  limit?: number;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  campaigns: CampaignSummary[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}> => {
  const raw = await marketingGet<RawCampaignListResponse>(
    "/marketing-funnel/emails",
    params,
  );
  const campaigns = Array.isArray(raw.campaigns)
    ? raw.campaigns.map(toCampaign)
    : [];
  return {
    campaigns,
    total: Number(raw.total ?? campaigns.length),
    page: Number(raw.page ?? params?.page ?? 1),
    limit: Number(raw.limit ?? params?.limit ?? 20),
    totalPages: Number(raw.totalPages ?? 1),
  };
};

export const createEmailCampaign = async (payload: {
  subject: string;
  templateId?: string;
  html?: string;
  text?: string;
  contactIds?: string[];
  coverIdeaIds?: string[];
  orderIds?: string[];
  datasetRowIds?: string[];
}): Promise<void> => {
  await axios.post(`${API_BASE_URL}/marketing-funnel/emails`, payload, {
    headers: getAuthHeaders(),
  });
};

export const fetchCampaignStats = async (
  campaignId: string,
): Promise<CampaignStats> => {
  const res = await axios.get(
    `${API_BASE_URL}/marketing-funnel/emails/${campaignId}/stats`,
    { headers: getAuthHeaders() },
  );
  const s = (res.data?.stats ?? {}) as Record<string, unknown>;
  return {
    totalRecipients: Number(s.totalRecipients ?? s.total ?? 0),
    sentCount: Number(s.sentCount ?? 0),
    successfullyReceivedCount: Number(s.successfullyReceivedCount ?? 0),
    failedCount: Number(s.failedCount ?? 0),
    skippedCount: Number(s.skippedCount ?? 0),
    openedCount: Number(s.openedCount ?? 0),
    notOpenedCount: Number(s.notOpenedCount ?? 0),
  };
};

export const fetchCampaignRecipients = async (
  campaignId: string,
  params?: {
    bucket?: "all" | "sent" | "failed" | "skipped" | "opened" | "not-opened";
    page?: number;
    limit?: number;
  },
): Promise<{
  recipients: CampaignRecipient[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}> => {
  const query = new URLSearchParams();
  if (params?.bucket) query.set("bucket", params.bucket);
  if (params?.page != null) query.set("page", String(params.page));
  if (params?.limit != null) query.set("limit", String(params.limit));
  const qs = query.toString();
  const res = await axios.get(
    `${API_BASE_URL}/marketing-funnel/emails/${campaignId}/recipients${qs ? `?${qs}` : ""}`,
    { headers: getAuthHeaders() },
  );
  return {
    recipients: Array.isArray(res.data?.recipients) ? res.data.recipients : [],
    total: Number(res.data?.total ?? 0),
    page: Number(res.data?.page ?? params?.page ?? 1),
    limit: Number(res.data?.limit ?? params?.limit ?? 20),
    totalPages: Number(res.data?.totalPages ?? 1),
  };
};
