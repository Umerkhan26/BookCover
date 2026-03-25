/** Builds the public post URL to match site routing (e.g. /blog/:slug). */
export function buildPublicPostUrl(slug: string): string {
  const trimmed = slug.trim();
  if (!trimmed) {
    return "";
  }
  const base = (
    import.meta.env.VITE_PUBLIC_SITE_URL || window.location.origin
  ).replace(/\/+$/, "");
  const raw = import.meta.env.VITE_BLOG_PATH_PREFIX;
  const prefix =
    raw === undefined || raw === null
      ? "blog"
      : String(raw).trim().replace(/^\/+|\/+$/g, "");
  const path = prefix ? `${prefix}/${trimmed}` : trimmed;
  return `${base}/${path}`;
}
