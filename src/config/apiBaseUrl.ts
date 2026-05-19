/** Backend API root, e.g. https://lumeartstudio.com/api (no trailing slash). */
export function getApiBaseUrl(): string {
  const url = String(import.meta.env.VITE_API_BASE_URL ?? "").trim();
  if (!url) {
    throw new Error(
      "VITE_API_BASE_URL is missing. Set it in .env (see .env.example) and rebuild.",
    );
  }
  return url.replace(/\/$/, "");
}
