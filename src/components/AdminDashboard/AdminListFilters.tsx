import React from "react";
import styled from "styled-components";
import type { DatePreset } from "../../utils/adminDateRange";

const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const Field = styled.label`
  display: block;
`;

const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 13px;
  min-width: 160px;
  height: 32px;
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

const Select = styled.select`
  padding: 5px 30px 5px 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 13px;
  min-width: 120px;
  height: 32px;
  color: #334155 !important;
  -webkit-text-fill-color: #334155;
  background-color: #fff !important;
  cursor: pointer;
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

  &:focus {
    outline: none;
    border-color: #6dc7d1;
  }
`;

const DateInput = styled(Input)`
  min-width: 140px;
`;

const CustomRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 10px 14px;
`;

export type AdminListFiltersProps = {
  searchLabel?: string;
  searchPlaceholder?: string;
  searchValue: string;
  onSearchChange: (v: string) => void;
  datePreset: DatePreset;
  onDatePresetChange: (p: DatePreset) => void;
  customDateFrom: string;
  customDateTo: string;
  onCustomDateFromChange: (v: string) => void;
  onCustomDateToChange: (v: string) => void;
};

const PRESET_OPTIONS: { value: DatePreset; label: string }[] = [
  { value: "all", label: "All dates" },
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "weekly", label: "This week" },
  { value: "monthly", label: "This month" },
  { value: "custom", label: "Custom" },
];

const AdminListFilters: React.FC<AdminListFiltersProps> = ({
  searchLabel = "Search",
  searchPlaceholder = "Search…",
  searchValue,
  onSearchChange,
  datePreset,
  onDatePresetChange,
  customDateFrom,
  customDateTo,
  onCustomDateFromChange,
  onCustomDateToChange,
}) => (
  <Bar>
    <Field>
      <Input
        type="search"
        value={searchValue}
        placeholder={searchPlaceholder}
        onChange={(e) => onSearchChange(e.target.value)}
        autoComplete="off"
      />
    </Field>
    <Field>
      <Select
        value={datePreset}
        onChange={(e) => onDatePresetChange(e.target.value as DatePreset)}
        aria-label="Date period"
      >
        {PRESET_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </Select>
    </Field>
    {datePreset === "custom" ? (
      <CustomRow>
        <Field>
          From
          <DateInput
            type="date"
            value={customDateFrom}
            onChange={(e) => onCustomDateFromChange(e.target.value)}
          />
        </Field>
        <Field>
          To
          <DateInput
            type="date"
            value={customDateTo}
            onChange={(e) => onCustomDateToChange(e.target.value)}
          />
        </Field>
      </CustomRow>
    ) : null}
  </Bar>
);

const BulkWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 12px;
  padding: 8px 12px;
  background: #fffbeb;
  border-radius: 8px;
  border: 1px solid #fcd34d;
  font-size: 13px;
  font-weight: 600;
  color: #92400e;
`;

const BulkDeleteBtn = styled.button`
  padding: 6px 14px;
  background: #dc2626;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover:not(:disabled) {
    background: #b91c1c;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export type AdminBulkBarProps = {
  selectedCount: number;
  itemLabel: string;
  onDeleteClick: () => void;
  disabled?: boolean;
};

export const AdminBulkBar: React.FC<AdminBulkBarProps> = ({
  selectedCount,
  itemLabel,
  onDeleteClick,
  disabled,
}) => {
  if (selectedCount < 1) return null;
  return (
    <BulkWrap>
      <span>{selectedCount} selected</span>
      <BulkDeleteBtn type="button" disabled={disabled} onClick={onDeleteClick}>
        Delete {itemLabel}
      </BulkDeleteBtn>
    </BulkWrap>
  );
};

export default AdminListFilters;
