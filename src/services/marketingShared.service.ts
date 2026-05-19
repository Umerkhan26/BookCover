import axios from "axios";

import { getApiBaseUrl } from "../config/apiBaseUrl";

const API_BASE_URL = getApiBaseUrl();

export type ListFilterParams = {
  search?: string;
  dateFrom?: string;
  dateTo?: string;
};

export type PagedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

export const getAuthHeaders = (): Record<string, string> => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const buildListQuery = (
  params?: ListFilterParams & { page?: number; limit?: number },
): string => {
  const search = new URLSearchParams();
  if (params?.page != null) search.set("page", String(params.page));
  if (params?.limit != null) search.set("limit", String(params.limit));
  if (params?.search?.trim()) search.set("search", params.search.trim());
  if (params?.dateFrom) search.set("dateFrom", params.dateFrom);
  if (params?.dateTo) search.set("dateTo", params.dateTo);
  const qs = search.toString();
  return qs ? `?${qs}` : "";
};

export const marketingGet = async <T>(
  path: string,
  params?: ListFilterParams & { page?: number; limit?: number },
): Promise<T> => {
  const qs = buildListQuery(params);
  const response = await axios.get<T>(`${API_BASE_URL}${path}${qs}`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};
