# 💚 Imashi & Meedum — The Enchanted Olive Garden

A **complete, interactive, fairy-tale-inspired wedding invitation website**, based on the illustrated three-phone concept mockup. This is *real HTML/CSS/JavaScript*, not a static picture. Optimized for mobiles and GitHub Pages.

## What's included

- An enchanted **OPEN OUR INVITATION** entrance with animated olive-green velvet curtains.
- Improved olive-green fairy hero: **the names and wedding date are separated from the scenic artwork**, so they do not overlap. Includes a larger glowing garden hotel/fountain, drifting petals and fairy lights.
- Two swans, an elegant gold monogram, romantic wishes and elegant editorial fonts.
- **Real live countdown** to 1 January 2027 (tentative; easy to change).
- Two **large, higher-resolution hotel/garden** illustrations for Ceremony & Reception (NO church). Editable time, venue and location.
- **Seven-stop curved and winding animated gold wedding timeline**, with original vector illustrations and individual cards; the gold path draws itself as guests scroll.
- Olive-green dress code section, soft palette of rose, champagne, sage and gold, and a romantic ending.
- Save-the-Date `.ics` calendar download and OPTIONAL music button (you supply licensed music).
- **NO RSVP** — removed completely.
- Responsive layout, keyboard-accessible open button and reduced-motion settings.
- All main wedding information in `config.js`. NO Node/npm/React/database, no monthly hosting fee.

## 1. Open in VS Code

1. Unzip `Imashi-Meedum-Fairy-Wedding.zip` (right-click → Extract All).
2. VS Code → **File → Open Folder** → choose the extracted folder.
3. Open `index.html` with the **Live Server** extension, or double-click `index.html` to see the site in a browser.
4. Press **Open Our Invitation** to watch the curtains open. Scroll for the full experience.
5. Edit `config.js`, press **Ctrl+S**, refresh the browser and see your changes.

## 2. Change wedding names, date and time

Edit **only `config.js`** for the main details:

```js
bride: "Imashi",
groom: "Meedum",
weddingDate: "2027-01-01", // January 1, 2027 (sample)
dateConfirmed: false,       // Change to true WHEN confirmed
weddingTime24: "17:00",     // 5 PM — countdown time (sample)
timeZone: "+05:30",       // Sri Lanka
ceremonyTime: "5:00 PM",   // Text on the website
receptionTime: "7:00 PM",
ceremonyVenue: "Venue to be announced",
receptionVenue: "Venue to be announced",
```

**Important:** Wedding date, location, reception time, ceremony time, and timeline currently include **fictional SAMPLE values**. The illustrated venue buildings are decorative, not the actual wedding locations. Update these fields when you have final plans. If times change, update both the visual `ceremonyTime` **and** `weddingTime24`, which controls the countdown.

### Timeline customizations

Change the `timeline` array in `config.js`:

```js
{ time: "4:30 PM", name: "A Warm Welcome", description: "A little hello before the magic begins.", illustration: "welcome" },
```

Illustrations available: `welcome`, `ceremony`, `cocktail`, `reception`, `dinner`, `dance`, `farewell`. You can add, remove, or reorder entries. The winding curve calculates its shape automatically.

### Add music later (optional)

1. Place an audio file you have **permission to use** into `assets/our-song.mp3`.
2. In `config.js`, set `musicFile: "assets/our-song.mp3"`.
3. A Music button appears at the top. Playback starts **only when the guest clicks Play** — no surprise autoplay.

### Change colors

Open `styles.css` and edit the color variables near the top, for example `--olive`, `--sage`, `--gold`, `--blush`. Some illustrations are adapted from the image reference and will keep the original olive/rose palette.

## 3. Host free on GitHub Pages

1. Sign into [GitHub](https://github.com) and select **New repository**.
2. Name it something like `imashi-meedum-wedding`, choose **Public**, and create the repository.
3. Use **Add file → Upload files**; drag **all files and the `assets` folder inside the extracted folder** (upload the contents, not the ZIP). Then choose **Commit changes**.
4. In the repository go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Set `main` and `/(root)` and click **Save**.
7. Your URL is typically `https://YOUR-GITHUB-USERNAME.github.io/imashi-meedum-wedding/`.

Updating the site is easy: replace/edit `config.js` and commit again. GitHub redeploys the updated static site. The website remains available while GitHub Pages continues to be provided under GitHub's terms. Custom domains are optional.

Note: A public GitHub Pages site and the files in its public repo can be viewed by anyone with the link/repository access. Don't include secrets, private guest information or private addresses you do not want published.

## Short Sinhala guide 🇱🇰

1. ZIP එක Extract කරන්න.
2. **VS Code → File → Open Folder** වලින් folder එක open කරන්න.
3. `index.html` එක **Live Server** වලින් open කරන්න.
4. **`config.js`** එකේ bride / groom / date / venue / times වෙනස් කරන්න.
5. දැනට January 1, 2027, function times, venues **sample විතරයි**. Confirm වුණාම `dateConfirmed: true` කරන්න.
6. GitHub repository එකකට folder එකේ files upload කර **Settings → Pages → Deploy from a branch → main /(root)** තෝරන්න.
7. ලැබෙන website link එක partnerට share කරන්න. 💚

## Files

- `index.html` — the complete page and its sections
- `styles.css` — fairy-tale visuals and animations
- `script.js` — curtain animation, petals, countdown, timeline, calendar, music
- `config.js` — **personalize everything here**
- `assets/` — flowers, villa, illustrated venue and vector artwork
- `.nojekyll` — simple GitHub Pages compatibility

Made with love, for **Imashi & Meedum** ♡


## Version 2 — revised on 23 October 2026

Changes requested:

1. Fixed **Save the Date** readability: hero text and the venue artwork use separate layout regions. The hotel picture now has a large elegant arch with floral borders, with **no overlapping date**.
2. Replaced the original chapel/church illustration with a **flower-filled luxury garden hotel** and replaced the ceremony symbol in the animated timeline with a botanical gazebo/wedding arch (not religious).
3. Changed the former tiny ~170-pixel venue pictures to much larger, detailed image assets:
   - `assets/enchanted-hotel-hero.webp` — 1692 × 1220
   - `assets/enchanted-hotel-ceremony.webp` — 1096 × 1120
   - `assets/enchanted-hotel-reception.webp` — 1456 × 1148
   These are optimized web image exports from the concept illustration, enlarged and sharpened for a cleaner appearance. They are decorative illustrations, not photos of booked or confirmed places.
4. Strengthened the olive-green headings, hotel garden styling, botanical accents and golden framing. Retained existing flower petals, animated curtains, countdown, scrolling timeline and farewell.
5. No RSVP. No build dependencies. Just open in VS Code / Live Server.

Note: All sample times and places are fictional. The date **1 January 2027** is **not yet confirmed**. Before sending a public wedding invitation, check and update `config.js`. Your site is public when deployed to a public GitHub Pages repository.

### If you already uploaded the old site to GitHub

Replace **all** existing files (`index.html`, `styles.css`, `script.js`, `config.js`, and the `assets` folder) with the files from this updated ZIP, then commit. Using only one new image file alongside the old CSS will not apply the updated design. The `.nojekyll` file can remain.
