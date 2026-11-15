# Wise Choice · UGC NET JRF Paper I

## Folder structure
```
index.html          ← the student site
admin.html          ← your private tool for adding papers (don't link it anywhere)
css/style.css       ← design
js/app.js           ← app logic
data/
  config.js         ← exam rules, 10 units, shift timings, quotes (rarely edited)
  papers.js         ← LIST of papers shown on the site (admin.html makes this for you)
  papers/           ← one file per paper, e.g. 2026_june_d9_s1.js
  _TEMPLATE.js      ← example paper file
logo.png, favicon.png, apple-touch-icon.png   ← your own images, next to index.html
```

## First-time setup
1. Unzip. Upload **everything** to your hosting's main folder (`public_html`, or your Netlify / GitHub Pages site), keeping the folders as they are.
2. Add your `logo.png`, `favicon.png` and `apple-touch-icon.png` next to `index.html`.
3. Open your site address. Done.

## Adding a new paper (about 5 minutes)
1. Open `admin.html` (on your site as `yoursite.com/admin.html`, or double-click the file on your computer).
2. **Step 1** – choose year, session, day and shift.
3. **Step 2** – add the questions:
   - *Paste / CSV*: tap "Excel template", fill it in Excel, copy the rows and paste them; or
   - *Type one*: fill the form, tap the letter of the correct option, tap Add.
4. **Step 3** – review. Anything marked ⚠️ needs fixing (tap ✏️). Use ↑ ↓ to reorder.
5. **Step 4** – download the two files:
   - `2026_june_d9_s1.js` (the paper)
   - `papers.js` (the list)
   If admin cannot read your current list automatically, tap "Choose my current papers.js" and pick the one from your site's `data` folder (or "It's a new site" if you have none).
6. Upload:
   - the paper file → `data/papers/`
   - `papers.js` → `data/` (replace the old one)
7. Open the site, refresh – the paper is in the year dropdown. Add `?check` to the address (`yoursite.com/?check`) to see mistakes in your paper files.

### How to upload (pick the one that matches your hosting)
- **Hostinger / cPanel / any shared hosting:** hosting panel → *File Manager* → open `public_html` → go into `data/papers` → *Upload* → choose the paper file. Then go to `data` → *Upload* → choose `papers.js` → confirm *Overwrite*.
- **Netlify:** *Deploys* → drag the whole updated site folder onto the page (put the new files in the right folders on your computer first).
- **GitHub Pages:** repository → open `data/papers` → *Add file → Upload files* → commit. Then open `data` → upload `papers.js` → commit. Wait ~1 minute.

## Editing a paper later
In `admin.html` → Step 2 → *Open file* → choose the paper file → fix → download again → upload over the old one (same name).

## Good to know
- Admin only creates files; it can't change your live site by itself. It saves your work in the browser until you finish.
- `admin.html` isn't password-protected. It is hidden (not linked, not indexed), but anyone who knows the address can open it. It can't harm your site, because it can't upload anything.
- Students' results are stored in their own browser; uploading new papers never affects them.
- If a browser still shows the old list after you upload, do a hard refresh (Ctrl+F5, or clear the site's cache on the phone).

## Troubleshooting
**The page shows the header and bottom bar but the middle is empty / buttons do nothing**
The app's script did not run. Version 2 shows a red-flag panel that names the missing file. Otherwise check:
1. Open `https://YOURNAME.github.io/js/app.js` in the browser. It must show code. If it says 404, the file is in the wrong place.
2. Do the same for `/data/config.js`, `/data/papers.js` and `/css/style.css`.
3. Folder and file names are **case-sensitive** and must match exactly: `index.html`, `css/style.css`, `js/app.js`, `data/config.js`, `data/papers.js`, `data/papers/…`.
4. Make sure you replaced **every** file (old `index.html` + new `app.js` is a bad mix). Easiest: delete the old files from the repository first, then upload the new set.
5. Wait 1–2 minutes after committing (GitHub Pages rebuilds), then hard-refresh (or open in a private tab).

**Uploading folders from a phone:** the GitHub mobile website can't upload folders. Either upload from a computer, or on the phone use *Add file → Create new file*, type the full path in the name box (for example `js/app.js` — typing `/` creates the folder), paste the file's contents, and commit. Or open the folder first (e.g. `data/papers`) and then use *Add file → Upload files*.
