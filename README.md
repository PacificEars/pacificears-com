# Pacific Ears — static rebuild (temporary HTML site)

Plain HTML + compiled Tailwind CSS, ready to drop on Cloudflare Pages. No build step required — the CSS is pre-compiled.

## Pages

| URL | File |
| --- | --- |
| `/` | `index.html` |
| `/instructions/` | `instructions/index.html` |
| `/instructions/sanidry-manual/` | `instructions/sanidry-manual/index.html` |

## Deploying to Cloudflare Pages

1. **Create a project** → *Direct upload* → drag this folder in (or connect the repo; build command *none*, output directory `/`).
2. **Custom domain** → Pages project → *Custom domains* → add `pacificears.com` (and `www` if you want it).
3. **DNS caveat (important):** the apex `pacificears.com` is currently served by the old WordPress site.
   If the WordPress nameservers host the domain's DNS, switch the zone to Cloudflare nameservers first,
   otherwise you cannot point the apex at Pages.

### What's included for hosting

| File | Purpose |
| --- | --- |
| `_redirects` | Trailing-slash + legacy redirects (`301`s) |
| `_headers` | Security headers incl. a single-line CSP, plus caching (`assets` = 1 year immutable, HTML = must-revalidate) |
| `robots.txt` | Allow all + sitemap reference |
| `sitemap.xml` | All three URLs |

All paths are root-relative (`/assets/…`), so the site must be served from the domain root — which Pages does.

## Folder structure

```
index.html
instructions/
  index.html
  sanidry-manual/index.html
assets/
  css/styles.css      # compiled Tailwind (do not edit by hand)
  img/                # product photography, logo, maps, favicon
  docs/               # all linked PDFs (manuals, spec sheets, disclaimer)
_headers
_redirects
robots.txt
sitemap.xml
tailwind.config.js    # theme tokens (brand #1e3660 / accent highlights)
src/input.css         # Tailwind source with the component classes
```

## Rebuilding the CSS (optional)

The source lives in `src/input.css` + `tailwind.config.js`:

```bash
npm install
npx tailwindcss -i ./src/input.css -o ./assets/css/styles.css --minify
```

(`npm run build` is wired up in `package.json`.)

## Region switcher (AU / NZ)

- **Header pills** (`Australia` / `New Zealand`) sit in the sticky header on every page — always visible, collapsing to `AU` / `NZ` on phones.
- **Region cards** remain further down the homepage ("Choose your local Pacific Ears store") for people who scroll.
- The hero deliberately has no region block: its CTAs are *Find your product manual* and *Talk to our team*.

## Support strip

"Support - Getting started with new earplugs?" with three icon columns (check what's in the box / watch a how-to /
ask us anything).

- **Manuals page:** sits **immediately above the product grid** (directly under the intro), so it is seen before people
  start scrolling through cards. Compact variant - smaller icons and type than the homepage version.
- **Homepage:** full-size version at the bottom of the page, in the strip above the footer.

## Design notes

- **Primary blue `#1e3660`** → `brand.700` in the Tailwind theme (full 50–950 ramp derived from the same hue). Used for buttons, headings, the logo, the dark SaniDry banner and the footer.
- **Lighter highlight shade** → `accent` family: `#4a7ad4` (default, used for eyebrow labels, links, active TOC/tab states, focus rings), `#2b5db6` (`accent-deep`, link text), `#8fb0e6` (`accent-soft`) and `#c7d9f4` (`accent-light`, tinted backgrounds and highlight marks).
- System/Inter font stack, no external font or CDN requests — everything is local, so the pages work offline.
- Product images were trimmed, centred on square frames and exported as WebP (388 KB total for all 22 images); the logo and favicon use #1e3660 (plus a white logo for the footer).
- All 25 linked PDFs are stored locally and were re-compressed from 40 MB to ~15 MB with no visible loss (spec sheets and manuals still read crisply).
- The instructions index is a single flat page: all 16 product cards in four simple groups (Custom moulded, In-ear monitors, Universal fit, Dryers & accessories). No search, no filters. The only JavaScript on the site sets the footer year (plus the scroll-spy on the SaniDry page).
- Accessible: skip links, landmark regions, visible focus rings, `aria-current`, reduced-motion support.

## Placeholder copy to confirm

- "CE & tested filters", "Custom moulds", "Local, in-region" stats in the home hero.
- The product manuals page intro copy ("Find your product below…") and the one-line "before first use" note.
- Troubleshooting / everyday-care items on the SaniDry page (written from the original PDF content — worth a quick technical read-through).
