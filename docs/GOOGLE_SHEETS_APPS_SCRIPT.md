# Google Sheets integration (Apps Script)

Form submissions from **Contact Us**, **Get a Cover**, and **Portal order form** are sent to a Google Sheet via a Google Apps Script Web App.

## 1. Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Create **three sheets (tabs)** in the workbook:
   - **Contact** – for Contact Us form
   - **GetACover** – for Get a Cover (book request) form
   - **PortalOrder** – for Portal order form

You can name the tabs as you like; the script below uses these names. Adjust the script if you use different tab names.

## 2. Add the Apps Script

1. In the Google Sheet, go to **Extensions → Apps Script**.
2. Delete any default code and paste the script below.
3. Save the project (e.g. name it "Form to Sheet").

```javascript
function doPost(e) {
  try {
    var params = JSON.parse(e.postData.contents);
    var formType = params.formType;
    var sheet = getSheetByFormType(formType);
    if (!sheet) {
      return createResponse(400, { error: "Unknown formType: " + formType });
    }
    var row = buildRow(formType, params);
    sheet.appendRow(row);
    return createResponse(200, { success: true });
  } catch (err) {
    console.error(err);
    return createResponse(500, { error: err.toString() });
  }
}

function doGet(e) {
  return createResponse(200, { message: "Use POST to submit form data." });
}

function getSheetByFormType(formType) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var name =
    formType === "contact"
      ? "Contact"
      : formType === "getACover"
        ? "GetACover"
        : formType === "portalOrder"
          ? "PortalOrder"
          : null;
  return name ? ss.getSheetByName(name) : null;
}

function buildRow(formType, params) {
  params.submittedAt = params.submittedAt || new Date().toISOString();
  if (formType === "contact") {
    return [
      params.submittedAt,
      params.firstName,
      params.lastName,
      params.email,
      params.referral || "",
      params.message,
    ];
  }
  if (formType === "getACover") {
    return [
      params.submittedAt,
      params.name,
      params.title,
      params.genre || "",
      params.isSeries ? "Yes" : "No",
      params.description || "",
      (params.coverPreference || []).join(", "),
      params.mainCharacters || "",
      params.keyObjects || "",
      params.setting || "",
      params.email || "",
      params.comparableCoversCount || 0,
    ];
  }
  if (formType === "portalOrder") {
    return [
      params.submittedAt,
      params.userId || "",
      params.packageId || "",
      (params.addOnIds || []).join(", "),
      params.name || "",
      params.bookTitle || "",
      params.bookSubtitle || "",
      params.narratorName || "",
      params.genre || "",
      params.seriesContinuation || "",
      params.summary || "",
      params.prefferedCoverStyle || "",
      params.likeToSeeOnCover || "",
      params.status || "",
      (params.userContacts || []).join(", "),
      params.firstOrder ? "Yes" : "No",
      params.shareOnPortfolio ? "Yes" : "No",
    ];
  }
  return [];
}

function createResponse(code, body) {
  var output = ContentService.createTextOutput(
    JSON.stringify(body),
  ).setMimeType(ContentService.MimeType.JSON);
  return output;
}
```

### 3. Add headers for CORS (so the browser can call the script)

Apps Script does not let you set custom headers on the response directly. To allow requests from your website:

1. In the Apps Script editor, add this at the top of the file (optional; only if you need CORS for a web client):

```javascript
// CORS: Google Apps Script Web App deployed as "Execute as: Me" and "Who has access: Anyone"
// can be called from browsers. If you still get CORS errors, use a backend proxy or deploy
// with "Anyone with Google account" and ensure the request is sent from the same origin.
```

2. **Deploy as Web App:**
   - Click **Deploy → New deployment**.
   - Click the gear icon next to "Select type", choose **Web app**.
   - **Description:** e.g. "Form submissions".
   - **Execute as:** Me (your account).
   - **Who has access:** **Anyone** (so the frontend can POST without Google login).
   - Click **Deploy**.
   - Copy the **Web app URL** (looks like `https://script.google.com/macros/s/.../exec`).

### 4. Add headers in the script (alternative for CORS)

If your frontend reports CORS errors, the only way to fix it from Apps Script is to return a text response that includes CORS headers. Google’s runtime doesn’t support setting headers on `ContentService` output, so a workaround is to return HTML with a script that posts to the sheet and use a different flow, or to **call the Web App from your backend** and have the frontend call your backend only. For a quick test, deploy with "Anyone" and call the **exec** URL from the browser (e.g. from your React app). If the script runs and the request is simple (POST with JSON), some setups work without extra CORS. If you see CORS errors, the next step is to proxy the request through your own backend (e.g. Node) that then calls the Apps Script URL.

## 5. Set the URL in your project

Add this to your `.env` file (create one from `.env.example` if needed):

```env
VITE_GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace with the **Web app URL** you copied. Restart the dev server after changing `.env`.

## 6. (Optional) Add header rows to each sheet

In the Google Sheet, add a first row with column headers so you can read the data easily:

- **Contact:** `Submitted At`, `First Name`, `Last Name`, `Email`, `Referral`, `Message`
- **GetACover:** `Submitted At`, `Name`, `Title`, `Genre`, `Is Series`, `Description`, `Cover Preference`, `Main Characters`, `Key Objects`, `Setting`, `Email`, `Comparable Covers Count`
- **PortalOrder:** `Submitted At`, `User ID`, `Package ID`, `Add-on IDs`, `Name`, `Book Title`, `Book Subtitle`, `Narrator Name`, `Genre`, `Series Continuation`, `Summary`, `Preferred Cover Style`, `Like to See on Cover`, `Status`, `User Contacts`, `First Order`, `Share on Portfolio`

The script uses `appendRow()`, so it will add new rows below any header row you add.

## Summary

| Form         | Tab name    | Env variable                     |
| ------------ | ----------- | -------------------------------- |
| Contact Us   | Contact     | `VITE_GOOGLE_SHEETS_WEB_APP_URL` |
| Get a Cover  | GetACover   | same                             |
| Portal order | PortalOrder | same                             |

If `VITE_GOOGLE_SHEETS_WEB_APP_URL` is not set, the app still works; form data is just not sent to Google Sheets (no error is shown to the user).
