# Forms in This Project & Sending Data to Google Sheets

## Where the forms are

| # | Form | File | What it sends | API used |
|---|------|------|----------------|----------|
| 1 | **Contact Us** | `src/pages/ContactUsForm/ContactUsForm.tsx` | firstName, lastName, email, referral, message | `submitContactFormAPI()` → POST `/submit` |
| 2 | **Get a Cover (book request)** | `src/pages/GetACover/cover.tsx` | name, title, genre, isSeries, description, coverPreference, mainCharacters, keyObjects, setting, comparableCovers (files), email | `createBookRequest()` → POST `/createCoverIdea` (FormData) |
| 3 | **Portal order form** | `src/pages/UserDashboard/Form/form.tsx` | userId, packageId, addOnIds, name, bookTitle, bookSubtitle, narratorName, genre, seriesContinuation, summary, prefferedCoverStyle, likeToSeeOnCover, status, userContacts, firstOrder, shareOnPortfolio | `createOrderAPI()` → POST `/create` |
| 4 | **Registration** | `src/components/register/RegisterModal.tsx` | firstName, lastName, email, password, role | `registerUser()` → POST `/register` |
| 5 | **Profile update** | `src/pages/UserDashboard/Profile/profile.tsx` | Profile fields (name, email, etc.) | Profile API |

Other forms (Login, Forgot password, Reset password, OTP) are auth-only; usually you do **not** send these to Google Sheets for security reasons.

---

## How you can send form data to Google Sheets

Two practical options:

### Option A – Google Apps Script (no backend change)

- You create a **Google Sheet** and add an **Apps Script** that:
  - Exposes a **Web app** URL (e.g. `doPost(e)`).
  - Receives POST body (e.g. JSON), parses it, and **appends a row** to a sheet.
- In your **React app**, after a form is successfully submitted (and your existing API call succeeds), you **also** call the Apps Script Web app URL with the same (or a subset of) form data.
- **Pros:** No changes to your Node/backend; one script per sheet (or one script, multiple sheets).  
- **Cons:** Script URL is public (you can protect it with a secret token in the request). CORS: Apps Script can return the right headers so the browser allows the request.

**Flow:** User submits form → your API runs as now → then frontend calls `fetch(SCRIPT_URL, { method: 'POST', body: JSON.stringify(formData) })` → Apps Script appends a row to the sheet.

### Option B – Backend sends to Google Sheets

- Your **existing backend** (the one behind `VITE_API_BASE_URL`) continues to handle the form (e.g. `/submit`, `/create`, `/createCoverIdea`, `/register`).
- In the same backend route, after saving to your DB or doing your current logic, you **call Google Sheets API** (using a service account or OAuth) and append a row.
- **Pros:** No exposed script URL; all logic and secrets stay on the server.  
- **Cons:** You must change the backend and set up Google API credentials.

**Flow:** User submits form → frontend calls your API only → backend saves/processes as now → backend calls Google Sheets API and appends a row.

---

## Recommendation

- If you **don’t want to touch the backend**: use **Option A** (Apps Script). We add a small helper (e.g. `submitToGoogleSheet(formName, payload)`) and call it after each successful form submit in the frontend for the forms you care about (e.g. Contact, Get a Cover, Order, optionally Register).
- If you **control the backend** and prefer everything server-side: use **Option B** and add one “append to sheet” step in each relevant route.

---

## Next step

1. Choose: **Option A (Apps Script)** or **Option B (Backend)**.  
2. Choose which forms should send data to Sheets (e.g. Contact + Get a Cover + Order + Register).  
3. Then we can:
   - **Option A:** Add the Apps Script sample code and the frontend helper + where to call it for each form.
   - **Option B:** Sketch the backend changes (e.g. Node + googleapis) and what to send from the frontend (no change needed if you already send the same payload to your API).
