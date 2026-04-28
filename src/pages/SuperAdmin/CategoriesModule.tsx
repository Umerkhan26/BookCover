import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminListPagination from "../../components/AdminDashboard/AdminListPagination";
import {
  createDataset,
  deleteDataset,
  fetchDatasets,
  updateDataset,
  type Dataset,
  type DatasetColumn,
} from "../../services/marketingDataset.service";
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

const emptyColumn = (): DatasetColumn => ({
  key: "",
  label: "",
  type: "text",
  required: false,
});

const CategoriesModule: React.FC = () => {
  const [rows, setRows] = useState<Dataset[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSizeLabel, setPageSizeLabel] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Dataset | null>(null);
  const [saving, setSaving] = useState(false);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [columns, setColumns] = useState<DatasetColumn[]>([
    { key: "name", label: "Name", type: "text", required: true },
    { key: "email", label: "Email", type: "email", required: true },
  ]);

  // Search/filter states
  const [searchInput, setSearchInput] = useState("");
  const [searchApplied, setSearchApplied] = useState("");

  // Date filter states
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

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchDatasets({
        page,
        limit: 20,
        search: searchApplied || undefined,
        dateFrom: apiDateFrom || undefined,
        dateTo: apiDateTo || undefined,
      });
      setRows(res.datasets);
      setTotal(res.total);
      setTotalPages(res.totalPages);
      setPageSizeLabel(res.limit || 20);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to load categories",
      );
    } finally {
      setLoading(false);
    }
  }, [page, searchApplied, apiDateFrom, apiDateTo]);

  useEffect(() => {
    void load();
  }, [load]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [searchApplied, datePreset, apiDateFrom, apiDateTo]);

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

  const resetModal = () => {
    setEditing(null);
    setName("");
    setSlug("");
    setColumns([
      { key: "name", label: "Name", type: "text", required: true },
      { key: "email", label: "Email", type: "email", required: true },
    ]);
  };

  const onNew = () => {
    resetModal();
    setShowModal(true);
  };

  const onEdit = (row: Dataset) => {
    setEditing(row);
    setName(row.name || "");
    setSlug(row.slug || "");
    setColumns(
      Array.isArray(row.columns) && row.columns.length
        ? row.columns.map((c) => ({
            key: c.key || "",
            label: c.label || "",
            type: c.type || "text",
            required: Boolean(c.required),
          }))
        : [emptyColumn()],
    );
    setShowModal(true);
  };

  const submit = async () => {
    if (!name.trim()) {
      toast.error("Name is required");
      return;
    }
    try {
      setSaving(true);
      const payload = {
        name: name.trim(),
        slug: slug.trim() || undefined,
        columns: columns.map((c, i) => ({ ...c, order: i })),
      };
      if (editing?._id) {
        await updateDataset(editing._id, payload);
        toast.success("Category updated");
      } else {
        await createDataset(payload);
        toast.success("Category created");
      }
      setShowModal(false);
      resetModal();
      await load();
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to save category",
      );
    } finally {
      setSaving(false);
    }
  };

  const onDelete = async (row: Dataset) => {
    if (!window.confirm(`Delete category "${row.name}"?`)) return;
    try {
      await deleteDataset(row._id);
      toast.success("Category deleted");
      await load();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Delete failed");
    }
  };

  const canCreate = useMemo(
    () =>
      name.trim().length > 0 &&
      columns.length > 0 &&
      columns.every((c) => c.key.trim() && c.label.trim() && c.type.trim()),
    [name, columns],
  );

  // Auto-focus next input when adding new column
  const addNewColumn = () => {
    setColumns((p) => [...p, emptyColumn()]);
    // Focus the new key input after render
    setTimeout(() => {
      const inputs = document.querySelectorAll(".column-key-input");
      const lastInput = inputs[inputs.length - 1] as HTMLInputElement;
      if (lastInput) lastInput.focus();
    }, 0);
  };

  return (
    <Container>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      <HeaderSection style={{ justifyContent: "space-between" }}>
        <div>
          <Title>Categories</Title>
          <RequestCount>({total} total)</RequestCount>
        </div>
        <NewCategoryBtn type="button" onClick={onNew}>
          New category
        </NewCategoryBtn>
      </HeaderSection>

      {/* Filter Row */}
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

      <Hint>
        Create and edit dynamic datasets (columns). Use the Funnel page to view
        tabs and import or add rows.
      </Hint>

      <TableContainer>
        <Table style={{ minWidth: 860 }}>
          <thead>
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Slug</TableHeader>
              <TableHeader>Created</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <TableRow>
                <TableData colSpan={4}>Loading...</TableData>
              </TableRow>
            ) : rows.length ? (
              rows.map((r) => (
                <TableRow key={r._id}>
                  <TableData>{r.name}</TableData>
                  <TableData>{r.slug || "—"}</TableData>
                  <TableData>
                    {new Date(r.createdAt).toLocaleDateString()}
                  </TableData>
                  <TableData>
                    <ActionWrap>
                      <EditBtn type="button" onClick={() => onEdit(r)}>
                        Edit
                      </EditBtn>
                      <DeleteBtn type="button" onClick={() => onDelete(r)}>
                        Delete
                      </DeleteBtn>
                    </ActionWrap>
                  </TableData>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableData colSpan={4}>
                  {searchApplied || datePreset !== "all"
                    ? "No matching categories found."
                    : "No categories found."}
                </TableData>
              </TableRow>
            )}
          </tbody>
        </Table>
      </TableContainer>
      {!loading && total > 0 ? (
        <AdminListPagination
          page={page}
          totalPages={totalPages}
          pageSizeLabel={pageSizeLabel}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
        />
      ) : null}
      <ToastContainer />

      {showModal ? (
        <Backdrop onClick={() => !saving && setShowModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ModalTitle>
              {editing ? "Edit category" : "New category"}
            </ModalTitle>
            <FieldLabel>Name *</FieldLabel>
            <FieldInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
            <FieldLabel>Slug (optional)</FieldLabel>
            <FieldInput
              placeholder="auto from name if empty"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
            <ColumnsHead>Columns</ColumnsHead>
            <ColumnsHint>
              Key: lowercase a-z, digits, underscore. Add or remove rows below.
            </ColumnsHint>
            {columns.map((c, idx) => (
              <ColumnRow key={`col-${idx}`}>
                <FieldInput
                  className="column-key-input"
                  placeholder="key"
                  value={c.key}
                  onChange={(e) =>
                    setColumns((prev) =>
                      prev.map((x, i) =>
                        i === idx ? { ...x, key: e.target.value } : x,
                      ),
                    )
                  }
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const nextInput =
                        document.querySelectorAll(".column-input")[idx + 1];
                      if (nextInput) (nextInput as HTMLInputElement).focus();
                    }
                  }}
                />
                <FieldInput
                  className="column-input"
                  placeholder="label"
                  value={c.label}
                  onChange={(e) =>
                    setColumns((prev) =>
                      prev.map((x, i) =>
                        i === idx ? { ...x, label: e.target.value } : x,
                      ),
                    )
                  }
                />
                <TypeSelect
                  value={c.type}
                  onChange={(e) =>
                    setColumns((prev) =>
                      prev.map((x, i) =>
                        i === idx ? { ...x, type: e.target.value } : x,
                      ),
                    )
                  }
                >
                  <option value="text">text</option>
                  <option value="email">email</option>
                  <option value="number">number</option>
                  <option value="date">date</option>
                  <option value="textarea">textarea</option>
                  <option value="url">url</option>
                </TypeSelect>
                <ReqWrap>
                  <input
                    type="checkbox"
                    checked={Boolean(c.required)}
                    onChange={(e) =>
                      setColumns((prev) =>
                        prev.map((x, i) =>
                          i === idx ? { ...x, required: e.target.checked } : x,
                        ),
                      )
                    }
                  />
                  <ReqLabel>Req</ReqLabel>
                </ReqWrap>
                <RemoveBtn
                  type="button"
                  onClick={() =>
                    setColumns((prev) =>
                      prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev,
                    )
                  }
                >
                  Remove
                </RemoveBtn>
              </ColumnRow>
            ))}
            <AddColumnBtn type="button" onClick={addNewColumn}>
              + Add column
            </AddColumnBtn>
            <Footer>
              <ModalPrimaryBtn
                type="button"
                disabled={!canCreate || saving}
                onClick={submit}
              >
                {editing ? "Update" : "Create"}
              </ModalPrimaryBtn>
              <ModalLightBtn
                type="button"
                disabled={saving}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </ModalLightBtn>
            </Footer>
          </Modal>
        </Backdrop>
      ) : null}
    </Container>
  );
};

/// ============ STYLED COMPONENTS ============

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
  cursor: pointer;

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

const NewCategoryBtn = styled.button`
  border: 1px solid #6dc7d1;
  background: #6dc7d1;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  padding: 5px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

const Hint = styled.p`
  margin: -4px 0 10px;
  color: #64748b;
  font-size: 13px;
`;

const ActionWrap = styled.div`
  display: flex;
  gap: 8px;
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

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  display: grid;
  place-items: center;
  z-index: 1000;
`;

// Modal width decreased
const Modal = styled.div`
  width: min(700px, 90vw);
  max-height: 85vh;
  overflow: auto;
  background: #fff !important;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 20px 35px -8px rgba(0, 0, 0, 0.2);
`;

const ModalTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
`;

const FieldLabel = styled.label`
  font-size: 13px;
  color: #334155 !important;
  font-weight: 600;
  display: block;
  margin-top: 12px;
  margin-bottom: 4px;
`;

const FieldInput = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
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
`;

const ColumnsHead = styled.h3`
  margin: 20px 0 4px;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
`;

const ColumnsHint = styled.p`
  margin: 0 0 12px;
  color: #64748b;
  font-size: 12px;
`;

const ColumnRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 120px 60px 70px;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`;

const TypeSelect = styled.select`
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid #cbd5e1;
  font-size: 12px;
  background: #fff !important;
  color: #334155 !important;
  -webkit-text-fill-color: #334155;
  height: 34px;

  option {
    color: #334155 !important;
    background: #fff;
  }
`;

const ReqWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  input {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

const ReqLabel = styled.span`
  font-size: 11px;
  color: #64748b;
`;

const RemoveBtn = styled.button`
  padding: 4px 8px;
  border: 1px solid #e74c3c;
  background: #fff !important;
  color: #e74c3c;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #e74c3c;
    color: #fff;
  }
`;

const AddColumnBtn = styled.button`
  padding: 6px 12px;
  margin-top: 8px;
  border: 1px dashed #6dc7d1;
  background: #fff !important;
  color: #6dc7d1;
  border-radius: 6px;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background: #f0f7f9;
  }
`;

const Footer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: #f8f9fa;
  }
`;
export default CategoriesModule;
