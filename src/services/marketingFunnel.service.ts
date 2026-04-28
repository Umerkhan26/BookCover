import axios from "axios";
import {
  getAuthHeaders,
  marketingGet,
  type ListFilterParams,
} from "./marketingShared.service";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export type FunnelKind = "orders" | "contacts" | "cover-ideas";

export type FunnelLead = {
  id: string;
  name: string;
  email: string;
  title?: string;
  contacts?: string[];
  createdAt?: string;
};

type RawFunnelResponse = {
  leads?: Array<Record<string, unknown>>;
  total?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
};

export type FetchFunnelParams = ListFilterParams & {
  page?: number;
  limit?: number;
};

export type FetchFunnelResponse = {
  leads: FunnelLead[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

const toLead = (row: Record<string, unknown>): FunnelLead => ({
  id: String(row.id ?? row._id ?? row.orderId ?? ""),
  name: String(row.name ?? row.fullName ?? ""),
  email: String(row.email ?? ""),
  title: row.title ? String(row.title) : undefined,
  contacts: Array.isArray(row.contacts)
    ? row.contacts.map((x) => String(x))
    : undefined,
  createdAt: row.createdAt ? String(row.createdAt) : undefined,
});

export const fetchFunnelLeads = async (
  kind: FunnelKind,
  params?: FetchFunnelParams,
): Promise<FetchFunnelResponse> => {
  const raw = await marketingGet<RawFunnelResponse>(
    `/marketing-funnel/${kind}`,
    params,
  );
  const leads = Array.isArray(raw.leads) ? raw.leads.map(toLead) : [];
  return {
    leads,
    total: Number(raw.total ?? leads.length),
    page: Number(raw.page ?? params?.page ?? 1),
    limit: Number(raw.limit ?? params?.limit ?? 50),
    totalPages: Number(raw.totalPages ?? 1),
  };
};

export const importFunnelCsv = async (
  kind: FunnelKind,
  file: File,
): Promise<{ message: string; created?: number; updated?: number; failed?: number }> => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axios.post(
    `${API_BASE_URL}/marketing-funnel/${kind}/import`,
    formData,
    {
      headers: {
        ...getAuthHeaders(),
        "Content-Type": "multipart/form-data",
      },
    },
  );
  return response.data;
};

export const createFunnelLead = async (
  kind: FunnelKind,
  payload: Record<string, unknown>,
): Promise<void> => {
  await axios.post(`${API_BASE_URL}/marketing-funnel/${kind}`, payload, {
    headers: getAuthHeaders(),
  });
};

export const updateFunnelLead = async (
  kind: FunnelKind,
  id: string,
  payload: Record<string, unknown>,
): Promise<void> => {
  await axios.put(`${API_BASE_URL}/marketing-funnel/${kind}/${id}`, payload, {
    headers: getAuthHeaders(),
  });
};

export const deleteFunnelLead = async (
  kind: FunnelKind,
  id: string,
): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/marketing-funnel/${kind}/${id}`, {
    headers: getAuthHeaders(),
  });
};
