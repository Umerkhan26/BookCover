import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ensureAos } from "../../utils/aos";

/** Runs AOS on first load and after every client-side navigation. */
const AosInit = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    ensureAos(false);
  }, []);

  useEffect(() => {
    ensureAos(true);
    // Lazy routes (e.g. /fiction-cover) mount after navigation — refresh again.
    const timer = window.setTimeout(() => ensureAos(true), 400);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default AosInit;
