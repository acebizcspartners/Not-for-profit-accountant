# notforprofitaccountant.com

Lead-generation website for **Not-For-Profit Accountant**, a service of Ace Biz — specialist accountants for Australian charities, NFPs, sports clubs and community organisations.

Phone-first conversion site targeting the Hills District and Central Coast of NSW, with national coverage via cloud.

---

## Stack

Pure static site. No build step, no framework, no dependencies.

- HTML5
- Hand-written CSS (no preprocessor)
- ~50 lines of vanilla JS
- Google Fonts: Manrope (variable weights 400–800)

---

## File structure

```
notforprofitaccountant.com/
├── index.html                          Main single-page site
├── styles.css                          All shared styles
├── app.js                              Progressive enhancement
├── checklist/
│   └── index.html                      NFP Annual Compliance Checklist (lead magnet, print-to-PDF ready)
└── services/
    └── acnc-reporting/
        └── index.html                  Paid-search landing page (ACNC AIS + financial reports)
```

---

## Local preview

```sh
start index.html                        # Windows
open index.html                         # macOS
# or
python3 -m http.server 8000             # then visit http://localhost:8000
```

---

## Deployment

Static site, zero config. See `DEPLOY.md` for host-by-host steps. Short version:

- **Cloudflare Pages / Vercel / Netlify** — connect this repo, no build command, output dir `/`.

---

## Pre-launch checklist

- [ ] Replace `og-image.png` reference in `index.html` with a real 1200×630 PNG at site root
- [ ] Replace `logo.png` reference in JSON-LD with a real square logo
- [ ] Verify `aggregateRating.ratingCount` in JSON-LD matches actual Google review count
- [ ] Wire `mailto:` form actions to a real backend (Formspree / Netlify Forms / HubSpot)
- [ ] Submit `https://notforprofitaccountant.com/sitemap.xml` to Google Search Console
- [ ] Create / claim the Google Business Profile for 204/11 Solent Circuit, Norwest NSW 2153

---

## Content overview

**Main site (`/index.html`)**

1. Hero — _"We handle the compliance so you can get on with the mission."_
2. Trust strip — 4.8★, 10+ yrs, ACNC · ATO · ASIC coverage, TPB
3. Pain section — 3 NFP-specific pain cards (treasurer overload, moving compliance, fund/grant mess)
4. Services — 12 cards, with 4 specialty highlights:
   - ACNC AIS Lodgement
   - Charity Financial Reports (links to landing page)
   - DGR Endorsement & Maintenance
   - Audit & Review Preparation
5. More we handle — 35+ services across 3 columns
6. How it works — 3 steps
7. Why us — 6 differentiators + 4 stat tiles
8. Pricing — two tiered cards: **Small NFP from $1,200/yr** and **Medium / DGR from $3,500/yr**
9. Testimonials — 3 cards
10. Lead magnet — NFP Annual Compliance Checklist
11. FAQ — 8 board-and-treasurer questions
12. Where we work — Hills District + Central Coast suburb chips, Norwest office map embed
13. Final CTA — phone + brief-submission form
14. Footer — full nav, contact, ABN, legal

**Lead magnet (`/checklist/`)**
Interactive 7-section compliance checklist + ACNC tier table. Print stylesheet outputs clean A4 PDF.

**ACNC Reporting landing page (`/services/acnc-reporting/`)**
Single-purpose paid-search landing page. Hero, pain, 3-tier comparison (Small / Medium / Large), 8 deliverables, 4-stage timeline visual, pricing ($1,200/yr+), FAQ, lead form.

---

## SEO

Built-in:
- Title + meta description on every page
- Open Graph tags
- JSON-LD on `/index.html`: `AccountingService` + `LocalBusiness` + `ProfessionalService`, plus `WebSite` and `FAQPage`
- JSON-LD `Service` block on `/services/acnc-reporting/`
- `areaServed` lists Hills District + Central Coast suburbs by name for local-pack relevance
- Canonical URLs on landing pages
- `<html lang="en-AU">` throughout

Verify after deployment with [Google Rich Results Test](https://search.google.com/test/rich-results).

---

## Brand

- Palette: deep navy `#1E3A5F` + warm amber `#D97706` + paper `#F8FAFC`
- Type: Manrope (variable weight, 400–800)
- Tone: mission-aware, sector-empathetic, board-respectful — no jargon for treasurers

The brand is owned by Ace Biz. Not-For-Profit Accountant presents publicly as a sub-brand / lead funnel.

---

## Licence

Proprietary. © Ace Biz. All rights reserved.
