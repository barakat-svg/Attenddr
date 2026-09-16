# Attendr — Marketing Site

A one-page marketing site for Attendr, an AI-powered classroom terminal that takes
attendance automatically and turns lessons into ready-made quiz cards.

Plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no dependencies
beyond two Google Fonts (Fraunces, Inter).

## Files

```
attendr-site/
├── index.html    # all page content and structure
├── styles.css    # design system + responsive layout
├── script.js     # mobile nav, flow tabs, demo form UI
└── README.md
```

## Run it locally

No build tools are required. Any static file server works. From this folder:

```bash
# Option 1: Python
python3 -m http.server 8080

# Option 2: Node
npx serve .
```

Then open `http://localhost:8080` in your browser.

You can also just double-click `index.html` to open it directly in a browser,
though a local server is recommended so relative asset paths behave the same
way they will in production.

## Content notes

All product copy is sourced directly from the Attendr product brief. No pricing,
customer names, testimonials, or statistics have been invented — the Pricing
section intentionally describes the pricing *model* only, since final pricing
is still being set.

The "Book a demo" form on the page is front-end only: submitting it shows a
confirmation message but does not send data anywhere. Before going live, wire
`script.js`'s `demoForm` submit handler to a real endpoint — a form backend
(e.g. Formspree, Basin), a serverless function, or your CRM's API — and send
the field values (`name`, `school`, `email`, `option`) there.

## Deploying

This is a fully static site, so any static host works. A few common options:

**GitHub Pages**
1. Push this folder to a GitHub repository.
2. In the repo settings, go to *Pages* and set the source to the branch/folder
   containing `index.html` (e.g. `main` / `/root`).
3. GitHub will publish it at `https://<username>.github.io/<repo>/`.

**Netlify / Vercel**
1. Connect the repository, or drag-and-drop this folder into Netlify's deploy UI.
2. No build command is needed — set the publish directory to the project root.

**Any static host (S3, Cloudflare Pages, etc.)**
Upload `index.html`, `styles.css`, and `script.js` as-is.

## Accessibility & QA checklist

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and a logical heading
  hierarchy (single `h1` in the hero, `h2` per section).
- A "Skip to main content" link for keyboard and screen-reader users.
- All interactive elements (nav toggle, flow tabs, form fields, buttons) are
  reachable and operable by keyboard, with visible focus states.
- Color palette was chosen for readable contrast against the paper background.
- Layout is mobile-first and tested at mobile (~390px), tablet, and desktop
  widths with no horizontal overflow.
- `prefers-reduced-motion` is respected — transitions are disabled for users
  who request it.
- No external dependencies besides Google Fonts; everything else is a plain
  static asset, so there's nothing to install and nothing that can go stale.

## Customizing

- **Colors and type** are defined as CSS custom properties at the top of
  `styles.css` (`:root`) — update them there to apply a different palette or
  typeface throughout.
- **Copy** lives entirely in `index.html`; there's no templating layer.
