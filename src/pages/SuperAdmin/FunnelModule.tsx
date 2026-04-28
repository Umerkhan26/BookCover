import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminListPagination from "../../components/AdminDashboard/AdminListPagination";
import { TableSkeleton } from "../../components/DashboardLoading/DashboardLoading";
import type { DatePreset } from "../../utils/adminDateRange";
import { presetToDateStrings } from "../../utils/adminDateRange";
import { formatSubmittedAt } from "../../utils/formatSubmittedAt";
import {
  createFunnelLead,
  deleteFunnelLead,
  fetchFunnelLeads,
  importFunnelCsv,
  updateFunnelLead,
  type FunnelKind,
  type FunnelLead,
} from "../../services/marketingFunnel.service";
import {
  createDatasetRow,
  deleteDatasetRow,
  fetchDatasetRows,
  fetchDatasets,
  importDatasetRowsCsv,
  updateDatasetRow,
  type Dataset,
  type DatasetColumn,
  type DatasetRow,
} from "../../services/marketingDataset.service";

type ActiveTab = FunnelKind | `dataset:${string}`;

const FunnelModule: React.FC = () => {
  const [kind, setKind] = useState<ActiveTab>("orders");
  const [rows, setRows] = useState<FunnelLead[]>([]);
  const [datasetRows, setDatasetRows] = useState<DatasetRow[]>([]);
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [datasetColumns, setDatasetColumns] = useState<DatasetColumn[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeLabel, setPageSizeLabel] = useState(50);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchApplied, setSearchApplied] = useState("");
  const [datePreset, setDatePreset] = useState<DatePreset>("all");
  const [customDateFrom, setCustomDateFrom] = useState("");
  const [customDateTo, setCustomDateTo] = useState("");
  const [customDateFromApplied, setCustomDateFromApplied] = useState("");
  const [customDateToApplied, setCustomDateToApplied] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingLeadId, setEditingLeadId] = useState("");
  const [newValues, setNewValues] = useState<Record<string, unknown>>({});
  const filterInit = useRef(true);

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
    if (filterInit.current) {
      filterInit.current = false;
      return;
    }
    setPage(1);
  }, [kind, searchApplied, datePreset, apiDateFrom, apiDateTo]);

  const isDatasetTab = kind.startsWith("dataset:");
  const activeDatasetId = isDatasetTab ? kind.replace("dataset:", "") : null;

  const load = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      if (isDatasetTab && activeDatasetId) {
        const dsRes = await fetchDatasetRows(activeDatasetId, {
          page,
          limit: 10,
          search: searchApplied || undefined,
          dateFrom: apiDateFrom || undefined,
          dateTo: apiDateTo || undefined,
        });
        setDatasetRows(dsRes.rows);
        setDatasetColumns(dsRes.columns);
        setTotal(dsRes.total);
        setTotalPages(dsRes.totalPages);
        setPageSizeLabel(dsRes.limit || 10);
        setRows([]);
      } else {
        const res = await fetchFunnelLeads(kind as FunnelKind, {
          page,
          limit: 50,
          search: searchApplied || undefined,
          dateFrom: apiDateFrom || undefined,
          dateTo: apiDateTo || undefined,
        });
        setRows(res.leads);
        setDatasetRows([]);
        setTotal(res.total);
        setTotalPages(res.totalPages);
        setPageSizeLabel(res.limit || 50);
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Failed to load funnel data",
      );
    } finally {
      setLoading(false);
    }
  }, [
    kind,
    page,
    searchApplied,
    apiDateFrom,
    apiDateTo,
    isDatasetTab,
    activeDatasetId,
  ]);

  const loadDatasets = useCallback(async () => {
    try {
      const res = await fetchDatasets({ page: 1, limit: 100 });
      setDatasets(res.datasets);
    } catch {
      // non-blocking
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);
  useEffect(() => {
    void loadDatasets();
  }, [loadDatasets]);

  const onApplyFilters = () => {
    if (datePreset === "custom") {
      setCustomDateFromApplied(customDateFrom.trim());
      setCustomDateToApplied(customDateTo.trim());
    }
    setPage(1);
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

  const onImportCsvClick = () => fileInputRef.current?.click();

  const onImportFileSelected = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      if (isDatasetTab && activeDatasetId) {
        await importDatasetRowsCsv(activeDatasetId, file);
      } else {
        await importFunnelCsv(kind as FunnelKind, file);
      }
      toast.success("CSV imported successfully");
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "CSV import failed");
    }
  };

  const openAddModal = () => {
    setNewValues({});
    setEditingLeadId("");
    setAddModalOpen(true);
  };

  const submitAdd = async () => {
    try {
      if (isDatasetTab && activeDatasetId) {
        await createDatasetRow(activeDatasetId, newValues);
      } else {
        await createFunnelLead(kind as FunnelKind, newValues);
      }
      toast.success("Added successfully");
      setAddModalOpen(false);
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to add");
    }
  };

  const deleteRow = async (rowId: string) => {
    if (!window.confirm("Delete this row?")) return;
    try {
      if (isDatasetTab && activeDatasetId) {
        await deleteDatasetRow(activeDatasetId, rowId);
      } else {
        await deleteFunnelLead(kind as FunnelKind, rowId);
      }
      toast.success("Row deleted");
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Delete failed");
    }
  };

  const openEdit = (row: FunnelLead | DatasetRow) => {
    if (isDatasetTab) {
      const ds = row as DatasetRow;
      setEditingLeadId(ds._id);
      setNewValues(ds.values || {});
    } else {
      const r = row as FunnelLead;
      setEditingLeadId(r.id);
      setNewValues({
        name: r.name,
        email: r.email,
        userContacts: r.contacts?.join("; "),
        title: r.title,
      });
    }
    setEditModalOpen(true);
  };

  const submitEdit = async () => {
    try {
      if (isDatasetTab && activeDatasetId) {
        await updateDatasetRow(activeDatasetId, editingLeadId, newValues);
      } else {
        await updateFunnelLead(kind as FunnelKind, editingLeadId, newValues);
      }
      toast.success("Updated successfully");
      setEditModalOpen(false);
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Update failed");
    }
  };

  return (
    <Wrap>
      <Helmet>
        <title>Funnel Module</title>
      </Helmet>
      <Heading>Marketing funnel</Heading>
      <SubHeading>
        Leads from order, cover idea, and contact funnels. Dynamic tabs match
        categories (datasets) you create under Categories.
      </SubHeading>

      <TopControls>
        <ActionRow>
          <LightBtn type="button" onClick={() => void load()}>
            Refresh
          </LightBtn>
          <LightBtn type="button" onClick={onImportCsvClick}>
            Import CSV
          </LightBtn>
          <PrimaryBtn type="button" onClick={openAddModal}>
            + Add
          </PrimaryBtn>
        </ActionRow>
      </TopControls>

      <TabsWrapper>
        <TabsRow>
          <TypeButton
            type="button"
            $active={kind === "orders"}
            onClick={() => setKind("orders")}
          >
            Order
          </TypeButton>
          <TypeButton
            type="button"
            $active={kind === "cover-ideas"}
            onClick={() => setKind("cover-ideas")}
          >
            Cover idea
          </TypeButton>
          <TypeButton
            type="button"
            $active={kind === "contacts"}
            onClick={() => setKind("contacts")}
          >
            Contact
          </TypeButton>
          {datasets.map((ds) => (
            <TypeButton
              key={ds._id}
              type="button"
              $active={kind === `dataset:${ds._id}`}
              onClick={() => setKind(`dataset:${ds._id}`)}
            >
              {ds.name}
            </TypeButton>
          ))}
        </TabsRow>
      </TabsWrapper>

      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,text/csv"
        style={{ display: "none" }}
        onChange={onImportFileSelected}
      />

      <FilterRow>
        <FilterInput
          placeholder="Search..."
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
        {datePreset === "custom" && (
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
            <ApplyBtn type="button" onClick={onApplyFilters}>
              Apply
            </ApplyBtn>
          </>
        )}
        <ClearBtn type="button" onClick={onClearFilters}>
          Clear
        </ClearBtn>
      </FilterRow>

      <TableContainer>
        <ModuleTable>
          <thead>
            <tr>
              <TH>
                {isDatasetTab
                  ? "ROW ID"
                  : kind === "orders"
                    ? "ORDER ID"
                    : "ID"}
              </TH>
              {isDatasetTab ? (
                <>
                  {datasetColumns.map((col) => (
                    <TH key={col.key}>
                      {(col.label || col.key).toUpperCase()}
                    </TH>
                  ))}
                  <TH>CREATED</TH>
                  <TH>ACTIONS</TH>
                </>
              ) : (
                <>
                  <TH>FULL NAME</TH>
                  <TH>EMAIL</TH>
                  {kind === "orders" ? <TH>CONTACTS</TH> : null}
                  {kind === "cover-ideas" ? <TH>TITLE</TH> : null}
                  <TH>CREATED</TH>
                  <TH>ACTIONS</TH>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <TableSkeleton
                rows={8}
                cols={
                  isDatasetTab
                    ? Math.max(3, datasetColumns.length + 3)
                    : kind === "orders" || kind === "cover-ideas"
                      ? 5
                      : 4
                }
              />
            ) : error ? (
              <tr>
                <td
                  colSpan={
                    isDatasetTab
                      ? Math.max(3, datasetColumns.length + 3)
                      : kind === "orders" || kind === "cover-ideas"
                        ? 6
                        : 5
                  }
                >
                  <ErrorText>{error}</ErrorText>
                </td>
              </tr>
            ) : isDatasetTab ? (
              datasetRows.length ? (
                datasetRows.map((r) => (
                  <tr key={r._id}>
                    <TD>{r._id.slice(-8)}</TD>
                    {datasetColumns.map((col) => (
                      <TD key={`${r._id}-${col.key}`}>
                        {String(r.values?.[col.key] ?? "—")}
                      </TD>
                    ))}
                    <TD>
                      {formatSubmittedAt(r.createdAt, { dateOnly: true })}
                    </TD>
                    <TD>
                      <EditBtn type="button" onClick={() => openEdit(r)}>
                        Edit
                      </EditBtn>{" "}
                      <DeleteBtn
                        type="button"
                        onClick={() => void deleteRow(r._id)}
                      >
                        Delete
                      </DeleteBtn>
                    </TD>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={Math.max(3, datasetColumns.length + 3)}>
                    No rows found.
                  </td>
                </tr>
              )
            ) : rows.length ? (
              rows.map((r) => (
                <tr key={r.id}>
                  <TD>{r.id.slice(-8)}</TD>
                  <TD>{r.name || "—"}</TD>
                  <TD>{r.email || "—"}</TD>
                  {kind === "orders" ? (
                    <TD>{r.contacts?.join(", ") || "—"}</TD>
                  ) : null}
                  {kind === "cover-ideas" ? <TD>{r.title || "—"}</TD> : null}
                  <TD>{formatSubmittedAt(r.createdAt)}</TD>
                  <TD>
                    <EditBtn type="button" onClick={() => openEdit(r)}>
                      Edit
                    </EditBtn>{" "}
                    <DeleteBtn
                      type="button"
                      onClick={() => void deleteRow(r.id)}
                    >
                      Delete
                    </DeleteBtn>
                  </TD>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={kind === "orders" || kind === "cover-ideas" ? 6 : 5}
                >
                  No funnel records found.
                </td>
              </tr>
            )}
          </tbody>
        </ModuleTable>
      </TableContainer>

      {!loading && !error && total > 0 ? (
        <>
          <AdminListPagination
            page={page}
            totalPages={totalPages}
            pageSizeLabel={pageSizeLabel}
            onPrev={() => setPage((p) => Math.max(1, p - 1))}
            onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
          />
          <TotalLine>{total} total</TotalLine>
        </>
      ) : null}
      <ToastContainer />

      {addModalOpen ? (
        <ModalOverlay onClick={() => setAddModalOpen(false)}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Add {isDatasetTab ? "Row" : "Lead"}</ModalTitle>
            <ModalContent>
              {(isDatasetTab
                ? datasetColumns
                : [
                    { key: "name", label: "Name" },
                    { key: "email", label: "Email" },
                    ...(kind === "orders"
                      ? [
                          {
                            key: "userContacts",
                            label: "Contacts (; separated)",
                          },
                        ]
                      : []),
                    ...(kind === "cover-ideas"
                      ? [{ key: "title", label: "Title" }]
                      : []),
                  ]
              ).map((col) => (
                <Field key={col.key}>
                  <label>{col.label || col.key}</label>
                  <input
                    value={String(newValues[col.key] ?? "")}
                    onChange={(e) =>
                      setNewValues((prev) => ({
                        ...prev,
                        [col.key]: e.target.value,
                      }))
                    }
                  />
                </Field>
              ))}
            </ModalContent>
            <ModalActions>
              <ModalPrimaryBtn type="button" onClick={() => void submitAdd()}>
                Create
              </ModalPrimaryBtn>
              <ModalLightBtn
                type="button"
                onClick={() => setAddModalOpen(false)}
              >
                Cancel
              </ModalLightBtn>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      ) : null}
      {editModalOpen ? (
        <ModalOverlay onClick={() => setEditModalOpen(false)}>
          <ModalCard onClick={(e) => e.stopPropagation()}>
            <ModalTitle>Edit {isDatasetTab ? "Row" : "Lead"}</ModalTitle>
            <ModalContent>
              {(isDatasetTab
                ? datasetColumns
                : [
                    { key: "name", label: "Name" },
                    ...(kind === "orders"
                      ? [
                          {
                            key: "userContacts",
                            label: "Contacts (; separated)",
                          },
                        ]
                      : []),
                    ...(kind === "cover-ideas"
                      ? [{ key: "title", label: "Title" }]
                      : []),
                  ]
              ).map((col) => (
                <Field key={col.key}>
                  <label>{col.label || col.key}</label>
                  <input
                    value={String(newValues[col.key] ?? "")}
                    onChange={(e) =>
                      setNewValues((prev) => ({
                        ...prev,
                        [col.key]: e.target.value,
                      }))
                    }
                  />
                </Field>
              ))}
            </ModalContent>
            <ModalActions>
              <ModalPrimaryBtn type="button" onClick={() => void submitEdit()}>
                Save
              </ModalPrimaryBtn>
              <ModalLightBtn
                type="button"
                onClick={() => setEditModalOpen(false)}
              >
                Cancel
              </ModalLightBtn>
            </ModalActions>
          </ModalCard>
        </ModalOverlay>
      ) : null}
    </Wrap>
  );
};

const Wrap = styled.div`
  background: #fff !important;
  padding: 8px 6px 14px;
`;
const Heading = styled.h2`
  margin: 0 0 2px;
  color: #0f172a;
  font-size: 36px;
  font-weight: 700;
`;
const SubHeading = styled.p`
  margin: 0 0 14px;
  color: #64748b;
  font-size: 13px;
`;

const TopControls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

const TabsWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-bottom: 16px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

const TabsRow = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: nowrap;
  align-items: center;
  min-width: min-content;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
`;

const TypeButton = styled.button<{ $active: boolean }>`
  border: 1px solid ${(p) => (p.$active ? "#6dc7d1" : "#d1d5db")};
  background: ${(p) => (p.$active ? "#6dc7d1" : "#fff")};
  color: ${(p) => (p.$active ? "#fff" : "#374151")};
  font-weight: 600;
  font-size: 13px;
  border-radius: 999px;
  padding: 5px 14px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const PrimaryBtn = styled.button`
  border: 1px solid #6dc7d1;
  background: #6dc7d1;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const LightBtn = styled.button`
  border: 1px solid #6dc7d1;
  background: #fff !important;
  color: #6dc7d1;
  font-weight: 600;
  font-size: 13px;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f7f9;
  }
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
  padding: 5px 32px 5px 10px;
  min-width: 120px;
  font-size: 13px;
  background: #fff !important;
  color: #334155 !important;
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
  }

  &:focus {
    outline: none;
    border-color: #6dc7d1;
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
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const ClearBtn = styled.button`
  border: 1px solid #6dc7d1;
  background: #fff !important;
  color: #6dc7d1;
  font-weight: 600;
  font-size: 12px;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  height: 32px;
  transition: all 0.2s ease;

  &:hover {
    background: #f0f7f9;
  }
`;

const DeleteBtn = styled.button`
  border: none;
  background: #e74c3c;
  color: #fff;
  border-radius: 4px;
  padding: 3px 7px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }
`;

const EditBtn = styled.button`
  border: none;
  background: #6b7280;
  color: #fff;
  border-radius: 4px;
  padding: 3px 7px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #4b5563;
  }
`;

const ModuleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 980px;
  border-radius: 8px;
  overflow: hidden;
  thead tr {
    background: #6dc7d1;
  }
  td {
    border-bottom: 1px solid #e5e7eb;
    padding: 11px 10px;
    font-size: 13px;
    color: #374151;
    vertical-align: middle;
  }
  tbody tr:nth-child(even) {
    background: #f8f9fa;
  }
  tbody tr:hover {
    background: #e9ecef;
  }
`;
const TH = styled.th`
  color: #fff;
  text-align: left;
  padding: 9px 10px;
  font-size: 11px;
  letter-spacing: 0.04em;
  font-weight: 700;
  text-transform: uppercase;
`;
const TD = styled.td``;
const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;
const TotalLine = styled.div`
  text-align: center;
  margin-top: -10px;
  color: #64748b;
  font-size: 13px;
`;

const ErrorText = styled.div`
  color: #dc2626;
  text-align: center;
  padding: 16px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  display: grid;
  place-items: center;
  z-index: 1200;
`;

const ModalCard = styled.div`
  width: min(500px, 90vw);
  max-height: 85vh;
  overflow: auto;
  border-radius: 10px;
  background: #fff !important;
  padding: 20px;
`;

const ModalTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
`;

const ModalContent = styled.div`
  margin-bottom: 20px;
`;

const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const ModalPrimaryBtn = styled.button`
  border: 1px solid #6dc7d1;
  background: #6dc7d1;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const ModalLightBtn = styled.button`
  border: 1px solid #d1d5db;
  background: #fff !important;
  color: #374151;
  font-weight: 600;
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }
`;

const Field = styled.div`
  margin-bottom: 12px;

  label {
    display: block;
    font-weight: 600;
    color: #334155 !important;
    margin-bottom: 4px;
    font-size: 13px;
  }

  input {
    width: 100%;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 13px;
    color: #334155 !important;
    -webkit-text-fill-color: #334155;
    background: #fff !important;
    caret-color: #334155;

    &::placeholder {
      color: #64748b;
      opacity: 1;
    }

    &:focus {
      outline: none;
      border-color: #6dc7d1;
    }
  }
`;

export default FunnelModule;
