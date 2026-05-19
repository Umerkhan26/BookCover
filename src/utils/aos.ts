import AOS from "aos";

let initialized = false;

export const AOS_DEFAULTS = {
  once: true,
  duration: 800,
  offset: 100,
  easing: "ease-out",
} as const;

/** Initialize AOS once, then refresh when new content mounts (SPA routes). */
export function ensureAos(refresh = true): void {
  if (!initialized) {
    AOS.init({ ...AOS_DEFAULTS });
    initialized = true;
  }
  if (refresh) {
    requestAnimationFrame(() => {
      AOS.refresh();
    });
  }
}
