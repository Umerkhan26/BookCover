const WEB_APP_URL = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL as
  | string
  | undefined;

export type SheetFormType = "contact" | "getACover" | "portalOrder";

export interface ContactSheetPayload {
  formType: "contact";
  firstName: string;
  lastName: string;
  email: string;
  referral: string;
  message: string;
  submittedAt?: string;
}

export interface GetACoverSheetPayload {
  formType: "getACover";
  name: string;
  title: string;
  genre: string;
  isSeries: boolean;
  description: string;
  coverPreference: string[];
  mainCharacters: string;
  keyObjects: string;
  setting: string;
  email: string;
  comparableCoversCount: number;
  submittedAt?: string;
}

export interface PortalOrderSheetPayload {
  formType: "portalOrder";
  userId: string;
  packageId: string;
  addOnIds: string[];
  name: string;
  bookTitle: string;
  bookSubtitle: string;
  narratorName: string;
  genre: string;
  seriesContinuation: string;
  summary: string;
  prefferedCoverStyle: string;
  likeToSeeOnCover: string;
  status: string;
  userContacts: string[];
  firstOrder: boolean;
  shareOnPortfolio: boolean;
  submittedAt?: string;
}

export type GoogleSheetPayload =
  | ContactSheetPayload
  | GetACoverSheetPayload
  | PortalOrderSheetPayload;

export async function submitToGoogleSheet(
  payload: GoogleSheetPayload,
): Promise<void> {
  if (!WEB_APP_URL || !WEB_APP_URL.trim()) {
    return;
  }
  const withTimestamp = {
    ...payload,
    submittedAt: new Date().toISOString(),
  };
  try {
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(withTimestamp),
    });
    // With no-cors we cannot read res.ok; the sheet still receives the data
  } catch (err) {
    console.warn("Google Sheets submit failed:", err);
  }
}
