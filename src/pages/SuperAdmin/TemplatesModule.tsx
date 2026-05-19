import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  fetchReadyEmailDesignTemplates,
  type EmailTemplate,
} from "../../services/emailTemplates.service";
import {
  createEmailCampaign,
  type CampaignSummary,
} from "../../services/marketingCampaignHistory.service";
import {
  fetchFunnelLeads,
  type FunnelKind,
  type FunnelLead,
} from "../../services/marketingFunnel.service";
import {
  fetchDatasets,
  fetchDatasetRows,
  type Dataset,
  type DatasetRow,
} from "../../services/marketingDataset.service";
import type { DatePreset } from "../../utils/adminDateRange";
import { presetToDateStrings } from "../../utils/adminDateRange";
import AdminListPagination from "../../components/AdminDashboard/AdminListPagination";
import logo from "../../assets/logo/Lumestudio-9.webp";
import {
  Container,
  HeaderSection,
  Table,
  TableContainer,
  TableData,
  TableHeader,
  TableRow,
  Title,
} from "../adminCoverIdeas/AdminCoverIdea.styles";

type SourceTab = FunnelKind | `dataset:${string}`;

type RecipientRow = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

const TemplatesModule: React.FC = () => {
  const [templateLoading, setTemplateLoading] = useState(true);
  const [rowsLoading, setRowsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [placeholders, setPlaceholders] = useState<string[]>([]);
  const [templates, setTemplates] = useState<EmailTemplate[]>([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState("");
  const [templatesTotal, setTemplatesTotal] = useState(0);
  const [templateSearch, setTemplateSearch] = useState("");
  const [templateModalOpen, setTemplateModalOpen] = useState(false);
  const [templatePreviewOpen, setTemplatePreviewOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<EmailTemplate | null>(null);
  const [savingTemplate, setSavingTemplate] = useState(false);
  const [templateNameInput, setTemplateNameInput] = useState("");
  const [templateSubjectInput, setTemplateSubjectInput] = useState("");
  const [templateBodyRichInput, setTemplateBodyRichInput] = useState(
    "<p>Hello {{firstName}}</p>",
  );
  const [templateHtmlCssInput, setTemplateHtmlCssInput] = useState("");
  const [templateEditorMode, setTemplateEditorMode] = useState<"design" | "code">(
    "design",
  );

  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [sourceTab, setSourceTab] = useState<SourceTab>("orders");
  const [rows, setRows] = useState<RecipientRow[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeLabel, setPageSizeLabel] = useState(20);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set());

  const [searchInput, setSearchInput] = useState("");
  const [searchApplied, setSearchApplied] = useState("");
  const [datePreset, setDatePreset] = useState<DatePreset>("all");
  const [customDateFrom, setCustomDateFrom] = useState("");
  const [customDateTo, setCustomDateTo] = useState("");
  const [customDateFromApplied, setCustomDateFromApplied] = useState("");
  const [customDateToApplied, setCustomDateToApplied] = useState("");

  const [sending, setSending] = useState(false);
  const [lastCampaign, setLastCampaign] = useState<CampaignSummary | null>(
    null,
  );

  const activeDatasetId = sourceTab.startsWith("dataset:")
    ? sourceTab.replace("dataset:", "")
    : null;

  const { dateFrom: apiDateFrom, dateTo: apiDateTo } = useMemo(
    () =>
      presetToDateStrings(
        datePreset,
        customDateFromApplied,
        customDateToApplied,
      ),
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
  }, [sourceTab, searchApplied, datePreset, apiDateFrom, apiDateTo]);

  useEffect(() => {
    setSelectedIds(new Set());
  }, [sourceTab, page, searchApplied, datePreset, apiDateFrom, apiDateTo]);

  useEffect(() => {
    const loadTemplate = async () => {
      try {
        setTemplateLoading(true);
        const readyDesigns = await fetchReadyEmailDesignTemplates();
        setPlaceholders(readyDesigns[0]?.placeholders || []);
        const mappedTemplates: EmailTemplate[] = readyDesigns.map((d) => ({
          id: d.id,
          name: d.name,
          subject: "",
          bodyRich: "<p>Hello {{firstName}}</p>",
          htmlCss: "",
          description: d.description,
          placeholders: d.placeholders,
          htmlTemplate: "",
          previewHtml: d.previewHtml,
          createdAt: undefined,
        }));
        setTemplates(mappedTemplates);
        setSelectedTemplateId(mappedTemplates[0]?.id || "");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load email designs");
      } finally {
        setTemplateLoading(false);
      }
    };
    void loadTemplate();
  }, []);

  useEffect(() => {
    const loadDatasets = async () => {
      try {
        const res = await fetchDatasets({ page: 1, limit: 200 });
        setDatasets(res.datasets);
      } catch {
        // Non-blocking.
      }
    };
    void loadDatasets();
  }, []);

  useEffect(() => {
    setTemplatesTotal(templates.length);
  }, [templates]);

  useEffect(() => {
    const loadRows = async () => {
      try {
        setRowsLoading(true);
        setError(null);
        if (activeDatasetId) {
          const res = await fetchDatasetRows(activeDatasetId, {
            page,
            limit: 20,
            search: searchApplied || undefined,
            dateFrom: apiDateFrom || undefined,
            dateTo: apiDateTo || undefined,
          });
          const normalized = res.rows.map((r: DatasetRow) => ({
            id: r._id,
            name: String(r.values?.name ?? r.values?.fullName ?? "—"),
            email: String(r.values?.email ?? "—"),
            createdAt: String(r.createdAt ?? ""),
          }));
          setRows(normalized);
          setTotal(res.total);
          setTotalPages(res.totalPages);
          setPageSizeLabel(res.limit || 20);
          return;
        }

        const kind = sourceTab as FunnelKind;
        const res = await fetchFunnelLeads(kind, {
          page,
          limit: 20,
          search: searchApplied || undefined,
          dateFrom: apiDateFrom || undefined,
          dateTo: apiDateTo || undefined,
        });
        const normalized = res.leads.map((r: FunnelLead) => ({
          id: r.id,
          name: r.name || "—",
          email: r.email || "—",
          createdAt: String(r.createdAt ?? ""),
        }));
        setRows(normalized);
        setTotal(res.total);
        setTotalPages(res.totalPages);
        setPageSizeLabel(res.limit || 20);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load recipients",
        );
      } finally {
        setRowsLoading(false);
      }
    };
    void loadRows();
  }, [sourceTab, activeDatasetId, page, searchApplied, apiDateFrom, apiDateTo]);

  const compiledHtmlPreview = useMemo(() => {
    const selectedTemplate = templates.find((t) => t.id === selectedTemplateId);
    return (
      selectedTemplate?.htmlCss?.trim() ||
      selectedTemplate?.bodyRich ||
      "<p>Body preview</p>"
    );
  }, [templates, selectedTemplateId]);

  const brandedPreviewHtml = useMemo(() => {
    const body = templateHtmlCssInput.trim() || templateBodyRichInput || "<p>Body</p>";
    return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#eef1f6;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="padding:22px 12px;background:#eef1f6;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:680px;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:14px 18px;background:#0c313f;text-align:center;">
                <img src="${logo}" alt="Lumeart Studio" style="max-height:42px;width:auto;display:block;margin:0 auto;" />
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px 8px;text-align:center;">
                <h2 style="margin:0;color:#1f2937;font-size:24px;">${templateSubjectInput || "Campaign subject"}</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px 24px;font-size:15px;line-height:1.7;color:#1f2937;">
                ${body}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
  }, [templateHtmlCssInput, templateBodyRichInput, templateSubjectInput]);

  const onApplyFilters = () => {
    if (datePreset === "custom") {
      setCustomDateFromApplied(customDateFrom.trim());
      setCustomDateToApplied(customDateTo.trim());
    }
  };

  const onClearFilters = () => {
    setSearchInput("");
    setSearchApplied("");
    setDatePreset("all");
    setCustomDateFrom("");
    setCustomDateTo("");
    setCustomDateFromApplied("");
    setCustomDateToApplied("");
    setPage(1);
  };

  const openAddTemplateModal = () => {
    setEditingTemplate(null);
    setTemplateNameInput("");
    setTemplateSubjectInput("");
    setTemplateBodyRichInput("<p>Hello {{firstName}}</p>");
    setTemplateHtmlCssInput("");
    setTemplateEditorMode("design");
    setTemplateModalOpen(true);
  };

  const openEditTemplateModal = (t: EmailTemplate) => {
    setEditingTemplate(t);
    setTemplateNameInput(t.name || "");
    setTemplateSubjectInput(t.subject || "");
    setTemplateBodyRichInput(t.bodyRich || "<p>Hello {{firstName}}</p>");
    setTemplateHtmlCssInput(t.htmlCss || "");
    setTemplateEditorMode("design");
    setTemplateModalOpen(true);
  };

  const saveTemplate = async () => {
    if (!templateNameInput.trim() || !templateSubjectInput.trim()) {
      toast.error("Name and subject are required");
      return;
    }
    setSavingTemplate(true);
    try {
      const saved: EmailTemplate = {
        id:
          editingTemplate?.id ||
          `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
        name: templateNameInput.trim(),
        subject: templateSubjectInput.trim(),
        bodyRich: templateBodyRichInput,
        htmlCss: templateHtmlCssInput,
        description: editingTemplate?.description || "",
        placeholders: editingTemplate?.placeholders || placeholders,
        htmlTemplate: editingTemplate?.htmlTemplate || "",
        previewHtml: editingTemplate?.previewHtml || "",
        createdAt: editingTemplate?.createdAt || new Date().toISOString(),
      };
      setTemplates((prev) => {
        if (editingTemplate?.id) {
          return prev.map((t) => (t.id === editingTemplate.id ? saved : t));
        }
        return [saved, ...prev];
      });
      setSelectedTemplateId(saved.id);
      setTemplateModalOpen(false);
      toast.success(editingTemplate ? "Template updated" : "Template created");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to save template");
    } finally {
      setSavingTemplate(false);
    }
  };

  const removeTemplate = async (id: string) => {
    if (!window.confirm("Delete this template?")) return;
    setTemplates((prev) => prev.filter((t) => t.id !== id));
    if (selectedTemplateId === id) {
      setSelectedTemplateId("");
    }
    toast.success("Template deleted");
  };

  const onSendBulkEmail = async () => {
    const selectedTemplate = templates.find((t) => t.id === selectedTemplateId);
    if (!selectedTemplate) {
      toast.error("Select a template first");
      return;
    }
    if (selectedIds.size < 1) {
      toast.error("Select at least one recipient");
      return;
    }
    try {
      setSending(true);
      const ids = [...selectedIds];
      await createEmailCampaign({
        subject: templateSubjectInput.trim() || "Campaign subject",
        templateId: selectedTemplateId || undefined,
        html: compiledHtmlPreview,
        text: (templateBodyRichInput || "")
          .replace(/<[^>]*>/g, " ")
          .replace(/\s+/g, " ")
          .trim(),
        orderIds: sourceTab === "orders" ? ids : undefined,
        contactIds: sourceTab === "contacts" ? ids : undefined,
        coverIdeaIds: sourceTab === "cover-ideas" ? ids : undefined,
        datasetRowIds: activeDatasetId ? ids : undefined,
      });
      setLastCampaign({
        id: "queued",
        subject: templateSubjectInput.trim() || "Campaign subject",
        templateId: selectedTemplateId || undefined,
        status: "queued",
        recipientCount: ids.length,
        sentCount: 0,
        failedCount: 0,
        skippedCount: 0,
      });
      setSelectedIds(new Set());
      toast.success("Bulk email queued successfully");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send emails");
    } finally {
      setSending(false);
    }
  };

  const toggleRowSelection = (id: string, checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  };

  const selectAllOnPage = (checked: boolean) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) rows.forEach((r) => next.add(r.id));
      else rows.forEach((r) => next.delete(r.id));
      return next;
    });
  };

  const allOnPageSelected =
    rows.length > 0 && rows.every((r) => selectedIds.has(r.id));

  return (
    <Container>
      <Helmet>
        <title>Email Templates Module</title>
      </Helmet>
      <HeaderSection>
        <Title>Email Templates Module</Title>
      </HeaderSection>
      {error ? <ErrorText role="alert">{error}</ErrorText> : null}

      <Card>
        <TopRow>
          <SectionTitle>Email Templates</SectionTitle>
          <ActionBtn type="button" onClick={openAddTemplateModal}>
            + Add Template
          </ActionBtn>
        </TopRow>
        <FilterInput
          placeholder="Search templates..."
          value={templateSearch}
          onChange={(e) => setTemplateSearch(e.target.value)}
          style={{ margin: "10px 0" }}
        />
        <TableContainer>
          <Table style={{ minWidth: 820 }}>
            <thead>
              <tr>
                <TableHeader>Name</TableHeader>
                <TableHeader>Subject</TableHeader>
                <TableHeader>Created</TableHeader>
                <TableHeader>Actions</TableHeader>
              </tr>
            </thead>
            <tbody>
              {templateLoading ? (
                <TableRow>
                  <TableData colSpan={4}>Loading templates...</TableData>
                </TableRow>
              ) : templates.length ? (
                templates.map((t) => (
                  <TableRow key={t.id}>
                    <TableData>{t.name || "—"}</TableData>
                    <TableData>{t.subject || "—"}</TableData>
                    <TableData>
                      {t.createdAt ? new Date(t.createdAt).toLocaleDateString() : "—"}
                    </TableData>
                    <TableData>
                      <ActionBtn type="button" onClick={() => openEditTemplateModal(t)}>
                        Edit
                      </ActionBtn>{" "}
                      <DangerBtn type="button" onClick={() => void removeTemplate(t.id)}>
                        Delete
                      </DangerBtn>
                    </TableData>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableData colSpan={4}>No templates found.</TableData>
                </TableRow>
              )}
            </tbody>
          </Table>
        </TableContainer>
        {templatesTotal > 0 ? <InfoLine>{templatesTotal} template(s)</InfoLine> : null}
      </Card>

      <ComposerCard>
        <SectionTitle>Bulk Email Campaign</SectionTitle>
        <TabsRow>
          <TabButton
            type="button"
            $active={sourceTab === "orders"}
            onClick={() => setSourceTab("orders")}
          >
            Order
          </TabButton>
          <TabButton
            type="button"
            $active={sourceTab === "contacts"}
            onClick={() => setSourceTab("contacts")}
          >
            Contact
          </TabButton>
          <TabButton
            type="button"
            $active={sourceTab === "cover-ideas"}
            onClick={() => setSourceTab("cover-ideas")}
          >
            Cover ideas
          </TabButton>
          {datasets.map((d) => (
            <TabButton
              key={d._id}
              type="button"
              $active={sourceTab === `dataset:${d._id}`}
              onClick={() => setSourceTab(`dataset:${d._id}`)}
            >
              {d.name}
            </TabButton>
          ))}
        </TabsRow>

        <FilterRow>
          <FilterSelect
            value={selectedTemplateId}
            onChange={(e) => {
              const nextId = e.target.value;
              setSelectedTemplateId(nextId);
              const picked = templates.find((t) => t.id === nextId);
              if (picked) {
                setTemplateSubjectInput(picked.subject || "");
                setTemplateBodyRichInput(
                  picked.bodyRich || "<p>Hello {{firstName}}</p>",
                );
                setTemplateHtmlCssInput(picked.htmlCss || "");
              }
            }}
          >
            <option value="">Select template</option>
            {templates.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </FilterSelect>
          <FilterInput
            placeholder="Campaign subject..."
            value={templateSubjectInput}
            onChange={(e) => setTemplateSubjectInput(e.target.value)}
          />
          <FilterInput
            placeholder="Search recipients..."
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
              <ActionBtn type="button" onClick={onApplyFilters}>
                Apply
              </ActionBtn>
            </>
          ) : null}
          <LightBtn type="button" onClick={onClearFilters}>
            Clear
          </LightBtn>
          <ActionBtn type="button" disabled={sending} onClick={onSendBulkEmail}>
            {sending ? "Sending..." : `Send (${selectedIds.size})`}
          </ActionBtn>
        </FilterRow>

        <TableContainer>
          <Table style={{ minWidth: 780 }}>
            <thead>
              <tr>
                <TableHeader>
                  <input
                    type="checkbox"
                    checked={allOnPageSelected}
                    onChange={(e) => selectAllOnPage(e.target.checked)}
                    aria-label="Select all recipients on page"
                  />
                </TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>Email</TableHeader>
                <TableHeader>Created</TableHeader>
              </tr>
            </thead>
            <tbody>
              {rowsLoading ? (
                <TableRow>
                  <TableData colSpan={4}>Loading recipients...</TableData>
                </TableRow>
              ) : rows.length ? (
                rows.map((r) => (
                  <TableRow key={r.id}>
                    <TableData>
                      <input
                        type="checkbox"
                        checked={selectedIds.has(r.id)}
                        onChange={(e) =>
                          toggleRowSelection(r.id, e.target.checked)
                        }
                        aria-label="Select recipient"
                      />
                    </TableData>
                    <TableData>{r.name || "—"}</TableData>
                    <TableData>{r.email || "—"}</TableData>
                    <TableData>
                      {r.createdAt
                        ? new Date(r.createdAt).toLocaleDateString()
                        : "—"}
                    </TableData>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableData colSpan={4}>No recipients found.</TableData>
                </TableRow>
              )}
            </tbody>
          </Table>
        </TableContainer>

        {!rowsLoading && total > 0 ? (
          <AdminListPagination
            page={page}
            totalPages={totalPages}
            pageSizeLabel={pageSizeLabel}
            onPrev={() => setPage((p) => Math.max(1, p - 1))}
            onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
          />
        ) : null}

        {lastCampaign ? (
          <InfoLine>
            Last queued: <strong>{lastCampaign.subject}</strong> (
            {lastCampaign.recipientCount} recipients
            {lastCampaign.templateId ? ` · design ${lastCampaign.templateId}` : ""})
          </InfoLine>
        ) : null}
      </ComposerCard>

      <ToastContainer />

      {templateModalOpen ? (
        <Backdrop onClick={() => !savingTemplate && setTemplateModalOpen(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <Label>{editingTemplate ? "Edit Template" : "Add Template"}</Label>
              <div>
                <ActionBtn type="button" onClick={() => setTemplatePreviewOpen(true)}>
                  Preview
                </ActionBtn>{" "}
                <CancelBtn
                  type="button"
                  onClick={() => setTemplateModalOpen(false)}
                  disabled={savingTemplate}
                >
                  Close
                </CancelBtn>
              </div>
            </ModalHeader>
            <FieldLabel>Name</FieldLabel>
            <Input
              value={templateNameInput}
              onChange={(e) => setTemplateNameInput(e.target.value)}
              placeholder="Template name"
            />
            <FieldLabel>Subject</FieldLabel>
            <Input
              value={templateSubjectInput}
              onChange={(e) => setTemplateSubjectInput(e.target.value)}
              placeholder="Email subject"
            />
            <EditorTabs>
              <ModeBtn
                type="button"
                $active={templateEditorMode === "design"}
                onClick={() => {
                  setTemplateEditorMode("design");
                  if (!templateBodyRichInput.trim() && templateHtmlCssInput.trim()) {
                    setTemplateBodyRichInput(templateHtmlCssInput);
                  }
                }}
              >
                Design
              </ModeBtn>
              <ModeBtn
                type="button"
                $active={templateEditorMode === "code"}
                onClick={() => {
                  setTemplateEditorMode("code");
                  if (!templateHtmlCssInput.trim() && templateBodyRichInput.trim()) {
                    setTemplateHtmlCssInput(templateBodyRichInput);
                  }
                }}
              >
                HTML/CSS Code
              </ModeBtn>
            </EditorTabs>
            {templateEditorMode === "design" ? (
              <EditorPanel>
                <ReactQuill
                  theme="snow"
                  value={templateBodyRichInput}
                  onChange={(value) => {
                    setTemplateBodyRichInput(value);
                    setTemplateHtmlCssInput(value);
                  }}
                />
              </EditorPanel>
            ) : (
              <TextArea
                value={templateHtmlCssInput}
                onChange={(e) => {
                  const value = e.target.value;
                  setTemplateHtmlCssInput(value);
                  setTemplateBodyRichInput(value);
                }}
                placeholder="<style>...</style><div>...</div>"
              />
            )}
            <Actions>
              <ActionBtn
                type="button"
                disabled={savingTemplate}
                onClick={() => void saveTemplate()}
              >
                {savingTemplate
                  ? "Saving..."
                  : editingTemplate
                    ? "Update Template"
                    : "Create Template"}
              </ActionBtn>
            </Actions>
          </Modal>
        </Backdrop>
      ) : null}

      {templatePreviewOpen ? (
        <Backdrop onClick={() => setTemplatePreviewOpen(false)}>
          <Modal
            onClick={(e) => e.stopPropagation()}
            style={{ width: "min(980px, 94vw)" }}
          >
            <ModalHeader>
              <Label>Template Preview</Label>
              <CancelBtn type="button" onClick={() => setTemplatePreviewOpen(false)}>
                Close
              </CancelBtn>
            </ModalHeader>
            <PreviewFrame
              title="template-preview"
              srcDoc={brandedPreviewHtml}
            />
          </Modal>
        </Backdrop>
      ) : null}
    </Container>
  );
};

const Card = styled.section`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 12px;
`;

const ComposerCard = styled(Card)`
  margin-bottom: 0;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
`;

const SectionTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 12px;
  color: #0f172a;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const Label = styled.h3`
  margin: 0 0 8px;
  font-size: 12px;
  color: #0f172a;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

const PreviewFrame = styled.iframe`
  width: 100%;
  min-height: 360px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: #fff !important;
`;

const ErrorText = styled.div`
  color: #dc2626;
`;

const TabsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
`;

const TabButton = styled.button<{ $active: boolean }>`
  border: 1px solid ${(p) => (p.$active ? "#6dc7d1" : "#d1d5db")};
  background: ${(p) => (p.$active ? "#6dc7d1" : "#fff")};
  color: ${(p) => (p.$active ? "#fff" : "#374151")};
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
`;

const FilterRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const FilterInput = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 5px 10px;
  min-width: 160px;
  font-size: 12px;
  color: #334155 !important;
  background: #fff !important;

  &::placeholder {
    color: #64748b;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: #6dc7d1;
  }
`;

const FilterSelect = styled.select`
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 5px 30px 5px 10px;
  min-width: 130px;
  font-size: 12px;
  background-color: #fff !important;
  color: #334155 !important;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2364758b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 14px 14px;

  option {
    color: #334155 !important;
  }
`;

const ActionBtn = styled.button`
  border: 1px solid #6dc7d1;
  background: #6dc7d1;
  color: #fff;
  border-radius: 6px;
  padding: 6px 10px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LightBtn = styled.button`
  border: 1px solid #6dc7d1;
  background: #fff !important;
  color: #6dc7d1;
  border-radius: 6px;
  padding: 6px 10px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;

const DangerBtn = styled.button`
  border: 1px solid #ef4444;
  background: #fff !important;
  color: #ef4444;
  border-radius: 6px;
  padding: 6px 10px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.42);
  display: grid;
  place-items: center;
  z-index: 1200;
`;
const Modal = styled.div`
  width: min(760px, 92vw);
  max-height: 92vh;
  overflow: auto;
  background: #fff !important;
  border-radius: 10px;
  padding: 12px;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
const FieldLabel = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #334155 !important;
`;
const Input = styled.input`
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 8px 10px;
  margin: 4px 0 8px;
  font-size: 12px;
  color: #0f172a;
  background: #fff !important;
`;
const EditorTabs = styled.div`
  display: inline-flex;
  gap: 6px;
  margin: 6px 0 10px;
`;
const ModeBtn = styled.button<{ $active: boolean }>`
  border: 1px solid ${(p) => (p.$active ? "#6dc7d1" : "#d1d5db")};
  background: ${(p) => (p.$active ? "#6dc7d1" : "#fff")};
  color: ${(p) => (p.$active ? "#fff" : "#334155")};
  border-radius: 6px;
  padding: 5px 9px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
`;
const EditorPanel = styled.div`
  margin-bottom: 10px;
  .ql-toolbar {
    font-size: 12px;
  }
  .ql-editor {
    min-height: 140px;
    font-size: 13px;
    color: #0f172a;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  min-height: 170px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 8px 10px;
  resize: vertical;
  font-size: 12px;
  color: #0f172a;
  background: #fff !important;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
`;
const Actions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;
const InfoLine = styled.p`
  margin: 12px 0 0;
  color: #334155 !important;
  font-size: 12px;
`;
const CancelBtn = styled.button`
  border: 1px solid #cbd5e1;
  background: #fff !important;
  color: #334155 !important;
  border-radius: 6px;
  padding: 6px 10px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;

export default TemplatesModule;
