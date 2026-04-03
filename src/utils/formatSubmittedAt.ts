export type FormatSubmittedOptions = {
  /** Omit time; use locale date only (e.g. lists). */
  dateOnly?: boolean;
};

/**
 * Formats API timestamps (ISO strings or Date) for admin list/detail views.
 */
export function formatSubmittedAt(
  value: unknown,
  options?: FormatSubmittedOptions,
): string {
  if (value == null || value === "") return "—";
  const d = new Date(value as string);
  if (Number.isNaN(d.getTime())) return "—";
  if (options?.dateOnly) return d.toLocaleDateString();
  return d.toLocaleString();
}
