# Wise Choice · UGC NET JRF Paper I

All files go in **one folder** (the main page of your GitHub repository). **No sub-folders.**

| File | Who uses it | What it is |
|---|---|---|
| `index.html` | **Students** | The practice site. Students can only *read* questions — it has **no** way to add, edit or upload anything. |
| `style.css` | the site | Design. |
| `config.js` | the site | Exam rules, the 10 units, shift timings, quotes. (Rarely changed.) |
| `app.js` | the site | The student app's code. |
| `papers.js` | the site | **All** question papers. The only file that changes when you add questions — and **admin.html updates it for you.** |
| `admin.html` | **You only** | The only place where questions are added, edited or deleted. |
| `logo.png` | the site | Your logo (optional). |

(No `manifest.js` is needed any more.)

---

## One-time setup (about 10 minutes)

### Part A — put the files on GitHub
1. Open your repository on GitHub → **Add file → Upload files**.
2. Select **all the files above at once** (`index.html`, `admin.html`, `style.css`, `config.js`, `app.js`, `papers.js`, `logo.png`) → **Commit changes**. Don't create or use any folder.
3. Wait a minute and open your site. Students now see the practice site.

Old folders/files from earlier versions (`css/`, `js/`, `data/`, `manifest.js`…) are no longer used. Leave or delete them.

### Part B — connect admin to your site (so Publish works)
1. Open `https://YOURNAME.github.io/admin.html` (or open `admin.html` from your phone's Downloads).
2. In **Step 1**, type your repository (for example `yourname/yourname.github.io`).
3. Create a token — it's free and takes 2 minutes:
   - Open **github.com/settings/personal-access-tokens/new**
   - Token name: `Wise Choice admin` · Expiration: 1 year
   - **Repository access → Only select repositories** → choose your site's repository
   - **Permissions → Repository permissions → Contents → Read and write**
   - **Generate token**, copy it (starts with `github_pat_`)
4. Paste the token in admin and tap **Connect**.
   Admin shows which site files are in your repository (✅ / ❌). If any are missing, tap **Upload site files** and choose them — admin uploads them for you.

The token stays on **your** device only. Without it, nobody can publish.

---

## Adding a paper (every time) — 4 taps
1. Open `admin.html` (it reconnects by itself and loads your current papers).
2. **New paper** → choose **year, June/December, day, shift** → add the questions:
   - paste rows from Excel (tap *Excel template* for the format) or choose a CSV, **or**
   - type one at a time (tap the letter of the right answer), **or**
   - bring in an old paper file.
   Fix anything marked ⚠️, then **Save this paper to my list**.
3. **🚀 Publish to my site.**
4. Wait about a minute and refresh your site. The paper is in the year dropdown.

You can also **✏️ Edit** or **🗑 Delete** any paper that is already on the site, then Publish again.

---

## Who can do what
- **Students** open `index.html`: they can only practise. There is no add/edit/upload anywhere on it, and nothing links to admin.
- **You** open `admin.html`: add/edit/delete papers. It is hidden from search engines. Even if someone finds the page, **they cannot publish without your GitHub token.**

## If something looks wrong
- The student site checks its own files. If one is missing or from an older set, it shows a list such as `✅ style.css  ❌ app.js` — upload the ❌ file again.
- A new paper doesn't show: wait a minute, then refresh (or open in a private tab).
- Publishing says the token isn't accepted: create a new token (Part B step 3) and connect again.
- Don't use *Start empty* in admin unless you really want to wipe all papers; admin warns you before publishing it.
- Not using GitHub? In admin open **“Other ways to publish”**: download or copy `papers.js` and upload it yourself.
