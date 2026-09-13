# Contact Form Setup

## Step 1 — Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) → New spreadsheet
2. Name it "Portfolio Leads"
3. In Row 1, add these headers: `Timestamp | Name | Email | Subject | Message`

## Step 2 — Create the Apps Script

1. In your Sheet: **Extensions → Apps Script**
2. Replace all code with:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    new Date(),
    e.parameter.name    || '',
    e.parameter.email   || '',
    e.parameter.subject || '',
    e.parameter.message || '',
  ]);
  return ContentService.createTextOutput('OK');
}
```

3. Click **Save** (name it anything, e.g. "ContactWebhook")

## Step 3 — Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon next to "Select type" → choose **Web app**
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** → Authorize when prompted
5. Copy the **Web app URL** — it looks like `https://script.google.com/macros/s/XXXXXX/exec`

## Step 4 — Add URL to your project

Paste the URL into `.env.local`:

```
NEXT_PUBLIC_CONTACT_WEBHOOK_URL=https://script.google.com/macros/s/XXXXXX/exec
```

Then redeploy to Vercel:
- Go to your Vercel project → **Settings → Environment Variables**
- Add `NEXT_PUBLIC_CONTACT_WEBHOOK_URL` with the same URL
- Redeploy (or push a commit)

## Switching to a different backend later

Just replace the URL in `.env.local` and the Vercel env variable.
Any service that accepts a POST with `name`, `email`, `subject`, `message` fields works
(n8n webhook, Make.com, Zapier, Airtable forms, etc.).
