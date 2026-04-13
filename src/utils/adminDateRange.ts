/** Preset period for admin list date filters (API uses YYYY-MM-DD). */
export type DatePreset =
  | "all"
  | "today"
  | "yesterday"
  | "weekly"
  | "monthly"
  | "custom";

function pad2(n: number): string {
  return String(n).padStart(2, "0");
}

export function formatYMD(d: Date): string {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/** Monday-start of the week containing `ref`, at local midnight. */
export function startOfWeekMonday(ref: Date): Date {
  const d = new Date(ref.getFullYear(), ref.getMonth(), ref.getDate());
  const day = d.getDay(); // 0 Sun … 6 Sat
  const offset = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + offset);
  return d;
}

/**
 * Maps UI preset + optional custom range to `dateFrom` / `dateTo` strings for the API.
 * Empty strings mean “no date filter”.
 */
export function presetToDateStrings(
  preset: DatePreset,
  customFrom: string,
  customTo: string,
): { dateFrom: string; dateTo: string } {
  const now = new Date();

  if (preset === "all") {
    return { dateFrom: "", dateTo: "" };
  }
  if (preset === "custom") {
    return { dateFrom: customFrom.trim(), dateTo: customTo.trim() };
  }

  if (preset === "today") {
    const t = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const s = formatYMD(t);
    return { dateFrom: s, dateTo: s };
  }

  if (preset === "yesterday") {
    const y = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const s = formatYMD(y);
    return { dateFrom: s, dateTo: s };
  }

  if (preset === "weekly") {
    const start = startOfWeekMonday(now);
    return { dateFrom: formatYMD(start), dateTo: formatYMD(now) };
  }

  if (preset === "monthly") {
    const start = new Date(now.getFullYear(), now.getMonth(), 1);
    return { dateFrom: formatYMD(start), dateTo: formatYMD(now) };
  }

  return { dateFrom: "", dateTo: "" };
}
