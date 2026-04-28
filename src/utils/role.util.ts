export type AppRole =
  | "superadmin"
  | "admin"
  | "seo"
  | "marketing"
  | "client"
  | "designer"
  | "unknown";

export const normalizeRole = (role?: string | null): AppRole => {
  const raw = String(role || "")
    .trim()
    .toLowerCase();

  if (raw === "superadmin" || raw === "super_admin") return "superadmin";
  if (raw === "admin") return "admin";
  if (raw === "seo") return "seo";
  if (raw === "marketing" || raw === "marketer") return "marketing";
  if (raw === "client" || raw === "user") return "client";
  if (raw === "designer") return "designer";
  return "unknown";
};

export const getDefaultRouteForRole = (role?: string | null): string => {
  const normalized = normalizeRole(role);

  switch (normalized) {
    case "superadmin":
    case "admin":
      return "/admin/users";
    case "seo":
      return "/admin/blog";
    case "marketing":
      return "/admin/funnel";
    case "client":
      return "/portal/orders";
    case "designer":
    case "unknown":
    default:
      return "/";
  }
};

export const isAdminPanelRole = (role?: string | null): boolean => {
  const normalized = normalizeRole(role);
  return (
    normalized === "superadmin" ||
    normalized === "admin" ||
    normalized === "seo" ||
    normalized === "marketing"
  );
};
