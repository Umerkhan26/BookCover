import { marketingGet } from "./marketingShared.service";
import axios from "axios";
import { getAuthHeaders } from "./marketingShared.service";

import { getApiBaseUrl } from "../config/apiBaseUrl";

const API_BASE_URL = getApiBaseUrl();

export type EmailTemplate = {
  id: string;
  name: string;
  subject?: string;
  bodyRich?: string;
  htmlCss?: string;
  description: string;
  placeholders: string[];
  htmlTemplate: string;
  previewHtml: string;
  createdAt?: string;
};

export type ReadyEmailDesignTemplate = {
  id: string;
  name: string;
  description: string;
  placeholders: string[];
  previewHtml: string;
  htmlTemplateTitle?: string;
  htmlTemplateBody?: string;
};

type RawTemplateResponse = {
  template?: Partial<EmailTemplate>;
  templates?: Array<Partial<ReadyEmailDesignTemplate> & { _id?: string }>;
};

export const fetchGenericEmailTemplate = async (): Promise<EmailTemplate> => {
  const raw = await marketingGet<RawTemplateResponse>(
    "/marketing-funnel/email-template",
  );
  const t = raw.template ?? {};
  return {
    id: String(t.id ?? "default-branded-template"),
    name: String(t.name ?? "Default Branded Template"),
    description: String(t.description ?? ""),
    placeholders: Array.isArray(t.placeholders)
      ? t.placeholders.map((p) => String(p))
      : [],
    htmlTemplate: String(t.htmlTemplate ?? ""),
    previewHtml: String(t.previewHtml ?? ""),
  };
};

export const fetchReadyEmailDesignTemplates = async (): Promise<
  ReadyEmailDesignTemplate[]
> => {
  const raw = await marketingGet<RawTemplateResponse>(
    "/marketing-funnel/email-templates",
  );
  const rows = Array.isArray(raw.templates) ? raw.templates : [];
  return rows.map((t) => ({
    id: String(t.id ?? t._id ?? ""),
    name: String(t.name ?? ""),
    description: String(t.description ?? ""),
    placeholders: Array.isArray(t.placeholders)
      ? t.placeholders.map((p) => String(p))
      : [],
    previewHtml: String(t.previewHtml ?? ""),
    htmlTemplateTitle: t.htmlTemplateTitle
      ? String(t.htmlTemplateTitle)
      : undefined,
    htmlTemplateBody: t.htmlTemplateBody ? String(t.htmlTemplateBody) : undefined,
  }));
};

type RawTemplateListResponse = {
  templates?: Array<Partial<EmailTemplate> & { _id?: string }>;
  total?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
};

const normalizeTemplate = (
  t: Partial<EmailTemplate> & { _id?: string },
): EmailTemplate => ({
  id: String(t.id ?? t._id ?? ""),
  name: String(t.name ?? ""),
  subject: t.subject ? String(t.subject) : "",
  bodyRich: t.bodyRich ? String(t.bodyRich) : "",
  htmlCss: t.htmlCss ? String(t.htmlCss) : "",
  description: String(t.description ?? ""),
  placeholders: Array.isArray(t.placeholders)
    ? t.placeholders.map((p) => String(p))
    : [],
  htmlTemplate: String(t.htmlTemplate ?? ""),
  previewHtml: String(t.previewHtml ?? ""),
  createdAt: t.createdAt ? String(t.createdAt) : undefined,
});

export const fetchEmailTemplates = async (params?: {
  page?: number;
  limit?: number;
  search?: string;
  dateFrom?: string;
  dateTo?: string;
}): Promise<{
  templates: EmailTemplate[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}> => {
  const raw = await marketingGet<RawTemplateListResponse>(
    "/marketing-funnel/email-templates",
    params,
  );
  const templates = Array.isArray(raw.templates)
    ? raw.templates.map(normalizeTemplate)
    : [];
  return {
    templates,
    total: Number(raw.total ?? templates.length),
    page: Number(raw.page ?? params?.page ?? 1),
    limit: Number(raw.limit ?? params?.limit ?? 20),
    totalPages: Number(raw.totalPages ?? 1),
  };
};

export const createEmailTemplate = async (payload: {
  name: string;
  subject: string;
  bodyRich?: string;
  htmlCss?: string;
}): Promise<EmailTemplate> => {
  const response = await axios.post(
    `${API_BASE_URL}/marketing-funnel/email-templates`,
    payload,
    { headers: getAuthHeaders() },
  );
  return normalizeTemplate(response.data?.template ?? {});
};

export const updateEmailTemplate = async (
  id: string,
  payload: {
    name?: string;
    subject?: string;
    bodyRich?: string;
    htmlCss?: string;
  },
): Promise<EmailTemplate> => {
  const response = await axios.put(
    `${API_BASE_URL}/marketing-funnel/email-templates/${encodeURIComponent(id)}`,
    payload,
    { headers: getAuthHeaders() },
  );
  return normalizeTemplate(response.data?.template ?? {});
};

export const deleteEmailTemplate = async (id: string): Promise<void> => {
  await axios.delete(
    `${API_BASE_URL}/marketing-funnel/email-templates/${encodeURIComponent(id)}`,
    { headers: getAuthHeaders() },
  );
};
