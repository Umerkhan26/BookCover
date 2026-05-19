import axios from "axios";
import {
  getAuthHeaders,
  marketingGet,
  type ListFilterParams,
} from "./marketingShared.service";

import { getApiBaseUrl } from "../config/apiBaseUrl";

const API_BASE_URL = getApiBaseUrl();

export type DatasetColumn = {
  key: string;
  label: string;
  type: string;
  required?: boolean;
  order?: number;
};

export type Dataset = {
  _id: string;
  name: string;
  slug: string;
  columns: DatasetColumn[];
  createdAt?: string;
};

export type DatasetRow = {
  _id: string;
  values: Record<string, unknown>;
  createdAt?: string;
};

type DatasetListRaw = {
  datasets?: Dataset[];
  total?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
};

type DatasetRowsRaw = {
  rows?: DatasetRow[];
  columns?: DatasetColumn[];
  total?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
};

export const fetchDatasets = async (
  params?: ListFilterParams & { page?: number; limit?: number },
): Promise<{
  datasets: Dataset[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}> => {
  const raw = await marketingGet<DatasetListRaw>("/datasets", params);
  const datasets = Array.isArray(raw.datasets) ? raw.datasets : [];
  return {
    datasets,
    total: Number(raw.total ?? datasets.length),
    page: Number(raw.page ?? params?.page ?? 1),
    limit: Number(raw.limit ?? params?.limit ?? 20),
    totalPages: Number(raw.totalPages ?? 1),
  };
};

export const createDataset = async (payload: {
  name: string;
  slug?: string;
  columns: DatasetColumn[];
}): Promise<Dataset> => {
  const response = await axios.post(`${API_BASE_URL}/datasets`, payload, {
    headers: getAuthHeaders(),
  });
  return response.data.dataset as Dataset;
};

export const updateDataset = async (
  datasetId: string,
  payload: { name?: string; columns?: DatasetColumn[] },
): Promise<Dataset> => {
  const response = await axios.patch(
    `${API_BASE_URL}/datasets/${datasetId}`,
    payload,
    {
      headers: getAuthHeaders(),
    },
  );
  return response.data.dataset as Dataset;
};

export const deleteDataset = async (datasetId: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/datasets/${datasetId}`, {
    headers: getAuthHeaders(),
  });
};

export const fetchDatasetRows = async (
  datasetId: string,
  params?: ListFilterParams & { page?: number; limit?: number },
): Promise<{
  rows: DatasetRow[];
  columns: DatasetColumn[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}> => {
  const raw = await marketingGet<DatasetRowsRaw>(
    `/datasets/${datasetId}/rows`,
    params,
  );
  const rows = Array.isArray(raw.rows) ? raw.rows : [];
  return {
    rows,
    columns: Array.isArray(raw.columns) ? raw.columns : [],
    total: Number(raw.total ?? rows.length),
    page: Number(raw.page ?? params?.page ?? 1),
    limit: Number(raw.limit ?? params?.limit ?? 10),
    totalPages: Number(raw.totalPages ?? 1),
  };
};

export const createDatasetRow = async (
  datasetId: string,
  values: Record<string, unknown>,
): Promise<DatasetRow> => {
  const response = await axios.post(
    `${API_BASE_URL}/datasets/${datasetId}/rows`,
    { values },
    { headers: getAuthHeaders() },
  );
  return response.data.row as DatasetRow;
};

export const deleteDatasetRow = async (
  datasetId: string,
  rowId: string,
): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/datasets/${datasetId}/rows/${rowId}`, {
    headers: getAuthHeaders(),
  });
};

export const updateDatasetRow = async (
  datasetId: string,
  rowId: string,
  values: Record<string, unknown>,
): Promise<DatasetRow> => {
  const response = await axios.patch(
    `${API_BASE_URL}/datasets/${datasetId}/rows/${rowId}`,
    { values },
    { headers: getAuthHeaders() },
  );
  return response.data.row as DatasetRow;
};

export const importDatasetRowsCsv = async (
  datasetId: string,
  file: File,
): Promise<{ message: string; created?: number; failed?: number }> => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axios.post(
    `${API_BASE_URL}/datasets/${datasetId}/rows/import`,
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
