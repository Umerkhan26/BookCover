import axios from "axios";
import { toast } from "react-toastify";

/**
 * When the API returns 401 while the user had a token stored, treat it as an
 * expired/invalid session: clear auth and send them home so UI matches logged-out state.
 * Does not run for login/register/forgot-password etc. (those can 401 without a session).
 */
const AUTH_SUBMIT_PATHS =
  /\/login(\?|$)|\/register(\?|$)|\/verify-email|\/forgot-password|\/verify-otp|\/reset-password/;

let handlingExpiry = false;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const url = String(error.config?.url ?? "");
    const hadToken = !!localStorage.getItem("token");

    if (
      status === 401 &&
      hadToken &&
      !AUTH_SUBMIT_PATHS.test(url) &&
      !handlingExpiry
    ) {
      handlingExpiry = true;
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      try {
        toast.warning("Your session has expired. Please sign in again.", {
          autoClose: 4000,
        });
      } catch {
        /* ignore */
      }

      window.setTimeout(() => {
        window.location.assign("/");
      }, 400);
    }

    return Promise.reject(error);
  },
);
