# Wise Choice · UGC NET JRF Paper I

Only **3 files** matter. No folders, no lists, no file-naming rules.

| File | Who uses it | What it does |
|---|---|---|
| `index.html` | **Students** | The practice site. It can only *read* questions. It has **no** way to add, edit or upload anything. |
| `admin.html` | **You only** | The only place where questions are added / edited / deleted. It creates a new `papers.js` for you. |
| `papers.js`  | the site | Holds **all** question papers. This is the one file that changes when you add questions. |

Also put your `logo.png` next to them (optional — the site works without it).

---

## First-time setup (about 3 minutes)
1. In your GitHub repository, tap **Add file → Upload files**.
2. Choose `index.html`, `admin.html`, `papers.js` (and `logo.png`). Upload them to the **main page of the repository — not inside any folder**.
3. Tap **Commit changes**. Wait about a minute.
4. Open `https://YOURNAME.github.io/` (or `…/REPOSITORY/`). The site appears.

Old folders (`css`, `js`, `data`) and old files from earlier versions are **not used any more**. You may delete them or leave them.

---

## Adding questions (every time)
1. Open `https://YOURNAME.github.io/admin.html`.
2. **Step 1 — Load your papers.** It loads your current `papers.js` by itself. (If it says it can't, tap *Choose papers.js* or *From my site address*.) Always do this first, so the papers already on your site are kept.
3. **Step 2 — New paper.** Choose year, session, day and shift. Add questions:
   - **Paste / CSV** — tap *Excel template*, fill it in, copy the rows and paste (or choose the CSV file), or
   - **Type one** — fill the form, tap the letter of the correct option, tap *Add question*, or
   - **Old file** — bring in a paper from an old single-paper `.js` file.
   Anything marked ⚠️ needs fixing (tap ✏️). Then tap **Save this paper to my list**.
   You can also **✏️ Edit** or **🗑 delete** any paper already on your site.
4. **Step 3 — Publish.** Tap **Download papers.js** (or **Copy papers.js**).
5. Put it on your site:
   - **Computer:** GitHub → *Add file → Upload files* → drop `papers.js` → *Commit changes* (it replaces the old one).
   - **Phone:** tap *Copy papers.js* → GitHub → tap `papers.js` → ✏️ → select all, delete → paste → *Commit changes*.
   - If the downloaded file is called `papers (1).js`, rename it to `papers.js` first.
6. Wait about a minute, refresh the site. The new paper is in the year dropdown.

Nothing goes live until you upload `papers.js` — admin.html cannot change your site by itself.

---

## Keeping admin private
- Students only know `index.html`; nothing links to `admin.html`, and search engines are told to ignore it.
- Even if someone finds it, it can't change anything: only a person logged in to **your GitHub** can publish.
- If you don't want it online at all, **don't upload it** — keep `admin.html` on your phone/computer and open it there. Use *Choose papers.js* (or *From my site address*) in Step 1.

---

## If something looks wrong
- **Site shows "Question papers could not be loaded"** → `papers.js` is missing or not in the same place as `index.html`. Upload it to the main page of the repository.
- **A new paper doesn't show** → you probably didn't upload the new `papers.js`, or the browser has the old one: wait a minute and refresh (or open in a private tab).
- **Something disappeared** → you uploaded a `papers.js` made from an empty list. Admin warns you about this. Load your last good `papers.js` in Step 1 and publish again.
- Open `https://YOURNAME.github.io/papers.js` in a browser — it should show text starting with `window.WC_PAPERS`. If it says 404, it isn't uploaded in the right place.
